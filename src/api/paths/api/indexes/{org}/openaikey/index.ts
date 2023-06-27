import { Operation } from "express-openapi";
import { Request,Response, } from "express";

    export const GET: Operation = async(req:Request, res:Response) =>{
      try{
        const apiKey = process.env.OPENAI_KEY  ? {key : "active"} : {key:false}
        res.status(200).json(apiKey)
      }catch(err:any){
          console.log(err.message)
          const status = err.status || 500
          const errData = err.data  || {message: "I can not get the openai key"}
          res.status(status).send(errData);
      }
    }

    
    GET.apiDoc = {
      summary: "Fetch open AI status.",
      operationId: "getOpenAIKeyStatus",
      parameters: [
        {
          in: "path",
          name: "org",
          required: true,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "Object with the openAI status",
          schema: {
            type: "object",
            items: {
              $ref: "#/definitions/OpenAIStatus",
            },
          },
        },
      },
    };