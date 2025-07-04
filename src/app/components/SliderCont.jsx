"use client";

import Image from "next/image";
import { useState } from "react";

function SliderComp() {
    const data = [
        {
            image: "/Amer.png",
            name: "Muhammad Amer",
            position: "Manager of operations IT",
            text: "As a manager of operations at Nexaforge Technologies, the company's culture, team dynamics and commitment to excellence have made it a truly inspiring environment for me. Leading such a passionate team is both an honor and a privilege.",
        },
        {
            image: "/nayab.png",
            name: "Dr Nayab",
            position: "Managing Director",
            text: "As the proud owner of Nexaforge Technologies, the enriching culture, dedicated team and commitment and collective passion for our work have made it feel like a second home to me.",
        }
    ];

    const [index, setIndex] = useState(0);

    function previous() {
        setIndex((currentIndex) => (currentIndex === 0 ? data.length - 1 : currentIndex - 1));
    }

    function next() {
        setIndex((currentIndex) => (currentIndex === data.length - 1 ? 0 : currentIndex + 1));
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-5 md:my-0 bg-amber-500
        w-screen ml-[calc(50%-50vw)] min-h-200 md:min-h-120 lg:min-h-120 transition-all duration-200 ease-in
        ">
            <div className="flex justify-center items-center">
                <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-amber-400"
                >
                    <Image
                        src={data[index].image}
                        alt={data[index].name}
                        fill
                        className="object-cover active:scale-105 lg:hover:scale-105"
                    />
                </div>
            </div>

            <div className="p-6 lg:pr-10 lg:pl-0 flex flex-col justify-start text-white">
                <img src="/ico-quote-left.png" alt="Quote" className="w-8 mb-4" />
                <p className="text-lg md:text-2xl min-h-40">{data[index].text}</p>
                <br />
                <h1 className="text-2xl font-bold">{data[index].name}</h1>
                <p>{data[index].position}</p>

                <div className="mx-auto mt-10 transition-all duration-500">
                    <span
                        className="material-symbols-outlined p-3 rounded-full border-2 border-white cursor-pointer lg:hover:border-gray-700 active:border-gray-700 lg:hover:text-gray-700 active:text-gray-700"
                        onClick={previous}
                    >
                        arrow_back
                    </span>
                    <span
                        className="material-symbols-outlined p-3 rounded-full border-2 border-white cursor-pointer lg:hover:border-gray-700 active:border-gray-700 lg:hover:text-gray-700 ml-3 active:text-gray-700"
                        onClick={next}
                    >
                        arrow_forward
                    </span>
                </div>
            </div>
        </section>
    );
}

export default SliderComp;
