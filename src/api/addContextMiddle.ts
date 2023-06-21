import { NextFunction, Request, Response } from "express"


const logger =  {
  error : function (message:string){
     const dd = new Date()
     console.log('ERROR', dd.toISOString(), message)
  },
  debug : function (message:string){
    const dd = new Date()
     console.log('DEBUG', dd.toISOString(), message)
  },
  info : function (message:string){
    const dd = new Date()
     console.log('INFO', dd.toISOString(), message)
  },
  warning : function (message:string){
    const dd = new Date()
     console.log('WARNING', dd.toISOString(), message)
  }
}

export const addContextMiddle = function (req:Request, res:Response, next:NextFunction) {
  var dd = new Date() 
  console.log("addContextMiddle",dd.toISOString())  
  if(req.url.startsWith("/api-docs")){
      return next();
    }
    if(!req.headers.authorization){
      return res.status(401).send("Unauthorized")
    }
    try{
      const auth : string = req.headers.authorization
      const base64Url = auth.split('Basic')[1]
      const basicDecode = atob(base64Url)
      const basicArr = basicDecode.split(':')
      req.context = {user : basicArr[0], password : basicArr[1]}//, logger }
      //to be review
    }catch(err:any){
      console.log(err.message)
      return res.status(401).send("Unauthorized")
    }
    next()
}
