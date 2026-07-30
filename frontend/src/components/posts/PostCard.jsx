import {
    Heart,
    MapPin,
    Clock3,
    ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function PostCard({ post }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                <img
                    src={
                        post.image
                            ? `http://localhost:5000${post.image}`
                            : "https://placehold.co/600x400?text=No+Image"
                    }
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />

                <span
                    className={`absolute top-4 left-4 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide text-white ${
                        post.type === "lost" ? "bg-red-500" : "bg-green-500"
                    }`}
                >
                    {post.type.toUpperCase()}
                </span>

                <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                    <Heart size={16} />
                </button>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5">
                <h3 className="text-xl font-bold text-slate-900 line-clamp-1">
                    {post.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {post.description}
                </p>

                <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={16} className="shrink-0" />
                        <span className="truncate">{post.location?.city}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock3 size={16} className="shrink-0" />
                        {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                </div>

                <div className="mt-3">
                    <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                        {post.category?.name}
                    </span>
                </div>

                <Link
                    to={`/posts/${post._id}`}
                    className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600"
                >
                    View Details
                    <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition"
                    />
                </Link>
            </div>
        </div>
    );
}

export default PostCard;