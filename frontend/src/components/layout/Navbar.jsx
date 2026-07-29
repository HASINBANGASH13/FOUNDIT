import { useState } from "react";

import {
    Link,
    NavLink,
    useNavigate,
} from "react-router-dom";

import {
    Menu,
    X,
    Plus,
    LayoutDashboard,
    FolderOpen,
    LogOut,
    LogIn,
    UserPlus,
    ShieldCheck,
    UserCircle2,
} from "lucide-react";

import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";

function Navbar() {

    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const [mobileMenu, setMobileMenu] = useState(false);

    const handleLogout = () => {

        logout();

        toast.success("Logged out successfully");

        navigate("/login");

    };

    const closeMenu = () => {

        setMobileMenu(false);

    };

    const navClass = ({ isActive }) =>

        `transition font-semibold ${
            isActive
                ? "text-sky-600"
                : "text-slate-700 hover:text-sky-600"
        }`;

    return (

        <header className="sticky top-0 z-50">

            <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-slate-200"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}

                    <Link
                        to="/"
                        className="flex items-center gap-3"
                    >

                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-lg">

                            F

                        </div>

                        <div>

                            <h1 className="text-2xl font-black text-slate-900">

                                FoundIt

                            </h1>

                            <p className="text-xs text-slate-500">

                                Lost & Found Portal

                            </p>

                        </div>

                    </Link>

                    {/* Desktop Navigation */}

                    <nav className="hidden lg:flex items-center gap-8">

                        <NavLink
                            to="/"
                            className={navClass}
                        >
                            Home
                        </NavLink>

                        {user && (

                            <>
                                <NavLink
                                    to="/dashboard"
                                    className={navClass}
                                >
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    to="/my-posts"
                                    className={navClass}
                                >
                                    My Posts
                                </NavLink>
                            </>

                        )}

                    </nav>

                    {/* Right Side */}

                    <div className="hidden lg:flex items-center gap-4">

                        {user ? (
                            <>
                                {/* Create Post Button */}

                                <Link
                                    to="/create-post"
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition"
                                >
                                    <Plus size={18} />
                                    Create Post
                                </Link>

                                {/* User */}

                                <Link
    to="/profile"
    className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-300"
>

    <div className="w-11 h-11 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg">

        {user.name?.charAt(0).toUpperCase()}

    </div>

    <div>

        <div className="font-bold text-slate-800 flex items-center gap-2">

            {user.name}

            <UserCircle2
                size={16}
                className="text-sky-600"
            />

        </div>

        <div className="flex items-center gap-2">

            <span className="text-xs text-slate-500">

                {user.email}

            </span>

            {user.role === "admin" && (

                <span className="flex items-center gap-1 text-[10px] bg-red-100 text-red-600 rounded-full px-2 py-1">

                    <ShieldCheck size={12} />

                    Admin

                </span>

            )}

        </div>

    </div>

</Link>

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition"
                                >
                                    <LogOut size={18} />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
                                >
                                    <LogIn size={18} />
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition"
                                >
                                    <UserPlus size={18} />
                                    Register
                                </Link>
                            </>
                        )}

                    </div>

                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="lg:hidden w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center"
                    >
                        {mobileMenu ? <X /> : <Menu />}
                    </button>

                </div>

                {/* Mobile Menu */}

                {mobileMenu && (

                    <div className="lg:hidden bg-white border-t border-slate-200 py-5 space-y-3">

                        <NavLink
                            to="/"
                            onClick={closeMenu}
                            className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100"
                        >
                            Home
                        </NavLink>

                        {user ? (
                            <>
                                <NavLink
                                    to="/dashboard"
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100"
                                >
                                    <LayoutDashboard size={18} />
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    to="/my-posts"
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100"
                                >
                                    <FolderOpen size={18} />
                                    My Posts
                                </NavLink>
                                <NavLink
    to="/profile"
    onClick={closeMenu}
    className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100"
>
    <UserCircle2 size={18} />
    Profile
</NavLink>
                                <NavLink
                                    to="/create-post"
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100"
                                >
                                    <Plus size={18} />
                                    Create Post
                                </NavLink>

                                <div className="border-t border-slate-200 my-2"></div>

                                <div className="px-6 py-2">

                                    <div className="font-bold">

                                        {user.name}

                                    </div>

                                    <div className="text-sm text-slate-500">

                                        {user.email}

                                    </div>

                                </div>

                                <button
                                    onClick={() => {
                                        closeMenu();
                                        handleLogout();
                                    }}
                                    className="w-full flex items-center gap-3 px-6 py-3 text-red-600 hover:bg-red-50"
                                >
                                    <LogOut size={18} />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/login"
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100"
                                >
                                    <LogIn size={18} />
                                    Login
                                </NavLink>

                                <NavLink
                                    to="/register"
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100"
                                >
                                    <UserPlus size={18} />
                                    Register
                                </NavLink>
                            </>
                        )}

                    </div>

                )}

            </div>

        </header>

    );

}

export default Navbar;