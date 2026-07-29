import {
    MapPin,
    Calendar,
    Eye,
    Pencil,
    Trash2,
    CheckCircle,
} from "lucide-react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import {
    deletePost,
    resolvePost,
} from "../../api/postApi";

const API_URL = "http://localhost:5000";

function MyPostCard({
    post,
    onDelete,
    onResolve,
}) {

    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this post?"
        );

        if (!confirmDelete) return;

        try {

            await deletePost(post._id);

            toast.success("Post deleted successfully.");

            if (onDelete) {
                onDelete(post._id);
            }

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to delete post."
            );

        }

    };

    const handleResolve = async () => {

        try {

            const res = await resolvePost(post._id);

            toast.success(res.message);

            if (onResolve) {
                onResolve(res.data);
            }

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update post."
            );

        }

    };

    return (

        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">

            <div className="grid md:grid-cols-4">

                {/* IMAGE */}

                <div className="h-72 md:h-full">

                    <img
                        src={
                            post.image
                                ? `${API_URL}${post.image}`
                                : "https://placehold.co/600x500?text=No+Image"
                        }
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src =
                                "https://placehold.co/600x500?text=No+Image";
                        }}
                    />

                </div>

                {/* DETAILS */}

                <div className="md:col-span-2 p-8">

                    <div className="flex gap-3 flex-wrap">

                        <span
                            className={`px-4 py-2 rounded-full text-sm font-bold text-white ${
                                post.type === "lost"
                                    ? "bg-red-500"
                                    : "bg-green-500"
                            }`}
                        >
                            {post.type.toUpperCase()}
                        </span>

                        <span
                            className={`px-4 py-2 rounded-full text-sm font-bold ${
                                post.status === "active"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-green-100 text-green-700"
                            }`}
                        >
                            {post.status.toUpperCase()}
                        </span>

                    </div>

                    <h2 className="mt-6 text-3xl font-black">

                        {post.title}

                    </h2>

                    <p className="mt-4 text-slate-600 line-clamp-2">

                        {post.description}

                    </p>

                    <div className="mt-6">

                        <span className="inline-block bg-sky-100 text-sky-700 font-semibold rounded-full px-4 py-2">

                            {post.category?.name}

                        </span>

                    </div>

                    <div className="mt-6 flex items-center gap-3 text-slate-500">

                        <MapPin size={18} />

                        <span>

                            {post.location?.city}, {post.location?.area}

                        </span>

                    </div>

                    <div className="mt-4 flex items-center gap-3 text-slate-500">

                        <Calendar size={18} />

                        <span>

                            {new Date(post.createdAt).toLocaleDateString()}

                        </span>

                    </div>

                </div>

                {/* ACTIONS */}

                <div className="border-t md:border-l md:border-t-0 border-slate-200 p-8 flex flex-col justify-center gap-4">

                    <Link
                        to={`/posts/${post._id}`}
                        className="h-12 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold flex items-center justify-center gap-2 transition"
                    >
                        <Eye size={18} />
                        View
                    </Link>

                    <Link
                        to={`/edit-post/${post._id}`}
                        className="h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center justify-center gap-2 transition"
                    >
                        <Pencil size={18} />
                        Edit
                    </Link>

                    <button
                        onClick={handleDelete}
                        className="h-12 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold flex items-center justify-center gap-2 transition"
                    >
                        <Trash2 size={18} />
                        Delete
                    </button>

                    <button
                        onClick={handleResolve}
                        className={`h-12 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition ${
                            post.status === "active"
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-orange-500 hover:bg-orange-600"
                        }`}
                    >
                        <CheckCircle size={18} />

                        {
                            post.status === "active"
                                ? "Mark as Resolved"
                                : "Reopen Post"
                        }

                    </button>

                </div>

            </div>

        </div>

    );

}

export default MyPostCard;