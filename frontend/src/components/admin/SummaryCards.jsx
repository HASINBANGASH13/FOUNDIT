import {
    Users,
    Package,
    FolderOpen,
    CheckCircle,
    AlertTriangle,
    Search,
    Check,
} from "lucide-react";

function SummaryCards({ summary }) {

    const cards = [

        {
            title: "Users",
            value: summary.totalUsers,
            icon: Users,
            color: "bg-blue-500",
        },

        {
            title: "Posts",
            value: summary.totalPosts,
            icon: Package,
            color: "bg-purple-500",
        },

        {
            title: "Categories",
            value: summary.totalCategories,
            icon: FolderOpen,
            color: "bg-amber-500",
        },

        {
            title: "Active",
            value: summary.activePosts,
            icon: CheckCircle,
            color: "bg-green-500",
        },

        {
            title: "Resolved",
            value: summary.resolvedPosts,
            icon: Check,
            color: "bg-emerald-500",
        },

        {
            title: "Lost",
            value: summary.lostPosts,
            icon: AlertTriangle,
            color: "bg-red-500",
        },

        {
            title: "Found",
            value: summary.foundPosts,
            icon: Search,
            color: "bg-sky-500",
        },

    ];

    return (

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

            {cards.map((card) => {

                const Icon = card.icon;

                return (

                    <div

                        key={card.title}

                        className="bg-white rounded-3xl shadow-lg p-7 hover:-translate-y-1 transition"

                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-slate-500">

                                    {card.title}

                                </p>

                                <h2 className="text-4xl font-black mt-3">

                                    {card.value}

                                </h2>

                            </div>

                            <div

                                className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white`}

                            >

                                <Icon size={30} />

                            </div>

                        </div>

                    </div>

                );

            })}

        </div>

    );

}

export default SummaryCards;