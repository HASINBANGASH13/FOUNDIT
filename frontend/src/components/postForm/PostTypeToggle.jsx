import {
    Search,
    CheckCircle2,
} from "lucide-react";

function PostTypeToggle({ value, onChange }) {

    return (

        <div>

            <label className="block mb-4 text-lg font-bold text-slate-800">

                What are you posting?

            </label>

            <div className="grid grid-cols-2 gap-5">

                {/* LOST */}

                <button
                    type="button"
                    onClick={() => onChange("lost")}
                    className={`
                        rounded-3xl
                        border
                        p-6
                        transition-all
                        duration-300
                        ${
                            value === "lost"
                                ? "bg-gradient-to-br from-red-500 to-rose-600 text-white border-red-500 shadow-xl scale-105"
                                : "bg-white border-slate-200 hover:border-red-300 hover:shadow-lg"
                        }
                    `}
                >

                    <div className="flex flex-col items-center">

                        <div
                            className={`
                                h-16
                                w-16
                                rounded-2xl
                                flex
                                items-center
                                justify-center
                                ${
                                    value === "lost"
                                        ? "bg-white/20"
                                        : "bg-red-100"
                                }
                            `}
                        >

                            <Search
                                size={30}
                                className={
                                    value === "lost"
                                        ? "text-white"
                                        : "text-red-500"
                                }
                            />

                        </div>

                        <h3 className="mt-5 text-2xl font-bold">

                            Lost

                        </h3>

                        <p
                            className={`mt-2 text-sm ${
                                value === "lost"
                                    ? "text-red-100"
                                    : "text-slate-500"
                            }`}
                        >

                            I lost something

                        </p>

                    </div>

                </button>

                {/* FOUND */}

                <button
                    type="button"
                    onClick={() => onChange("found")}
                    className={`
                        rounded-3xl
                        border
                        p-6
                        transition-all
                        duration-300
                        ${
                            value === "found"
                                ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white border-green-500 shadow-xl scale-105"
                                : "bg-white border-slate-200 hover:border-green-300 hover:shadow-lg"
                        }
                    `}
                >

                    <div className="flex flex-col items-center">

                        <div
                            className={`
                                h-16
                                w-16
                                rounded-2xl
                                flex
                                items-center
                                justify-center
                                ${
                                    value === "found"
                                        ? "bg-white/20"
                                        : "bg-green-100"
                                }
                            `}
                        >

                            <CheckCircle2
                                size={30}
                                className={
                                    value === "found"
                                        ? "text-white"
                                        : "text-green-600"
                                }
                            />

                        </div>

                        <h3 className="mt-5 text-2xl font-bold">

                            Found

                        </h3>

                        <p
                            className={`mt-2 text-sm ${
                                value === "found"
                                    ? "text-green-100"
                                    : "text-slate-500"
                            }`}
                        >

                            I found something

                        </p>

                    </div>

                </button>

            </div>

        </div>

    );

}

export default PostTypeToggle;