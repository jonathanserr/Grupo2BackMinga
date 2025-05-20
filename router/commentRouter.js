import { Router } from "express";
import createComment from "../controllers/Comment/create.js";
import getComments from "../controllers/Comment/read.js"
import updateComment from "../controllers/Comment/update.js"
import deleteComment from "../controllers/Comment/delete.js"
import permisoDelete from "../Middlewares/Comment/PermisoDelete.js";

//
import passport from "../Middlewares/passport.js";
import permisoUpdate from "../Middlewares/Comment/PermisoUpdate.js";


const  routerComment = Router()

routerComment.post("/create/:idchapter", passport.authenticate('jwt',{session:false}),createComment)

routerComment.get("/read", getComments)
routerComment.delete("/delete/:idcomment", passport.authenticate('jwt',{session:false}) ,permisoDelete, deleteComment)
routerComment.put("/update/:idcomment", passport.authenticate('jwt',{session:false}), permisoUpdate ,updateComment)


export default routerComment