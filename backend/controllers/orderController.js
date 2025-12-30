import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js";

// list all orders
const orderList = (req,res) => {
    try {
        const orders = new orderModel.find({});
        res.json({
            success: true,
            orders
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


// Place orders using COD method
const placeOrder = async (req, res) => {
    try {
        const { userId, amount, address, items } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),

        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({
            success: true,
            message: "Order Placed"
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// User order data for frontend
const userOrders = async (req, res) => {
    try {
        const userId = req.user.id;

        const orders = await orderModel.find({ userId });
        res.json({
            success: true,
            orders
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

export {orderList, placeOrder, userOrders};