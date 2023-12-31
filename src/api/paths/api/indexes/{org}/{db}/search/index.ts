import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import * as IndexClient from '../../../../../../core/IndexClient'
import ChangeRequestDB from "../../../../../../core/ChangeRequestDB";
  
    export const POST: Operation = async (req:Request, res:Response) =>{
      try {
        const changeDB = new ChangeRequestDB(req)
        await changeDB.checkUserReadAuthorization()
        const apiKey = process.env.OPENAI_KEY 
        const commit = req.query.commit as string
        const domain = `${req.params.org}/${req.params.db}` 
        const result = await IndexClient.searchIndex(req, domain, commit, apiKey)
        res.json(result.data)
      } catch (err:any) {
        //req.context.logger.error(err)
        
        const status = err.status || 500
        const message = err.response && err.response.data ? err.response.data : err.message
        res.status(status).send({ message: 'Failed to search', error: message })
      }
    }
    
    POST.apiDoc = {
      summary: "Search indexed data.",
      operationId: "searchIndexedData",
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
          in: "query",
          name: "commit",
          required: true,
          type: "string"
        },
        {
          in: "body",
          name: "change request",
          schema: {
            $ref: "#/definitions/SearchIndexText",
          },
        },
      ],
      responses: {
        200: {
          description: "Return document list that match the search",
        },
      },
    };