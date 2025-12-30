import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    try {
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

        req.user = { id: decoded.id };
        next();

    } catch (error) {
            console.log(error)
            res.status(401).json({
                success: false,
                message: "You are unauthorized"
            })
    }
}

export default auth