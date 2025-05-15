import { Router } from "express";
import createComment from "../controllers/Comment/create.js";
import getComments from "../controllers/Comment/read.js"
import updateComment from "../controllers/Comment/update.js"
import deleteComment from "../controllers/Comment/delete.js"


const  routerComment = Router()

routerComment.post("/create", createComment)
routerComment.get("/read", getComments)
routerComment.delete("/delete", deleteComment)
routerComment.put("/update", updateComment)


export default routerComment