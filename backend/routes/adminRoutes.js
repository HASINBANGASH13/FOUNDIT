import express from "express";

import authenticateUser from "../middleware/authMiddleware.js";
import authorizeAdmin from "../middleware/adminMiddleware.js";

import {
    getAdminSummary, getAllUsers, deleteUser,
    getAllPosts, deleteAnyPost, resolveAnyPost,
    getAllCategories, createCategory, updateCategory, deleteCategory,
} from "../controllers/adminController.js";

const router = express.Router();

router.get(
    "/summary",
    authenticateUser,
    authorizeAdmin,
    getAdminSummary
);

router.get(
    "/users",
    authenticateUser,
    authorizeAdmin,
    getAllUsers
);

router.delete(
    "/users/:id",
    authenticateUser,
    authorizeAdmin,
    deleteUser
);

router.get(
    "/posts",
    authenticateUser,
    authorizeAdmin,
    getAllPosts
);

router.delete(
    "/posts/:id",
    authenticateUser,
    authorizeAdmin,
    deleteAnyPost
);

router.put(
    "/posts/:id/resolve",
    authenticateUser,
    authorizeAdmin,
    resolveAnyPost
);

// Categories

router.get(
    "/categories",
    authenticateUser,
    authorizeAdmin,
    getAllCategories
);

router.post(
    "/categories",
    authenticateUser,
    authorizeAdmin,
    createCategory
);

router.put(
    "/categories/:id",
    authenticateUser,
    authorizeAdmin,
    updateCategory
);

router.delete(
    "/categories/:id",
    authenticateUser,
    authorizeAdmin,
    deleteCategory
);
export default router;