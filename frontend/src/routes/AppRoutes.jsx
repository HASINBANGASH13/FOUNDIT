import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";


import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import CreatePost from "../pages/posts/CreatePost";
import EditPost from "../pages/posts/EditPost";
import PostDetails from "../pages/posts/PostDetails";
import NotFound from "../pages/NotFound";
import MyPosts from "../pages/dashboard/MyPosts";
import Profile from "../pages/profile/Profile";
function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<Home />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Register />} />

                    <Route
    path="/profile"
    element={
        <ProtectedRoute>
            <Profile />
        </ProtectedRoute>
    }
/>
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>} />

                    <Route path="/create-post" element={<ProtectedRoute>
                        <CreatePost />
                    </ProtectedRoute>} />

                    <Route path="/edit-post/:id" element={<ProtectedRoute>
                        <EditPost />
                    </ProtectedRoute>} />

                    <Route path="/posts/:id" element={<ProtectedRoute>
                        <PostDetails />
                    </ProtectedRoute>} />
                    <Route
                    path="/my-posts"
                    element={
                        <ProtectedRoute>
                            <MyPosts />
                        </ProtectedRoute>
                    }
                />

                </Route>

                

                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;
