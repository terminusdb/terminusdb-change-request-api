import { Operation } from "express-openapi";
import { Request,Response, } from "express";
import ChangeRequestDB from "../../../../../core/ChangeRequestDB";

//import * as typeDef from "../../../../core/typeDef"

    export const GET: Operation = async(req:Request, res:Response) =>{
      try{
        var dd = new Date()
          console.log("ChangeRequestDB",dd.toISOString())
          const changeR = new ChangeRequestDB(req)
          const result = await changeR.getChangeRequests()
          var dd1 = new Date()
          console.log("ChangeRequestDB",dd1.toISOString())
          res.status(200).json(result);
      }catch(err:any){
          console.log(err.message)
          const status = err.status || 500
          const errData = err.data  || {message: "I can not get the change requests list"}
          res.status(status).send(errData);
      }
    }
  
    export const POST: Operation = async (req:Request, res:Response) =>{
      try{
        const timestamp = Date.now()
        const message = req.body.message || "create a new change request"
        const changeR = new ChangeRequestDB(req)
        const crId= await changeR.createChangeRequest(message)
        console.log(`About to create Change Request: ${JSON.stringify(req.body)}`);
        res.status(201).send({message:"the change request as been created",...crId});
      }catch(err:any){
          console.log(err.message)
          const status = err.status || 500
          const errData = err.data  || {message: "I can not create a new change Request"}
          res.status(status).send(errData);
      }
    }
    
    GET.apiDoc = {
      summary: "Fetch Change requests.",
      operationId: "getChangeRequests",
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
        }
      ],
      responses: {
        200: {
          description: "List of change requests.",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/ChangeRequest",
            },
          },
        },
      },
    };
  
    POST.apiDoc = {
      summary: "Create Change Request.",
      operationId: "createChangeRequest",
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
            $ref: "#/definitions/PostChangeRequest",
          },
        },
      ],
      responses: {
        201: {
          description: "Created",
        },
      },
    };