import api from "./axios";

export const getMyPosts = async () => {

    const { data } = await api.get(
        "/dashboard/my-posts"
    );

    return data;

};