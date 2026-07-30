import { Link } from "react-router-dom";
import {
    Search,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    MapPin,
} from "lucide-react";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-50">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[140px]" />
                <div className="absolute right-0 top-32 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[170px]" />
                <div className="absolute left-1/2 bottom-0 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="min-h-[88vh] flex items-center py-16 lg:py-0">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                        {/* Left */}
                        <div className="max-w-xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                                <Sparkles size={14} />
                                Pakistan's Modern Lost & Found Platform
                            </div>

                            {/* Heading */}
                            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-slate-900">
                                Find What
                                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                    Matters Most
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-600">
                                Report lost items, discover found belongings,
                                and reconnect owners with their valuables using
                                a fast, secure and community-driven platform.
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    to="/create-post"
                                    className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 py-3.5 text-white font-semibold shadow-lg shadow-blue-500/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
                                >
                                    Report Item
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-0.5"
                                    />
                                </Link>

                                <Link
                                    to="/posts"
                                    className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-slate-300 hover:shadow-md"
                                >
                                    Browse Items
                                </Link>
                            </div>

                            {/* Features */}
                            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                                <div className="flex items-center gap-2.5">
                                    <ShieldCheck size={18} className="text-emerald-500" />
                                    <span className="text-sm font-medium text-slate-700">
                                        Secure Platform
                                    </span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <MapPin size={18} className="text-blue-600" />
                                    <span className="text-sm font-medium text-slate-700">
                                        Search by City
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="relative">
                            {/* Main Card */}
                            <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-xl shadow-slate-200/50 p-6 sm:p-8">
                                {/* Search */}
                                <div className="flex items-center gap-3 rounded-xl bg-slate-100/80 px-4 h-14">
                                    <Search size={20} className="text-slate-400 shrink-0" />
                                    <input
                                        placeholder="Search lost phone, wallet..."
                                        className="flex-1 bg-transparent outline-none text-base text-slate-700 placeholder:text-slate-400"
                                    />
                                </div>

                                {/* Categories */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "Mobile",
                                        "Wallet",
                                        "Laptop",
                                        "Documents",
                                        "Pets",
                                        "Keys",
                                    ].map((item) => (
                                        <button
                                            key={item}
                                            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:bg-blue-600 hover:text-white"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>

                                {/* Fake Results */}
                                <div className="mt-8 space-y-3">
                                    {[1, 2, 3].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-xl border border-slate-100 bg-white/60 p-4 transition duration-200 hover:border-blue-200 hover:shadow-md"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="font-semibold text-slate-900">
                                                        Lost iPhone {item}
                                                    </h3>
                                                    <p className="mt-1 text-sm text-slate-500">
                                                        Near University Road
                                                    </p>
                                                </div>
                                                <span className="shrink-0 rounded-full bg-red-50 text-red-600 px-3 py-1 text-xs font-semibold tracking-wide">
                                                    LOST
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;