import CountUp from "react-countup";
import {
    PackageCheck,
    Users,
    MapPin,
    Trophy,
} from "lucide-react";

const stats = [
    {
        icon: PackageCheck,
        number: 12450,
        suffix: "+",
        title: "Recovered Items",
        color: "from-cyan-500 to-blue-600",
    },
    {
        icon: Users,
        number: 18700,
        suffix: "+",
        title: "Happy Users",
        color: "from-violet-500 to-purple-600",
    },
    {
        icon: MapPin,
        number: 650,
        suffix: "+",
        title: "Daily Posts",
        color: "from-emerald-500 to-green-600",
    },
    {
        icon: Trophy,
        number: 97,
        suffix: "%",
        title: "Success Rate",
        color: "from-orange-500 to-red-500",
    },
];

function Statistics() {
    return (
        <section className="py-28 bg-[#090a11]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-3 hover:border-cyan-400 transition duration-500"
                            >
                                <div
                                    className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-xl`}
                                >
                                    <Icon size={34} />
                                </div>

                                <h2 className="mt-8 text-5xl font-black text-white">
                                    <CountUp
                                        end={item.number}
                                        duration={2.5}
                                        separator="," 
                                    />
                                    {item.suffix}
                                </h2>

                                <p className="mt-4 text-slate-300 text-lg">
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

export default Statistics;