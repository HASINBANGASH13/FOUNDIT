import Post from "../models/Post.js";
import Category from "../models/Category.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createPost = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        type,
        category,
        location,
        contactNumber,
        date,
    } = req.body;

    // Validate required fields
    if (
        !title ||
        !description ||
        !type ||
        !category ||
        !location ||
        !location.city ||
        !location.area ||
        !contactNumber ||
        !date
    ) {
        res.status(400);
        throw new Error("Please fill all required fields.");
    }

    // Check valid type
    if (!["lost", "found"].includes(type)) {
        res.status(400);
        throw new Error("Invalid post type.");
    }

    // Check category exists
    const categoryExists = await Category.findById(category);

    if (!categoryExists) {
        res.status(404);
        throw new Error("Category not found.");
    }

    // Create post
    const post = await Post.create({
        title,
        description,
        type,
        category,
        location,
        contactNumber,
        date,
        user: req.user._id,
    });


    // Populate references
    await post.populate("category", "name");
    await post.populate("user", "name email phone");

    res.status(201).json({
        success: true,
        message: "Post created successfully.",
        data: post,
    });
});

export const getPosts = asyncHandler(async (req, res) => {
    const {
        keyword,
        category,
        type,
        status,
        city,
        page = 1,
        limit = 10,
        sort = "newest",
    } = req.query;

    const query = {};

    // Search by title
    if (keyword) {
        query.title = {
            $regex: keyword,
            $options: "i",
        };
    }

    // Filter by category
    if (category) {
        query.category = category;
    }

    // Filter by type
    if (type) {
        query.type = type;
    }

    // Filter by status
    if (status) {
        query.status = status;
    }

    // Filter by city
    if (city) {
        query["location.city"] = city;
    }

    // Sorting
    const sortOption =
        sort === "oldest"
            ? { createdAt: 1 }
            : { createdAt: -1 };

    const skip = (Number(page) - 1) * Number(limit);

    const totalPosts = await Post.countDocuments(query);

    const posts = await Post.find(query)
        .populate("category", "name")
        .populate("user", "name email phone")
        .sort(sortOption)
        .skip(skip)
        .limit(Number(limit));

    res.status(200).json({
        success: true,
        currentPage: Number(page),
        totalPages: Math.ceil(totalPosts / limit),
        totalPosts,
        count: posts.length,
        data: posts,
    });
});
export const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
        .populate("category", "name")
        .populate("user", "name email phone");

    if (!post) {
        res.status(404);
        throw new Error("Post not found.");
    }

    res.status(200).json({
        success: true,
        data: post,
    });
});

export const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(404);
        throw new Error("Post not found.");
    }

    // Check ownership or admin
    if (
        post.user.toString() !== req.user._id.toString() &&
        req.user.role !== "admin"
    ) {
        res.status(403);
        throw new Error("You are not authorized to update this post.");
    }

    const {
        title,
        description,
        type,
        category,
        location,
        contactNumber,
        date,
        status,
    } = req.body;

    // If category is being changed, verify it exists
    if (category) {
        const categoryExists = await Category.findById(category);

        if (!categoryExists) {
            res.status(404);
            throw new Error("Category not found.");
        }

        post.category = category;
    }

    post.title = title || post.title;
    post.description = description || post.description;
    post.type = type || post.type;
    post.location = location || post.location;
    post.contactNumber = contactNumber || post.contactNumber;
    post.date = date || post.date;
    post.status = status || post.status;

    const updatedPost = await post.save();

    await updatedPost.populate("category", "name");
    await updatedPost.populate("user", "name email phone");

    res.status(200).json({
        success: true,
        message: "Post updated successfully.",
        data: updatedPost,
    });
});

export const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(404);
        throw new Error("Post not found.");
    }

    // Owner or Admin
    if (
        post.user.toString() !== req.user._id.toString() &&
        req.user.role !== "admin"
    ) {
        res.status(403);
        throw new Error("You are not authorized to delete this post.");
    }

    await post.deleteOne();

    res.status(200).json({
        success: true,
        message: "Post deleted successfully.",
    });
});

export const resolvePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(404);
        throw new Error("Post not found.");
    }

    // Owner or Admin
    if (
        post.user.toString() !== req.user._id.toString() &&
        req.user.role !== "admin"
    ) {
        res.status(403);
        throw new Error("You are not authorized to update this post.");
    }

    // Already resolved
    if (post.status === "resolved") {
        res.status(400);
        throw new Error("Post is already resolved.");
    }

    post.status = "resolved";

    await post.save();

    await post.populate("category", "name");
    await post.populate("user", "name email phone");

    res.status(200).json({
        success: true,
        message: "Post marked as resolved.",
        data: post,
    });
});