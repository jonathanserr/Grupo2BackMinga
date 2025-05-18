import { Router } from "express";
import createManga from "../controllers/Manga/create.js";
import {getManga, getMangaByAuthororCompany} from "../controllers/Manga/read.js"
import updateManga from "../controllers/Manga/update.js"
import deleteManga from "../controllers/Manga/delete.js"

const  routerManga = Router()

routerManga.post("/create", createManga)
routerManga.get("/read", getManga)
routerManga.get("/readEspecific", getMangaByAuthororCompany )

routerManga.delete("/delete", deleteManga)
routerManga.put("/update", updateManga)

export default routerManga