import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js";

// --------------- Add Product -------------------
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category } = req.body

        const image = req.files?.image?.[0];

        if (!image) {
            return res.status(400).json({ message: "Image is required" });
        }

        const result = await cloudinary.uploader.upload(image.path, {
            resource_type: "image",
        });

        const imageUrl = result.secure_url;


        const productData = {
            name,
            description,
            price: Number(price),
            category,
            image: imageUrl,
            date: Date.now(),
        }

        const product = new productModel(productData)
        await product.save()

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// ---------------- List Product ------------------
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.json({
            success: true,
            products
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// ------------- Remove Product -----------------
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Product removed"
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export { addProduct, listProduct, removeProduct }