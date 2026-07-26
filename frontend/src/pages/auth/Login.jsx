import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    ShieldCheck,
} from "lucide-react";
import { toast } from "react-toastify";

import { loginUser } from "../../api/authApi";
import useAuth from "../../hooks/useAuth";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const res = await loginUser(formData);

            login(
    res.data,
    res.token
);

            toast.success("Login Successful");

            navigate("/");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Login Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen grid lg:grid-cols-2">

            {/* LEFT SIDE */}

            <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-sky-600 via-indigo-700 to-violet-800 text-white">

                <div className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl -top-20 -left-20"></div>

                <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

                <div className="relative z-10 flex flex-col justify-center px-20">

                    <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-8">

                        <ShieldCheck size={42} />

                    </div>

                    <h1 className="text-6xl font-black leading-tight">

                        Welcome
                        <br />
                        Back.

                    </h1>

                    <p className="mt-8 text-lg text-blue-100 leading-8">

                        Find lost belongings, help others recover their valuables,
                        and connect with your community through FoundIt.

                    </p>

                </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="flex items-center justify-center bg-slate-100 px-6">

                <div className="w-full max-w-md">

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-[32px] shadow-2xl p-10"
                    >

                        <h2 className="text-4xl font-black">

                            Login

                        </h2>

                        <p className="text-slate-500 mt-3">

                            Welcome back to FoundIt

                        </p>

                        {/* Email */}

                        <div className="mt-10">

                            <label className="font-semibold">

                                Email

                            </label>

                            <div className="mt-2 flex items-center rounded-2xl border px-4 h-14">

                                <Mail
                                    size={20}
                                    className="text-slate-400"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full px-3 outline-none"
                                    required
                                />

                            </div>

                        </div>

                        {/* Password */}

                        <div className="mt-6">

                            <label className="font-semibold">

                                Password

                            </label>

                            <div className="mt-2 flex items-center rounded-2xl border px-4 h-14">

                                <Lock
                                    size={20}
                                    className="text-slate-400"
                                />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="w-full px-3 outline-none"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >

                                    {showPassword
                                        ? <EyeOff size={20} />
                                        : <Eye size={20} />}

                                </button>

                            </div>

                        </div>

                        {/* Forgot Password */}

                        <div className="flex justify-end mt-4">

                            <button
                                type="button"
                                className="text-blue-600 font-semibold hover:text-indigo-700"
                            >

                                Forgot Password?

                            </button>

                        </div>

                        {/* Login Button */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 w-full h-14 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-700 text-white font-bold flex justify-center items-center gap-3 hover:scale-[1.02] transition disabled:opacity-70 disabled:cursor-not-allowed"
                        >

                            {loading
                                ? "Signing In..."
                                : "Login"}

                            <ArrowRight size={20} />

                        </button>

                        {/* Register */}

                        <div className="text-center mt-8">

                            Don't have an account?

                            <Link
                                to="/register"
                                className="text-blue-600 font-bold ml-2 hover:text-indigo-700"
                            >

                                Register

                            </Link>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default Login;