import { Router } from "express";
import routerAuth from "./authRouter.js";
import userRouter from "./userRouter.js";


const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/auth", routerAuth);

export default  indexRouter