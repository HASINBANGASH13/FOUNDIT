import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import CreatePost from "../pages/posts/CreatePost";
import EditPost from "../pages/posts/EditPost";
import PostDetails from "../pages/posts/PostDetails";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<Home />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Register />} />

                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/create-post" element={<CreatePost />} />

                    <Route path="/edit-post/:id" element={<EditPost />} />

                    <Route path="/post/:id" element={<PostDetails />} />

                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;
