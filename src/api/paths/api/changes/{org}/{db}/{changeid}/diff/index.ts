import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import ChangeRequestDB from "../../../../../../../core/ChangeRequestDB";
import * as typeDef from "../../../../../../../core/typeDef"

    export const GET: Operation = async(req:Request, res:Response) =>{
      try{
          const crId = req.params.changeid
          const changeR = new ChangeRequestDB(req)
          const result = await changeR.getChangeRequestDiff(crId , 0, 5)
          res.status(200).json(result);
      }catch(err:any){
          console.log(err.message)
          const status = err.status || 500
          const errData = err.data  || {message: "I can not get the change requests diff documents"}
          res.status(status).send(errData);
      }
    }
    
    GET.apiDoc = {
      summary: "to view all the changes between the original branch and the given change request ",
      operationId: "getChangeRequestsDiff",
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