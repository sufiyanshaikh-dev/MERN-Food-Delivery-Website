import express from "express"
import { orderList, placeOrder, userOrders } from "../controllers/orderController.js";
import auth from "../middlewares/auth.js";

const orderRouter = express.Router();

orderRouter.get("/list", orderList)
orderRouter.post("/place", auth, placeOrder)
orderRouter.post("/userOrders", auth, userOrders);

export default orderRouter