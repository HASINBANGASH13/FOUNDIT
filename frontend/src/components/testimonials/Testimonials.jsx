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
        <section className="py-28 bg-gradient-to-b from-slate-50 to-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">

                        Success Stories

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">

                        People Love FoundIt ❤️

                    </h2>

                    <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">

                        Every recovered item represents someone's happiness.
                        Here are a few stories from our community.

                    </p>

                </div>

                {/* Cards */}

                <div className="grid lg:grid-cols-3 gap-8 mt-20">

                    {testimonials.map((user, index) => (

                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                        >

                            <div className="absolute top-8 right-8 text-blue-100">

                                <Quote size={70} />

                            </div>

                            <div className="flex items-center gap-4">

                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                                />

                                <div>

                                    <h3 className="font-bold text-xl">

                                        {user.name}

                                    </h3>

                                    <p className="text-slate-500">

                                        {user.city}

                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-1 mt-6 text-yellow-400">

                                <Star fill="currentColor" size={18}/>
                                <Star fill="currentColor" size={18}/>
                                <Star fill="currentColor" size={18}/>
                                <Star fill="currentColor" size={18}/>
                                <Star fill="currentColor" size={18}/>

                            </div>

                            <p className="mt-6 text-slate-600 leading-8">

                                "{user.text}"

                            </p>

                            <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600">

                                Read Story

                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-2 transition"
                                />

                            </button>

                            <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-blue-500/10 blur-3xl"/>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonials;