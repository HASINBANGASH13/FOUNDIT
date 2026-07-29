function SectionTitle({

    badge,

    title,

    subtitle,

}) {

    return (

        <div className="text-center">

            <span className="inline-flex rounded-full bg-sky-100 text-sky-700 px-5 py-2 font-semibold">

                {badge}

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">

                {title}

            </h2>

            <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">

                {subtitle}

            </p>

        </div>

    );

}

export default SectionTitle;