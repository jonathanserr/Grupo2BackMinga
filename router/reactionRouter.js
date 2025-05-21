import { Router } from "express";
import createReaction from "../controllers/Reaction/create.js";
import getReactions from "../controllers/Reaction/read.js"
import updateReaction from "../controllers/Reaction/update.js"
import deleteReaction from "../controllers/Reaction/delete.js"
import passport from "../Middlewares/passport.js"
import validator from "../Middlewares/validator.js";
import schemaReactions from "../Schemas/reactions/reactionSchema.js";
import determineUserEntity from "../Middlewares/determineIdUser.js";

const  routerReaction = Router()

routerReaction.post("/create/:idmanga",passport.authenticate('jwt',{session:false}), validator(schemaReactions),determineUserEntity,createReaction)
routerReaction.get("/read",passport.authenticate('jwt',{session:false}) ,getReactions)
routerReaction.delete("/delete",passport.authenticate('jwt',{session:false}) ,deleteReaction)
routerReaction.put("/update", passport.authenticate('jwt',{session:false}),updateReaction)

export default routerReaction