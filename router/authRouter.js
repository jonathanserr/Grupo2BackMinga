//General
import { Router } from "express";
import validator from "../Middlewares/validator.js"

//Necesario para Register
import register from "../controllers/Auth/singup.js";
import schemaRegister from "../Schemas/auth/register.js"
import createHash from "../Middlewares/Auth/Register/createHash.js"
import accountExist from "../Middlewares/Auth/Register/accountexists.js"

//Necesario para Login
import signin from "../controllers/Auth/signin.js";
import schemaLogin from "../Schemas/auth/singin.js"
import accountNotExist from "../Middlewares/Auth/Login/accountNotExist.js";
import validatedPassword from "../Middlewares/Auth/Login/validatedPassword.js";
import generateToken from "../Middlewares/Auth/Login/generateToken.js";

const routerAuth = Router();

routerAuth.post("/signin",validator(schemaLogin),accountNotExist,validatedPassword,generateToken,signin)

routerAuth.post("/register", validator(schemaRegister),accountExist,createHash, register)

export default routerAuth;