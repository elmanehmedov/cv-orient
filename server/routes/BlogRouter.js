import { Router } from "express";

 export const BlogRouter= Router();
 BlogRouter.get('/', (req, res)=> {
    res.send({
        blog:'oxu.az'
    })
 })