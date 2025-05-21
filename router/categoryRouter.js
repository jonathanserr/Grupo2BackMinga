import { Router } from "express";
import createCategory from "../controllers/Category/create.js";
import getCategorys from "../controllers/Category/read.js"
import updateCategory from "../controllers/Category/update.js"
import deleteCategory from "../controllers/Category/delete.js"


import cleanEmptyFields  from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"
import passport from "../Middlewares/passport.js";
import checkRole from "../Middlewares/checkRole.js";
import schemaCategory from "../Schemas/categories/categorySchema.js"
import validator from "../Middlewares/validator.js";


const  routerCategory = Router()

routerCategory.post("/create", passport.authenticate('jwt',{session:false}),checkRole,validator(schemaCategory),createCategory)
routerCategory.get("/read", getCategorys)
routerCategory.delete("/delete/:idcategory",passport.authenticate('jwt',{session:false}),checkRole, deleteCategory)
routerCategory.put("/update/:idcategory", cleanEmptyFields ,passport.authenticate('jwt',{session:false}),checkRole, updateCategory)


export default routerCategory