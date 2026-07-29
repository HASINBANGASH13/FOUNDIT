import { useEffect, useState } from "react";

import {
    getDashboardSummary,
    getDashboardPosts,
} from "../../api/dashboardApi";

import DashboardStats from "../../components/dashboard/DashboardStats";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentPosts from "../../components/dashboard/RecentPosts";
import PostsOverviewChart from "../../components/dashboard/PostsOverviewChart";
import PostTypeChart from "../../components/dashboard/PostTypeChart";
import StatusChart from "../../components/dashboard/StatusChart";
import useAuth from "../../hooks/useAuth";

function Dashboard() {

    const { user } = useAuth();

    const [summary, setSummary] = useState({
        totalPosts: 0,
        lostPosts: 0,
        foundPosts: 0,
        activePosts: 0,
        resolvedPosts: 0,
        monthlyPosts: [],
    });

    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const [summaryRes, postsRes] = await Promise.all([
                    getDashboardSummary(),
                    getDashboardPosts(),
                ]);

                setSummary(summaryRes.data);

                setPosts(postsRes.data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        fetchDashboard();

    }, []);

    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center bg-slate-100">

                <div className="w-16 h-16 rounded-full border-4 border-sky-600 border-t-transparent animate-spin"></div>

            </div>

        );

    }

    return (

        <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-sky-50 py-10">

            <div className="max-w-7xl mx-auto px-6">

                {/* ================= Welcome Card ================= */}

                <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                        <div className="flex items-center gap-6">

                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-sky-600 to-indigo-700 flex items-center justify-center text-white text-4xl font-black shadow-lg">

                                {user?.name
                                    ? user.name.charAt(0).toUpperCase()
                                    : "U"}

                            </div>

                            <div>

                                <p className="text-slate-500 text-lg">

                                    Welcome Back 👋

                                </p>

                                <h1 className="text-5xl font-black text-slate-900 mt-2">

                                    {user?.name || "User"}

                                </h1>

                                <p className="text-slate-500 mt-2">

                                    {user?.email}

                                </p>

                                <span className="inline-block mt-5 px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-bold">

                                    {user?.role
                                        ? user.role.toUpperCase()
                                        : "USER"}

                                </span>

                            </div>

                        </div>

                        <div className="max-w-lg">

                            <h2 className="text-3xl font-black text-slate-900">

                                Lost & Found Dashboard

                            </h2>

                            <p className="mt-4 text-slate-600 leading-8">

                                Welcome to your personal dashboard.
                                Manage your lost and found posts,
                                monitor statistics, resolve items,
                                and track your activity in one place.

                            </p>

                        </div>

                    </div>

                </div>

                {/* ================= Statistics ================= */}

                <DashboardStats summary={summary} />

                {/* ================= Monthly Chart ================= */}

                <div className="mt-10">

                    <PostsOverviewChart
                        data={summary.monthlyPosts || []}
                    />

                </div>

                <div className="grid lg:grid-cols-2 gap-8 mt-10">

                    <PostTypeChart
                        summary={summary}
                    />

                    <StatusChart
                        summary={summary}
                    />

                </div>
                {/* ================= Bottom Section ================= */}

                <div className="mt-10 grid xl:grid-cols-3 gap-8">

                    <div className="xl:col-span-2">

                        <RecentPosts
                            posts={posts}
                        />

                    </div>

                    <div>

                        <QuickActions />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Dashboard;