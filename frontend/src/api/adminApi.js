import api from "./axios";

/*
|--------------------------------------------------------------------------
| Dashboard
|--------------------------------------------------------------------------
*/

export const getAdminSummary = async () => {

    const { data } = await api.get("/admin/summary");

    return data;

};

/*
|--------------------------------------------------------------------------
| Users
|--------------------------------------------------------------------------
*/

export const getAllUsers = async (params = {}) => {

    const { data } = await api.get(
        "/admin/users",
        {
            params,
        }
    );

    return data;

};

export const deleteUser = async (id) => {

    const { data } = await api.delete(
        `/admin/users/${id}`
    );

    return data;

};

export const updateUserRole = async (id, role) => {

    const { data } = await api.put(

        `/admin/users/${id}/role`,

        { role }

    );

    return data;

};

/*
|--------------------------------------------------------------------------
| Posts
|--------------------------------------------------------------------------
*/

export const getAllPosts = async (params = {}) => {

    const { data } = await api.get(
        "/admin/posts",
        {
            params,
        }
    );

    return data;

};

export const deletePostAdmin = async (id) => {

    const { data } = await api.delete(
        `/admin/posts/${id}`
    );

    return data;

};

export const resolvePostAdmin = async (id) => {

    const { data } = await api.put(
        `/admin/posts/${id}/resolve`
    );

    return data;

};

/*
|--------------------------------------------------------------------------
| Categories
|--------------------------------------------------------------------------
*/

export const getAllCategories = async () => {

    const { data } = await api.get(
        "/admin/categories"
    );

    return data;

};

export const createCategory = async (body) => {

    const { data } = await api.post(
        "/admin/categories",
        body
    );

    return data;

};

export const updateCategory = async (id, body) => {

    const { data } = await api.put(
        `/admin/categories/${id}`,
        body
    );

    return data;

};

export const deleteCategory = async (id) => {

    const { data } = await api.delete(
        `/admin/categories/${id}`
    );

    return data;

};