import { Router } from "express";
import createCompany from "../controllers/Company/create.js";
import  {allCompanies} from "../controllers/Company/read.js"
import updateCompany from "../controllers/Company/update.js"
import deleteCompany from "../controllers/Company/delete.js"

const  routerCompany = Router()

routerCompany.post("/create", createCompany)
routerCompany.get("/read", allCompanies)
routerCompany.delete("/delete", deleteCompany)
routerCompany.put("/update", updateCompany)

export default routerCompany