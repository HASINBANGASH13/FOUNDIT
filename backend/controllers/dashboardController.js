import Post from "../models/Post.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getMyPosts = asyncHandler(async (req, res) => {

    const { status } = req.query;

    const query = {
        user: req.user._id,
    };

    if (status) {
        query.status = status;
    }

    const posts = await Post.find(query)
        .populate("category", "name")
        .sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        count: posts.length,
        data: posts,
    });

});

export const getDashboardSummary = asyncHandler(async (req, res) => {

    const userId = req.user._id;

    // ===========================
    // Summary Cards
    // ===========================

    const summary = await Post.aggregate([
        {
            $match: {
                user: userId,
            },
        },
        {
            $group: {
                _id: null,

                totalPosts: {
                    $sum: 1,
                },

                lostPosts: {
                    $sum: {
                        $cond: [
                            { $eq: ["$type", "lost"] },
                            1,
                            0,
                        ],
                    },
                },

                foundPosts: {
                    $sum: {
                        $cond: [
                            { $eq: ["$type", "found"] },
                            1,
                            0,
                        ],
                    },
                },

                activePosts: {
                    $sum: {
                        $cond: [
                            { $eq: ["$status", "active"] },
                            1,
                            0,
                        ],
                    },
                },

                resolvedPosts: {
                    $sum: {
                        $cond: [
                            { $eq: ["$status", "resolved"] },
                            1,
                            0,
                        ],
                    },
                },
            },
        },
    ]);

    // ===========================
    // Monthly Posts
    // ===========================

    const monthlyPosts = await Post.aggregate([
        {
            $match: {
                user: userId,
            },
        },
        {
            $group: {
                _id: {
                    month: {
                        $month: "$createdAt",
                    },
                },
                posts: {
                    $sum: 1,
                },
            },
        },
        {
            $sort: {
                "_id.month": 1,
            },
        },
    ]);

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const monthlyData = months.map((month, index) => {

        const found = monthlyPosts.find(
            (item) => item._id.month === index + 1
        );

        return {
            month,
            posts: found ? found.posts : 0,
        };

    });

    // ===========================
    // Response
    // ===========================

    res.status(200).json({

        success: true,

        data: {

            ...(summary[0] || {
                totalPosts: 0,
                lostPosts: 0,
                foundPosts: 0,
                activePosts: 0,
                resolvedPosts: 0,
            }),

            monthlyPosts: monthlyData,

        },

    });

});