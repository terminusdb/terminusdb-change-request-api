
import { ApolloClient, InMemoryCache, gql, concat,HttpLink,ApolloLink } from '@apollo/client/core';
import { Request } from "express"
import  TerminusClient from '@terminusdb/terminusdb-client'
import { AdvancedSearchField } from './typeDef'
const endpoint = process.env.SERVER_ENDPOINT || ""
const key = process.env.USER_KEY || ""
const user = process.env.USER_NAME || ""

type FieldObj = {kind:string,type:AdvancedKeyType,name:string}

type FieldElement = {fields?:{[key:string]:FieldObj},
                    type?:AdvancedKeyType,values?:string[],
                    order_by?:[],
                    [key: string]:object | string | undefined}

type ObjectMap  = {[name:string]:FieldElement|undefined}

type TableFilterObj = { filter: { type: "boolean"|"number"|"string" }, options?:boolean }

type GraphQLSchemaType = { 
  name:string,
  kind?:AdvancedKeyType,
  fields?:GraphQLSchemaType[],
  enumValues?:{name:string}[]
  args?:[]
}

type FieldKeysItem = {
  Header: string,
  id: string,
  accessor: string,
  disableFilters?: boolean,
  disableSortBy?: boolean,
  filter?:object
}

type AdvancedKeyType  =  "String" | "BigInt" |"Int" | "BigFloat" |"Decimal"| "Float" |"Boolean"|"ENUM"|"OBJECT"|"DateTime"|"Date"

const advancedSearchMatchType : Record<AdvancedKeyType,AdvancedSearchField> = {
  "String":{
     "label":"replaceLabel",
     "type":"text",
     "valueSources":[
        "value"
     ]
  },
  "BigInt":{
     "label":"replaceLabel",
     "type":"number",
     "valueSources":[
        "value"
     ]
  },
  "Int":{
     "label":"replaceLabel",
     "type":"number",
     "valueSources":[
        "value"
     ]
  },
  "BigFloat":{
     "label":"replaceLabel",
     "type":"number",
     "valueSources":[
        "value"
     ]
  },
  "Decimal":{
     "label":"replaceLabel",
     "type":"text",
     "valueSources":[
        "value"
     ],
     "operators":[
        "eq",
        "ne",
        "lt",
        "le",
        "gt",
        "ge"
     ]
  },
  "Float":{
     "label":"replaceLabel",
     "type":"number",
     "valueSources":[
        "value"
     ]
  },
  "Boolean":{
     "label":"replaceLabel",
     "type":"boolean",
     "defaultValue":true,
     "fieldSettings":{
        "labelYes":"true",
        "labelNo":"false"
     }
  },
  "ENUM":{
     "label":"replaceLabel",
     "valueSources":[
        "value"
     ],
     "operators":[
        "select_equals",
        "select_not_equals"
     ],
     "defaultOperator":"select_equals",
     "type":"select",
     "fieldSettings":{
        "listValues":[
           
        ]
     }
  },
  "OBJECT":{
     "label":"replaceLabel",
     "type":"!group",
     "subfields":{
        
     }
  },
  "DateTime":{
     "label":"replaceLabel",
     "type":"datetime",
     "valueSources":[
        "value"
     ]
  },
  "Date":{
     "label":"replaceLabel",
     "type":"date",
     "valueSources":[
        "value"
     ]
  }
}

const logger =  {
  error : function (message:string){
     const dd = new Date()
     console.log('ERROR', dd.toISOString(), message)
  },
  debug : function (message:string){
    const dd = new Date()
     console.log('DEBUG', dd.toISOString(), message)
  },
  info : function (message:string){
    const dd = new Date()
     console.log('INFO', dd.toISOString(), message)
  },
  warning : function (message:string){
    const dd = new Date()
     console.log('WARNING', dd.toISOString(), message)
  }
}

const query = gql(`{__schema
  { types{...FullType}
  directives{name description locations args{...InputValue}}}}
fragment FullType on __Type{kind name description fields(includeDeprecated:true){name description args{...InputValue}type{...TypeRef}isDeprecated deprecationReason}inputFields{...InputValue}interfaces{...TypeRef}enumValues(includeDeprecated:true){name description isDeprecated deprecationReason}possibleTypes{...TypeRef}}fragment InputValue on __InputValue{name description type{...TypeRef}defaultValue}fragment TypeRef on __Type{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name}}}}}}}}`)




// woqlClient.connectionConfig.branchBase("graphql")
class GraphqlTableConfig {
  // constructor (req) 

  request : Request
  user : string | undefined
  password : string | undefined
  orgName : string | undefined
  dbName : string | undefined
  logger : typeof logger 

  constructor(req : Request) {
    this.request = req
    this.password = req.context.password
    this.user = req.context.user
    // user that has admin privileges for the terminuscms team
    this.orgName = req.params.org
    this.dbName = req.params.db
    this.logger =  logger//req.context.logger
    // every dataproduct has the related change_request database
  }

  async getSchema (organization:string, dbname:string, branchid:string) {
    const woqlClient = new TerminusClient.WOQLClient(endpoint, { user: this.user, key: this.password, organization:organization, db: dbname })
    const userPassEnc = btoa(`${this.user}:${this.password}`)
    woqlClient.checkout(branchid)
    const terminusdbURL = woqlClient.connectionConfig.branchBase('graphql')
  
    const httpLink = new HttpLink({ uri: terminusdbURL });
    const authMiddleware = new ApolloLink((operation, forward) => {
        // add the authorization to the headers
        operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            authorization: `Basic ${userPassEnc}`}
        }));
        return forward(operation);
    })
        
    const cache = new InMemoryCache({
    });

    const value = concat(authMiddleware, httpLink)
    const client = new ApolloClient({
        cache:cache,
        link: value,       
    });
  
    const result = await client.query({ query })
    const schemaDoc = await woqlClient.getDocument({ graph_type: 'schema', as_list: true })
    const tableConfig = this.formatSchema(result, schemaDoc)
    this.logger.debug(JSON.stringify(tableConfig, null, 4))
    return tableConfig
  }

  getOfType (ofType:any) : string {
    if (ofType && ofType.name) return ofType.name
    if (ofType.ofType) return this.getOfType(ofType.ofType)
    return 'notype'
  }

  getType (field:any) {
    if (field.type) {
      // KIND WILL BE OBJECT OR SCALAR IN THIS CASE KIND IS NOT A LIST
      if (field.type.name) return { type: field.type.name, kind: field.type.kind }
      // KIND TYPE LIST
      if (field.type.ofType) {
        const className = this.getOfType(field.type.ofType)
        return { type: className, kind: field.type.ofType.kind }
      }
    }
  }

  advSearchFilterFormatter (typesObj:any, fieldKey:string, fieldTypeValue:AdvancedKeyType, isList:boolean) {
    // const advancedSearchObj = {}
    let advField:AdvancedSearchField = advancedSearchMatchType[fieldTypeValue]
    if (advField !== undefined) {
      advField = JSON.parse(JSON.stringify(advField))
      advField.label = fieldKey
    } else if (typesObj[fieldTypeValue] && typesObj[fieldTypeValue].type === 'ENUM') {
      advField = JSON.parse(JSON.stringify(advancedSearchMatchType.ENUM))
      advField.label = fieldKey
      advField.fieldSettings = {listValues : typesObj[fieldTypeValue].values}
    }
    if (isList)advField.mode = 'ARRAY'
    advField.typevalue = fieldTypeValue
    return advField
  }

  
  getFilterType (type:string, isList:boolean=false) {
    const filterType:{[key:string]:TableFilterObj} = {
      Boolean: { filter: { type: 'boolean' } },
      Float: { filter: { type: 'number' } },
      BigInt: { filter: { type: 'number' } },
      Int: { filter: { type: 'number' } }
    }
    const filter:TableFilterObj = filterType[type] || { filter: { type: 'string' } }
    if (isList) {
      filter.options = isList
    }
    return filter
  }

 formatSchema(result:any, schemaDoc:any) {
    const types: GraphQLSchemaType[] = result.data.__schema.types
    //console.log(types)
    const typesObj01:any = types[0]
    const name = typesObj01.name
    const typesObj:ObjectMap = {}
  
    types.forEach(({name , kind, fields, enumValues}) => {
      const itemMatch = schemaDoc.find((doc:any) => doc['@id'] === name ||
                          `${doc['@id']}_Filter` === name || `${doc['@id']}_Ordering` === name)
      if (itemMatch) {
        console.log("TYPE NAME",name , kind)
        const ordering = itemMatch['@metadata'] && itemMatch['@metadata'].order_by ? { order_by: itemMatch['@metadata'].order_by } : {}
        typesObj[name] = { type: kind, ...ordering }
        // to be review
        let fieldsObj:any = {}
        if (fields) {
          fields.forEach(field => {
            if (field.name.startsWith('_') === false && field.args && field.args.length === 0) {
              fieldsObj[field.name] = this.getType(field)
            }
          })
        
          typesObj[name] = {...typesObj[name], fields : fieldsObj}

        } else if (enumValues) {
          const enumValuesTmp:string[] = []
          enumValues.forEach(({name:enumValueName}) => {
            enumValuesTmp.push(enumValueName)
          })
          typesObj[name]= {...typesObj[name], values : enumValuesTmp}
        }
      }
    })

    const objQuery:any= {}
    const objQueryOpenAI:any = {}
    const typesObjKeys = Object.keys(typesObj)
    const advancedSearchObj :any={}//{[key:string]:{[key:string]:{}}|string}= {}
  
    const tablesColumnsConfig:{[key:string]:{}|string} = {}
  
    typesObjKeys.forEach(key => {
      const itemObj = typesObj[key]
      if (itemObj &&  itemObj.type === 'OBJECT') {
        const fieldsKeys:string[] = itemObj.order_by || Object.keys(itemObj.fields || {})
  
        const fieldKeysArr:FieldKeysItem[] = [{
          Header: 'ID',
          id: '_id',
          accessor: '_id',
          disableFilters: true,
          disableSortBy: true
        }]
       
          fieldsKeys.forEach(fieldKey => {
            // {type:Int|String|ClassName, kind:OBJECT|SCALAR|LIST}
            const fieldObj = itemObj.fields ? itemObj.fields[fieldKey] : null
            if (fieldObj) {
              const fieldTypeValue = fieldObj.type
              const isList = fieldObj.kind === 'LIST' ? { mode: 'ARRAY', typevalue: fieldTypeValue } : { typevalue: fieldTypeValue }
    
              // check if it is a LIST of value
              const fieldTypeValueObj = typesObj[fieldTypeValue] || null
              if(fieldTypeValueObj){
                if (fieldTypeValueObj.type === 'OBJECT') {
                  // const linkedDocument = typesObj[fieldTypeValue]
                  if (fieldTypeValueObj.fields && fieldTypeValueObj.fields.name) {
                    fieldKey = `${fieldKey}---name`
                  } else {
                    fieldKey = `${fieldKey}---id`
                  }
                  fieldKeysArr.push({
                    Header: fieldKey.toUpperCase(),
                    id: fieldKey,
                    accessor: fieldKey,
                    disableFilters: true,
                    disableSortBy: true,
                    filter: { type: 'string', options: isList }
                  })
                } else if (typesObj[fieldTypeValue] && fieldTypeValueObj.type === 'ENUM') {
                  fieldKeysArr.push({
                    Header: fieldKey.toUpperCase(),
                    id: fieldKey,
                    accessor: fieldKey,
                    filter: { type: 'list', options: { dataprovider: fieldTypeValueObj.values, ...isList } }
                  })
                } else {
                  const filter = this.getFilterType(fieldTypeValue)
                  const columnObj:FieldKeysItem= {
                    Header: fieldKey.toUpperCase(),
                    id: fieldKey,
                    accessor: fieldKey,
                    ...filter
                  }
                  if (fieldTypeValue === 'DateTime') {
                    columnObj.disableFilters = true
                    columnObj.disableSortBy = true
                  }
                  fieldKeysArr.push(columnObj)
                }
              }
            }
          })// foreach
          tablesColumnsConfig[key] = fieldKeysArr
        //}
     }
    })
  
    
  
    typesObjKeys.forEach(key => {
      const itemObj = typesObj[key]
      // const fieldsArr = []
      if (itemObj && itemObj.type === 'OBJECT') {
        const fieldsKeys = Object.keys(itemObj.fields || {}) 
        const fieldKeysArr: string[] = []
        const fieldKeysArrOpenAI = []
        if (!advancedSearchObj[key]) {
          advancedSearchObj[key] = {}
        }
  
        /* if (key === 'Area') {
          const r = 1 + 45
        } */
  
        fieldsKeys.forEach(fieldKey => {
          const fieldObj = itemObj.fields && itemObj.fields[fieldKey] ? itemObj.fields[fieldKey] : null
          if (fieldObj) {
            const fieldTypeValue = fieldObj.type
            const isList = fieldObj.kind === 'LIST' ? true : false

            const typesObjValue = typesObj[fieldTypeValue]
  
            if (typesObjValue && typesObjValue.type === 'OBJECT') {
            // const linkedDocument = typesObj[fieldTypeValue]
              const name = typesObjValue.fields && typesObjValue.fields.name ? 'name' : ''
              const subfields = typesObjValue.fields || {}
              const subfieldsKeys = Object.keys(subfields || {})
  
              fieldKeysArr.push(`${fieldKey}{
                                           _id
                                           ${name}
                                        }`)
              const tmpSubfield:string[] = []
              subfieldsKeys.forEach(sub => {
                if (!typesObj[sub] || typesObjValue.type !== 'OBJECT') {
                  tmpSubfield.push(sub)
                }
              })
              if (tmpSubfield.length === 0) {
                tmpSubfield.push('_id')
              }
              fieldKeysArrOpenAI.push(`${fieldKey}{
                                        ${tmpSubfield.join(' \n ')
                                    }`)
              // this could be a list too
              const advField = JSON.parse(JSON.stringify(advancedSearchMatchType.OBJECT))
              advField.label = fieldKey
  
              advancedSearchObj[key][fieldKey] = advField
  
              if (typesObj[fieldTypeValue]) {
                subfieldsKeys.forEach(sub => {
                  const subTypeObj = subfields[sub]
                  if (subTypeObj) {
                    const subTypeValue = subTypeObj.type
                    advField.subfields[sub] = this.advSearchFilterFormatter(typesObj, sub, subTypeValue, isList)
                  }
                })
              }
            //   advField.subfields =advancedSearchObj[fieldTypeValue] ;
            // }else{
            // advancedSearchObj[fieldTypeValue]={}
            // advField.subfields =advancedSearchObj[fieldTypeValue] ;
            // }
            } else {
            // return primityve type
              advancedSearchObj[key][fieldKey] = this.advSearchFilterFormatter(typesObj, fieldKey, fieldTypeValue, isList)
              fieldKeysArr.push(fieldKey)
              fieldKeysArrOpenAI.push(fieldKey)
            }
          }
        })
  
        const filter = typesObj[`${key}_Filter`] ? `, $filter:${key}_Filter` : ''
        const filterVar = typesObj[`${key}_Filter`] ? ', filter:$filter' : ''
  
        const order = typesObj[`${key}_Ordering`] ? `, $orderBy:${key}_Ordering` : ''
        const orderVar = typesObj[`${key}_Ordering`] ? ', orderBy:$orderBy' : ''
  
        objQueryOpenAI[key] = {
          query: `
              query($id: ID){
                ${key}(id: $id){
                  ${fieldKeysArr.join(' \n ')}
                }
              }`
        }
  
        objQuery[key] = {
          query: `
              query ${key}Query($offset: Int, $limit: Int ${filter} ${order} ){
                ${key}(offset: $offset, limit: $limit ${filterVar} ${orderVar}){
                  _id
                  ${fieldKeysArr.join(' \n ')}
                }
              }`
        }
      }
    })
    return { objQueryOpenAI, objQuery, advancedSearchObj, tablesColumnsConfig }
  }
}
export default GraphqlTableConfig
