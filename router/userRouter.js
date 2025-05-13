import { Router } from "express";
import AllUsers from "../controllers/Users/read.js";


const userRouter = Router();

userRouter.use("/", AllUsers);


export default userRouter;