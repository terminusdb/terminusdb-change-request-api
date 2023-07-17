import { NextFunction, Request, Response } from "express"
import {Logger} from './core/typeDef'
// I have to add a logger strategy
const logger:Logger =  {
  error : function (...message:string[]){
     const dd = new Date()
     const messageStr = Array.isArray(message) ? message.join(" ") : ''
     console.log('ERROR', dd.toISOString(), messageStr)
  },
  debug : function (...message:string[]){
    const dd = new Date()
    const messageStr = Array.isArray(message) ? message.join(" ") : ''
     console.log('DEBUG', dd.toISOString(), messageStr)
  },
  info : function (...message:string[]){
    const dd = new Date()
    const messageStr = Array.isArray(message) ? message.join(" ") : ''
     console.log('INFO', dd.toISOString(), messageStr)
  },
  warn : function (...message:string[]){
    const dd = new Date()
    const messageStr = Array.isArray(message) ? message.join(" ") : ''
     console.log('WARNING', dd.toISOString(), messageStr)
  }
}

export const addContextMiddle = function (req:Request, res:Response, next:NextFunction) {
  var dd = new Date()   
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
      req.context = {user : basicArr[0], password : basicArr[1],logger:logger}
      //to be review
    }catch(err:any){
      logger.error("addContextMiddle", err.message)
      return res.status(401).send("Unauthorized")
    }
    next()
}
