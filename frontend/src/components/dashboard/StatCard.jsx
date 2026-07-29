function StatCard({
    title,
    value,
    icon,
    color,
}) {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-slate-500 text-sm font-medium">

                        {title}

                    </p>

                    <h2 className="mt-3 text-4xl font-black text-slate-900">

                        {value}

                    </h2>

                </div>

                <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${color}`}
                >
                    {icon}
                </div>

            </div>

        </div>

    );

}

export default StatCard;