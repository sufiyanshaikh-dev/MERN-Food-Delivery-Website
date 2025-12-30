import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    try {
        console.log("AUTH HEADER:", req.headers.authorization);
        let token = req.headers.authorization;


        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authorized"
            })
        }

        // remove the bearer 
        if (token.startsWith("Bearer")) {
            token = token.split(" ")[1]
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "admin"){
            return res.status(403).json({
                success: false,
                message: "Only admin allowed"
            })
        }

        req.admin = decoded;
        next();

    } catch (error) {
            console.log(error)
            res.status(401).json({
                success: false,
                message: "You are unauthorized"
            })
    }
}

export default adminAuth