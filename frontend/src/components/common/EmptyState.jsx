import { SearchX } from "lucide-react";

function EmptyState({ title, description }) {

    return (

        <div className="py-24 flex flex-col items-center text-center">

            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">

                <SearchX
                    size={44}
                    className="text-slate-500"
                />

            </div>

            <h2 className="mt-8 text-3xl font-bold">

                {title}

            </h2>

            <p className="mt-3 text-slate-500 max-w-md">

                {description}

            </p>

        </div>

    );

}

export default EmptyState;