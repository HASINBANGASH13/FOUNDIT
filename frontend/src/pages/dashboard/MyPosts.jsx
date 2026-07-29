import MyPostCard from "../posts/MyPostCard";
import { useEffect, useState } from "react";
import { getMyPosts } from "../../api/postApi";


function MyPosts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchPosts = async () => {

            try {

                const res = await getMyPosts();

                setPosts(res.data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        fetchPosts();

    }, []);

    if (loading) {

        return (

            <div className="min-h-screen flex justify-center items-center">

                <div className="w-14 h-14 border-4 border-sky-600 border-t-transparent rounded-full animate-spin"></div>

            </div>

        );

    }

    return (

        <div className="max-w-7xl mx-auto py-12 px-6">

            <h1 className="text-4xl font-black mb-10">

                My Posts

            </h1>

            {
                posts.length === 0 ? (

                    <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

                        <h2 className="text-2xl font-bold">

                            No Posts Yet

                        </h2>

                        <p className="text-slate-500 mt-3">

                            Create your first Lost or Found post.

                        </p>

                    </div>

                ) : (

                    <div className="grid gap-6">

                        {posts.map((post) => (
                            <MyPostCard
                                key={post._id}
                                post={post}
                                onDelete={(id) =>
                                    setPosts((prev) =>
                                        prev.filter((item) => item._id !== id)
                                    )
                                }
                                onResolve={(updatedPost) =>
                                    setPosts((prev) =>
                                        prev.map((item) =>
                                            item._id === updatedPost._id
                                                ? updatedPost
                                                : item
                                        )
                                    )
                                }
                            />

                        ))}

                    </div>

                )
            }

        </div>

    );

}

export default MyPosts;