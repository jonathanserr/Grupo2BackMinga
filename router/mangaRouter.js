import { Router } from "express";
import createManga from "../controllers/Manga/create.js";
import {getManga, getMangaByAuthororCompany, getMangaById} from "../controllers/Manga/read.js"
import updateManga from "../controllers/Manga/update.js"
import deleteManga from "../controllers/Manga/delete.js"
import cleanEmptyFields from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"
import ClearChapters from "../Middlewares/Manga/ClearChapters.js"
const  routerManga = Router()

routerManga.post("/create", cleanEmptyFields,createManga)
routerManga.get("/read", getManga)
routerManga.get("/readEspecific", getMangaByAuthororCompany )
routerManga.get("/read/:idmanga", getMangaById)

routerManga.delete("/delete/:idmanga",ClearChapters,deleteManga)
routerManga.put("/update", updateManga)

export default routerManga