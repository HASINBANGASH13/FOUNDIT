import express from "express";
import { createPost,   getPosts, getPostById, } from "../controllers/postController.js";
import authenticateUser from "../middleware/authMiddleware.js";

const router = express.Router();


router
    .route("/")
    .get(getPosts)
    .post(authenticateUser, createPost);

    router.get("/:id", getPostById);
export default router;