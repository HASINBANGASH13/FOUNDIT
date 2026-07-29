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
        <div className="mt-14 bg-white/5 border border-white/10 shadow-[0_30px_60px_rgba(255,255,255,0.06)] backdrop-blur-xl rounded-3xl p-8">
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
                        className="w-full h-14 rounded-xl border border-white/10 bg-slate-950 text-white pl-12 pr-4 outline-none ring-white/10 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                    />
                </div>

                {/* Category */}
                <select
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                    className="h-14 rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none ring-white/10 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                >
                    <option value="" className="bg-slate-950 text-white">
                        All Categories
                    </option>
                    {categories.map((category) => (
                        <option
                            key={category._id}
                            value={category._id}
                            className="bg-slate-950 text-white"
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
                    className="h-14 rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none ring-white/10 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                >
                    <option value="" className="bg-slate-950 text-white">
                        All Types
                    </option>
                    <option value="lost" className="bg-slate-950 text-white">
                        Lost
                    </option>
                    <option value="found" className="bg-slate-950 text-white">
                        Found
                    </option>
                </select>

                {/* Status */}
                <select
                    name="status"
                    value={filters.status}
                    onChange={handleChange}
                    className="h-14 rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none ring-white/10 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                >
                    <option value="" className="bg-slate-950 text-white">
                        All Status
                    </option>
                    <option value="active" className="bg-slate-950 text-white">
                        Active
                    </option>
                    <option value="resolved" className="bg-slate-950 text-white">
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
                    className="h-14 rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none ring-white/10 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                />
            </div>
        </div>
    );

}

export default SearchFilter;