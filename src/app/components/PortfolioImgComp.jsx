import Image from "next/image";

function PortfolioImgComp({ title, src1, heading1, src2, heading2, src3, heading3, src4, heading4, href }) {
    return (
        <>
            <h1 className="py-10 text-4xl lg:text-5xl pl-20 font-bold text-[#333333]">{title}</h1>
            <section
                className={`grid grid-cols-1 lg:grid-cols-2 [grid-auto-rows:minmax(450px,_auto)]`}
            >

                <div className="relative w-full h-full min-h-[450px] overflow-hidden flex justify-center items-center">
                    <Image
                        src={src1}
                        alt="Portfolio Background"
                        fill
                        className="object-cover object-center transition-transform duration-300 hover:scale-110 z-0"
                    />

                    <div>
                        <div className="relative z-10 text-white p-20 flex justify-center items-center flex-col">
                            <h1 className="text-3xl font-bold mb-4 " style={{ textShadow: '2px 2px 4px black' }}>
                                {heading1}
                            </h1>

                            <a 
                            href={href}
                            className="hover:text-cyan-500 font-bold text-sm flex items-center gap-2 cursor-pointer duration-300 w-full py-2">
                                Quote Now
                                <span className="material-symbols-outlined">
                                    arrow_forward
                                </span>
                            </a>
                        </div>

                    </div>
                </div>



                <div className="relative w-full h-full min-h-[450px] overflow-hidden flex justify-center items-center">
                    <Image
                        src={src2}
                        alt="Portfolio Background"
                        fill
                        className="object-cover object-center transition-transform duration-300 hover:scale-110 z-0"
                    />

                    <div>
                        <div className="relative z-10 text-white p-20">
                            <h1 className="text-3xl font-bold mb-4 " style={{ textShadow: '2px 2px 4px black' }}>
                                {heading2}
                            </h1>

                            <a 
                            href={href} className="hover:text-cyan-500 font-bold text-sm flex items-center gap-2 cursor-pointer duration-300 w-full py-2 ">
                                Quote Now
                                <span className="material-symbols-outlined">
                                    arrow_forward
                                </span>
                            </a>
                        </div>

                    </div>
                </div>



                <div className="relative w-full h-full min-h-[450px] overflow-hidden flex justify-center items-center">
                    <Image
                        src={src3}
                        alt="Portfolio Background"
                        fill
                        className="object-cover object-center transition-transform duration-300 hover:scale-110 z-0"
                    />

                    <div>
                        <div className="relative z-10 text-white p-20">
                            <h1 className="text-3xl font-bold mb-4 " style={{ textShadow: '2px 2px 4px black' }}>
                                {heading3}
                            </h1>

                            <a 
                            href={href}
                            className="hover:text-cyan-500 font-bold text-sm flex items-center gap-2 cursor-pointer duration-300 w-full py-2">
                                Quote Now
                                <span className="material-symbols-outlined">
                                    arrow_forward
                                </span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="relative w-full h-full min-h-[450px] overflow-hidden flex justify-center items-center">
                    <Image
                        src={src4}
                        alt="Portfolio Background"
                        fill
                        className="object-cover object-center transition-transform duration-300 hover:scale-110 z-0 "
                    />

                    <div>
                        <div className="relative z-10 text-white p-20">
                            <h1 className="text-3xl font-bold mb-4 " style={{ textShadow: '2px 2px 4px black' }}>
                                {heading4}
                            </h1>

                            <a 
                            href={href}
                            className="hover:text-cyan-500 font-bold text-sm flex items-center gap-2 cursor-pointer duration-300 w-full py-2">
                                Quote Now
                                <span className="material-symbols-outlined">
                                    arrow_forward
                                </span>
                            </a>
                        </div>

                    </div>
                </div>










            </section>
        </>
    );
}

export default PortfolioImgComp;
