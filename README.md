# terminusdb-change-request-api

The Change Request API provides REST APIs to integrate Change Request Managment and VectorLink with TerminusDB

## Setting up terminusdb-change-request-api

**Clone the repository**
```sh
git clone https://github.com/terminusdb/terminusdb-change-request-api.git
```

**Install all the dependencies**
```sh
cd terminusdb-change-request-api
npm install
```

**Build the server**

Rename ENV.local to .env
```sh
cp ENV.local .env
npm run build
```

**Run the server**

```sh
npm run start
```
The server will run on port http://localhost:3035

OpenAPI documentation is available in http://localhost:3035/api-documentation
