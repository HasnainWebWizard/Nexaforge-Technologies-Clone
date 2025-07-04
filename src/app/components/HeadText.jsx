'use client';
function HeadText({topic,heading,description, className, border}) {
    function scrollitdown(){
        window.scroll({
            top: 460,
            behavior: 'smooth'
        });
    }
    return (
        <>
            <article className={`h-120 flex flex-col justify-center ${className}`}>
                <div className={`font-semibold text-2xl text-[#000000b4] ${className}`}>{topic}</div>

                <h1 className="text-4xl md:text-6xl font-bold my-3 mb-5">
                     {heading}</h1>

                <p className="font-medium lg:text-2xl text-[#000000be] ">
                    {description}
                </p>

                <div className={` mt-5 border border-black w-12 h-12 flex justify-center items-center ${border}`} onClick={scrollitdown}>
                    <span className={`material-symbols-outlined text-2xl cursor-pointer ${className}`}>
                        arrow_downward
                    </span>
                </div>
            </article>
        </>
    );
}
export default HeadText;
