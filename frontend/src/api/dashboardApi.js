import api from "./axios";

/*
|--------------------------------------------------------------------------
| Dashboard Summary
|--------------------------------------------------------------------------
*/

export const getDashboardSummary = async () => {

    const { data } = await api.get("/dashboard/summary");

    return data;

};

/*
|--------------------------------------------------------------------------
| Dashboard Recent Posts
|--------------------------------------------------------------------------
*/

export const getDashboardPosts = async () => {

    const { data } = await api.get("/dashboard/my-posts");

    return data;

};