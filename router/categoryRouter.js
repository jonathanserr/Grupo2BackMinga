import { Router } from "express";
import createCategory from "../controllers/Category/create.js";
import getCategorys from "../controllers/Category/read.js"
import updateCategory from "../controllers/Category/update.js"
import deleteCategory from "../controllers/Category/delete.js"

const  routerCategory = Router()

routerCategory.post("/create", createCategory)
routerCategory.get("/read", getCategorys)
routerCategory.delete("/delete", deleteCategory)
routerCategory.put("/update", updateCategory)


export default routerCategory