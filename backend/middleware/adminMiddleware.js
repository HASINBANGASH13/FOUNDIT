import asyncHandler from "../utils/asyncHandler.js";

const authorizeAdmin = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error("Not authorized.");
    }

    if (req.user.role !== "admin") {
        res.status(403);
        throw new Error("Access denied. Admin only.");
    }

    next();
});

export default authorizeAdmin;