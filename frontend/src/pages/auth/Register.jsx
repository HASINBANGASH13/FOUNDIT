import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    User,
    Mail,
    Phone,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    ShieldCheck,
} from "lucide-react";

import { toast } from "react-toastify";

import { registerUser } from "../../api/authApi";

function Register() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        phone: "",

        password: "",

        confirmPassword: "",

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.password ||
            !formData.confirmPassword
        ) {

            return toast.error("Please fill all fields.");

        }

        if (formData.password.length < 6) {

            return toast.error(
                "Password must be at least 6 characters."
            );

        }

        if (
            formData.password !==
            formData.confirmPassword
        ) {

            return toast.error(
                "Passwords do not match."
            );

        }

        try {

            setLoading(true);

            const body = {

                name: formData.name,

                email: formData.email,

                phone: formData.phone,

                password: formData.password,

            };

            const res = await registerUser(body);

            toast.success(
                res.message || "Registration Successful"
            );

            navigate("/login");

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Registration Failed"

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-sky-600 via-indigo-700 to-violet-800 text-white">

                <div className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl -top-20 -left-20"></div>

                <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

                <div className="relative z-10 flex flex-col justify-center px-20">

                    <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-8">

                        <ShieldCheck size={42} />

                    </div>

                    <h1 className="text-6xl font-black leading-tight">

                        Join
                        <br />
                        FoundIt.

                    </h1>

                    <p className="mt-8 text-lg text-blue-100 leading-8">

                        Create your free account and start helping people
                        recover their lost belongings while keeping your
                        own valuables safe.

                    </p>

                </div>

            </div>

            {/* RIGHT */}

            <div className="flex items-center justify-center bg-slate-100 px-6">

                <div className="w-full max-w-md">

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-[32px] shadow-2xl p-10"
                    >

                        <h2 className="text-4xl font-black">

                            Register

                        </h2>

                        <p className="text-slate-500 mt-3">

                            Create your FoundIt account

                        </p>
                                                {/* Full Name */}

                        <div className="mt-8">

                            <label className="font-semibold">

                                Full Name

                            </label>

                            <div className="mt-2 flex items-center rounded-2xl border px-4 h-14">

                                <User
                                    size={20}
                                    className="text-slate-400"
                                />

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-3 outline-none"
                                    required
                                />

                            </div>

                        </div>

                        {/* Email */}

                        <div className="mt-6">

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

                        {/* Phone */}

                        <div className="mt-6">

                            <label className="font-semibold">

                                Phone Number

                            </label>

                            <div className="mt-2 flex items-center rounded-2xl border px-4 h-14">

                                <Phone
                                    size={20}
                                    className="text-slate-400"
                                />

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="03XXXXXXXXX"
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
                                    placeholder="Enter password"
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

                        {/* Confirm Password */}

                        <div className="mt-6">

                            <label className="font-semibold">

                                Confirm Password

                            </label>

                            <div className="mt-2 flex items-center rounded-2xl border px-4 h-14">

                                <Lock
                                    size={20}
                                    className="text-slate-400"
                                />

                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm password"
                                    className="w-full px-3 outline-none"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >

                                    {showConfirmPassword
                                        ? <EyeOff size={20} />
                                        : <Eye size={20} />}

                                </button>

                            </div>

                        </div>

                        {/* Register Button */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 w-full h-14 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-700 text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition disabled:opacity-70 disabled:cursor-not-allowed"
                        >

                            {loading
                                ? "Creating Account..."
                                : "Register"}

                            <ArrowRight size={20} />

                        </button>

                        {/* Login */}

                        <div className="text-center mt-8">

                            Already have an account?

                            <Link
                                to="/login"
                                className="ml-2 font-bold text-sky-600 hover:text-indigo-700"
                            >

                                Login

                            </Link>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default Register;