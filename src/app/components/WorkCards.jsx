"use client"
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function WorkCards({ title, para, src, bgcolor, aos }) {
    useEffect(() => {
        Aos.init({});
    });

    return (
        <section className="w-full py-10 overflow-hidden">
            <div className={`w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 rounded-3xl px-6 sm:px-10 lg:px-16 py-10 ${bgcolor}`}
                data-aos={aos}
            >


                <div className="flex-1 flex flex-col items-start gap-4 text-white">
                    <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
                    <p className="text-sm sm:text-base leading-relaxed">{para}</p>
                    <a
                        href="/contactus"
                        className="lg:bg-yellow-400 bg-[#3F76FF] text-white font-semibold py-2 px-6 rounded-3xl text-sm cursor-pointer">
                        Let's Get Started
                    </a>
                </div>


                <div className="relative w-full sm:w-[80%] md:w-[60%] lg:w-[40%] h-60 sm:h-72 md:h-80 lg:h-96">
                    <Image
                        src={src}
                        alt="Image"
                        fill
                        className="rounded-3xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default WorkCards;
