import { Router } from "express";
import createCategory from "../controllers/Category/create.js";
import getCategorys from "../controllers/Category/read.js"
import updateCategory from "../controllers/Category/update.js"
import deleteCategory from "../controllers/Category/delete.js"


import cleanEmptyFields  from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"
import passport from "../Middlewares/passport.js";

const  routerCategory = Router()

routerCategory.post("/create/:idadmin",  createCategory)
routerCategory.get("/read", getCategorys)
routerCategory.delete("/delete/:idcategory", deleteCategory)
routerCategory.put("/update/:idcategory", cleanEmptyFields , updateCategory)


export default routerCategory