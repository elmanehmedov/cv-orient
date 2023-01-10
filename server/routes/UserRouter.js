import { Router } from "express";

  export const UserRouter=Router();
 UserRouter.get('/', (req, res)=> {
    res.send({
        id:222,
        name:'Ali'
    })
 })