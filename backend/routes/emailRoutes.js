import express from "express"
import { addEmail, listEmail } from "../controllers/emailController.js";

const emailRouter = express.Router();

emailRouter.post("/add", addEmail);
emailRouter.get("/list", listEmail);

export default emailRouter;