import Category from "../models/Category.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createCategory = asyncHandler(async (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400);
        throw new Error("Category name is required.");
    }

    const categoryExists = await Category.findOne({ name });

    if (categoryExists) {
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
export const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find().sort({ name: 1 });

    res.status(200).json({
        success: true,
        count: categories.length,
        data: categories,
    });
});
export const updateCategory = asyncHandler(async (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400);
        throw new Error("Category name is required.");
    }

    const category = await Category.findById(req.params.id);

    if (!category) {
        res.status(404);
        throw new Error("Category not found.");
    }

    // Check if another category already has this name
    const categoryExists = await Category.findOne({
        name,
        _id: { $ne: req.params.id },
    });

    if (categoryExists) {
        res.status(400);
        throw new Error("Category already exists.");
    }

    category.name = name;

    const updatedCategory = await category.save();

    res.status(200).json({
        success: true,
        message: "Category updated successfully.",
        data: updatedCategory,
    });
});