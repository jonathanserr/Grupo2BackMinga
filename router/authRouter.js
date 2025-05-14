import { Router } from "express";
import signin from "../controllers/Auth/signin.js";
import singout from "../controllers/Auth/singout.js";
import singup from "../controllers/Auth/singup.js";

const routerAuth = Router();

routerAuth.post("/signin",signin)
routerAuth.post("/signup", singup);
routerAuth.post("/signout", singout);

export default routerAuth;