import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    MapPin,
    Calendar,
    Phone,
    Mail,
    User,
    Tag,
    CheckCircle,
} from "lucide-react";

import { getPost } from "../../api/postApi";

const API_URL = "http://localhost:5000";

function PostDetails() {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await getPost(id);
                console.log("Full API Response:", res);
                console.log("Post Data:", res.data);
                setPost(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="w-16 h-16 rounded-full border-4 border-sky-600 border-t-transparent animate-spin"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-black">Post Not Found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-10">
                    {/* LEFT SIDE */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* IMAGE */}
                        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                            <div className="relative w-full aspect-[16/10]">
                                <img
                                    src={
                                        post.image
                                            ? `${API_URL}${post.image}`
                                            : "https://placehold.co/1200x700?text=No+Image"
                                    }
                                    alt={post.title}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    onError={(e) => {
                                        console.log("Image failed:", e.target.src);
                                        e.target.src =
                                            "https://placehold.co/1200x700?text=No+Image";
                                    }}
                                />
                            </div>
                        </div>

                        {/* DETAILS */}
                        <div className="bg-white rounded-3xl shadow-xl p-10">
                            <div className="flex flex-wrap gap-3">
                                <span
                                    className={`px-5 py-2 rounded-full text-white font-bold ${
                                        post.type === "lost"
                                            ? "bg-red-500"
                                            : "bg-green-500"
                                    }`}
                                >
                                    {post.type.toUpperCase()}
                                </span>

                                <span className="px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center gap-2">
                                    <Tag size={16} />
                                    {post.category?.name}
                                </span>

                                <span
                                    className={`px-5 py-2 rounded-full font-bold flex items-center gap-2 ${
                                        post.status === "resolved"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                    <CheckCircle size={16} />
                                    {post.status}
                                </span>
                            </div>

                            <h1 className="mt-8 text-5xl font-black text-slate-900">
                                {post.title}
                            </h1>

                            <p className="mt-8 text-lg leading-9 text-slate-600">
                                {post.description}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold">Contact Owner</h2>

                            <div className="mt-8 space-y-5">
                                <div className="flex items-center gap-3">
                                    <User className="text-sky-600" />
                                    <span>{post.user?.name}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail className="text-sky-600" />
                                    <span>{post.user?.email}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Phone className="text-sky-600" />
                                    <span>{post.contactNumber}</span>
                                </div>
                            </div>

                            <button className="mt-8 w-full h-14 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-700 text-white font-bold hover:scale-[1.02] transition">
                                Contact Owner
                            </button>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold">Item Information</h2>

                            <div className="mt-8 space-y-6">
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-red-500" />
                                    <div>
                                        <p className="font-semibold">Location</p>
                                        <p className="text-slate-500">
                                            {post.location?.city},{" "}
                                            {post.location?.area}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Calendar className="text-blue-500" />
                                    <div>
                                        <p className="font-semibold">Date</p>
                                        <p className="text-slate-500">
                                            {new Date(post.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500" />
                                    <div>
                                        <p className="font-semibold">Status</p>
                                        <p className="text-slate-500 capitalize">
                                            {post.status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostDetails;