import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {type: String, required: true},
    image: {type: Array, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    category: {type: String, requird: true}

})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel