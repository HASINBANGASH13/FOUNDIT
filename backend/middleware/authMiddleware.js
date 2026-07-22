import jwt from "jsonwebtoken";
import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";

const authenticateUser = asyncHandler(async (req, res, next) => {
    let token;

    // Check if Authorization header exists
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user (exclude password)
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized. Invalid token.");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized. No token provided.");
    }
});


export default authenticateUser;