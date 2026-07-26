import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Heart,
    MapPin,
    Clock3,
    ArrowRight,
    ImageOff,
} from "lucide-react";

import { getPosts } from "../../api/postApi";

function FeaturedPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await getPosts({
                    limit: 6,
                });

                // Backend returns:
                // {
                //    success:true,
                //    data:[]
                // }

                setPosts(res.data);

            } catch (err) {
                console.error(err);
                setError("Failed to load posts.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <section className="py-28 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-center text-4xl font-bold">

                        Loading Posts...

                    </h2>

                </div>

            </section>
        );
    }

    if (error) {
        return (
            <section className="py-28">

                <div className="text-center text-red-500 text-xl">

                    {error}

                </div>

            </section>
        );
    }

    if (posts.length === 0) {
        return (
            <section className="py-28">

                <div className="text-center">

                    <h2 className="text-4xl font-bold">

                        No Posts Found

                    </h2>

                    <p className="text-slate-500 mt-3">

                        Create the first lost or found post.

                    </p>

                </div>

            </section>
        );
    }

    return (
        <section className="py-28 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center">

                    <span className="bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">

                        Latest Posts

                    </span>

                    <h2 className="text-5xl font-black mt-6">

                        Recently Lost & Found

                    </h2>

                    <p className="mt-5 text-slate-500 text-lg">

                        Recently published posts from our community.

                    </p>

                </div>

                {/* Cards */}

                <div className="grid lg:grid-cols-3 gap-8 mt-20">

                    {posts.map((post) => (

                        <div
                            key={post._id}
                            className="group rounded-3xl overflow-hidden bg-white shadow-lg border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
                        >

                            {/* Image */}

                            <div className="relative h-64 overflow-hidden">

                                {post.image?.url ? (

                                    <img
                                        src={post.image.url}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />

                                ) : (

                                    <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-slate-400">

                                        <ImageOff size={40} />

                                        <p className="mt-3">

                                            No Image

                                        </p>

                                    </div>

                                )}

                                {/* Type Badge */}

                                <span
                                    className={`absolute left-5 top-5 px-4 py-2 rounded-full text-white font-semibold ${
                                        post.type === "lost"
                                            ? "bg-red-500"
                                            : "bg-green-500"
                                    }`}
                                >

                                    {post.type.toUpperCase()}

                                </span>

                                {/* Heart */}

                                <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-red-500 hover:text-white transition">

                                    <Heart size={18} />

                                </button>

                            </div>

                            {/* Content */}

                            <div className="p-7">

                                {/* Category */}

                                {post.category && (

                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">

                                        {post.category.name}

                                    </span>

                                )}

                                <h3 className="text-2xl font-bold">

                                    {post.title}

                                </h3>

                                <div className="mt-5 flex items-center gap-2 text-slate-500">

                                    <MapPin size={18} />

                                    {post.location?.city}, {post.location?.area}

                                </div>

                                <div className="mt-3 flex items-center gap-2 text-slate-500">

                                    <Clock3 size={18} />

                                    {new Date(post.createdAt).toLocaleDateString()}

                                </div>

                                <div className="mt-3 text-slate-700">

                                    Posted by{" "}

                                    <span className="font-semibold">

                                        {post.user?.name}

                                    </span>

                                </div>

                                <Link
                                    to={`/posts/${post._id}`}
                                    className="mt-8 inline-flex items-center gap-2 text-blue-600 font-semibold group"
                                >

                                    View Details

                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-2 transition"
                                    />

                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default FeaturedPosts;