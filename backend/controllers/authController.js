import bcrypt from "bcrypt";
import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phone } = req.body;

    // Check required fields
    if (!name || !email || !password || !phone) {
        res.status(400);
        throw new Error("Please fill all required fields.");
    }

    // Check if email already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("Email already exists.");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully.",
        data: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
        },
    });
});

// We'll implement these next
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
        res.status(400);
        throw new Error("Please provide email and password.");
    }

    // Find user and include password
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        res.status(401);
        throw new Error("Invalid email or password.");
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        res.status(401);
        throw new Error("Invalid email or password.");
    }

    // Generate Token
    const token = generateToken(user._id);

    res.status(200).json({
        success: true,
        message: "Login successful.",
        token,
        data: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
        },
    });
});

export const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        data: req.user,
    });
});

export const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (!user) {
        res.status(404);
        throw new Error("User not found.");
    }

    user.name = req.body.name || user.name;
    user.phone = req.body.phone || user.phone;

    const updatedUser = await user.save();

    res.status(200).json({
        success: true,
        message: "Profile updated successfully.",
        data: {
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phone: updatedUser.phone,
            role: updatedUser.role,
        },
    });
});