import express from "express";
import { getMyPosts, getDashboardSummary } 
from "../controllers/dashboardController.js";
import authenticateUser from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/my-posts", authenticateUser, getMyPosts);
router.get("/summary", authenticateUser, getDashboardSummary);

export default authenticateUser;