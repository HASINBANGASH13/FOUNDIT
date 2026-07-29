import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
    Package,
    Phone,
    Calendar,
    MapPin,
    Upload,
} from "lucide-react";

import { getCategories } from "../../api/categoryApi";
import { createPost } from "../../api/postApi";

function CreatePost() {

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    const [image, setImage] = useState(null);

    const [preview, setPreview] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        type: "lost",
        category: "",
        city: "",
        area: "",
        address: "",
        contactNumber: "",
        date: "",
    });

    useEffect(() => {

        const fetchCategories = async () => {

            try {

                const res = await getCategories();

                setCategories(res.data);

            } catch (error) {

                console.log(error);

                toast.error("Failed to load categories");

            }

        };

        fetchCategories();

    }, []);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);

        setPreview(URL.createObjectURL(file));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!image) {

            return toast.error("Please select an image.");

        }

        try {

            setLoading(true);

            const data = new FormData();

            data.append("title", formData.title);
            data.append("description", formData.description);
            data.append("type", formData.type);
            data.append("category", formData.category);
            data.append("city", formData.city);
            data.append("area", formData.area);
            data.append("address", formData.address);
            data.append("contactNumber", formData.contactNumber);
            data.append("date", formData.date);
            data.append("image", image);

            const res = await createPost(data);

            toast.success(res.message);

            navigate("/");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to create post."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="min-h-screen py-16 bg-gradient-to-br from-slate-50 via-white to-sky-50">

            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center">

                    <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sky-700 font-semibold">

                        Lost & Found

                    </span>

                    <h1 className="mt-6 text-5xl font-black">

                        Create New Post

                    </h1>

                    <p className="mt-5 text-lg text-slate-500">

                        Help someone recover their belongings.

                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-14 rounded-[32px] bg-white border border-slate-200 shadow-2xl p-10"
                >

                    {/* Title */}

                    <label className="font-semibold">

                        Title

                    </label>

                    <div className="mt-2 flex items-center h-14 rounded-2xl border px-4">

                        <Package
                            size={18}
                            className="text-slate-400"
                        />

                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-3 outline-none"
                            placeholder="Lost iPhone..."
                        />

                    </div>

                    {/* Description */}

                    <div className="mt-8">

                        <label className="font-semibold">

                            Description

                        </label>

                        <textarea
                            name="description"
                            rows="5"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border p-4 outline-none resize-none"
                            placeholder="Describe the item..."
                        />

                    </div>

                    {/* Type */}

                    <div className="mt-8">

                        <label className="font-semibold">

                            Post Type

                        </label>

                        <div className="grid grid-cols-2 gap-5 mt-3">

                            <button
                                type="button"
                                onClick={() =>
                                    setFormData({
                                        ...formData,
                                        type: "lost",
                                    })
                                }
                                className={`h-14 rounded-2xl font-bold transition ${
                                    formData.type === "lost"
                                        ? "bg-red-500 text-white"
                                        : "border"
                                }`}
                            >
                                Lost
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setFormData({
                                        ...formData,
                                        type: "found",
                                    })
                                }
                                className={`h-14 rounded-2xl font-bold transition ${
                                    formData.type === "found"
                                        ? "bg-green-500 text-white"
                                        : "border"
                                }`}
                            >
                                Found
                            </button>

                        </div>

                    </div>

                    {/* Category */}

                    <div className="mt-8">

                        <label className="font-semibold">

                            Category

                        </label>

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-2 w-full h-14 rounded-2xl border px-4 outline-none"
                        >

                            <option value="">

                                Select Category

                            </option>

                            {categories.map((category) => (

                                <option
                                    key={category._id}
                                    value={category._id}
                                >

                                    {category.name}

                                </option>

                            ))}

                        </select>

                    </div>
                                        {/* City & Area */}

                    <div className="grid md:grid-cols-2 gap-6 mt-8">

                        <div>

                            <label className="font-semibold">

                                City

                            </label>

                            <div className="mt-2 flex items-center h-14 rounded-2xl border px-4">

                                <MapPin
                                    size={18}
                                    className="text-slate-400"
                                />

                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Islamabad"
                                    className="w-full px-3 outline-none"
                                />

                            </div>

                        </div>

                        <div>

                            <label className="font-semibold">

                                Area

                            </label>

                            <div className="mt-2 flex items-center h-14 rounded-2xl border px-4">

                                <MapPin
                                    size={18}
                                    className="text-slate-400"
                                />

                                <input
                                    type="text"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    placeholder="F-10"
                                    className="w-full px-3 outline-none"
                                />

                            </div>

                        </div>

                    </div>

                    {/* Address */}

                    <div className="mt-8">

                        <label className="font-semibold">

                            Address

                        </label>

                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Street / Landmark"
                            className="mt-2 w-full h-14 rounded-2xl border px-4 outline-none"
                        />

                    </div>

                    {/* Contact & Date */}

                    <div className="grid md:grid-cols-2 gap-6 mt-8">

                        <div>

                            <label className="font-semibold">

                                Contact Number

                            </label>

                            <div className="mt-2 flex items-center h-14 rounded-2xl border px-4">

                                <Phone
                                    size={18}
                                    className="text-slate-400"
                                />

                                <input
                                    type="text"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="03XXXXXXXXX"
                                    className="w-full px-3 outline-none"
                                />

                            </div>

                        </div>

                        <div>

                            <label className="font-semibold">

                                Date

                            </label>

                            <div className="mt-2 flex items-center h-14 rounded-2xl border px-4">

                                <Calendar
                                    size={18}
                                    className="text-slate-400"
                                />

                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full px-3 outline-none"
                                />

                            </div>

                        </div>

                    </div>

                    {/* Upload Image */}

                    <div className="mt-10">

                        <label className="font-semibold">

                            Upload Image

                        </label>

                        <label className="mt-3 flex h-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-sky-300 transition hover:bg-sky-50">

                            {preview ? (

                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="h-full w-full object-cover"
                                />

                            ) : (

                                <>

                                    <Upload
                                        size={46}
                                        className="text-sky-600"
                                    />

                                    <p className="mt-5 text-slate-600">

                                        Click to upload image

                                    </p>

                                    <p className="mt-2 text-sm text-slate-400">

                                        JPG • PNG • JPEG

                                    </p>

                                </>

                            )}

                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />

                        </label>

                    </div>

                    {/* Button */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-10 flex h-16 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-700 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                    >

                        {loading ? (

                            <>

                                <div className="mr-3 h-6 w-6 animate-spin rounded-full border-4 border-white border-t-transparent"></div>

                                Publishing...

                            </>

                        ) : (

                            "🚀 Publish Post"

                        )}

                    </button>

                </form>

            </div>

        </section>

    );

}

export default CreatePost;