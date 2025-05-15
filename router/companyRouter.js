import { Router } from "express";
import createCompany from "../controllers/Company/create.js";
import getCompanys from "../controllers/Company/read.js"
import updateCompany from "../controllers/Company/update.js"
import deleteCompany from "../controllers/Company/delete.js"

const  routerCompany = Router()

routerCompany.post("/create", createCompany)
routerCompany.get("/read", getCompanys)
routerCompany.delete("/delete", deleteCompany)
routerCompany.put("/update", updateCompany)

export default routerCompany