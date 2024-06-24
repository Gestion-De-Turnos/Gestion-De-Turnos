import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/registrar", register);
authRouter.post("/ingresar", login);

export default authRouter;
