import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import ChangeRequestDB from "../../../../../../../core/ChangeRequestDB";

    export const GET: Operation = async(req:Request, res:Response) =>{
      try {
        const changeR = new ChangeRequestDB(req)
        const apiKey = process.env.OPENAI_KEY 
        const commitDoc = await changeR.indexingCheckStatus(req.params.indexid, apiKey)
        res.status(200).json(commitDoc)
      } catch (err:any) {
       // req.context.logger.error(err.message)
        const status = err.status || 500
        const errData = err.data || { message: 'I can not get the change requests diff documents', err: err.message }
        res.status(status).send(errData)
      }
    }

    
    GET.apiDoc = {
      summary: "Check the indexing status",
      operationId: "checkIndexingStatus",
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
          name: "indexid",
          required: true,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "Return the commited indexed Document Object after check for the task status",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/CheckIndexedCommitTask",
            },
          },
        },
      },
    };