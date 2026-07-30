import { useEffect, useState } from "react";

import { getAdminSummary } from "../../api/adminApi";

import SummaryCards from "../../components/admin/SummaryCards";
import StatsChart from "../../components/admin/StatsChart";

function AdminDashboard() {

    const [summary, setSummary] = useState({

        totalUsers: 0,
        totalPosts: 0,
        totalCategories: 0,
        lostPosts: 0,
        foundPosts: 0,
        activePosts: 0,
        resolvedPosts: 0,

    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadSummary();

    }, []);

    const loadSummary = async () => {

        try {

            const res = await getAdminSummary();

            setSummary(res.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="flex items-center justify-center min-h-[70vh]">

                <div className="w-16 h-16 border-4 border-sky-600 border-t-transparent rounded-full animate-spin"></div>

            </div>

        );

    }

    return (

        <section>

            {/* Header */}

            <div className="mb-10">

                <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">

                    Admin Panel

                </span>

                <h1 className="mt-5 text-5xl font-black text-slate-900">

                    Dashboard Overview

                </h1>

                <p className="mt-4 text-lg text-slate-500">

                    Monitor users, posts, categories and platform activity from one place.

                </p>

            </div>

            {/* Summary Cards */}

            <SummaryCards summary={summary} />

            {/* Charts */}

            <StatsChart summary={summary} />

        </section>

    );

}

export default AdminDashboard;