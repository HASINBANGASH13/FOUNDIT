import express from "express";
import { createPost, getPosts, getPostById, updatePost, deletePost, 
    resolvePost} from "../controllers/postController.js";
import authenticateUser from "../middleware/authMiddleware.js";

const router = express.Router();


router
    .route("/")
    .get(getPosts)
    .post(authenticateUser, createPost);

    router.patch("/:id/resolve", authenticateUser, resolvePost);

    router
    .route("/:id")
    .get(getPostById)
    .put(authenticateUser, updatePost)
    .delete(authenticateUser, deletePost);
export default router;