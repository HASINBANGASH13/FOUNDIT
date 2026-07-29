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
        <section className="relative -mt-12 z-20 bg-[#090a11] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_35px_80px_rgba(255,255,255,0.05)] transition-transform duration-300 hover:-translate-y-2 hover:border-white/20"
                            >
                                <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-white/15 via-slate-100/10 to-white/10 flex items-center justify-center text-white shadow-lg">
                                    <Icon size={26} />
                                </div>

                                <h2 className="mt-6 text-4xl font-black text-white">
                                    {item.number}
                                </h2>

                                <p className="mt-2 text-slate-300 font-medium">
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