import { Calendar, Phone, MapPin, FileText, Tag } from "lucide-react";

function PostForm({
    register,
    errors,
    categories,
}) {
    return (

        <div className="space-y-7">

            {/* Title */}

            <div>

                <label className="block mb-2 font-semibold">

                    Title

                </label>

                <div className="relative">

                    <Tag
                        size={18}
                        className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                        {...register("title", {
                            required: "Title is required",
                        })}
                        placeholder="e.g Lost iPhone 15 Pro"
                        className="w-full h-14 rounded-2xl border border-slate-300 pl-12 pr-4 outline-none focus:border-sky-500 transition"
                    />

                </div>

                <p className="text-red-500 text-sm mt-2">

                    {errors.title?.message}

                </p>

            </div>

            {/* Description */}

            <div>

                <label className="block mb-2 font-semibold">

                    Description

                </label>

                <div className="relative">

                    <FileText
                        size={18}
                        className="absolute left-4 top-5 text-slate-400"
                    />

                    <textarea
                        rows={5}
                        {...register("description", {
                            required: "Description is required",
                        })}
                        placeholder="Describe your item..."
                        className="w-full rounded-2xl border border-slate-300 pl-12 pr-4 pt-4 outline-none focus:border-sky-500 transition resize-none"
                    />

                </div>

                <p className="text-red-500 text-sm mt-2">

                    {errors.description?.message}

                </p>

            </div>

            {/* Category */}

            <div>

                <label className="block mb-2 font-semibold">

                    Category

                </label>

                <select
                    {...register("category", {
                        required: "Please select category",
                    })}
                    className="w-full h-14 rounded-2xl border border-slate-300 px-4 outline-none focus:border-sky-500"
                >

                    <option value="">

                        Select Category

                    </option>

                    {categories.map(category => (

                        <option
                            key={category._id}
                            value={category._id}
                        >

                            {category.name}

                        </option>

                    ))}

                </select>

                <p className="text-red-500 text-sm mt-2">

                    {errors.category?.message}

                </p>

            </div>

            {/* Location */}

            <div className="grid md:grid-cols-2 gap-5">

                <div>

                    <label className="block mb-2 font-semibold">

                        City

                    </label>

                    <div className="relative">

                        <MapPin
                            size={18}
                            className="absolute left-4 top-4 text-slate-400"
                        />

                        <input
                            {...register("city", {
                                required: "City is required",
                            })}
                            placeholder="City"
                            className="w-full h-14 rounded-2xl border border-slate-300 pl-12 outline-none focus:border-sky-500"
                        />

                    </div>

                </div>

                <div>

                    <label className="block mb-2 font-semibold">

                        Area

                    </label>

                    <input
                        {...register("area", {
                            required: "Area is required",
                        })}
                        placeholder="Area"
                        className="w-full h-14 rounded-2xl border border-slate-300 px-4 outline-none focus:border-sky-500"
                    />

                </div>

            </div>

            {/* Address */}

            <div>

                <label className="block mb-2 font-semibold">

                    Address

                </label>

                <input
                    {...register("address")}
                    placeholder="Street / Landmark"
                    className="w-full h-14 rounded-2xl border border-slate-300 px-4 outline-none focus:border-sky-500"
                />

            </div>

            {/* Contact + Date */}

            <div className="grid md:grid-cols-2 gap-5">

                <div>

                    <label className="block mb-2 font-semibold">

                        Contact Number

                    </label>

                    <div className="relative">

                        <Phone
                            size={18}
                            className="absolute left-4 top-4 text-slate-400"
                        />

                        <input
                            {...register("contactNumber", {
                                required: "Contact number required",
                            })}
                            placeholder="03001234567"
                            className="w-full h-14 rounded-2xl border border-slate-300 pl-12 outline-none focus:border-sky-500"
                        />

                    </div>

                </div>

                <div>

                    <label className="block mb-2 font-semibold">

                        Date

                    </label>

                    <div className="relative">

                        <Calendar
                            size={18}
                            className="absolute left-4 top-4 text-slate-400"
                        />

                        <input
                            type="date"
                            {...register("date", {
                                required: "Date required",
                            })}
                            className="w-full h-14 rounded-2xl border border-slate-300 pl-12 outline-none focus:border-sky-500"
                        />

                    </div>

                </div>

            </div>

        </div>

    );
}

export default PostForm;