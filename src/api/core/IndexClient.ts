import axios from 'axios'
import { Request } from "express"

// const hubendpoint = process.env.TERMINUSDB_CLOUD_SERVER
// const hubkey = process.env.TERMINUSDB_CLOUD_SERVER_KEY
// const hubUser = process.env.TERMINUS_CLOUD_SERVER_ORG
// localhost:8080/index?commit=9uxwx5z64spmil7jq4m5uszeorrltbj&domain=SwissReDemo/star_wars_index
let baseUrl = process.env.OPENAI_SERVER_URL || 'http://localhost:8080/'

if (!baseUrl.endsWith('/'))baseUrl = baseUrl + '/'

export async function indexDatabase (logger:any, domain:string, commit:string, apikey:string) {
  logger.info(`INDEX DATABASE domain ${domain}, commit ${commit}`)
  const headers = { VECTORLINK_EMBEDDING_API_KEY: apikey }
  return axios.get(`${baseUrl}index`, { headers, params: { commit: commit, domain: domain } })
}

export function checkStatus (logger:any, taskId:string) {
  logger.info(`check status ${taskId}`)
  return axios.get(`${baseUrl}check`, { params: { task_id: taskId } })
}

// -- source_commit: commit that you already built an index for
// -- target_commit: commit that this index should be copied to*/
// localhost:8080/assign?source_commit=0cf3p497fjqircrnqfr1xbzfun3jxjk&domain=SwissReDemo/star_wars_index&target_commit=wgr912dei4urc1lb2qt5x59wag20sr5
export function assignCommit (logger:any, domain:any, sourceCommit:any, targetCommit:any, apikey:any) {
  logger.info(`ASSIGN INDEXING source commit ${sourceCommit}, target commit ${targetCommit}`)
  // VECTORLINK_EMBEDDING_API_KEY
  const headers = { VECTORLINK_EMBEDDING_API_KEY: apikey }
  const config = { headers, params: { domain: domain, source_commit: sourceCommit, target_commit: targetCommit } }
  return axios.get(`${baseUrl}assign`, config)
}

export function searchIndex (req:Request, domain:string, commit:string, apikey?:string) {
  if(!apikey) throw new Error("Plase set a valid OpenAI api key")
  const headers = { VECTORLINK_EMBEDDING_API_KEY: apikey, 'Content-Type': 'text/plain' }
  const config = { headers, params: { commit: commit, domain: domain } }
  return axios.post(`${baseUrl}search`, req.body.search, config)
}
