import express from "express";
import { createCategory, getCategories,  updateCategory, } from "../controllers/categoryController.js";
import authenticateUser from "../middleware/authMiddleware.js";
import authorizeAdmin from "../middleware/adminMiddleware.js";

const router = express.Router();

router
    .route("/")
    .get(getCategories)
    .post(authenticateUser, authorizeAdmin, createCategory);

    router
    .route("/:id")
    .put(authenticateUser, authorizeAdmin, updateCategory);

export default router;