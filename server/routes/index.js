import { Router } from "express";
import { BlogRouter } from "./BlogRouter.js";
import { UserRouter } from "./UserRouter.js";
 

 export  const MockRoutes=Router();
 MockRoutes.use('/users',UserRouter)
 .use('/blogs',BlogRouter)