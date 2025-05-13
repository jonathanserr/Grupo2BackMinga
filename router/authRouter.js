import { Router } from "express";
import signin from "../controllers/Auth/signin.js";


const routerAuth = Router();

routerAuth.post("/signin",signin)

export default routerAuth;