import { ArrowRight, Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="py-28 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">

            {/* Background Blur */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-6xl mx-auto px-6">

                <div className="rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/10 p-14 text-center">

                    <span className="inline-flex px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold">
                        Join Our Community
                    </span>

                    <h2 className="mt-8 text-5xl md:text-6xl font-black text-white leading-tight">
                        Lost Something?
                        <br />
                        Found Something?
                    </h2>

                    <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto leading-8">
                        Thousands of people use FoundIt every day to reconnect
                        lost belongings with their owners.
                        Create your first post today and help someone smile.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

                        <Link
                            to="/create-post"
                            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg transition-all hover:scale-105 shadow-xl"
                        >
                            <Plus size={22} />
                            Create Post
                        </Link>

                        <Link
                            to="/posts"
                            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl border border-white/20 text-white hover:bg-white/10 font-bold text-lg transition-all"
                        >
                            <Search size={22} />
                            Browse Posts
                            <ArrowRight size={20} />
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default CTA;