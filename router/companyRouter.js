import { Router } from "express";
import createCompany from "../controllers/Company/create.js";
import getCompanys from "../controllers/Company/read.js"
import updateCompany from "../controllers/Company/update.js"
import deleteCompany from "../controllers/Company/delete.js"

//PAssport 
import passport from "../middlewares/passport.js";
import updateRolCompany from "../middlewares/TypeUsers/Company.js";
import admin from "../middlewares/TypeUsers/Admin.js";

const  routerCompany = Router()

routerCompany.post("/create", passport.authenticate('jwt',{session:false}), updateRolCompany ,createCompany)
routerCompany.get("/read",admin.authenticate("jwt",{session:false} ),getCompanys)
routerCompany.delete("/delete", deleteCompany)
routerCompany.put("/update", updateCompany)

export default routerCompany

