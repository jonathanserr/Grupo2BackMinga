import { Router } from "express";
import createChapter from "../controllers/Chapter/create.js";
import getChapters from "../controllers/Chapter/read.js"
import updateChapter from "../controllers/Chapter/update.js"
import deleteChapter from "../controllers/Chapter/delete.js"
import cleanEmptyFields from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"

import passport from "../Middlewares/passport.js";
import checkRole from "../Middlewares/checkRole.js";
import schemaChapter from "../Schemas/chapters/chapterSchema.js"
import validator from "../Middlewares/validator.js";
const  routerChapter = Router()

routerChapter.post("/create/:idmanga", cleanEmptyFields, passport.authenticate('jwt',{session:false}),checkRole,validator(schemaChapter),createChapter)
routerChapter.get("/read/:IdManga", getChapters)
routerChapter.delete("/delete/:idchapter", passport.authenticate('jwt',{session:false}),checkRole, deleteChapter)
routerChapter.put("/update/:idchapter", passport.authenticate('jwt',{session:false}),checkRole, updateChapter)

export default routerChapter