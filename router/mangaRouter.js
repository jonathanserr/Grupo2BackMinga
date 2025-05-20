import { Router } from "express";
import createManga from "../controllers/Manga/create.js";
import {getManga, getMangaByAuthororCompany, getMangaById} from "../controllers/Manga/read.js"
import updateManga from "../controllers/Manga/update.js"
import deleteManga from "../controllers/Manga/delete.js"
import cleanEmptyFields from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"
import ClearChapters from "../Middlewares/Manga/ClearChapters.js"

import passport from "../Middlewares/passport.js";
import checkRole from "../Middlewares/checkRole.js";
import schemaManga from "../Schemas/mangas/mangaSchema.js"
import validator from "../Middlewares/validator.js";

const  routerManga = Router()

routerManga.post("/create", cleanEmptyFields, passport.authenticate('jwt',{session:false}),checkRole,validator(schemaManga) ,createManga)
routerManga.get("/read", getManga)
routerManga.get("/readEspecific", passport.authenticate('jwt',{session:false}),checkRole,getMangaByAuthororCompany )
routerManga.delete("/delete/:idmanga",passport.authenticate('jwt',{session:false}),checkRole ,ClearChapters, deleteManga)
routerManga.put("/update", passport.authenticate('jwt',{session:false}),checkRole ,updateManga)

export default routerManga