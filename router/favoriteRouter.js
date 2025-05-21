import { Router } from "express";

import getFavorites from "../controllers/Favorites/read.js";
import createFavorites from "../controllers/Favorites/create.js";
import updateFavorites from "../controllers/Favorites/update.js";
import deleteFavorite from "../controllers/Favorites/delete.js";


const routerFavorite = Router();


routerFavorite.post("/create", createFavorites);
routerFavorite.get("/read", getFavorites);
routerFavorite.put("/update", updateFavorites);
routerFavorite.delete("/delete/:idfavorito", deleteFavorite);

export default routerFavorite;