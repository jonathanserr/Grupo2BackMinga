import { Router } from "express";
import signin from "../controllers/Auth/signin.js";
import register from "../controllers/Auth/singup.js";

const routerAuth = Router();

routerAuth.post("/signin",signin)
routerAuth.post("/register", register)

export default routerAuth;