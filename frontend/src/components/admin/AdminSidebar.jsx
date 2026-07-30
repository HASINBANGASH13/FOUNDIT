import { NavLink } from "react-router-dom";

import {
    LayoutDashboard,
    Users,
    FolderOpen,
    Package,
    LogOut,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

function AdminSidebar() {

    const { logout } = useAuth();

    const menus = [

        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/admin",
        },

        {
            name: "Users",
            icon: Users,
            path: "/admin/users",
        },

        {
            name: "Posts",
            icon: Package,
            path: "/admin/posts",
        },

        {
            name: "Categories",
            icon: FolderOpen,
            path: "/admin/categories",
        },

    ];

    return (

        <aside className="w-72 bg-slate-900 text-white min-h-screen flex flex-col">

            {/* Logo */}

            <div className="h-24 flex items-center justify-center border-b border-slate-800">

                <div>

                    <h1 className="text-3xl font-black">

                        FoundIt

                    </h1>

                    <p className="text-slate-400 text-sm">

                        Admin Panel

                    </p>

                </div>

            </div>

            {/* Menu */}

            <nav className="flex-1 p-6 space-y-3">

                {menus.map((menu) => {

                    const Icon = menu.icon;

                    return (

                        <NavLink

                            key={menu.name}

                            to={menu.path}

                            end={menu.path === "/admin"}

                            className={({ isActive }) =>

                                `flex items-center gap-4 rounded-xl px-5 py-4 transition-all ${

                                    isActive

                                        ? "bg-sky-600"

                                        : "hover:bg-slate-800"

                                }`

                            }

                        >

                            <Icon size={22} />

                            <span className="font-semibold">

                                {menu.name}

                            </span>

                        </NavLink>

                    );

                })}

            </nav>

            {/* Logout */}

            <div className="p-6 border-t border-slate-800">

                <button

                    onClick={logout}

                    className="w-full flex items-center justify-center gap-3 rounded-xl bg-red-500 hover:bg-red-600 py-3 font-bold"

                >

                    <LogOut size={20} />

                    Logout

                </button>

            </div>

        </aside>

    );

}

export default AdminSidebar;