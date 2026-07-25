import {
    ShieldCheck,
    MapPinned,
    Clock3,
    Users,
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Safe & Secure",
        description:
            "Your information is protected while helping genuine owners recover their belongings.",
        color: "from-emerald-500 to-green-600",
    },
    {
        icon: MapPinned,
        title: "Location Based",
        description:
            "Quickly find lost and found items near your city or area.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Clock3,
        title: "Real-Time Updates",
        description:
            "Receive the latest posts instantly and improve the chances of recovery.",
        color: "from-orange-500 to-amber-500",
    },
    {
        icon: Users,
        title: "Community Driven",
        description:
            "Thousands of people helping each other return valuable belongings.",
        color: "from-violet-500 to-purple-600",
    },
];

function WhyChoose() {
    return (
        <section className="py-28 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">
                    <span className="inline-block bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full font-semibold">
                        Why Choose Us
                    </span>

                    <h2 className="mt-6 text-5xl font-black">
                        More Than Just a Lost & Found
                    </h2>

                    <p className="mt-5 max-w-2xl mx-auto text-slate-300 text-lg">
                        FoundIt helps people reconnect with their belongings
                        through a modern, fast and secure community platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:border-cyan-400 transition-all duration-500"
                            >
                                <div
                                    className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-xl`}
                                >
                                    <Icon size={34} />
                                </div>

                                <h3 className="mt-8 text-2xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-slate-300 leading-7">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default WhyChoose;