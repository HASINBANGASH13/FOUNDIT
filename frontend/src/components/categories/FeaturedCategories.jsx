import {
    Smartphone,
    Wallet,
    Laptop,
    FileText,
    KeyRound,
    Dog,
    ArrowRight,
} from "lucide-react";

const categories = [
    {
        title: "Electronics",
        posts: "320+ Posts",
        icon: Smartphone,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Wallets",
        posts: "120+ Posts",
        icon: Wallet,
        color: "from-emerald-500 to-green-500",
    },
    {
        title: "Documents",
        posts: "180+ Posts",
        icon: FileText,
        color: "from-orange-500 to-amber-500",
    },
    {
        title: "Laptops",
        posts: "90+ Posts",
        icon: Laptop,
        color: "from-purple-500 to-indigo-500",
    },
    {
        title: "Keys",
        posts: "260+ Posts",
        icon: KeyRound,
        color: "from-pink-500 to-rose-500",
    },
    {
        title: "Pets",
        posts: "75+ Posts",
        icon: Dog,
        color: "from-violet-500 to-fuchsia-500",
    },
];

function FeaturedCategories() {
    return (
        <section className="py-28 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">

                        Browse Categories

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">

                        Explore Popular Categories

                    </h2>

                    <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">

                        Browse thousands of lost and found items organised into
                        easy-to-search categories.

                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-3">

                    {categories.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
                            >

                                {/* Gradient Circle */}

                                <div
                                    className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
                                >

                                    <Icon size={34} />

                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                                    {item.title}

                                </h3>

                                <p className="mt-2 text-slate-500">

                                    {item.posts}

                                </p>

                                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600">

                                    Explore

                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-2"
                                    />

                                </button>

                                {/* Background Glow */}

                                <div
                                    className={`absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-gradient-to-r ${item.color} opacity-10 blur-3xl`}
                                />

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default FeaturedCategories;