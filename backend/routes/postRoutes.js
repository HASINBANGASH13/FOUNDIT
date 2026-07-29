import express from "express";
import {
    createPost, getPosts, getMyPosts, getPostById, updatePost, deletePost,
    resolvePost,
} from "../controllers/postController.js";
import authenticateUser from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
const router = express.Router();


router
    .route("/")
    .get(getPosts)
    .post(
        authenticateUser,
        upload.single("image"),
        createPost
    );

router.get("/my-posts", authenticateUser, getMyPosts);

router.put("/:id/resolve", authenticateUser, resolvePost);

router
    .route("/:id")
    .get(getPostById)
    .put(
        authenticateUser,
        upload.single("image"),
        updatePost
    )
    .delete(authenticateUser, deletePost);
export default router;