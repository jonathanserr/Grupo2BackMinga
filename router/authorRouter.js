import { Router } from "express";
import createAuthor from "../controllers/Author/create.js";
import {allAuthors} from "../controllers/Author/read.js"
import updateAuthor from "../controllers/Author/update.js"
import deleteAuthor from "../controllers/Author/delete.js"


//Proteger la ruta
import passport from "../Middlewares/passport.js";

//updateRolUserAuthor 
import updateRolUserAuthor from "../Middlewares/TypeUsers/Author.js";

//Rutas con userAdmin 
import admin from "../Middlewares/TypeUsers/Admin.js";

//ValidarData par Update 
import cleanEmptyFields from "../Middlewares/ValidateUpdate/dataUpdateEmpty.js"

const routerAuth = Router()

routerAuth.post("/create", passport.authenticate('jwt',{session:false}),updateRolUserAuthor, createAuthor)
routerAuth.get("/read", admin.authenticate("jwt",{session:false} ),allAuthors)
routerAuth.delete("/delete/:idauthor",deleteAuthor)
routerAuth.put("/update/:idauthor", cleanEmptyFields ,updateAuthor)

export default routerAuth

