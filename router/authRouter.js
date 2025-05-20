//General
import { Router } from "express";
import validator from "../Middlewares/validator.js"

//Necesario para Register/SignUp
import register from "../controllers/Auth/singup.js";
import schemaRegister from "../Schemas/auth/register.js"
import createHash from "../Middlewares/Auth/Register/createHash.js"
import accountExist from "../Middlewares/Auth/Register/accountexists.js"
import passport from "../middlewares/passport.js";

//Necesario para Login/SignIn
import signin from "../controllers/Auth/signin.js";
import schemaLogin from "../Schemas/auth/singin.js"
import accountNotExist from "../Middlewares/Auth/Login/accountNotExist.js";
import validatedPassword from "../Middlewares/Auth/Login/validatedPassword.js";
import generateToken from "../Middlewares/Auth/Login/generateToken.js";
import validatorToken from "../Middlewares/Auth/Login/validateToken.js";

//Necesario para SignOut/LogOut
import singout from "../controllers/Auth/singout.js";

const routerAuth = Router();

routerAuth.post("/signin",validator(schemaLogin),accountNotExist,validatedPassword,generateToken,signin)

routerAuth.post("/signout", singout)

routerAuth.post("/register", validator(schemaRegister),accountExist,createHash, register)

routerAuth.get("/validateToken",passport.authenticate('jwt',{session:false}), validatorToken)

export default routerAuth;
