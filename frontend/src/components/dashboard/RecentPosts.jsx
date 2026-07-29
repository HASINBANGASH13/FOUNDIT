import { Link } from "react-router-dom";
import {
    Calendar,
    MapPin,
} from "lucide-react";

const API_URL = "http://localhost:5000";

function RecentPosts({ posts }) {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex justify-between items-center mb-8">

                <h2 className="text-2xl font-black">

                    Recent Posts

                </h2>

                <Link
                    to="/my-posts"
                    className="text-sky-600 font-semibold hover:underline"
                >
                    View All
                </Link>

            </div>

            {

                posts.length === 0 ? (

                    <div className="text-center py-10 text-slate-500">

                        No posts found.

                    </div>

                ) : (

                    <div className="space-y-5">

                        {posts.slice(0, 5).map((post) => (

                            <Link
                                key={post._id}
                                to={`/posts/${post._id}`}
                                className="flex gap-4 rounded-2xl border p-4 hover:bg-slate-50 transition"
                            >

                                <img
                                    src={
                                        post.image
                                            ? `${API_URL}${post.image}`
                                            : "https://placehold.co/120x120?text=No+Image"
                                    }
                                    alt={post.title}
                                    className="w-24 h-24 rounded-xl object-cover"
                                    onError={(e) => {
                                        e.target.src =
                                            "https://placehold.co/120x120?text=No+Image";
                                    }}
                                />

                                <div className="flex-1">

                                    <h3 className="font-bold text-lg">

                                        {post.title}

                                    </h3>

                                    <p className="text-slate-500 mt-2 line-clamp-2">

                                        {post.description}

                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">

                                        <span className="flex items-center gap-1">

                                            <MapPin size={16} />

                                            {post.location?.city}

                                        </span>

                                        <span className="flex items-center gap-1">

                                            <Calendar size={16} />

                                            {new Date(post.createdAt).toLocaleDateString()}

                                        </span>

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                )

            }

        </div>

    );

}

export default RecentPosts;