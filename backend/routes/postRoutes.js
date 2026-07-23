import express from "express";
import { createPost, getPosts, getPostById, updatePost, } 
from "../controllers/postController.js";
import authenticateUser from "../middleware/authMiddleware.js";

const router = express.Router();


router
    .route("/")
    .get(getPosts)
    .post(authenticateUser, createPost);

    router
    .route("/:id")
    .get(getPostById)
    .put(authenticateUser, updatePost);
export default router;