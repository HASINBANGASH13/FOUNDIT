import { Search, BellRing, Handshake } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Report Lost or Found",
        description:
            "Create a post in less than a minute with details, images, and location.",
    },
    {
        icon: BellRing,
        title: "Get Instant Matches",
        description:
            "People nearby can instantly discover your post and contact you.",
    },
    {
        icon: Handshake,
        title: "Reconnect Safely",
        description:
            "Meet securely and return the item to its rightful owner.",
    },
];

function HowItWorks() {
    return (
        <section className="py-28 bg-[#090a11]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <span className="px-5 py-2 rounded-full bg-white/5 text-white/80 font-semibold backdrop-blur">
                        Simple Process
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        How FoundIt Works
                    </h2>

                    <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-300">
                        Three simple steps to help reunite lost belongings with
                        their owners.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 mt-20">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="relative rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_30px_70px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_90px_rgba(255,255,255,0.08)]"
                            >
                                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold shadow-lg">
                                    {index + 1}
                                </div>

                                <div className="mt-5 w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-xl">
                                    <Icon size={34} />
                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-white">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-slate-300 leading-7">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;