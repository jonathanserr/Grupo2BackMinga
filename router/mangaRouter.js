import { Router } from "express";
import createManga from "../controllers/Manga/create.js";
import {getManga, getMangaByAuthororCompany, getMangaById} from "../controllers/Manga/read.js"
import updateManga from "../controllers/Manga/update.js"
import deleteManga from "../controllers/Manga/delete.js"
import ClearChapters from "../Middlewares/Manga/ClearChapters.js"

import passport from "../Middlewares/passport.js";
import checkRole from "../Middlewares/checkRole.js";
import schemaManga from "../Schemas/mangas/mangaSchema.js"
import validator from "../Middlewares/validator.js";
import determineUserEntity from "../Middlewares/determineIdUser.js";
import cleanEmptyFields from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js";


const  routerManga = Router()

routerManga.post("/create", passport.authenticate('jwt',{session:false}),checkRole,validator(schemaManga),determineUserEntity,createManga)
routerManga.get("/read", getManga)
routerManga.get("/read/:id", getMangaById)
routerManga.get("/readEspecific", passport.authenticate('jwt',{session:false}),checkRole,determineUserEntity,getMangaByAuthororCompany )
routerManga.delete("/delete/:idmanga",passport.authenticate('jwt',{session:false}),checkRole ,ClearChapters, deleteManga)
routerManga.put("/update/:idmanga", passport.authenticate('jwt',{session:false}),checkRole,cleanEmptyFields ,updateManga)

export default routerManga