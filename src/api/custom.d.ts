declare namespace Express {
   export interface Request {
      context: {user:string ,password:string,logger:any}
   }
}