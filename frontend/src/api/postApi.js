import api from "./axios";

export const getPosts = async (params = {}) => {

    const { data } = await api.get("/posts", {
        params,
    });

    return data;

};

export const getPost = async (id) => {

    const { data } = await api.get(`/posts/${id}`);

    return data;

};

export const createPost = async (formData) => {

    const { data } = await api.post(
        "/posts",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return data;

};

export const updatePost = async (id, formData) => {

    const { data } = await api.put(
        `/posts/${id}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return data;

};

export const deletePost = async (id) => {

    const { data } = await api.delete(`/posts/${id}`);

    return data;

};

export const resolvePost = async (id) => {

    const { data } = await api.patch(
        `/posts/${id}/resolve`
    );

    return data;

};