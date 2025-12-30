import userModel from "../models/userModel.js"



const addCart = async (req, res) => {
    try {
        const userId = req.body.id
        const { itemId } = req.body
        const userData = await userModel.findById(userId);
        if (!userData) return res.json({ success: false, message: "user not found" })

        let cartData = userData.cartData || {};

        if (cartData[itemId]) {
            cartData[itemId] += 1
        } else {
            cartData[itemId] = 1
        }

        await userModel.findByIdAndUpdate(userId, { cartData })

        res.json({
            success: true,
            message: "added to cart"
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

const getCart = async (req, res) => {
    try {
        const userId = req.body.id
        const userData = await userModel.findById(userId)
        const cartData = userData.cartData || {};

        res.json({
            success: true,
            cartData
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

const updateCart = async (req, res) => {
    try {
        const userId = req.body.id;
        const { itemId, quantity } = req.body;

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        // If quantity <= 0, remove item from cart
        if (quantity <= 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({
            success: true,
            message: "Cart updated successfully"
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};

export {addCart, getCart, updateCart};