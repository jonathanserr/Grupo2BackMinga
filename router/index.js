import { Router } from "express";
import routerAuth from "./authRouter.js";

import routerAuthor from "./authorRouter.js";
import routerCategory from "./categoryRouter.js";
import routerChapter from "./chapterRouter.js";
import routerComment from "./commentRouter.js"
import routerCompany from "./companyRouter.js"
import routerManga from "./mangaRouter.js"
import routerReaction from "./reactionRouter.js"
import routerFavorite from "./favoriteRouter.js";
import adminRouter from "./adminRouter.js"

const indexRouter = Router();

indexRouter.use("/auth", routerAuth);
indexRouter.use("/author", routerAuthor);
indexRouter.use("/category", routerCategory)
indexRouter.use("/chapter", routerChapter)
indexRouter.use("/comment" , routerComment)
indexRouter.use("/company", routerCompany)
indexRouter.use("/manga", routerManga)
indexRouter.use("/reaction", routerReaction)
indexRouter.use("/favorite", routerFavorite)
indexRouter.use("/admin" , adminRouter);


export default  indexRouter