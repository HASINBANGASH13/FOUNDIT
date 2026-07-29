import {
    Heart,
    MapPin,
    Clock3,
    ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function PostCard({ post }) {
    return (
        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220] shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.2)]">
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={
                        post.image
                            ? `http://localhost:5000${post.image}`
                            : "https://placehold.co/600x400?text=No+Image"
                    }
                    alt={post.title}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <span
                    className={`absolute top-5 left-5 rounded-full px-4 py-2 text-sm font-bold text-white ${post.type === "lost"
                            ? "bg-red-500"
                            : "bg-green-500"
                        }`}
                >
                    {post.type.toUpperCase()}
                </span>

                <button
                    className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition"
                >
                    <Heart size={18} />
                </button>
            </div>

            {/* Body */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white line-clamp-1">
                    {post.title}
                </h3>

                <p className="mt-3 text-slate-400 line-clamp-2">
                    {post.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-slate-400">
                    <MapPin size={18} />
                    {post.location?.city}
                </div>

                <div className="mt-3 flex items-center gap-2 text-slate-400">
                    <Clock3 size={18} />
                    {new Date(post.createdAt).toLocaleDateString()}
                </div>

                <div className="mt-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80">
                        {post.category?.name}
                    </span>
                </div>

                <Link
                    to={`/posts/${post._id}`}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-300 hover:text-white"
                >
                    View Details
                    <ArrowRight
                        size={18}
                        className="group-hover:translate-x-2 transition"
                    />
                </Link>
            </div>
        </div>
    );
}


export default PostCard;