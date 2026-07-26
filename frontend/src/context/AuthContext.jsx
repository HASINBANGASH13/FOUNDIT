import { createContext, useEffect, useState } from "react";
import { getProfile } from "../api/authApi";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (userData, token) => {

        localStorage.setItem("token", token);

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

        setUser(userData);

    };

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser(null);

    };

    useEffect(() => {

        const loadUser = async () => {

            try {

                const token = localStorage.getItem("token");

                if (!token) {
                    setLoading(false);
                    return;
                }

                // Load cached user immediately
                const savedUser = localStorage.getItem("user");

                if (savedUser) {
                    setUser(JSON.parse(savedUser));
                }

                // Verify token & get latest user
                const response = await getProfile();

                console.log("Profile Response:", response);

                setUser(response.data);

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data)
                );

            } catch (error) {

                console.log(error);

                logout();

            } finally {

                setLoading(false);

            }

        };

        loadUser();

    }, []);

    return (

        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;