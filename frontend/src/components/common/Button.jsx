function Button({

    children,

    type = "button",

    onClick,

    className = "",

    disabled = false,

}) {

    return (

        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                h-12
                rounded-xl
                px-6
                font-semibold
                transition-all
                duration-300
                bg-gradient-to-r
                from-sky-600
                to-indigo-700
                text-white
                hover:scale-105
                disabled:opacity-60
                disabled:cursor-not-allowed
                ${className}
            `}
        >

            {children}

        </button>

    );

}

export default Button;