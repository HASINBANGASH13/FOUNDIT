import { Link } from "react-router-dom";
import {
    Mail,
    MapPin,
    Phone,
    Heart,
    ArrowUpRight,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="relative mt-24 overflow-hidden bg-slate-950 text-white">

            {/* Background Glow */}

            <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

            {/* Gradient Line */}

            <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

            <div className="relative max-w-7xl mx-auto px-6 py-20">

                <div className="grid gap-14 lg:grid-cols-4">

                    {/* Logo */}

                    <div>

                        <h2 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">

                            FoundIt

                        </h2>

                        <p className="mt-6 leading-8 text-slate-400">

                            Helping people reconnect with their lost belongings through a secure, fast and modern Lost & Found platform.

                        </p>

                        <div className="flex gap-4 mt-8">

    <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1">
        <FaFacebookF />
    </button>

    <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1">
        <FaInstagram />
    </button>

    <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 hover:border-white hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1">
        <FaGithub />
    </button>

    <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500 hover:bg-sky-600 transition-all duration-300 hover:-translate-y-1">
        <FaLinkedinIn />
    </button>

</div>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="mb-6 text-lg font-bold text-white">

                            Quick Links

                        </h3>

                        <div className="space-y-4">

                            {[
                                "Home",
                                "Browse Items",
                                "Categories",
                                "Create Post",
                            ].map((item) => (

                                <Link
                                    key={item}
                                    to="/"
                                    className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
                                >

                                    <ArrowUpRight
                                        size={16}
                                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                    {item}

                                </Link>

                            ))}

                        </div>

                    </div>

                    {/* Support */}

                    <div>

                        <h3 className="mb-6 text-lg font-bold text-white">

                            Support

                        </h3>

                        <div className="space-y-4">

                            {[
                                "Privacy Policy",
                                "Terms & Conditions",
                                "Help Center",
                                "FAQs",
                            ].map((item) => (

                                <Link
                                    key={item}
                                    to="/"
                                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition"
                                >

                                    <ArrowUpRight
                                        size={16}
                                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                    {item}

                                </Link>

                            ))}

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="mb-6 text-lg font-bold text-white">

                            Contact

                        </h3>

                        <div className="space-y-5 text-slate-400">

                            <div className="flex items-center gap-3">

                                <Mail size={18} className="text-blue-400" />

                                support@foundit.com

                            </div>

                            <div className="flex items-center gap-3">

                                <Phone size={18} className="text-indigo-400" />

                                +92 300 1234567

                            </div>

                            <div className="flex items-center gap-3">

                                <MapPin size={18} className="text-violet-400" />

                                Kohat, Pakistan

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-slate-500 text-center md:text-left">

                        © 2026 <span className="font-semibold text-white">FoundIt</span>. All rights reserved.

                    </p>

                    <p className="flex items-center gap-2 text-slate-500">

                        Made with

                        <Heart
                            size={16}
                            className="fill-red-500 text-red-500 animate-pulse"
                        />

                        using MERN Stack

                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;