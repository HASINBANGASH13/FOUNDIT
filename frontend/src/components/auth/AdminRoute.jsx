import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function AdminRoute({ children }) {

    const { user, loading } = useAuth();

    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                <div className="w-16 h-16 border-4 border-sky-600 border-t-transparent rounded-full animate-spin"></div>

            </div>

        );

    }

    // Not Logged In

    if (!user) {

        return <Navigate to="/login" replace />;

    }

    // Not Admin

    if (user.role !== "admin") {

        return <Navigate to="/" replace />;

    }

    return children;

}

export default AdminRoute;