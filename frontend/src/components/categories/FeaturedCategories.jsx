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
            <section className="py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold">
                        Loading Categories...
                    </h2>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-28 bg-slate-50">
                <div className="text-center text-red-500 text-xl">
                    {error}
                </div>
            </section>
        );
    }

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

                    {categories.map((item) => {

                        const Icon =
                            iconMap[item.name] || Package;

                        return (

                            <div
                                key={item._id}
                                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
                            >

                                {/* Icon */}

                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">

                                    <Icon size={34} />

                                </div>

                                {/* Name */}

                                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                                    {item.name}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 text-slate-500">

                                    {item.description ||
                                        "Browse all lost & found posts"}

                                </p>

                                {/* Button */}

                                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 group-hover:gap-3 transition-all">

                                    Explore

                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition"
                                    />

                                </button>

                                {/* Glow */}

                                <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-10 blur-3xl" />

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default FeaturedCategories;