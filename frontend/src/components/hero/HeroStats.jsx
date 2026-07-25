import {
    Package,
    SearchCheck,
    Users,
    Trophy,
} from "lucide-react";

const stats = [
    {
        icon: Package,
        number: "15K+",
        title: "Posts Created",
    },
    {
        icon: SearchCheck,
        number: "9K+",
        title: "Items Returned",
    },
    {
        icon: Users,
        number: "20K+",
        title: "Community Members",
    },
    {
        icon: Trophy,
        number: "96%",
        title: "Success Rate",
    },
];

function HeroStats() {
    return (
        <section className="relative -mt-12 z-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-7 shadow-xl border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white">

                                    <Icon size={26} />

                                </div>

                                <h2 className="mt-6 text-4xl font-black text-slate-900">
                                    {item.number}
                                </h2>

                                <p className="mt-2 text-slate-500 font-medium">
                                    {item.title}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default HeroStats;