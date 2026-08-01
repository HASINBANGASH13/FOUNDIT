import { useEffect, useState } from "react";
import {
    Search,
    Trash2,
    ShieldCheck,
    User,
    RefreshCw,
} from "lucide-react";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";

import {
    getAllUsers,
    deleteUser,
    updateUserRole,
} from "../../api/adminApi";

function AdminUsers() {

    const { user: currentUser } = useAuth();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {

        const timer = setTimeout(() => {

            loadUsers();

        }, 300);

        return () => clearTimeout(timer);

    }, [keyword]);

    const loadUsers = async () => {

        try {

            setLoading(true);

            const res = await getAllUsers({

                keyword,

            });

            setUsers(res.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const handleDelete = async (id) => {

        const ok = window.confirm(

            "Are you sure you want to delete this user?"

        );

        if (!ok) return;

        try {

            await deleteUser(id);

            toast.success("User deleted successfully.");

            loadUsers();

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Delete failed."

            );

        }

    };

    const handleRoleChange = async (id, role) => {

        try {

            await updateUserRole(id, role);

            toast.success("User role updated.");

            loadUsers();

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to update role."

            );

        }

    };

    return (

        <div>

            {/* Header */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

                <div>

                    <h1 className="text-4xl font-black">

                        Manage Users

                    </h1>

                    <p className="text-slate-500 mt-2">

                        Search users, change roles and manage accounts.

                    </p>

                </div>

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        value={keyword}
                        onChange={(e) =>
                            setKeyword(e.target.value)
                        }
                        placeholder="Search users..."
                        className="w-80 h-12 rounded-xl border border-slate-200 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500"
                    />

                </div>

            </div>

            {/* Table */}

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="text-left p-5">

                                User

                            </th>

                            <th className="text-left">

                                Email

                            </th>

                            <th className="text-left">

                                Phone

                            </th>

                            <th className="text-left">

                                Current Role

                            </th>

                            <th className="text-left">

                                Change Role

                            </th>

                            <th className="text-center">

                                Delete

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {loading ? (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="text-center py-14"
                                >

                                    <div className="flex justify-center">

                                        <RefreshCw
                                            size={30}
                                            className="animate-spin text-emerald-600"
                                        />

                                    </div>

                                </td>

                            </tr>

                        ) : users.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="text-center py-16 text-slate-500"
                                >

                                    No users found.

                                </td>

                            </tr>

                        ) : (

                            users.map((user) => {

                                const isCurrentUser =
                                    currentUser?._id === user._id;

                                return (

                                    <tr
                                        key={user._id}
                                        className="border-t hover:bg-slate-50 transition"
                                    >

                                        {/* User */}

                                        <td className="p-5">

                                            <div className="flex items-center gap-4">

                                                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">

                                                    {user.name.charAt(0).toUpperCase()}

                                                </div>

                                                <div>

                                                    <h3 className="font-bold">

                                                        {user.name}

                                                    </h3>

                                                    {isCurrentUser && (

                                                        <span className="text-xs font-semibold text-emerald-600">

                                                            You

                                                        </span>

                                                    )}

                                                </div>

                                            </div>

                                        </td>

                                        {/* Email */}

                                        <td>

                                            {user.email}

                                        </td>

                                        {/* Phone */}

                                        <td>

                                            {user.phone}

                                        </td>

                                        {/* Current Role */}

                                        <td>

                                            <span
                                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                                                    user.role === "admin"
                                                        ? "bg-red-100 text-red-600"
                                                        : "bg-emerald-100 text-emerald-700"
                                                }`}
                                            >

                                                {user.role === "admin" ? (

                                                    <ShieldCheck size={16} />

                                                ) : (

                                                    <User size={16} />

                                                )}

                                                {user.role}

                                            </span>

                                        </td>

                                        {/* Change Role */}

                                        <td>

                                            <select
                                                value={user.role}
                                                disabled={isCurrentUser}
                                                onChange={(e) =>
                                                    handleRoleChange(
                                                        user._id,
                                                        e.target.value
                                                    )
                                                }
                                                className={`rounded-xl px-4 py-2 outline-none ${
                                                    isCurrentUser
                                                        ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                                                        : "border border-slate-300 focus:ring-2 focus:ring-emerald-500"
                                                }`}
                                            >

                                                <option value="user">

                                                    User

                                                </option>

                                                <option value="admin">

                                                    Admin

                                                </option>

                                            </select>

                                        </td>

                                        {/* Delete */}

                                        <td className="text-center">

                                            <button
                                                disabled={isCurrentUser}
                                                onClick={() =>
                                                    handleDelete(user._id)
                                                }
                                                className={`transition ${
                                                    isCurrentUser
                                                        ? "text-slate-300 cursor-not-allowed"
                                                        : "text-red-600 hover:text-red-800"
                                                }`}
                                            >

                                                <Trash2 size={20} />

                                            </button>

                                        </td>

                                    </tr>

                                );

                            })

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default AdminUsers;