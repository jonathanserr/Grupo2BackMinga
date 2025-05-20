import { Router } from "express";
import createAuthor from "../controllers/Author/create.js";
import {allAuthors} from "../controllers/Author/read.js"
import updateAuthor from "../controllers/Author/update.js"
import deleteAuthor from "../controllers/Author/delete.js"
import validator from "../Middlewares/validator.js";

import schemaAuthor from "../Schemas/authors/authorSchema.js"
import validateIfUserHave from "../Middlewares/Author/validateIfUserHaveAuthor.js";
//Proteger la ruta
import passport from "../middlewares/passport.js";

//updateRolUserAuthor 
import updateRolUserAuthor from "../Middlewares/TypeUsers/Author.js";

//Rutas con userAdmin 
import admin from "../Middlewares/TypeUsers/Admin.js";

//ValidarData par Update 
import cleanEmptyFields from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"


const routerAuth = Router()

routerAuth.post("/create", passport.authenticate('jwt',{session:false}),validator(schemaAuthor),validateIfUserHave,updateRolUserAuthor, createAuthor)
routerAuth.get("/read", admin.authenticate("jwt",{session:false} ), allAuthors)
routerAuth.delete("/delete/:idauthor", passport.authenticate('jwt',{session:false}),deleteAuthor)
routerAuth.put("/update/:idauthor", passport.authenticate('jwt',{session:false}),cleanEmptyFields ,updateAuthor)

export default routerAuth

