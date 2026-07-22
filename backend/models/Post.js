import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },

        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true,
        },

        type: {
            type: String,
            enum: ["lost", "found"],
            required: true,
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },

        image: {
            type: String,
            default: "",
        },

        location: {
            city: {
                type: String,
                required: true,
            },
            area: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                default: "",
            },
        },

        contactNumber: {
            type: String,
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },

        status: {
            type: String,
            enum: ["active", "resolved"],
            default: "active",
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);

export default Post;