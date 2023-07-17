
import * as dotenv from 'dotenv'
import express from "express";
import path  from "path";
import  { initialize } from "express-openapi";
import swaggerUi from "swagger-ui-express";
import ApiDocs from "./api/api-doc.json"
import bodyParser from "body-parser";
import cors from "cors";
import {addContextMiddle} from "./api/addContextMiddle"
import { createProxyMiddleware } from  'http-proxy-middleware'
import { AccessControl} from "@terminusdb/terminusdb-client"
import * as settings from './api/core/settings'
declare namespace Express {
  export interface Request {
    context?: object
  }
}

var app = express();
app.use(cors())
// the path is for the builded javascript version
dotenv.config({ path: __dirname+'/../.env' });

app.use('/:prefix/api',
  createProxyMiddleware({
    target: process.env.SERVER_ENDPOINT || "http://localhost:6363",
    changeOrigin: false,
   // onProxyRes: onProxyRes,
    pathRewrite: {
      '^/.*/api': '/api' // remove base path
    },
    secure: false
}))


app.use(bodyParser.json());

// OpenAPI routes
initialize({
  app,
  // @ts-ignore
  apiDoc: ApiDocs,//"./api/api-doc.json",//require("./api/api-doc"),
  paths: path.resolve(__dirname, 'api/paths')
});

// OpenAPI UI
app.use(
  "/api-documentation",
  swaggerUi.serve,
  
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "http://localhost:3035/api-docs",
      /*basicAuth: {
        name:   'Authorization',
        schema: {
          type: 'basic',
          in:   'header'
        },
        value:  'Basic <user:password>'
      }  */ 
    },
  })
);

app.use(addContextMiddle)
app.listen(3035,function(){
  // when we start the server we check if the terminusCR team already exists
  // if it does not exists we'll create it
  const accessControl = new AccessControl(settings.endpoint, { key: settings.key, user: settings.user })

  accessControl.createOrganization(settings.CROrg).then(result=>{
      console.log("The Change Request team has been created")
    }).catch((err:any)=>{
      if (typeof err.data === 'object' && err.data['api:error'] 
        && err.data['api:error']['@type'] === "api:NoUniqueIdForOrganizationName") {
        console.log("The Change Request team already exists")
        }
      })
  });

console.log("App running on port http://localhost:3035");
console.log(
  "OpenAPI documentation available in http://localhost:3035/api-documentation"
);

//module.exports = app;
