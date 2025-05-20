import { Router } from "express";
import AllUsers from "../controllers/Users/read.js";
import register from "../controllers/Users/create.js";

const userRouter = Router();


userRouter.post("/create",register)


userRouter.use("/", AllUsers);



export default userRouter;