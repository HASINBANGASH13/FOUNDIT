import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const COLORS = ["#ef4444", "#22c55e"];

function PostTypeChart({ summary }) {

    const data = [
        {
            name: "Lost",
            value: summary.lostPosts,
        },
        {
            name: "Found",
            value: summary.foundPosts,
        },
    ];

    return (

        <div className="bg-white rounded-3xl shadow-xl p-8 h-full">

            <h2 className="text-2xl font-black text-slate-900">

                Lost vs Found

            </h2>

            <p className="text-slate-500 mt-2">

                Distribution of your posts.

            </p>

            <div className="h-80 mt-6">

                <ResponsiveContainer>

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={110}
                            innerRadius={60}
                            paddingAngle={4}
                        >

                            {data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />

                            ))}

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default PostTypeChart;