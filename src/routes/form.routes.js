import { createForm } from "../controllers/form.controller.js";
import { Router } from "express";

const formRouter = Router();

formRouter.post("/formulario", createForm);

export default formRouter;
