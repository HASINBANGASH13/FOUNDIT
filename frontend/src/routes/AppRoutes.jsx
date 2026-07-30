import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// Route Protection
import ProtectedRoute from "../components/auth/ProtectedRoute";
import AdminRoute from "../components/auth/AdminRoute";

// User Pages
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import MyPosts from "../pages/dashboard/MyPosts";
import Profile from "../pages/profile/Profile";

// Post Pages
import CreatePost from "../pages/posts/CreatePost";
import EditPost from "../pages/posts/EditPost";
import PostDetails from "../pages/posts/PostDetails";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminUsers from "../pages/admin/AdminUsers";
import AdminPosts from "../pages/admin/AdminPosts";
import AdminCategories from "../pages/admin/AdminCategories";

// Other
import NotFound from "../pages/NotFound";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                {/* ===========================
                    USER ROUTES
                =========================== */}

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/register"
                        element={<Register />}
                    />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/my-posts"
                        element={
                            <ProtectedRoute>
                                <MyPosts />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/create-post"
                        element={
                            <ProtectedRoute>
                                <CreatePost />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/edit-post/:id"
                        element={
                            <ProtectedRoute>
                                <EditPost />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/posts/:id"
                        element={
                            <ProtectedRoute>
                                <PostDetails />
                            </ProtectedRoute>
                        }
                    />

                </Route>

                {/* ===========================
                    ADMIN ROUTES
                =========================== */}

                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <AdminLayout />
                        </AdminRoute>
                    }
                >

                    <Route
                        index
                        element={<AdminDashboard />}
                    />

                    <Route
                        path="users"
                        element={<AdminUsers />}
                    />

                    <Route
                        path="posts"
                        element={<AdminPosts />}
                    />

                    <Route
                        path="categories"
                        element={<AdminCategories />}
                    />

                </Route>

                {/* ===========================
                    404
                =========================== */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;