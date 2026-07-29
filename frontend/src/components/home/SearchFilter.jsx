import { Search } from "lucide-react";

function SearchFilter({
    filters,
    setFilters,
    categories = [],
}) {

    const handleChange = (e) => {

        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });

    };

    return (

        <div className="mt-14 bg-white rounded-3xl shadow-xl p-8 border border-slate-100">

            <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-5">

                {/* Search */}

                <div className="lg:col-span-2 relative">

                    <Search
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        size={20}
                    />

                    <input
                        type="text"
                        name="keyword"
                        placeholder="Search title..."
                        value={filters.keyword}
                        onChange={handleChange}
                        className="w-full h-14 rounded-xl border border-slate-200 pl-12 pr-4 outline-none focus:ring-2 focus:ring-sky-500"
                    />

                </div>

                {/* Category */}

                <select
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                    className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
                >

                    <option value="">
                        All Categories
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

                {/* Type */}

                <select
                    name="type"
                    value={filters.type}
                    onChange={handleChange}
                    className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
                >

                    <option value="">
                        All Types
                    </option>

                    <option value="lost">
                        Lost
                    </option>

                    <option value="found">
                        Found
                    </option>

                </select>

                {/* Status */}

                <select
                    name="status"
                    value={filters.status}
                    onChange={handleChange}
                    className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
                >

                    <option value="">
                        All Status
                    </option>

                    <option value="active">
                        Active
                    </option>

                    <option value="resolved">
                        Resolved
                    </option>

                </select>

                {/* City */}

                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={filters.city}
                    onChange={handleChange}
                    className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
                />

            </div>

        </div>

    );

}

export default SearchFilter;