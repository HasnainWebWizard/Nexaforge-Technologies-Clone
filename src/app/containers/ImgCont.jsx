"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function ImgComp({ className }) {
    useEffect(()=>{
        AOS.init({
            mirror: true
        });
    })
    return (
        <>
            <section className={`py-5 grid lg:grid-cols-4 grid-cols-1 gap-[1rem] [grid-auto-rows:minmax(200px,_auto)] overflow-hidden ${className}`}>
                <div className="overflow-hidden shadow-md lg:col-span-2 lg:row-span-2 box-border rounded-2xl relative"
                data-aos="fade-right">
                    <Link href="/services">
                        <Image
                            src="/Experiance.jpg"
                            alt="Experience"
                            fill
                            className="object-cover object-center transition duration-700 hover:scale-150"
                            priority
                        />
                    </Link>
                </div>

                <div className="overflow-hidden shadow-md box-border rounded-2xl flex flex-col justify-center items-center">
                    <Link href="/solutions">
                        <div className="w-full text-center flex flex-col justify-center items-center px-3">
                            <span className="text-base font-bold text-blue-500">BRINGING INNOVATION TO LIFE</span>
                            <span className="">Inspire Develop and Implement</span>
                        </div>
                    </Link>

                </div>

                <div className="overflow-hidden shadow-md box-border rounded-2xl relative"
                data-aos="fade-left">
                    <Image
                        src="/naturebulb.png"
                        alt="Nature Bulb"
                        fill
                        className="object-cover object-center transition duration-700 hover:scale-125"
                        priority
                    />
                </div>

                <div className="overflow-hidden shadow-md box-border rounded-2xl relative" data-aos="fade-up">
                    <Image
                        src="/phones.png"
                        alt="Phones"
                        fill
                        className="object-cover object-center transition duration-700 hover:scale-125"
                        priority
                    />
                </div>

                <div className="overflow-hidden shadow-md col-span-1 box-border rounded-2xl flex flex-col justify-center items-center">
                    <Link href="/staff-augmentation">
                        <div className="w-full text-center flex flex-col justify-center items-center px-3">
                            <span className="text-base font-bold text-blue-500">TEAM AUGMENTATION</span>
                            <span className="">Strategic Choice Over Sourcing</span>
                        </div>
                    </Link>
                </div>

                <div className="overflow-hidden shadow-md box-border rounded-2xl flex flex-col justify-center items-center">
                    <Link href="/solutions">
                        <div className="w-full text-center flex flex-col justify-center items-center px-3">
                            <span className="text-base font-bold text-blue-500">BRINGING INNOVATION TO LIFE</span>
                            <span className="">From Conceptualization to Market Triumph</span>
                        </div>
                    </Link>
                </div>

                <div className="overflow-hidden shadow-md box-border rounded-2xl relative"
                data-aos="fade-up">
                    <Image
                        src="/m-four-stages.jpg"
                        alt="Four Stages"
                        fill
                        className="object-cover object-center transition duration-700 hover:scale-125"
                        priority
                    />
                </div>

                <div className="overflow-hidden shadow-md lg:col-span-2 lg:row-span-2 box-border rounded-2xl relative"
                data-aos="fade-left">
                    <Link href="/solutions">
                        <Image
                            src="/Blue-Emblem.png"
                            alt="Blue Emblem"
                            fill
                            className="object-cover object-center transition duration-700 hover:scale-125"
                            priority
                        />
                    </Link>
                </div>

                <div className="overflow-hidden shadow-md box-border rounded-2xl relative"
                data-aos="fade-right">
                    <Image
                        src="/puzzles.jpg"
                        alt="Puzzles"
                        fill
                        className="object-cover object-center transition duration-700 hover:scale-125"
                        priority
                    />
                </div>

                <div className="overflow-hidden shadow-md box-border rounded-2xl flex flex-col justify-center items-center">
                    <Link href="/solutions">
                        <div className="w-full text-center flex flex-col justify-center items-center px-3">
                            <span className="text-base font-bold text-blue-500">DISCOVERIES AND INSIGHTS</span>
                            <span className="">Transforming Consumer Understanding into Innovative Solutions</span>
                        </div>
                    </Link>
                </div>

                <div className="overflow-hidden shadow-md lg:col-span-2 col-span-1 row-span-2 box-border rounded-2xl relative"
                data-aos="fade-up">
                    <Image
                        src="/code-pic.jpg"
                        alt="Code Pic"
                        fill
                        className="object-cover object-center transition duration-700 hover:scale-150"
                        priority
                    />
                </div>

                <div className="overflow-hidden shadow-md box-border rounded-2xl flex flex-col justify-center items-center">
                    <Link href="/solutions">
                        <div className="w-full text-center flex flex-col justify-center items-center px-3">
                            <span className="text-base font-bold text-blue-500">MINIMUM VIABLE PRODUCT CREATION</span>
                            <span className="">Efficiently Construct your MVP</span>
                        </div>
                    </Link>
                </div>

                <div className="overflow-hidden shadow-md box-border rounded-2xl relative"
                data-aos="fade-up">
                    <Image
                        src="/minimum-code.jpg"
                        alt="Minimum Code"
                        fill
                        className="object-cover object-center transition duration-700 hover:scale-125"
                        priority
                    />
                </div>

                <div className="overflow-hidden shadow-md box-border rounded-2xl relative"
                data-aos="fade-up">
                    <Image
                        src="/DevOps.jpg"
                        alt="DevOps"
                        fill
                        className="object-cover object-center transition duration-700 hover:scale-125"
                        priority
                    />
                </div>


                <div className="overflow-hidden shadow-md box-border rounded-2xl flex flex-col justify-center items-center">
                    <Link href="/solutions">
                        <div className="w-full text-center flex flex-col justify-center items-center px-3">
                            <span className="text-base font-bold text-blue-500">DEVOPS & CLOUDS</span>
                            <span className="">Speed Up Development, Deployment, and Distribution</span>
                        </div>
                    </Link>
                </div>

            </section>
        </>
    );
}

export default ImgComp;
