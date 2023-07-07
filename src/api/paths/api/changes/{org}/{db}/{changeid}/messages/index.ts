import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import ChangeRequestDB from "../../../../../../../core/ChangeRequestDB";

    export const POST: Operation = async(req:Request, res:Response) =>{
        try {
          const crId = req.params.changeid
          const changeR = new ChangeRequestDB(req)
          const result = await changeR.addMessage(crId,req.body.message)
          res.status(200).json(result)
        } catch (err:any) {
          //req.context.logger.error(err.message)
          const status = err.status || 500
          const errData = err.data || { message: 'I can not add a new message', err: err.message }
          res.status(status).send(errData)
        }
    }
  
    
    POST.apiDoc = {
      summary: "Rebase the current change request to the original branch",
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
          description: "Return the change request document with the new message",
        },
      },
    };