// return the documents tables and filters configuration
import { Operation } from "express-openapi";
import { Request,Response, } from "express";
/*
export const GET: Operation = async(req:Request, res:Response) =>{
    try{
        let openKey:{key:boolean|string} = {key:false}
        if(process.env.OPENAI_KEY){
            openKey={key:"active"}
        }
        res.json(openKey)
    }catch(err:any){
          console.log(err.message)
          const status = err.status || 500
          const errData = err.data  || {message: "I can not get the change requests list"}
          res.status(status).send(errData);
    }
}

GET.apiDoc = {
    summary: "Fetch Document Tables config.",
    operationId: "getOpenAiKey",
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
            description: "OpenAI key status",
            schema: {
              type: "object",
              items: {
                $ref: "#/definitions/GetOpenAIkeyStatus",
              },
            },
        },
    },
};*/