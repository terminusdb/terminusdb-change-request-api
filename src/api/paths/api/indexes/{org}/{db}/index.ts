import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import ChangeRequestDB from "../../../../../core/ChangeRequestDB";

    export const GET: Operation = async(req:Request, res:Response) =>{
      try{
        const changeR = new ChangeRequestDB(req)
        // check if the user has read access
        await changeR.checkUserReadAuthorization()
        const limit:number = typeof req.query.limit  === "string" || typeof req.query.limit  === "number" ? parseInt(req.query.limit) : 5
        const status = typeof req.query.status === "string" ? req.query.status : undefined
        const branch = typeof req.query.branch === "string" ? req.query.branch : undefined
        const commits = await changeR.getLastCommitsIndexed(limit, status, branch)
        res.status(200).json(commits)
      }catch(err:any){
          console.log(err.message)
          const status = err.status || 500
          const errData = err.data  || {message: `I can not get commit indexed list ${err.message}`}
          res.status(status).send(errData);
      }
    }

    
    GET.apiDoc = {
      summary: "Fetch the indexed commit list.",
      operationId: "getIndexedCommit",
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
          name: "limit",
          required: false,
          type: "number"
        },
        {
          in: "query",
          name: "status",
          required: false,
          type: "string"
        },
        {
          in: "query",
          name: "branch",
          required: false,
          type: "string"
        },
      ],
      responses: {
        200: {
          description: "List of indexed Commit.",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/IndexedCommits",
            },
          },
        },
      },
    };