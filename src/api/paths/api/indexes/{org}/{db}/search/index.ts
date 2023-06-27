import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import * as IndexClient from '../../../../../../core/IndexClient'

  
    export const POST: Operation = async (req:Request, res:Response) =>{
      try {
        const apiKey = process.env.OPENAI_KEY 
      
        const result = await IndexClient.searchIndex(req, apiKey)
        res.json(result.data)
      } catch (err:any) {
        //req.context.logger.error(err)
        const status = err.status || 500
        res.status(status).send({ message: 'Failed to search', err: err.message })
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