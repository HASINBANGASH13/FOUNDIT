import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import notFound from "./middleware/notFoundMiddleware.js";
import errorHandler from "./middleware/errorMiddleware.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import postRoutes from "./routes/postRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(
    "/uploads",
    express.static(path.join(process.cwd(), "uploads"))
);
// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to FindIt API 🚀",
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/dashboard", dashboardRoutes);

// 404 Middleware
app.use(notFound);

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});