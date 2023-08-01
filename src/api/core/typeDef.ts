
export type ChangeReqStatus = "Submitted" | "Open" | "Rejected" | "Merged" | "Close"
export type Logger = {error:Function, debug:Function, info:Function, warn:Function}
export type MessageObj =  {"@type" : "Message", 
            "text":string,
            "timestamp":number,
            "author":string
            }

export type CreateChangeRequestPayload = {
    original_branch : string,
    tracking_branch : string,
    origin_commit_id : string,
}

export type ChangeReqDoc = { 
    "@type" : "ChangeRequest",
    name : string,
    origin_database : string,
    status :  ChangeReqStatus ,
    tracking_branch : string,
    original_branch : string,
    creator_email : string,
    creator : string, 
    merge_commit_id? :string,
    origin_commit_id: string,
    creation_time : number,
    messages: MessageObj[]
    indexing_info?:IndexedCommit[]
}

export type RunIndexResultObj = {status:IndexingStatus,task_id?:string,error_message?:string}

export type IndexingStatus =  "Complete" | "Error" | "Sent" | "Progress"| "Assigned"|"Create"|"Close"

export type IndexedCommit={
    "@type": "Indexed_commit",
    "change_request_commit_id": string,
    "indexed_at": number,
    "indexing_status": IndexingStatus,
    "searchable_branch_commit_id"?:string,
    "searchable_branch_name"?:string,
    "task_id"?:string,
    "error_message"?:string
    "indexed_documents"?:number
}

export type AdvancedSearchField = {
    label:string,
    type:"number"|"text"|"boolean"|"select"|"!group"|"datetime"|"date",
    valueSources?:string[],
    subfields?:{string:AdvancedSearchField}|{},
    operators?:string[],
    mode?: string,
    typevalue?:string,
    defaultOperator?:string,
    fieldSettings?:{ [name:string]: [] | string | undefined} | {} 
    defaultValue? : string | boolean | number
}



export type GetRequestQuery = {
    "type" : "ChangeRequest",
    "query": { "tracking_branch":string}
}

export type ChangeRequestParams = {
    "type" : "ChangeRequest",
    "query": { "tracking_branch":string}
}