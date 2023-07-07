// return the documents tables and filters configuration
import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import GraphqlTableConfig from "../../../../../../../../core/GraphqlTableConfig";

export const GET: Operation = async(req:Request, res:Response) =>{
    try{
        const connector = new GraphqlTableConfig(req)
        const tableConfig = await connector.getSchema(req.params.org, req.params.db, req.params.type, req.params.typeid)
        res.json(tableConfig)
    }catch(err:any){
          console.log(err.message)
          const status = err.status || 500
          const errData = err.data  || {message: "I can not return the tables configuration"}
          res.status(status).send(errData);
    }
}

GET.apiDoc = {
    summary: "Fetch Document Tables config.",
    operationId: "getDocumentTablesConfig",
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
          name: "type",
          required: true,
          type: "string"
        },
        {
          in: "path",
          name: "typeid",
          required: true,
          type: "string"
        },
      ],
    responses: {
        200: {
            description: "List of graphql tables configurations",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/TablesConfig",
              },
            },
        },
    },
};