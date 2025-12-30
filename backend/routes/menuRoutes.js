import express from "express"
import adminAuth from "../middlewares/adminAuth.js";
import upload from "../middlewares/multer.js";
import { addMenu, listMenu, removeMenu } from "../controllers/menuController.js";

const menuRouter = express.Router();

menuRouter.post("/add", adminAuth,
    upload.fields([
        {name: "image", maxCount: 1}
    ]), addMenu)

menuRouter.get("/list", listMenu)
menuRouter.post("/remove", adminAuth, removeMenu)

export default menuRouter