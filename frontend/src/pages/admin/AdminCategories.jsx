import { useEffect, useState } from "react";
import {
    Plus,
    Pencil,
    Trash2,
    Search,
} from "lucide-react";
import { toast } from "react-toastify";

import {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../../api/adminApi";

function AdminCategories() {

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [name, setName] = useState("");

    const [editing, setEditing] = useState(null);

    useEffect(() => {

        loadCategories();

    }, []);

    const loadCategories = async () => {

        try {

            const res = await getAllCategories();

            setCategories(res.data);

        } catch (error) {

            toast.error("Failed to load categories");

        } finally {

            setLoading(false);

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (editing) {

                await updateCategory(editing._id, {
                    name,
                });

                toast.success("Category updated");

            } else {

                await createCategory({
                    name,
                });

                toast.success("Category created");

            }

            setName("");

            setEditing(null);

            loadCategories();

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Something went wrong"

            );

        }

    };

    const handleEdit = (category) => {

        setEditing(category);

        setName(category.name);

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this category?")) return;

        try {

            await deleteCategory(id);

            toast.success("Category deleted");

            loadCategories();

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Delete failed"

            );

        }

    };

    const filtered = categories.filter(category =>

        category.name

            .toLowerCase()

            .includes(search.toLowerCase())

    );

    if (loading) {

        return (

            <div className="flex justify-center py-24">

                <div className="w-16 h-16 border-4 border-sky-600 border-t-transparent rounded-full animate-spin"></div>

            </div>

        );

    }

    return (

        <div>

            {/* Header */}

            <div className="flex justify-between items-center mb-10">

                <div>

                    <h1 className="text-4xl font-black">

                        Categories

                    </h1>

                    <p className="text-slate-500 mt-2">

                        Manage all categories

                    </p>

                </div>

            </div>

            {/* Form */}

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-lg p-6 mb-8"
            >

                <div className="flex gap-4">

                    <input

                        type="text"

                        placeholder="Category name"

                        value={name}

                        onChange={(e) =>

                            setName(e.target.value)

                        }

                        className="flex-1 h-14 rounded-xl border px-4 outline-none"

                        required

                    />

                    <button

                        className="bg-sky-600 text-white px-8 rounded-xl flex items-center gap-2"

                    >

                        <Plus size={18} />

                        {editing ? "Update" : "Add"}

                    </button>

                </div>

            </form>

            {/* Search */}

            <div className="relative mb-8">

                <Search

                    size={18}

                    className="absolute left-4 top-4 text-slate-400"

                />

                <input

                    type="text"

                    placeholder="Search category..."

                    value={search}

                    onChange={(e) =>

                        setSearch(e.target.value)

                    }

                    className="w-full h-14 rounded-xl border pl-12 pr-4"

                />

            </div>

            {/* Table */}

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="text-left p-5">

                                Category

                            </th>

                            <th className="text-center p-5">

                                Created

                            </th>

                            <th className="text-center p-5">

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filtered.map(category => (

                            <tr

                                key={category._id}

                                className="border-t"

                            >

                                <td className="p-5 font-semibold">

                                    {category.name}

                                </td>

                                <td className="text-center">

                                    {

                                        new Date(

                                            category.createdAt

                                        ).toLocaleDateString()

                                    }

                                </td>

                                <td className="p-5">

                                    <div className="flex justify-center gap-3">

                                        <button

                                            onClick={() =>

                                                handleEdit(category)

                                            }

                                            className="bg-blue-100 text-blue-600 p-2 rounded-xl"

                                        >

                                            <Pencil size={18} />

                                        </button>

                                        <button

                                            onClick={() =>

                                                handleDelete(category._id)

                                            }

                                            className="bg-red-100 text-red-600 p-2 rounded-xl"

                                        >

                                            <Trash2 size={18} />

                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default AdminCategories;