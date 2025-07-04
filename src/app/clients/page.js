"use client";
import HeadText from "../components/HeadText";
import { useState } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

function Clients() {
    const [activeTab, setActiveTab] = useState("tab1");
    Aos.init({});
    return (
        <>
            <HeadText
                topic={"Clients"}
                heading={"We are the innovation delivery partners you can trust."}
                description={
                    "For over two decades, we have helped transform businesses for our partners – from startups to enterprises."
                }
            />

            <section className="w-screen ml-[calc(50%-50vw)]" >
                <ul className="bg-[#F8F8F8] border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <li className="flex justify-center items-center">
                        <button
                            onClick={() => setActiveTab("tab1")}
                            className={`w-full h-full py-5 ${activeTab === "tab1"
                                ? "text-white bg-blue-500 text-lg font-semibold"
                                : "text-[#888787] text-lg font-semibold hover:bg-white"
                                }`}
                        >
                            STARTUPS
                        </button>
                    </li>

                    <li className="flex justify-center items-center">
                        <button
                            onClick={() => setActiveTab("tab2")}
                            className={`w-full h-full py-5 ${activeTab === "tab2"
                                ? "text-white bg-blue-500 text-lg font-semibold"
                                : "text-[#888787] text-lg font-semibold hover:bg-white"
                                }`}
                        >
                            ENTERPRISES
                        </button>
                    </li>
                </ul>

                {/* Tab Content Section */}
                <div className="p-8 mt-10 overflow-hidden"
                data-aos="zoom-in" data-duration="1000">
                    {activeTab === "tab1" && (
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-3xl font-extrabold mb-15 text-center max-w-150 leading-10"
                            >Partners we’ve helped go to market faster using our
                                <span className="text-blue-500 pl-2">
                                    MVP Development Framework.
                                </span>
                            </h2>


                            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-12">
                                <div className="relative overflow-hidden" >
                                    <Image
                                        src="/al-aqsa.svg"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/Screenshot_85.png"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/Screenshot_89.png"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/2-1-1.png"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/NFT-01.png"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/Screenshot_87.png"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/Screenshot_88.png"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                            </section>
                        </div>
                    )}

                    {activeTab === "tab2" && (
                        <div className="flex flex-col justify-center items-center overflow-hidden"
                        data-aos="zoom-in" data-duration="1000">
                            <h2 className="text-3xl font-extrabold mb-15 text-center max-w-150 leading-10">Partners we’ve helped digitally transform using our
                                <span className="text-blue-500 pl-2">
                                    Innovation Delivery Framework.
                                </span>
                            </h2>

                            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-y-10 gap-x-12">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/al-aqsa.svg"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/Screenshot_85.png"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/Screenshot_89.png"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/2-1-1.png"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/Screenshot_87.png"
                                        alt="Clients"
                                        width={200}
                                        height={200}
                                        className="object-cover object-center transition duration-700 hover:scale-110"
                                        priority
                                    />
                                </div>

                            </section>


                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Clients;
