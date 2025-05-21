import { Router } from "express";
import desactiveUser from "../controllers/Admin/DesactiveUser.js"
import passport from "../middlewares/passport.js";
import adminRole from "../Middlewares/TypeUsers/Admin.js";
const routerAdmin = Router()

routerAdmin.post("/desactive",passport.authenticate("jwt", {session:false}), adminRole, desactiveUser)


export default routerAdmin