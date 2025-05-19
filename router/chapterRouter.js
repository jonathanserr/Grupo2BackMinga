import { Router } from "express";
import createChapter from "../controllers/Chapter/create.js";
import getChapters from "../controllers/Chapter/read.js"
import updateChapter from "../controllers/Chapter/update.js"
import deleteChapter from "../controllers/Chapter/delete.js"
import cleanEmptyFields from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"

const  routerChapter = Router()

routerChapter.post("/create/:idmanga", cleanEmptyFields,createChapter)
routerChapter.get("/read/:IdManga", getChapters)
routerChapter.delete("/delete/:idchapter", deleteChapter)
routerChapter.put("/update", updateChapter)

export default routerChapter