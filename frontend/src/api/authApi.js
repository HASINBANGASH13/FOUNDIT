import api from "./axios";

export const registerUser = async (userData) => {

    const response = await api.post(
        "/auth/register",
        userData
    );

    return response.data;

};

export const loginUser = async (credentials) => {

    const response = await api.post(
        "/auth/login",
        credentials
    );

    return response.data;

};

export const getProfile = async () => {

    const response = await api.get("/auth/profile");

    return response.data;

};
export const updateProfile = async (body) => {

    const response = await api.put(
        "/auth/profile",
        body
    );

    return response.data;

};