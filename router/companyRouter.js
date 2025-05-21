import { Router } from "express";
import createCompany from "../controllers/Company/create.js";
import  {allCompanies} from "../controllers/Company/read.js"
import updateCompany from "../controllers/Company/update.js"
import deleteCompany from "../controllers/Company/delete.js"

//PAssport 
import passport from "../Middlewares/passport.js";
import updateRolCompany from "../Middlewares/TypeUsers/Company.js";
import adminRole from "../Middlewares/TypeUsers/Admin.js";
import cleanEmptyFields from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"
import checkRole from "../Middlewares/checkRole.js";
import schemaCompany from "../Schemas/companies/companySchema.js"
import validator from "../Middlewares/validator.js";
import updateRol from "../Middlewares/Company/updareRoltoEliminate.js"

const  routerCompany = Router()

routerCompany.post("/create", passport.authenticate('jwt',{session:false}), validator(schemaCompany),updateRolCompany ,createCompany)

routerCompany.get("/read",passport.authenticate("jwt",{session:false} ),adminRole,allCompanies)

routerCompany.delete("/delete/:idCompany",passport.authenticate('jwt',{session:false}) , checkRole ,updateRol,deleteCompany)

routerCompany.put("/update/:idCompany", cleanEmptyFields ,passport.authenticate("jwt",{session:false} ),checkRole,updateCompany)

export default routerCompany

