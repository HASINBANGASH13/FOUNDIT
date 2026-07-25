import { Link, NavLink } from "react-router-dom";
import {
    Search,
    Plus,
    Menu,
} from "lucide-react";

function Navbar() {
    return (
        <header className="sticky top-0 z-50">

            {/* Blur Background */}

            <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl border-b border-white/40" />

            <div className="relative max-w-7xl mx-auto">

                <div className="h-24 flex items-center justify-between px-6">

                    {/* Logo */}

                    <Link
                        to="/"
                        className="flex items-center gap-4 group"
                    >

                        <div className="relative">

                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 blur-md opacity-70 group-hover:opacity-100 transition" />

                            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-2xl shadow-xl">

                                F

                            </div>

                        </div>

                        <div>

                            <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent">

                                FoundIt

                            </h1>

                            <p className="text-xs text-slate-500">

                                Lost & Found Portal

                            </p>

                        </div>

                    </Link>

                    {/* Desktop Navigation */}

                    <nav className="hidden lg:flex items-center gap-8">

                        {[
                            "Home",
                            "Browse",
                            "Categories",
                            "About",
                        ].map((item) => (

                            <NavLink
                                key={item}
                                to="/"
                                className="relative font-medium text-slate-700 hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
                            >

                                {item}

                            </NavLink>

                        ))}

                    </nav>

                    {/* Right Side */}

                    <div className="flex items-center gap-4">

                        {/* Search */}

                        <div className="hidden xl:flex items-center bg-white shadow-lg border border-slate-200 rounded-full px-5 h-12 w-[320px]">

                            <Search
                                size={18}
                                className="text-slate-400"
                            />

                            <input
                                type="text"
                                placeholder="Search lost items..."
                                className="flex-1 bg-transparent outline-none px-3 text-sm"
                            />

                        </div>

                        {/* Add Button */}

                        <Link
                            to="/create-post"
                            className="hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white px-6 py-3 font-semibold shadow-xl hover:shadow-blue-300 hover:-translate-y-1 transition-all duration-300"
                        >

                            <Plus size={18} />

                            Add Post

                        </Link>

                        {/* Login */}

                        <Link
                            to="/login"
                            className="hidden md:flex px-6 py-3 rounded-full border border-slate-300 bg-white hover:bg-slate-50 hover:shadow-lg transition"
                        >

                            Login

                        </Link>

                        {/* Mobile */}

                        <button className="lg:hidden w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center">

                            <Menu />

                        </button>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Navbar;