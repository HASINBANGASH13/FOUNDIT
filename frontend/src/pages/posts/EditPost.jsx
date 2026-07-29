import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
    Package,
    Phone,
    Calendar,
    MapPin,
    Upload,
} from "lucide-react";

import { getCategories } from "../../api/categoryApi";
import {
    getPost,
    updatePost,
} from "../../api/postApi";

const API_URL = "http://localhost:5000";

function EditPost() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    const [pageLoading, setPageLoading] = useState(true);

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

        fetchCategories();

        fetchPost();

    }, []);

    const fetchCategories = async () => {

        try {

            const res = await getCategories();

            setCategories(res.data);

        } catch (error) {

            console.log(error);

            toast.error("Failed to load categories.");

        }

    };

    const fetchPost = async () => {

        try {

            const res = await getPost(id);

            const post = res.data;

            setPreview(
                post.image
                    ? `${API_URL}${post.image}`
                    : ""
            );

            setFormData({

                title: post.title,

                description: post.description,

                type: post.type,

                category: post.category?._id,

                city: post.location?.city,

                area: post.location?.area,

                address: post.location?.address,

                contactNumber: post.contactNumber,

                date: post.date
                    ? post.date.substring(0, 10)
                    : "",

            });

        } catch (error) {

            toast.error("Failed to load post.");

        } finally {

            setPageLoading(false);

        }

    };

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

            if (image) {

                data.append("image", image);

            }

            const res = await updatePost(id, data);

            toast.success(res.message);

            navigate("/my-posts");

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to update post."

            );

        } finally {

            setLoading(false);

        }

    };

    if (pageLoading) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                <div className="w-16 h-16 rounded-full border-4 border-sky-600 border-t-transparent animate-spin"></div>

            </div>

        );

    }
    if (pageLoading) {

    return (

        <div className="min-h-screen flex items-center justify-center">

            <div className="w-16 h-16 rounded-full border-4 border-sky-600 border-t-transparent animate-spin"></div>

        </div>

    );

}

    return (

        <section className="min-h-screen py-16 bg-gradient-to-br from-slate-50 via-white to-sky-50">

            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center">

                    <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 text-indigo-700 font-semibold">

                        Lost & Found

                    </span>

                    <h1 className="mt-6 text-5xl font-black">

                        Edit Post

                    </h1>

                    <p className="mt-5 text-lg text-slate-500">

                        Update your Lost or Found post.

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
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
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
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
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
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
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
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
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

                            Update Image

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

                                        Click to choose a new image

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

                    {/* Submit Button */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-10 flex h-16 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-600 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                    >

                        {loading ? (

                            <>

                                <div className="mr-3 h-6 w-6 rounded-full border-4 border-white border-t-transparent animate-spin"></div>

                                Updating...

                            </>

                        ) : (

                            "💾 Update Post"

                        )}

                    </button>

                </form>

            </div>

        </section>

    );

}

export default EditPost;