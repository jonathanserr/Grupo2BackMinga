import { Router } from "express";
import createCompany from "../controllers/Company/create.js";
import  {allCompanies} from "../controllers/Company/read.js"
import updateCompany from "../controllers/Company/update.js"
import deleteCompany from "../controllers/Company/delete.js"

//PAssport 
import passport from "../Middlewares/passport.js";
import updateRolCompany from "../Middlewares/TypeUsers/Company.js";
import admin from "../Middlewares/TypeUsers/Admin.js";
import cleanEmptyFields from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"

const  routerCompany = Router()

routerCompany.post("/create", passport.authenticate('jwt',{session:false}), updateRolCompany ,createCompany)
routerCompany.get("/read",admin.authenticate("jwt",{session:false} ),allCompanies)
routerCompany.delete("/delete/:idCompany", deleteCompany)
routerCompany.put("/update/:idCompany", cleanEmptyFields ,updateCompany)

export default routerCompany

