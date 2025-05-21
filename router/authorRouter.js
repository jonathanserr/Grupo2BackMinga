import { Router } from "express";
import createAuthor from "../controllers/Author/create.js";
import {allAuthors, authorById} from "../controllers/Author/read.js"
import updateAuthor from "../controllers/Author/update.js"
import deleteAuthor from "../controllers/Author/delete.js"
import validator from "../Middlewares/validator.js";

import schemaAuthor from "../Schemas/authors/authorSchema.js"
import validateIfUserHave from "../Middlewares/Author/validateIfUserHaveAuthor.js";
//Proteger la ruta
import passport from "../middlewares/passport.js";

//updateRolUserAuthor 
import updateRolUserAuthor from "../Middlewares/TypeUsers/Author.js";


//ValidarData par Update 
import cleanEmptyFields from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"

import checkRole from "../Middlewares/checkRole.js";
import adminRole from "../Middlewares/TypeUsers/Admin.js";
import determineUserEntity from "../Middlewares/determineIdUser.js";
import updateRol from "../Middlewares/Company/updareRoltoEliminate.js";
const routerAuthor = Router()


routerAuthor.get("/read", passport.authenticate("jwt",{session:false} ),adminRole,allAuthors)
routerAuthor.get("/readespecific", passport.authenticate("jwt", {session:false}), checkRole, determineUserEntity,authorById)
routerAuthor.post("/create", passport.authenticate('jwt',{session:false}),validator(schemaAuthor),validateIfUserHave,updateRolUserAuthor, createAuthor)

routerAuthor.delete("/delete/:idauthor", passport.authenticate('jwt',{session:false}),updateRol,deleteAuthor)
routerAuthor.put("/update/:idauthor", passport.authenticate('jwt',{session:false}),cleanEmptyFields ,updateAuthor)

export default routerAuthor

