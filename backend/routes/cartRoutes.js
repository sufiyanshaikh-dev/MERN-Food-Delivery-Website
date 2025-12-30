import express from "express"
import auth from "../middlewares/auth.js";
import { addCart, getCart, updateCart } from "../controllers/cartController.js";


const cartRouter = express.Router();

cartRouter.post("/add", auth, addCart);
cartRouter.get("/get", auth, getCart);
cartRouter.post("/update", auth, updateCart);

export default cartRouter;