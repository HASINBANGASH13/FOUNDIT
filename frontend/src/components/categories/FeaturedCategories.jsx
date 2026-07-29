import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
    Smartphone,
    Wallet,
    Laptop,
    FileText,
    KeyRound,
    Dog,
    Package,
    Shirt,
} from "lucide-react";

import { getCategories } from "../../api/categoryApi";

const iconMap = {
    Electronics: Smartphone,
    Wallets: Wallet,
    Documents: FileText,
    Laptops: Laptop,
    Keys: KeyRound,
    Pets: Dog,
    Clothes: Shirt,
    Others: Package,
};

function FeaturedCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await getCategories();

                // Backend returns:
                // {
                //   success: true,
                //   data: [...]
                // }

                setCategories(res.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load categories.");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return (
            <section className="py-28 bg-[#090a11]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white">
                        Loading Categories...
                    </h2>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-28 bg-[#090a11]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white">
                        {error}
                    </h2>
                </div>
            </section>
        );
    }

    return (
        <section className="py-28 bg-[#090a11]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center">
                    <span className="inline-flex rounded-full bg-white/5 px-5 py-2 text-white/80 font-semibold backdrop-blur">
                        Browse Categories
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        Explore Popular Categories
                    </h2>

                    <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
                        Browse thousands of lost and found items organised into
                        easy-to-search categories.
                    </p>
                </div>

                {/* Cards */}

                <div className="grid gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((item) => {
                        const Icon = iconMap[item.name] || Package;

                        return (
                            <div
                                key={item._id}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_rgba(255,255,255,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_90px_rgba(255,255,255,0.08)]"
                            >
                                {/* Icon */}
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-white/15 via-slate-100/10 to-white/10 flex items-center justify-center text-white shadow-lg">
                                    <Icon size={34} />
                                </div>

                                {/* Name */}
                                <h3 className="mt-8 text-2xl font-bold text-white">
                                    {item.name}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-slate-300">
                                    {item.description ||
                                        "Browse all lost & found posts"}
                                </p>

                                {/* Button */}
                                <button className="mt-8 flex items-center gap-2 font-semibold text-white/90 group-hover:text-white group-hover:gap-3 transition-all">
                                    Explore
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition"
                                    />
                                </button>

                                {/* Glow */}
                                <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-gradient-to-r from-white/20 to-slate-300/10 opacity-20 blur-3xl" />
                            </div>
                        );
                    })}
                </div>

            </div>

        </section>
    );
}

export default FeaturedCategories;