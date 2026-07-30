import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";

import {
    Bar,
    Doughnut,
} from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

function StatsChart({ summary }) {

    const barData = {

        labels: ["Lost", "Found"],

        datasets: [

            {

                label: "Posts",

                data: [

                    summary.lostPosts,

                    summary.foundPosts,

                ],

                backgroundColor: [

                    "#ef4444",

                    "#0ea5e9",

                ],

                borderRadius: 10,

            },

        ],

    };

    const doughnutData = {

        labels: [

            "Active",

            "Resolved",

        ],

        datasets: [

            {

                data: [

                    summary.activePosts,

                    summary.resolvedPosts,

                ],

                backgroundColor: [

                    "#22c55e",

                    "#f59e0b",

                ],

                borderWidth: 0,

            },

        ],

    };

    return (

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

            {/* Lost vs Found */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">

                    Lost vs Found Posts

                </h2>

                <Bar data={barData} />

            </div>

            {/* Active vs Resolved */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">

                    Active vs Resolved

                </h2>

                <div className="w-72 mx-auto">

                    <Doughnut data={doughnutData} />

                </div>

            </div>

        </div>

    );

}

export default StatsChart;