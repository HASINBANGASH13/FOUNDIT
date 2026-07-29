import { useEffect, useState } from "react";

import { getPosts } from "../../api/postApi";
import { getCategories } from "../../api/categoryApi";

import PostCard from "./PostCard";
import SearchFilter from "../home/SearchFilter";

function FeaturedPosts() {

    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({

        keyword: "",
        category: "",
        type: "",
        status: "",
        city: "",

    });

    // ===========================
    // Load Categories
    // ===========================

    useEffect(() => {

        const fetchCategories = async () => {

            try {

                const res = await getCategories();

                setCategories(res.data);

            } catch (error) {

                console.error(error);

            }

        };

        fetchCategories();

    }, []);

    // ===========================
    // Load Posts
    // ===========================

    useEffect(() => {

        const timer = setTimeout(() => {

            fetchPosts();

        }, 400);

        return () => clearTimeout(timer);

    }, [filters]);

    const fetchPosts = async () => {

        try {

            setLoading(true);
            console.log("Filters:", filters);
            const res = await getPosts({

                page: 1,
                limit: 6,
                sort: "newest",

                keyword: filters.keyword,
                category: filters.category,
                type: filters.type,
                status: filters.status,
                city: filters.city,

            });
            console.log("API Response:", res);
            setPosts(res.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="py-28 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-red-600 font-semibold">

                        Latest Posts

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">

                        Recently Lost & Found

                    </h2>

                    <p className="mt-5 text-lg text-slate-500">

                        Search and filter community posts instantly.

                    </p>

                </div>

                {/* Search */}

                <SearchFilter

                    filters={filters}

                    setFilters={setFilters}

                    categories={categories}

                />

                {/* Loading */}

                {loading && (

                    <div className="flex justify-center mt-16">

                        <div className="w-14 h-14 border-4 border-sky-600 border-t-transparent rounded-full animate-spin"></div>

                    </div>

                )}

                {/* Empty */}

                {!loading && posts.length === 0 && (

                    <div className="mt-20 text-center">

                        <h2 className="text-3xl font-black">

                            No Posts Found

                        </h2>

                        <p className="mt-4 text-slate-500">

                            Try changing the search filters.

                        </p>

                    </div>

                )}

                {/* Posts */}

                {!loading && posts.length > 0 && (

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

                        {posts.map((post) => (

                            <PostCard

                                key={post._id}

                                post={post}

                            />

                        ))}

                    </div>

                )}

            </div>

        </section>

    );

}

export default FeaturedPosts;