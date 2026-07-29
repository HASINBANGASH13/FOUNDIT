import {
    Star,
    Quote,
    ArrowRight,
} from "lucide-react";

const testimonials = [
    {
        name: "Ali Khan",
        city: "Islamabad",
        image:
            "https://randomuser.me/api/portraits/men/32.jpg",
        text:
            "I lost my iPhone in my university. Someone posted it on FoundIt and I got it back within 4 hours. Amazing platform!",
    },
    {
        name: "Ayesha Malik",
        city: "Lahore",
        image:
            "https://randomuser.me/api/portraits/women/44.jpg",
        text:
            "Very clean interface and super easy to use. I found my wallet after only one day.",
    },
    {
        name: "Usman Ahmed",
        city: "Peshawar",
        image:
            "https://randomuser.me/api/portraits/men/52.jpg",
        text:
            "The location based search is fantastic. This website deserves more recognition.",
    },
];
function Testimonials() {
    return (
        <section className="py-28 bg-[#090a11]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center">
                    <span className="inline-flex px-5 py-2 rounded-full bg-white/5 text-white/80 font-semibold backdrop-blur">
                        Success Stories
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        People Love FoundIt ❤️
                    </h2>

                    <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
                        Every recovered item represents someone's happiness.
                        Here are a few stories from our community.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mt-20">
                    {testimonials.map((user, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_rgba(255,255,255,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_90px_rgba(255,255,255,0.08)]"
                        >
                            <div className="absolute top-8 right-8 text-white/10">
                                <Quote size={70} />
                            </div>

                            <div className="flex items-center gap-4">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="w-16 h-16 rounded-full object-cover ring-4 ring-white/10"
                                />

                                <div>
                                    <h3 className="font-bold text-xl text-white">
                                        {user.name}
                                    </h3>

                                    <p className="text-slate-400">
                                        {user.city}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-1 mt-6 text-amber-400">
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                            </div>

                            <p className="mt-6 text-slate-300 leading-8">
                                "{user.text}"
                            </p>

                            <button className="mt-8 flex items-center gap-2 font-semibold text-sky-300 hover:text-white">
                                Read Story
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-2 transition"
                                />
                            </button>

                            <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-sky-500/10 blur-3xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;