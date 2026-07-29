import { useEffect, useState } from "react";

import {
    User,
    Mail,
    Phone,
    ShieldCheck,
    Save,
} from "lucide-react";

import { toast } from "react-toastify";

import {
    getProfile,
    updateProfile,
} from "../../api/authApi";

function Profile() {

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [user, setUser] = useState({

        name: "",

        email: "",

        phone: "",

        role: "",

    });

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

        try {

            const res = await getProfile();

            setUser(res.data);

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to load profile."

            );

        } finally {

            setLoading(false);

        }

    };

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setSaving(true);

            const res = await updateProfile({

                name: user.name,

                phone: user.phone,

            });

            setUser(res.data);

            toast.success(

                res.message ||

                "Profile updated successfully."

            );

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to update profile."

            );

        } finally {

            setSaving(false);

        }

    };

    if (loading) {

        return (

            <div className="min-h-screen flex justify-center items-center">

                <div className="w-16 h-16 rounded-full border-4 border-sky-600 border-t-transparent animate-spin"></div>

            </div>

        );

    }

    return (

        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 py-12">

            <div className="max-w-3xl mx-auto px-6">

                <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden">

                    {/* Header */}

                    <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-700 p-10 text-white">

                        <div className="flex items-center gap-6">

                            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-5xl font-black">

                                {user.name?.charAt(0).toUpperCase()}

                            </div>

                            <div>

                                <h1 className="text-4xl font-black">

                                    {user.name}

                                </h1>

                                <p className="mt-2 text-sky-100">

                                    Manage your profile information

                                </p>

                                <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">

                                    <ShieldCheck size={18} />

                                    {user.role}

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Form */}

                    <form
                        onSubmit={handleSubmit}
                        className="p-10"
                    >                        {/* Name */}

                        <div>

                            <label className="font-semibold text-slate-700">

                                Full Name

                            </label>

                            <div className="mt-2 flex items-center h-14 rounded-2xl border border-slate-200 px-4">

                                <User
                                    size={20}
                                    className="text-slate-400"
                                />

                                <input
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    className="w-full px-3 outline-none"
                                    placeholder="Enter your full name"
                                    required
                                />

                            </div>

                        </div>

                        {/* Email */}

                        <div className="mt-6">

                            <label className="font-semibold text-slate-700">

                                Email Address

                            </label>

                            <div className="mt-2 flex items-center h-14 rounded-2xl border border-slate-200 bg-slate-100 px-4">

                                <Mail
                                    size={20}
                                    className="text-slate-400"
                                />

                                <input
                                    type="email"
                                    value={user.email}
                                    readOnly
                                    className="w-full px-3 bg-transparent outline-none text-slate-500 cursor-not-allowed"
                                />

                            </div>

                            <p className="mt-2 text-sm text-slate-500">

                                Your email cannot be changed.

                            </p>

                        </div>

                        {/* Phone */}

                        <div className="mt-6">

                            <label className="font-semibold text-slate-700">

                                Phone Number

                            </label>

                            <div className="mt-2 flex items-center h-14 rounded-2xl border border-slate-200 px-4">

                                <Phone
                                    size={20}
                                    className="text-slate-400"
                                />

                                <input
                                    type="text"
                                    name="phone"
                                    value={user.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 outline-none"
                                    placeholder="03XXXXXXXXX"
                                    required
                                />

                            </div>

                        </div>

                        {/* Save Button */}

                        <button
                            type="submit"
                            disabled={saving}
                            className="mt-10 w-full h-14 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-700 text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition disabled:opacity-70 disabled:cursor-not-allowed"
                        >

                            <Save size={20} />

                            {saving
                                ? "Saving Changes..."
                                : "Save Changes"}

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

}

export default Profile;