import { useEffect, useState } from "react";

import {

    Search,

    Trash2,

    MapPin,

    Calendar,

} from "lucide-react";

import { toast } from "react-toastify";

import {

    getAllPosts,

    deletePostAdmin,

} from "../../api/adminApi";

function AdminPosts() {

    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [keyword, setKeyword] = useState("");

    useEffect(() => {

        loadPosts();

    }, [keyword]);

    const loadPosts = async () => {

        try {

            setLoading(true);

            const res = await getAllPosts({

                keyword,

            });

            setPosts(res.data);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this post?"))

            return;

        try {

            await deletePostAdmin(id);

            toast.success("Post deleted.");

            loadPosts();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Delete failed."

            );

        }

    };

    return (

        <div>

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-black">

                        Manage Posts

                    </h1>

                    <p className="text-slate-500 mt-2">

                        View and manage all Lost & Found posts.

                    </p>

                </div>

                <div className="relative">

                    <Search

                        className="absolute left-4 top-4 text-slate-400"

                        size={18}

                    />

                    <input

                        value={keyword}

                        onChange={(e) =>

                            setKeyword(e.target.value)

                        }

                        placeholder="Search posts..."

                        className="w-80 h-12 rounded-xl border pl-12"

                    />

                </div>

            </div>

            {loading ? (

                <div className="flex justify-center py-20">

                    <div className="w-14 h-14 border-4 border-sky-600 border-t-transparent rounded-full animate-spin"></div>

                </div>

            ) : (

                <div className="grid lg:grid-cols-2 gap-8">

                    {posts.map((post) => (

                        <div

                            key={post._id}

                            className="bg-white rounded-3xl shadow-lg overflow-hidden"

                        >

                            <img

                                src={`http://localhost:5000${post.image}`}

                                alt={post.title}

                                className="w-full h-56 object-cover"

                            />

                            <div className="p-6">

                                <div className="flex justify-between">

                                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${

                                        post.type === "lost"

                                            ? "bg-red-100 text-red-600"

                                            : "bg-green-100 text-green-600"

                                    }`}>

                                        {post.type}

                                    </span>

                                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${

                                        post.status === "resolved"

                                            ? "bg-emerald-100 text-emerald-700"

                                            : "bg-yellow-100 text-yellow-700"

                                    }`}>

                                        {post.status}

                                    </span>

                                </div>

                                <h2 className="text-2xl font-bold mt-5">

                                    {post.title}

                                </h2>

                                <p className="text-slate-500 mt-3 line-clamp-2">

                                    {post.description}

                                </p>

                                <div className="mt-5 flex items-center gap-2 text-slate-500">

                                    <MapPin size={18} />

                                    {post.location.city}

                                </div>

                                <div className="mt-2 flex items-center gap-2 text-slate-500">

                                    <Calendar size={18} />

                                    {new Date(post.date).toLocaleDateString()}

                                </div>

                                <div className="mt-6 flex justify-between items-center">

                                    <div>

                                        <p className="text-sm text-slate-400">

                                            Posted By

                                        </p>

                                        <h4 className="font-bold">

                                            {post.user?.name}

                                        </h4>

                                    </div>

                                    <button

                                        onClick={() =>

                                            handleDelete(post._id)

                                        }

                                        className="w-12 h-12 rounded-xl bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"

                                    >

                                        <Trash2 size={20} className="mx-auto" />

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}

export default AdminPosts;