import { Operation } from "express-openapi";
import { Request,Response, } from "express";

    export const GET: Operation = async(req:Request, res:Response) =>{
      try{
        const apiKey = process.env.USE_CHANGE_REQUEST && process.env.USE_CHANGE_REQUEST === "true"  ? {isActive : true} : {isActive:false}
        res.status(200).json(apiKey)
      }catch(err:any){
          console.log(err.message)
          const status = err.status || 500
          const errData = err.data  || {message: "I can not get the change request activation status"}
          res.status(status).send(errData);
      }
    }
  
    GET.apiDoc = {
      summary: "Get Change request Document by id.",
      operationId: "getChangeRequest",
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
          description: "Return the Change Request Activation Status.",
          schema: {
            type: "object",
            items: {
              $ref: "#/definitions/ChangeRequestActivationStatus",
            },
          },
        },
      },
    };
  
    
  
    //return operations;
 // };

  //export default operation