import TerminusClient , {WOQLClient,WOQL, AccessControl} from "@terminusdb/terminusdb-client"
import { DbDetails, DocParamsGet, DocParamsPut,DiffObject } from "@terminusdb/terminusdb-client/dist/typescript/lib/typedef"
import { Request } from "express"
import * as typeDef from "./typeDef"
import {ApiError} from "./ApiError"
import * as IndexClient from './IndexClient'
import * as settings from './settings'

import dbSchema from '../../change_request_schema.json'
import { doc } from "@terminusdb/terminusdb-client/dist/typescript/lib/woql"
//import {v4 as uuidv4} from 'uuid';
const { v4: uuidv4 } = require('uuid');

//const endpoint :string = process.env.SERVER_ENDPOINT || "http://127.0.0.1:6363"
//const key = process.env.USER_KEY || "root"
//const CROrg = process.env.CR_TEAM_NAME || "terminusCR"
//const user = process.env.USER_NAME || "admin"
class ChangeRequestDB {
  client: WOQLClient;
  request : Request
  user : string | undefined
  password : string | undefined
  orgName : string | undefined
  dbName : string | undefined
  changeRequestDbName:  string | undefined
  logger : typeDef.Logger 
  endStatus:any = { Assigned: true, Error: true }
  availableStatus:any = { Assigned: true, Error: true, Progress: true }
  errorMessage:any = {'api:UnknownDatabase':true,'api:NoUniqueIdForOrganizationName':true}

  constructor(req : Request) {
    this.request = req
    this.password = req.context.password
    this.user = req.context.user
    // user that has admin privileges for the terminuscms team
    this.client = new TerminusClient.WOQLClient(settings.endpoint, { key:settings.key, user: settings.user }) 
    this.client.organization(settings.CROrg)
    this.orgName = req.params.org
    this.dbName = req.params.db
    this.logger =  req.context.logger
    // every dataproduct has the related change_request database
    this.changeRequestDbName = `${TerminusClient.UTILS.encodeURISegment(this.orgName)}__${this.dbName}__CR`
    this.client.db(this.changeRequestDbName)
  }

  // check if the user is authorized to see this change request db
// maybe I can add a capability at database level
// admin create the db
// and add the capability
  
  async getChangeRequests (changeId: String | false = false, as_list = true) {
    const params : DocParamsGet = { type: 'ChangeRequest', as_list: as_list}
      if (changeId) {
        params.id = `ChangeRequest/${changeId}`
      }
    try {
      const result = await this.client.getDocument(params)
      return result
    } catch (err:any) {
      // if there is no change request we return an empty array
      if (typeof err.data === 'object' && err.data['api:error'] 
          && this.errorMessage[err.data['api:error']['@type']]) {
        return []
      }
      throw err
    }
  }

  async createCRDatabase(){
    try {
      if(this.changeRequestDbName){
        const dbDetails: DbDetails = { label: this.changeRequestDbName,
              comment: `create change request db for team ${this.orgName} db ${this.dbName}`, 
              schema: true }
        await this.client.createDatabase(this.changeRequestDbName, dbDetails)
        await this.client.addDocument(dbSchema, { graph_type: 'schema', full_replace: true })
      }else{
        throw "no db name"
      }
    } catch (err:any) {
      
      // the database already exists
      this.logger.debug(`the change request db already exists ${err.message}`)
    }
  }

  async createChangeRequest(message:string) {
      /*
      * create the change request database if it does not exist
      * we create a CRdb for every dataproduct
      */
      let docId
      const creator = this.user || ""
      const originalBranch = this.request.body.original_branch
      await this.createCRDatabase()
      const tmpClient = this.connectWithCurrentUser()

      // I need to record the commit-id point
      const lastStartBranchCommitID = await this.getLastCommitId(tmpClient, originalBranch)
      // we autogenerate the branch name
      const timestamp = Date.now()

      const changeDoc : typeDef.ChangeReqDoc = {
        '@type': 'ChangeRequest',
        origin_database: '',
        status: 'Open',
        name: this.request.body.name,
        original_branch: originalBranch,
        creator: creator,
        // we autogenerate the branchName
        tracking_branch : uuidv4(),
        origin_commit_id : lastStartBranchCommitID,
        creator_email: this.request.body.author || creator,
        creation_time: timestamp,
        messages: [{
          '@type': 'Message',
          timestamp: timestamp,
          text: message,
          author: this.request.body.author || creator
        }]
      }

      // connect to the change request db
      this.client.db(this.changeRequestDbName)
      const docResult = await this.addDocumentFixSchema(changeDoc, message)
  
      // create a new branch
      docId = docResult[0]
      const docIdHash = docId.substring(docId.lastIndexOf('/') + 1)
      // I ref to the commit before create the branch
      tmpClient.ref(lastStartBranchCommitID)
      await tmpClient.branch(changeDoc.tracking_branch)
      return { changeRequestId: docIdHash, branchName: changeDoc.tracking_branch }
      // to be review
  }
  
  // I'm using the current user to connect with the database that is going to be modified
  connectWithCurrentUser () {
    const tmpClient = new TerminusClient.WOQLClient(settings.endpoint, { user: this.user, organization: this.orgName })
    // I remove the basic authentication type header
    tmpClient.localAuth({ user: this.user, type: "basic", key: this.password || '' })
    tmpClient.db(this.dbName)
    //this.setCustomHeaders(tmpClient, true)
    return tmpClient
  }

  // userDBClient is an woqlclient instance connected with the current user's dataproduct
  async getLastCommitId (userDBClient:WOQLClient, branchName = 'main') {
  const query = TerminusClient.WOQL.using('_commits').triple('v:Branch', 'name', TerminusClient.WOQL.string(branchName))
                .triple('v:Branch', 'head', 'v:Active Commit ID')
                .triple('v:Active Commit ID', 'identifier', 'v:Identifier')
    const result = await userDBClient.query(query)
    if (Array.isArray(result.bindings)) {
      return result.bindings[0].Identifier['@value']
    }
  }
  // check if there is an old CR db
  async addDocumentFixSchema (changeRequestDoc:typeDef.ChangeReqDoc, message = 'add new doc') {
    let docResult
    try {
      docResult = await this.client.addDocument(changeRequestDoc, undefined, undefined, message)
    } catch (err:any) {
      const errData = err.data || {}
      // I have the old schema
      if (errData['api:message'] === 'Schema check failure') {
        // update old schema
        await this.client.addDocument(dbSchema, { graph_type: 'schema', full_replace: true })
        docResult = await this.client.addDocument(changeRequestDoc, undefined, undefined, message)
      } else {
        throw err
      }
    }
    return docResult
  }

  async fixOldChangeRequestVersion (userDBClient:WOQLClient, changeRequestDoc:typeDef.ChangeReqDoc) {
    if (!changeRequestDoc.origin_commit_id) {
      const originCommitId = await this.getCROriginCommitId(userDBClient, changeRequestDoc.original_branch, changeRequestDoc.tracking_branch)
      changeRequestDoc.origin_commit_id = originCommitId
      await this.updateDocumentFixSchema(changeRequestDoc)
    }
    return changeRequestDoc
  }
  
  async checkChangeRequestBranchHead (changeIdHash:string) {
    const changeRequestDoc = await this.getChangeRequests(changeIdHash, false)
    const userDatabase = this.connectWithCurrentUser()
    const lastCommitID = await this.getLastCommitId(userDatabase, changeRequestDoc.original_branch)
    // check if there is not origin_commit_id and looking for it
    await this.fixOldChangeRequestVersion(userDatabase, changeRequestDoc)
    if (lastCommitID !== changeRequestDoc.origin_commit_id) {
        changeRequestDoc.needRebase = true
    } else {
        changeRequestDoc.needRebase = false
    }
    return changeRequestDoc
  }
  
  async rebaseChangeRequestBranch (changeIdHash:string) {
    const changeRequest = await this.getChangeRequests(changeIdHash, false)
    const orginBranch = changeRequest.original_branch
  
    const userDatabase = this.connectWithCurrentUser()
  
    const lastCommitID = await this.getLastCommitId(userDatabase, orginBranch)
  
    const originCommitId = changeRequest.origin_commit_id
    const trackingBranch = changeRequest.tracking_branch
  
    // I'm have to appy the diff between the branch start commit and the new commit to the CR branch
    userDatabase.checkout(trackingBranch)
    // this is only for data
    await userDatabase.apply(originCommitId, lastCommitID, `rebase ${originCommitId} to ${lastCommitID} branch ${trackingBranch}`, true)
    // we moved the head, so we save the new commit_id
    changeRequest.origin_commit_id = lastCommitID
    await this.client.updateDocument(changeRequest)
    changeRequest.needRebase = false
    return changeRequest
  }
  
  
  // check if there is an old CR db
  async updateDocumentFixSchema(changeRequestDoc:typeDef.ChangeReqDoc|typeDef.IndexedCommit, message = 'add new doc') {
    let docResult
    try {
      const putDocParams : DocParamsPut = { create: true }
      docResult = await this.client.updateDocument(changeRequestDoc, { create: true }, undefined, message)
    } catch (err:any) {
      const errData = err.data || {}
      // I have the old schema
      if (errData['api:message'] === 'Schema check failure') {
        // update old schema
        await this.client.addDocument(dbSchema, { graph_type: 'schema', full_replace: true })
        docResult = await this.client.updateDocument(changeRequestDoc, { create: true }, undefined, message)
      } else {
        throw err
      }
    }
    return docResult
  }
  
  async getCROriginCommitId (userDBClient:WOQLClient, originBranch:string, trackingBranch:string) {
    const query = TerminusClient.WOQL.using('_commits').triple('v:Origin_Branch', '@schema:name',
      TerminusClient.WOQL.string(originBranch)).opt()
      .triple('v:Origin_Branch', '@schema:head', 'v:Origin_Head')
      .path('v:Origin_Head', 'parent*', 'v:Origin_Commit', 'v:Path')
      .triple('v:Tracking_Branch', '@schema:name', TerminusClient.WOQL.string(trackingBranch))
      .triple('v:Tracking_Branch', '@schema:head', 'v:Tracking_Head')
      .path('v:Tracking_Head', 'parent*', 'v:Tracking_Commit', 'v:Path_Change').eq('v:Origin_Commit', 'v:Tracking_Commit')
      .triple('v:Tracking_Commit', 'timestamp', 'v:Time').order_by('v:Time')
    const result = await userDBClient.query(query)
    if (Array.isArray(result.bindings)) {
      const trackingCommitAll = result.bindings[0].Tracking_Commit
      return trackingCommitAll.substring(trackingCommitAll.lastIndexOf('/') + 1)
    }
  }
  
  async deleteDatabase() {
    const userDatabase = this.connectWithCurrentUser()
    // I delete with force = true
    const dbName = userDatabase.db().toString() 
    const result = await userDatabase.deleteDatabase(dbName, undefined, true)
    try {
      await this.client.deleteDatabase(this.changeRequestDbName || '')
    } catch (err:any) {
      //this.logger.debug('no change request db', err.message)
    }
    return result
  }
  
  
  // await this.assignCommit(`${userDatabase.organization()}/${userDatabase.db()}`, lastCommitCRBRanch, 'Complete', requestDoc.original_branch, lastCommitAfterMerge)
  async changeRequestStatus (changeIdHash:string, status:string, message:string, apiKey?:string) {
    const changeId = `ChangeRequest/${changeIdHash}`
    const requestDoc = await this.client.getDocument({ id: changeId })
    let updateMessage = `Update document changeRequest ${changeIdHash}`
    let lastCommitCRBRanch
    if (status === 'Merged') {
      if (requestDoc.status === 'Submitted') {
        // try {
        // to be review
        const userDatabase = this.connectWithCurrentUser()
        // n5p3lf00n8upa6kpaiyzdi8zshu8kir
        const lastCommitId = await this.getLastCommitId(userDatabase, requestDoc.original_branch)
        lastCommitCRBRanch = await this.getLastCommitId(userDatabase, requestDoc.tracking_branch)
        // I'll do another check to see if the brach is not advanced
        requestDoc.merge_commit_id = lastCommitId
        updateMessage = `merge the CR ${requestDoc.tracking_branch} into ${requestDoc.original_branch} , ${requestDoc.messages[0].text} `
        userDatabase.checkout(requestDoc.original_branch)
        // when I merge in main I lost all the branch commit, So I'll have a new commit from main that is the merge one
        await userDatabase.apply(requestDoc.original_branch, requestDoc.tracking_branch, updateMessage, true)
        // I have to get the new commit from the original branch
        if (apiKey) {
        // I'm create the indexing info doc 
          await this.createIndexInfoDoc(userDatabase,requestDoc,lastCommitCRBRanch, apiKey)
        }
      } else {
        throw new Error(`I can not merge a change request with ${requestDoc.status} status`)
      }
    }
    requestDoc.status = status
    const messageObj = { author: this.user || '', '@type': 'Message', text: updateMessage, timestamp: Date.now() }
    requestDoc.messages.push(messageObj)
    await this.updateDocumentFixSchema(requestDoc, updateMessage)
    //if (apiKey)requestDoc.tracking_branch_last_commit = lastCommitCRBRanch
    return requestDoc
  }
  
  async getChangeRequestDiff(changeId:String, start:number, count:number) {
    const changeRequest = await this.getChangeRequests(changeId, false)
    const trackingBranch = changeRequest.tracking_branch
    let originalBranch = changeRequest.original_branch
    if (changeRequest.status === 'Merged' && changeRequest.merge_commit_id) {
      originalBranch = changeRequest.merge_commit_id
    }
    const options : DiffObject = {
      start: start,
      count: count,
      keep: {
        '@id': true,
        '@type': true
      }
    }
    const userDatabase = this.connectWithCurrentUser()
    return userDatabase.getVersionDiff(originalBranch, trackingBranch, undefined,options)
  }

  checkUserReadAuthorization () {
    const tmpClient = this.connectWithCurrentUser()
    const query = TerminusClient.WOQL.limit(1).triple('v:a', 'v:b', 'v:c')
    return tmpClient.query(query)
  }

  async addMessage (changeIdHash:string, message:string) {
    const changeId = `ChangeRequest/${changeIdHash}`
    const requestDoc = await this.client.getDocument({ id: changeId })
    const updateMessage = message || 'No new message'
    const messageObj = { author: this.user || '', '@type': 'Message', text: updateMessage, timestamp: Date.now() }
    requestDoc.messages.push(messageObj)
    await this.updateDocumentFixSchema(requestDoc, updateMessage)
    return requestDoc
  }

  //apikey method

  async createIndexInfoDoc(userDatabase:WOQLClient, requestDoc:typeDef.ChangeReqDoc,lastCommitCRBRanch:string,apiKey:string){
      const lastCommitAfterMerge = await this.getLastCommitId(userDatabase, requestDoc.original_branch)
      const doc : typeDef.IndexedCommit = { "@type": "Indexed_commit",
                  change_request_commit_id : lastCommitCRBRanch,
                  indexed_at :   Date.now(),
                  indexing_status : 'Create'}
      doc.searchable_branch_name = requestDoc.original_branch
      doc.searchable_branch_commit_id = lastCommitAfterMerge
      if (!requestDoc.indexing_info) requestDoc.indexing_info = []
      requestDoc.indexing_info.push(doc)
      // I need to review maybe I can run this with update status
      const runResult = await this.runChangeRequestIndex(`${userDatabase.organization()}/${userDatabase.db()}`, lastCommitCRBRanch,apiKey)
      doc.indexing_status = runResult.status
      if (runResult.task_id)doc.task_id = runResult.task_id
      return requestDoc
  }

  async assignCommit(domain:string, commit:string, originalBranchLastCommit:string, apiKey?:string) {
    try {
      if(!apiKey)return { status: 'Error', error_message: "Error, I can not find and OPENAI API KEY" }
      await IndexClient.assignCommit(this.logger, domain, commit, originalBranchLastCommit, apiKey)
      return { status: 'Assigned' }
    } catch (err:any) {
      if (err.response && err.response.data === 'target commit already has an index') {
        return { status: 'Assigned' }
      } else {
        //this.logger.error(`I can not assign the indexing commit ${commit} to ${originalBranchLastCommit}`)
        const message = err.response && err.response.data ? err.response.data : err.message
        return { status: 'Error', error_message: message }
      }
    }
  }

  async checkStatus(taskId:string){
    try {
      const progress = await IndexClient.checkStatus(this.logger, taskId)
      if (progress.data < 1) {
        return { status: 'Progress' }
      }
      return { status: 'Complete' }
    } catch (err:any) {
      const message = err.response && err.response.data ? err.response.data : err.message
      return { status: 'Error', error_message: message }
    }
  }  

  async indexingCheckStatus (commit:string, apiKey?:string){
    const fullId = `Indexed_commit/${commit}`
    const doc = await this.client.getDocument({ id: fullId })
    const taskId = doc.task_id
    if (this.endStatus[doc.indexing_status]) return doc
    const domain = `${this.orgName}/${this.dbName}`
    const statusObj = await this.checkStatus(taskId)// await IndexClient.checkStatus(this.logger, taskId)
    switch (statusObj.status) {
      case 'Progress':
        doc.indexing_status = 'Progress'
        await this.client.updateDocument(doc)
        break
      case 'Complete':
        // eslint-disable-next-line no-case-declarations
        const result = await this.assignCommit(domain, commit, doc.searchable_branch_commit_id, apiKey)
        doc.indexing_status = result.status
        if (result.error_message)doc.error_message = result.error_message
        await this.client.updateDocument(doc)
        break
      case 'Error':
        doc.indexing_status = 'Error'
        doc.error_message = statusObj.error_message
        await this.client.updateDocument(doc)
        break
    }
    return doc
  }

  async updateIndexingInfo (commit:string, status:typeDef.IndexingStatus, apiKey?:string) {
    const fullId = `Indexed_commit/${commit}`
    const doc:typeDef.IndexedCommit = await this.client.getDocument({ id: fullId })
    if (status === 'Sent' && apiKey) {
      const domain = `${this.orgName}/${this.dbName}`
      const result = await this.runChangeRequestIndex(domain, commit, apiKey)
      doc.indexing_status = result.status
      // remove the old task_id
      if (doc.task_id) delete doc.task_id
      // set the new one if exists
      if (result.task_id) doc.task_id = result.task_id
      if (result.error_message)doc.error_message = result.error_message
    } else {
      doc.indexing_status = status
    }
    return this.updateDocumentFixSchema(doc)
  }

  async runChangeRequestIndex(domain:string, commit:string, apiKey:string): Promise<typeDef.RunIndexResultObj> {
    try {
      const ref = await IndexClient.indexDatabase(this.logger, domain, commit, apiKey)
      return { status: 'Progress', task_id: ref.data }
    } catch (err:any) {
      const message = err.response && err.response.data ? err.response.data : err.message
      return { status: 'Error', error_message: message }
    }
  }

 async getLastCommitsIndexed (limit = 1, status?:string, branch?:string) {
  try {
    const WOQL = TerminusClient.WOQL
    const statusVar = status && this.availableStatus[status] ? `@schema:Indexing_Status/${status}` : 'v:indexing_status'
    const branchVar = branch ? WOQL.string(branch) : 'v:branch'
    const query = WOQL.limit(limit).order_by(['v:time', 'desc']).and(
      WOQL.triple('v:index', 'rdf:type', '@schema:Indexed_commit'),
      WOQL.triple('v:index', '@schema:change_request_commit_id', 'v:commit_id'),
      WOQL.triple('v:index', '@schema:searchable_branch_name', branchVar),
      WOQL.triple('v:index', '@schema:indexing_status', statusVar),
      WOQL.triple('v:index', '@schema:searchable_branch_commit_id', 'v:searchable_commit'),
      WOQL.triple('v:index', '@schema:indexed_at', 'v:time'),
      WOQL.opt().triple('v:index', '@schema:task_id', 'v:task_id'),
      WOQL.opt().triple('v:index', '@schema:error_message', 'v:error_message'),
      WOQL.triple('v:changeR', '@schema:indexing_info', 'v:index'),
      WOQL.triple('v:changeR', '@schema:name', 'v:name'),
      WOQL.triple('v:changeR', '@schema:tracking_branch', 'v:tracking_branch')
    )
    const result = await this.client.query(query)
    return result
  } catch (err:any) {
    // the change_request_db does not esist already
    if (err.data && err.data && err.data['api:error'] && err.data['api:error']['@type'] === 'api:UnresolvableAbsoluteDescriptor') {
      return false
    }
    throw err
  }
}
}

export default ChangeRequestDB
