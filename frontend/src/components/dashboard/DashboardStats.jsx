import {
    Package,
    Search,
    CheckCircle,
    ArchiveRestore,
    Gift,
} from "lucide-react";

import StatCard from "./StatCard";

function DashboardStats({ summary }) {

    return (

        <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-6">

            <StatCard
                title="Total Posts"
                value={summary.totalPosts}
                icon={<Package size={28} />}
                color="bg-indigo-600"
            />

            <StatCard
                title="Lost Posts"
                value={summary.lostPosts}
                icon={<Search size={28} />}
                color="bg-red-500"
            />

            <StatCard
                title="Found Posts"
                value={summary.foundPosts}
                icon={<Gift size={28} />}
                color="bg-green-500"
            />

            <StatCard
                title="Active"
                value={summary.activePosts}
                icon={<ArchiveRestore size={28} />}
                color="bg-yellow-500"
            />

            <StatCard
                title="Resolved"
                value={summary.resolvedPosts}
                icon={<CheckCircle size={28} />}
                color="bg-emerald-600"
            />

        </div>

    );

}

export default DashboardStats;