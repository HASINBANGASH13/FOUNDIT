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

            <div className="absolute inset-0">

                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[140px]" />

                <div className="absolute right-0 top-32 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[170px]" />

                <div className="absolute left-1/2 bottom-0 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[150px]" />

            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="min-h-[88vh] flex items-center">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}

                        <div>

                            {/* Badge */}

                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-blue-700">

                                <Sparkles size={16} />

                                Pakistan's Modern Lost & Found Platform

                            </div>

                            {/* Heading */}

                            <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight text-slate-900">

                                Find What

                                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">

                                    Matters Most

                                </span>

                            </h1>

                            {/* Description */}

                            <p className="mt-8 text-xl leading-9 text-slate-600 max-w-xl">

                                Report lost items, discover found belongings,
                                and reconnect owners with their valuables using
                                a fast, secure and community-driven platform.

                            </p>

                            {/* Buttons */}

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    to="/create-post"
                                    className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-4 text-white font-semibold shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-blue-400/40"
                                >

                                    Report Item

                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-1"
                                    />

                                </Link>

                                <Link
                                    to="/posts"
                                    className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow hover:shadow-lg transition"
                                >

                                    Browse Items

                                </Link>

                            </div>

                            {/* Features */}

                            <div className="mt-12 flex flex-wrap gap-8">

                                <div className="flex items-center gap-3">

                                    <ShieldCheck className="text-emerald-500" />

                                    <span className="font-medium">

                                        Secure Platform

                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <MapPin className="text-blue-600" />

                                    <span className="font-medium">

                                        Search by City

                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Right */}

                        <div className="relative">

                            {/* Main Card */}

                            <div className="rounded-[35px] bg-white/80 backdrop-blur-xl border border-white shadow-2xl p-8">

                                {/* Search */}

                                <div className="flex items-center rounded-2xl bg-slate-100 px-5 h-16">

                                    <Search className="text-slate-400" />

                                    <input
                                        placeholder="Search lost phone, wallet..."
                                        className="flex-1 bg-transparent outline-none px-4 text-lg"
                                    />

                                </div>

                                {/* Categories */}

                                <div className="mt-8 flex flex-wrap gap-3">

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
                                            className="rounded-full bg-slate-100 px-5 py-3 hover:bg-blue-600 hover:text-white transition"
                                        >

                                            {item}

                                        </button>

                                    ))}

                                </div>

                                {/* Fake Results */}

                                <div className="mt-10 space-y-4">

                                    {[1, 2, 3].map((item) => (

                                        <div
                                            key={item}
                                            className="rounded-2xl border border-slate-200 p-5 hover:border-blue-500 hover:shadow-lg transition"
                                        >

                                            <div className="flex justify-between">

                                                <div>

                                                    <h3 className="font-bold text-lg">

                                                        Lost iPhone {item}

                                                    </h3>

                                                    <p className="text-slate-500 mt-2">

                                                        Near University Road

                                                    </p>

                                                </div>

                                                <span className="rounded-full bg-red-100 text-red-600 px-4 py-2 h-fit">

                                                    LOST

                                                </span>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                            {/* Floating Card */}

                            <div className="hidden lg:flex absolute -left-10 top-10 rounded-3xl bg-white shadow-2xl p-5 items-center gap-4">

                                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">

                                    🎉

                                </div>

                                <div>

                                    <h4 className="font-bold">

                                        4,800+

                                    </h4>

                                    <p className="text-slate-500">

                                        Items Returned

                                    </p>

                                </div>

                            </div>

                            {/* Floating Card */}

                            <div className="hidden lg:block absolute -right-8 bottom-10 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 text-white p-6 shadow-2xl">

                                <h3 className="text-3xl font-black">

                                    96%

                                </h3>

                                <p>

                                    Success Rate

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;