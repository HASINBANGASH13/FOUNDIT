import User from "../models/User.js";
import Post from "../models/Post.js";
import Category from "../models/Category.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getAdminSummary = asyncHandler(async (req, res) => {

    const totalUsers = await User.countDocuments();

    const totalPosts = await Post.countDocuments();

    const totalCategories = await Category.countDocuments();

    const lostPosts = await Post.countDocuments({
        type: "lost",
    });

    const foundPosts = await Post.countDocuments({
        type: "found",
    });

    const activePosts = await Post.countDocuments({
        status: "active",
    });

    const resolvedPosts = await Post.countDocuments({
        status: "resolved",
    });

    res.status(200).json({

        success: true,

        data: {

            totalUsers,

            totalPosts,

            totalCategories,

            lostPosts,

            foundPosts,

            activePosts,

            resolvedPosts,

        },

    });

});

export const getAllUsers = asyncHandler(async (req, res) => {

    const users = await User.find()
        .select("-password")
        .sort({ createdAt: -1 });

    res.status(200).json({

        success: true,

        count: users.length,

        data: users,

    });

});

export const deleteUser = asyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id);

    if (!user) {

        res.status(404);

        throw new Error("User not found.");

    }

    // Prevent admin deleting himself

    if (user._id.toString() === req.user._id.toString()) {

        res.status(400);

        throw new Error("You cannot delete your own account.");

    }

    await user.deleteOne();

    res.status(200).json({

        success: true,

        message: "User deleted successfully."

    });

});

export const getAllPosts = asyncHandler(async (req, res) => {

    const {
        keyword,
        type,
        status,
        category,
        page = 1,
        limit = 10,
    } = req.query;

    const query = {};

    if (keyword) {

        query.title = {
            $regex: keyword,
            $options: "i",
        };

    }

    if (type) {
        query.type = type;
    }

    if (status) {
        query.status = status;
    }

    if (category) {
        query.category = category;
    }

    const skip = (page - 1) * limit;

    const totalPosts = await Post.countDocuments(query);

    const posts = await Post.find(query)

        .populate("category", "name")

        .populate("user", "name email")

        .sort({ createdAt: -1 })

        .skip(skip)

        .limit(Number(limit));

    res.status(200).json({

        success: true,

        count: posts.length,

        totalPosts,

        totalPages: Math.ceil(totalPosts / limit),

        currentPage: Number(page),

        data: posts,

    });

});

export const deleteAnyPost = asyncHandler(async (req, res) => {

    const post = await Post.findById(req.params.id);

    if (!post) {

        res.status(404);

        throw new Error("Post not found.");

    }

    await post.deleteOne();

    res.status(200).json({

        success: true,

        message: "Post deleted successfully."

    });

});

export const resolveAnyPost = asyncHandler(async (req, res) => {

    const post = await Post.findById(req.params.id);

    if (!post) {

        res.status(404);

        throw new Error("Post not found.");

    }

    post.status = "resolved";

    await post.save();

    await post.populate("category", "name");

    await post.populate("user", "name email");

    res.status(200).json({

        success: true,

        message: "Post resolved successfully.",

        data: post,

    });

});

export const getAllCategories = asyncHandler(async (req, res) => {

    const categories = await Category.find()
        .sort({ createdAt: -1 });

    res.status(200).json({

        success: true,

        count: categories.length,

        data: categories,

    });

});

export const createCategory = asyncHandler(async (req, res) => {

    const { name } = req.body;

    if (!name) {

        res.status(400);

        throw new Error("Category name is required.");

    }

    const exists = await Category.findOne({
        name,
    });

    if (exists) {

        res.status(400);

        throw new Error("Category already exists.");

    }

    const category = await Category.create({

        name,

    });

    res.status(201).json({

        success: true,

        message: "Category created successfully.",

        data: category,

    });

});

export const updateCategory = asyncHandler(async (req, res) => {

    const category = await Category.findById(req.params.id);

    if (!category) {

        res.status(404);

        throw new Error("Category not found.");

    }

    category.name = req.body.name || category.name;

    await category.save();

    res.status(200).json({

        success: true,

        message: "Category updated successfully.",

        data: category,

    });

});

export const deleteCategory = asyncHandler(async (req, res) => {

    const category = await Category.findById(req.params.id);

    if (!category) {

        res.status(404);

        throw new Error("Category not found.");

    }

    // Prevent deleting category that is being used

    const posts = await Post.countDocuments({

        category: category._id,

    });

    if (posts > 0) {

        res.status(400);

        throw new Error(
            "Cannot delete category because it is being used by posts."
        );

    }

    await category.deleteOne();

    res.status(200).json({

        success: true,

        message: "Category deleted successfully."

    });

});