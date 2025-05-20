import { Router } from "express";
import createReaction from "../controllers/Reaction/create.js";
import getReactions from "../controllers/Reaction/read.js"
import updateReaction from "../controllers/Reaction/update.js"
import deleteReaction from "../controllers/Reaction/delete.js"
import passport from "../Middlewares/passport.js"
const  routerReaction = Router()

routerReaction.post("/create/:idmanga",passport.authenticate('jwt',{session:false}),createReaction)
routerReaction.get("/read", getReactions)
routerReaction.delete("/delete", deleteReaction)
routerReaction.put("/update", updateReaction)

export default routerReaction