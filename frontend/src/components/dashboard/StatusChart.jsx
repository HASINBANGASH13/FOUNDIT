import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function StatusChart({ summary }) {

    const data = [

        {
            name: "Active",
            posts: summary.activePosts,
        },

        {
            name: "Resolved",
            posts: summary.resolvedPosts,
        },

    ];

    return (

        <div className="bg-white rounded-3xl shadow-xl p-8 h-full">

            <h2 className="text-2xl font-black text-slate-900">

                Status Overview

            </h2>

            <p className="text-slate-500 mt-2">

                Active vs Resolved posts.

            </p>

            <div className="h-80 mt-6">

                <ResponsiveContainer>

                    <BarChart
                        data={data}
                    >

                        <XAxis
                            dataKey="name"
                        />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="posts"
                            radius={[8, 8, 0, 0]}
                            fill="#0284c7"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default StatusChart;