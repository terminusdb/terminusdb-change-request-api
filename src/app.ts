import * as dotenv from "dotenv";
import express from "express";
import path from "path";
import { initialize } from "express-openapi";
import swaggerUi from "swagger-ui-express";
import ApiDocs from "./api/api-doc.json";
import bodyParser from "body-parser";
import cors from "cors";
import { addContextMiddle } from "./api/addContextMiddle";
import { createProxyMiddleware } from "http-proxy-middleware";
import { AccessControl } from "@terminusdb/terminusdb-client";
import * as settings from "./api/core/settings";
declare namespace Express {
  export interface Request {
    context?: object;
  }
}

var app = express();
app.use(cors());
function not_in_whitelist(s: string, _req: unknown): boolean {
  const whitelist = [
    /^\/api\/indexes/,
    /^\/api\/changes/,
    /^\/api\/tables/,
    /^\/api\/organizations\/[^/]+\/openaikey$/,
  ];
  const result = whitelist.some((re) => {
    return s.match(re);
  });

  return !result;
}

app.use(
  createProxyMiddleware(not_in_whitelist, {
    target: process.env.SERVER_ENDPOINT || "http://localhost:6363",
    changeOrigin: false,
    // onProxyRes: onProxyRes,
    secure: false,
  }),
);

// the path is for the builded javascript version
dotenv.config({ path: __dirname + "/../.env" });

app.use(bodyParser.json());

// OpenAPI routes
initialize({
  app,
  // @ts-ignore
  apiDoc: ApiDocs, //"./api/api-doc.json",//require("./api/api-doc"),
  paths: path.resolve(__dirname, "api/paths"),
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
  }),
);

app.use(addContextMiddle);

app.listen(3035, async () => {
  // when we start the server we check if the terminusCR team already exists
  // if it does not exists we'll create it
  try {
    const accessControl = new AccessControl(settings.endpoint, {
      key: settings.key,
      user: settings.user,
    });

    await accessControl.createOrganization(settings.CROrg);
    await accessControl.manageCapability(
      "User/admin",
      `Organization/${settings.CROrg}`,
      ["Role/admin"],
      "grant",
    );
    console.log("The Change Request team has been created");
  } catch (err: any) {
    if (err.data === undefined) {
      // terminusdb has not yet started up. exit.
      console.error("TerminusDB not yet initialized");
      process.exit(1);
    } else if (
      typeof err.data === "object" &&
      err.data["api:error"] &&
      err.data["api:error"]["@type"] === "api:NoUniqueIdForOrganizationName"
    ) {
      console.log("The Change Request team already exists");
    } else {
      console.log("An unexpected error occured during startup");
      console.log(err);
      process.exit(1);
    }
  }
});

console.log("App running on port http://localhost:3035");
console.log(
  "OpenAPI documentation available in http://localhost:3035/api-documentation",
);

//module.exports = app;
