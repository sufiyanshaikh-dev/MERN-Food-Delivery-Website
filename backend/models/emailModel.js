import mongoose from "mongoose"

const emailSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number},
    message: {type: String, required: true}
})

const emailModel = mongoose.model.email || mongoose.model("email", emailSchema);
export default emailModel;