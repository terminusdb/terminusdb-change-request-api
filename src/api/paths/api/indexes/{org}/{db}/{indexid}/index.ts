// return the documents tables and filters configuration
import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import ChangeRequestDB from "../../../../../../core/ChangeRequestDB"

export const PUT: Operation = async(req:Request, res:Response) =>{
  try {
    const changeR = new ChangeRequestDB(req)
    const result = await changeR.updateIndexingInfo(req.params.indexid, req.body.status)
    res.json(result)
  } catch (err:any) {
   //req.context.logger.error(err)
    const status = err.status || 500
    const errData = err.data || { message: 'I can not update the indexing status', err: err.message }
    res.status(status).send(errData)
  }
}

PUT.apiDoc = {
  summary: "Update Indexed Commit.",
  operationId: "updateIndexedCommit",
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
    },
    {
      in: "body",
      name: "change request",
      schema: {
        $ref: "#/definitions/UpdateIndexedCommitDocument",
      },
    },
  ],
  responses: {
    200: {
      description: "Updated ok",
    },
  },
};