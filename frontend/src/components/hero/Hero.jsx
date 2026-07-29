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
        <section className="relative overflow-hidden bg-[#07080e] text-white">

            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute right-0 top-24 w-[500px] h-[500px] bg-white/6 rounded-full blur-[160px]" />
                <div className="absolute left-1/2 bottom-0 w-[420px] h-[420px] bg-white/8 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24">
                <div className="min-h-[88vh] flex items-center">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-slate-300">
                                <Sparkles size={16} />
                                Pakistan's Modern Lost & Found Platform
                            </div>

                            <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight">
                                Find What
                                <span className="block text-white/90">
                                    Matters Most
                                </span>
                            </h1>

                            <p className="mt-8 text-xl leading-9 text-slate-400 max-w-xl">
                                Report lost items, discover found belongings, and
                                reconnect owners with their valuables using a fast,
                                secure and community-driven platform.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    to="/create-post"
                                    className="group inline-flex items-center gap-3 rounded-2xl bg-white text-slate-950 px-8 py-4 font-semibold shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-white/30"
                                >
                                    Report Item
                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-1"
                                    />
                                </Link>

                                <Link
                                    to="/posts"
                                    className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white hover:bg-white/10 shadow transition"
                                >
                                    Browse Items
                                </Link>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-8 text-slate-300">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-white" />
                                    <span className="font-medium">Secure Platform</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-white" />
                                    <span className="font-medium">Search by City</span>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="relative">
                            <div className="rounded-[35px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-[0_30px_80px_rgba(255,255,255,0.06)]">
                                <div className="flex items-center rounded-2xl bg-white/10 px-5 h-16 border border-white/10">
                                    <Search className="text-slate-300" />
                                    <input
                                        placeholder="Search lost phone, wallet..."
                                        className="flex-1 bg-transparent outline-none px-4 text-lg text-white placeholder:text-slate-500"
                                    />
                                </div>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    {["Mobile", "Wallet", "Laptop", "Documents", "Pets", "Keys"].map((item) => (
                                        <button
                                            key={item}
                                            className="rounded-full bg-white/5 px-5 py-3 text-white hover:bg-white/15 transition"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-10 space-y-4">
                                    {[1, 2, 3].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 hover:shadow-white/10 transition"
                                        >
                                            <div className="flex justify-between items-start gap-4">
                                                <div>
                                                    <h3 className="font-bold text-lg text-white">Lost iPhone {item}</h3>
                                                    <p className="text-slate-400 mt-2">Near University Road</p>
                                                </div>
                                                <span className="rounded-full bg-red-500/15 text-red-300 px-4 py-2 text-sm font-semibold">
                                                    LOST
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="hidden lg:flex absolute -left-10 top-10 rounded-3xl bg-white/10 border border-white/10 p-5 items-center gap-4 shadow-[0_24px_60px_rgba(255,255,255,0.08)]">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                                    🎉
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">4,800+</h4>
                                    <p className="text-slate-400">Items Returned</p>
                                </div>
                            </div>

                            <div className="hidden lg:block absolute -right-8 bottom-10 rounded-3xl bg-white/10 border border-white/10 p-6 shadow-[0_24px_60px_rgba(255,255,255,0.08)]">
                                <h3 className="text-3xl font-black text-white">96%</h3>
                                <p className="text-slate-400">Success Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
