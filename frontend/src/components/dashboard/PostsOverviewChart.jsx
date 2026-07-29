import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

function PostsOverviewChart({ data }) {

    return (

        <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-black text-slate-900">

                Monthly Posts

            </h2>

            <p className="text-slate-500 mt-2">

                Posts created throughout the year.

            </p>

            <div className="mt-8 h-96">

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart
                        data={data}
                    >

                        <defs>

                            <linearGradient
                                id="colorPosts"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >

                                <stop
                                    offset="5%"
                                    stopColor="#0284c7"
                                    stopOpacity={0.8}
                                />

                                <stop
                                    offset="95%"
                                    stopColor="#0284c7"
                                    stopOpacity={0}
                                />

                            </linearGradient>

                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="month"
                        />

                        <YAxis />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="posts"
                            stroke="#0284c7"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorPosts)"
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default PostsOverviewChart;