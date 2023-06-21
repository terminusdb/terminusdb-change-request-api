import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import ChangeRequestDB from "../../../../../../../core/ChangeRequestDB";
import * as typeDef from "../../../../../../../core/typeDef"

    export const PUT: Operation = async(req:Request, res:Response) =>{
      try{
        try {
          const crId = req.params.changeid
          const changeR = new ChangeRequestDB(req)
          const result = await changeR.rebaseChangeRequestBranch(crId)
          res.status(200).json(result)
        } catch (err:any) {
          //req.context.logger.error(err.message)
          const status = err.status || 500
          const errData = err.data || { message: 'I can not rebase the change request branch', err: err.message }
          res.status(status).send(errData)
        }
      }catch(err:any){
          console.log(err.message)
          const status = err.status || 500
          const errData = err.data  || {message: "I can not get the change requests diff documents"}
          res.status(status).send(errData);
      }
    }
  
    
    PUT.apiDoc = {
      summary: "to rebase the current change request to the main branch",
      operationId: "rebaseChangeRequest",
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
          description: "List of document diff.",
          schema: {
            type: "array",
            items:{
              "type": "object"
            }
          },
        },
      },
    };
  
    /*POST.apiDoc = {
      summary: "Create Change Request.",
      operationId: "createChangeRequest",
      consumes: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "change request",
          schema: {
            $ref: "#/definitions/PostChangeRequest",
          },
        },
      ],
      responses: {
        201: {
          description: "Created",
        },
      },
    };*/

    //return operations;
 // };

  //export default operation