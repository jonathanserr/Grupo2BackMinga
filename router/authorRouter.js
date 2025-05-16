import { Router } from "express";
import createAuthor from "../controllers/Author/create.js";
import {allAuthors} from "../controllers/Author/read.js"
import updateAuthor from "../controllers/Author/update.js"
import deleteAuthor from "../controllers/Author/delete.js"

const routerAuth = Router()

routerAuth.post("/create", createAuthor)
routerAuth.get("/read", allAuthors)
routerAuth.delete("/delete", deleteAuthor)
routerAuth.put("/update", updateAuthor)

export default routerAuth