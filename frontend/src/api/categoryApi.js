import api from "./axios";

export const getCategories = async () => {

    const { data } = await api.get("/categories");

    return data;

};

export const createCategory = async (body) => {

    const { data } = await api.post(
        "/categories",
        body
    );

    return data;

};