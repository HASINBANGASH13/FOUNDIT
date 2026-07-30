import { useEffect, useState } from "react";

import {
    Search,
    Trash2,
    ShieldCheck,
    User,
} from "lucide-react";

import { toast } from "react-toastify";

import {
    getAllUsers,
    deleteUser,
} from "../../api/adminApi";

function AdminUsers() {

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    const [keyword, setKeyword] = useState("");

    useEffect(() => {

        loadUsers();

    }, [keyword]);

    const loadUsers = async () => {

        try {

            setLoading(true);

            const res = await getAllUsers({

                keyword,

            });

            setUsers(res.data);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    const handleDelete = async (id) => {

        const ok = window.confirm(

            "Delete this user?"

        );

        if (!ok) return;

        try {

            await deleteUser(id);

            toast.success("User deleted.");

            loadUsers();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Delete failed."

            );

        }

    };

    return (

        <div>

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-black">

                        Manage Users

                    </h1>

                    <p className="text-slate-500 mt-2">

                        Search, manage and remove users.

                    </p>

                </div>

                <div className="relative">

                    <Search

                        size={18}

                        className="absolute left-4 top-4 text-slate-400"

                    />

                    <input

                        value={keyword}

                        onChange={(e) =>

                            setKeyword(e.target.value)

                        }

                        placeholder="Search users..."

                        className="w-80 h-12 rounded-xl border pl-12"

                    />

                </div>

            </div>

            {/* Table */}

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-5 text-left">

                                User

                            </th>

                            <th>Email</th>

                            <th>Phone</th>

                            <th>Role</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {loading ? (

                            <tr>

                                <td

                                    colSpan="5"

                                    className="p-10 text-center"

                                >

                                    Loading...

                                </td>

                            </tr>

                        ) : (

                            users.map((user) => (

                                <tr

                                    key={user._id}

                                    className="border-t"

                                >

                                    <td className="p-5">

                                        <div className="flex items-center gap-3">

                                            <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold">

                                                {

                                                    user.name[0]

                                                }

                                            </div>

                                            <div>

                                                <h3 className="font-bold">

                                                    {user.name}

                                                </h3>

                                            </div>

                                        </div>

                                    </td>

                                    <td>

                                        {user.email}

                                    </td>

                                    <td>

                                        {user.phone}

                                    </td>

                                    <td>

                                        <span

                                            className={`px-4 py-2 rounded-full text-sm font-bold ${

                                                user.role === "admin"

                                                    ? "bg-red-100 text-red-600"

                                                    : "bg-green-100 text-green-600"

                                            }`}

                                        >

                                            {

                                                user.role === "admin"

                                                    ? <ShieldCheck size={16} className="inline mr-2" />

                                                    : <User size={16} className="inline mr-2" />

                                            }

                                            {user.role}

                                        </span>

                                    </td>

                                    <td>

                                        <button

                                            onClick={() =>

                                                handleDelete(

                                                    user._id

                                                )

                                            }

                                            className="text-red-600 hover:text-red-800"

                                        >

                                            <Trash2 />

                                        </button>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default AdminUsers;