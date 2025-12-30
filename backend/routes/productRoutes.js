import express from "express"
import adminAuth from "../middlewares/adminAuth.js";
import upload from "../middlewares/multer.js";
import { addProduct, listProduct, removeProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/add", adminAuth,
    upload.fields([
        {name: "image", maxCount: 1},
    ]), addProduct)

productRouter.get("/list", listProduct)
productRouter.post("/remove", adminAuth, removeProduct)

export default productRouter