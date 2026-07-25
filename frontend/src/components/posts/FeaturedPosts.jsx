import {
    Heart,
    MapPin,
    Clock3,
    ArrowRight,
} from "lucide-react";

const posts = [
    {
        id: 1,
        title: "Lost iPhone 15 Pro",
        type: "Lost",
        location: "Islamabad",
        user: "Ali Khan",
        time: "2 hours ago",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900",
    },
    {
        id: 2,
        title: "Found MacBook Air",
        type: "Found",
        location: "Peshawar",
        user: "Usman",
        time: "5 hours ago",
        image:
            "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=900",
    },
    {
        id: 3,
        title: "Lost Wallet",
        type: "Lost",
        location: "Lahore",
        user: "Ahmed",
        time: "Yesterday",
        image:
            "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900",
    },
];

function FeaturedPosts() {
    return (
        <section className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <span className="bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">

                        Latest Posts

                    </span>

                    <h2 className="text-5xl font-black mt-6">

                        Recently Lost & Found

                    </h2>

                    <p className="mt-5 text-slate-500 text-lg">

                        Help someone find what matters.

                    </p>

                </div>

                <div className="grid lg:grid-cols-3 gap-8 mt-20">

                    {posts.map(post => (

                        <div
                            key={post.id}
                            className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border"
                        >

                            <div className="relative overflow-hidden">

                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                                />

                                <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-red-500 hover:text-white transition">

                                    <Heart size={18} />

                                </button>

                                <span className={`absolute left-5 top-5 px-4 py-2 rounded-full text-white font-semibold ${
                                    post.type === "Lost"
                                        ? "bg-red-500"
                                        : "bg-green-500"
                                }`}>
                                    {post.type}
                                </span>

                            </div>

                            <div className="p-7">

                                <h3 className="text-2xl font-bold">

                                    {post.title}

                                </h3>

                                <div className="flex items-center gap-2 mt-5 text-slate-500">

                                    <MapPin size={18} />

                                    {post.location}

                                </div>

                                <div className="flex items-center gap-2 mt-3 text-slate-500">

                                    <Clock3 size={18} />

                                    {post.time}

                                </div>

                                <div className="mt-3 text-slate-700">

                                    Posted by <span className="font-semibold">{post.user}</span>

                                </div>

                                <button className="mt-8 flex items-center gap-2 text-blue-600 font-semibold">

                                    View Details

                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-2 transition"
                                    />

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default FeaturedPosts;