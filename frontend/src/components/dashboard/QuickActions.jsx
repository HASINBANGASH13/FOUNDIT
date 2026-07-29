import { Link } from "react-router-dom";
import {
    PlusCircle,
    FolderOpen,
    Home,
} from "lucide-react";

function QuickActions() {

    const actions = [
        {
            title: "Create Post",
            icon: <PlusCircle size={24} />,
            link: "/create-post",
            color: "from-sky-500 to-indigo-600",
        },
        {
            title: "My Posts",
            icon: <FolderOpen size={24} />,
            link: "/my-posts",
            color: "from-emerald-500 to-green-600",
        },
        {
            title: "Home",
            icon: <Home size={24} />,
            link: "/",
            color: "from-orange-500 to-red-500",
        },
    ];

    return (

        <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-black mb-6">

                Quick Actions

            </h2>

            <div className="space-y-4">

                {actions.map((action, index) => (

                    <Link
                        key={index}
                        to={action.link}
                        className={`flex items-center gap-4 rounded-2xl bg-gradient-to-r ${action.color} text-white p-5 hover:scale-[1.03] transition`}
                    >

                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">

                            {action.icon}

                        </div>

                        <span className="font-bold text-lg">

                            {action.title}

                        </span>

                    </Link>

                ))}

            </div>

        </div>

    );

}

export default QuickActions;