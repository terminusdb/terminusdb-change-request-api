import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import ChangeRequestDB from "../../../../../../core/ChangeRequestDB";

    export const GET: Operation = async(req:Request, res:Response) =>{
      try{
        const changeR = new ChangeRequestDB(req)
        let result
        const checkHeader:string = (req.query.check_head || "").toString()
        if (checkHeader.toLowerCase() === 'true') {
          result = await changeR.checkChangeRequestBranchHead(req.params.changeid)
        } else {
          result = await changeR.getChangeRequests(req.params.changeid, false)
        }
        res.status(200).json(result)
      }catch(err:any){
          console.log(err.message)
          const status = err.status || 500
          const errData = err.data  || {message: "I can not get the change requests list"}
          res.status(status).send(errData);
      }
    }
  
    export const PUT: Operation = async(req:Request, res:Response)=>{
      try{
        const crId = req.params.changeid
        const changeR = new ChangeRequestDB(req)
        const apiKey = process.env.OPENAI_KEY 
        const changeDoc = await changeR.changeRequestStatus(crId,req.body.status,req.body.message,apiKey)
        res.status(200).send(changeDoc);
      }catch(err:any){
         console.log(err.message)
         const status = err.status || 500
         const errData = err.data  || {message: "I can not update the change request status"}
         res.status(status).send(errData);
      }
    }
  
    export const DELETE: Operation =(req:Request, res:Response) => {
      console.log(`About to delete Change Request id: ${req.query.changeid}`);
      res.status(200).send();
    }
  
    GET.apiDoc = {
      summary: "Get Change request Document by id.",
      operationId: "getChangeRequest",
      parameters: [
        {
          in: "path",
          name: "org",
          required: true,
          type: "string"
        },
        {
          in: "path",
          name: "db",
          required: true,
          type: "string"
        },
        {
          in: "path",
          name: "changeid",
          required: true,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "Return the Change Request Document.",
          schema: {
            type: "object",
            items: {
              $ref: "#/definitions/ChangeRequestObj",
            },
          },
        },
      },
    };
  
    PUT.apiDoc = {
      summary: "Update the Change Request Document.",
      operationId: "updateChangeRequest",
      parameters: [
        {
          in: "path",
          name: "org",
          required: true,
          type: "string"
        },
        {
          in: "path",
          name: "db",
          required: true,
          type: "string"
        },
        {
          in: "path",
          name: "changeid",
          required: true,
          type: "string"
        },
        {
          in: "body",
          name: "change request",
          schema: {
            $ref: "#/definitions/PutChangeRequest",
          },
        },
      ],
      responses: {
        200: {
          description: "Updated ok",
        },
      },
    };
  
    DELETE.apiDoc = {
      summary: "Delete Change Request by id.",
      operationId: "deleteChangeRequest",
      consumes: ["application/json"],
      parameters: [
        {
          in: "path",
          name: "org",
          required: true,
          type: "string"
        },
        {
          in: "path",
          name: "db",
          required: true,
          type: "string"
        },
        {
          in: "path",
          name: "changeid",
          required: true,
          type: "string"
        },
      ],
      responses: {
        200: {
          description: "Delete the Change Request Document",
        },
      },
    };
  
    //return operations;
 // };

  //export default operation