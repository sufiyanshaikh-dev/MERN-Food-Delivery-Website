import menuModel from "../models/menuModel.js";
import { v2 as cloudinary } from "cloudinary";

const addMenu = async (req, res) => {
    try {
        const { name } = req.body
        const imageFile = req.files?.image?.[0];

        if (!imageFile) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }

        // ✅ upload without folder
        const result = await cloudinary.uploader.upload(imageFile.path);
        const imageUrl = result.secure_url;

        const menuData = {
            name,
            image: imageUrl
        }

        const menu = new menuModel(menuData)
        await menu.save();

        res.status(201).json({
            success: true,
            message: "product added"
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

const listMenu = async (req, res) => {
    try {
        const menu = await menuModel.find({});
        res.json({
            success: true,
            menu
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

const removeMenu = async (req, res) => {
    try {
        await menuModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Product Removed"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

export { addMenu, listMenu, removeMenu };