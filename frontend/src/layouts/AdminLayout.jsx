import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminNavbar from "../components/admin/AdminNavbar";

function AdminLayout() {

    return (

        <div className="min-h-screen flex bg-slate-100">

            {/* Sidebar */}

            <AdminSidebar />

            {/* Main Content */}

            <div className="flex-1 flex flex-col">

                {/* Navbar */}

                <AdminNavbar />

                {/* Page Content */}

                <main className="flex-1 p-8 overflow-y-auto">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}

export default AdminLayout;