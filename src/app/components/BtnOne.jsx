function BtnOne({ name, className, href }) {
    return (
        <>
            <a
                href={href}
                target="_self"
            >
                <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm
            py-2 lg:py-2 px-4 lg:px-7 rounded flex justify-center items-center cursor-pointer ${className}`}>
                    {name}

                    <span className="material-symbols-outlined text-2xl cursor-pointer">
                        arrow_forward
                    </span>
                </button>
            </a>

        </>
    )
}
export default BtnOne;