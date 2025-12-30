import emailModel from "../models/emailModel.js";



// ------------------ Add Email -------------------
const addEmail = async (req,res) => {
    try {
        const {name, email, phone , textArea} = req.body

        const newMessage = ({
            name,
            email,
            phone,
            message: textArea
        })

        const messages = new emailModel(newMessage);

        await messages.save();
        res.json({
            success: true,
            message: "Message successfully sent"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// ------------------- List Email ----------------------
const listEmail = async (req,res) => {
    try {
        const messages = await emailModel.find({})
        res.json({
            success: true,
            messages  
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

export {addEmail, listEmail}