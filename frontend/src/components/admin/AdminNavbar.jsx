import { Bell, CalendarDays } from "lucide-react";
import useAuth from "../../hooks/useAuth";

function AdminNavbar() {

    const { user } = useAuth();

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (

        <header className="h-24 bg-white border-b border-slate-200 px-10 flex items-center justify-between shadow-sm">

            {/* Left */}

            <div>

                <h1 className="text-3xl font-black text-slate-900">

                    Admin Dashboard

                </h1>

                <div className="flex items-center gap-2 mt-2 text-slate-500">

                    <CalendarDays size={18} />

                    <span>{today}</span>

                </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-6">

                {/* Notification */}

                <button className="relative w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">

                    <Bell size={20} />

                    <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

                </button>

                {/* User */}

                <div className="flex items-center gap-4">

                    <div className="text-right">

                        <h3 className="font-bold text-slate-900">

                            {user?.name}

                        </h3>

                        <p className="text-sm text-slate-500 capitalize">

                            {user?.role}

                        </p>

                    </div>

                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white flex items-center justify-center text-xl font-black shadow-lg">

                        {user?.name?.charAt(0).toUpperCase()}

                    </div>

                </div>

            </div>

        </header>

    );

}

export default AdminNavbar;