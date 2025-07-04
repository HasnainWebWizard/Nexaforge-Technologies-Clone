"use client"
import { useState } from "react";
import Image from "next/image";

function CareersTab() {
    const [tab, setTab] = useState("tab1");
    return (
        <>
            <section className="bg-[#5E31CA] py-20"
                style={{
                    boxShadow: "0 0 0 100vmax #5E31CA",
                    clipPath: "inset(0 -100vmax)",
                }}>
                <h1 className="text-white text-4xl font-bold text-center">Are You the Perfect Fit?</h1>
                <p className="text-white text-center text-2xl py-10">We look for certain qualities in the talent we hire because for us, our associates embody and build the culture we are so proud of.</p>


                <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 mb-5 gap-x-5">
                    <li className="text-2xl text-white font-bold text-center ">
                        <button
                            onClick={() => setTab("tab1")}
                            className={`cursor-pointer w-full py-3 h-full ${tab === "tab1"
                                ? "text-white bg-yellow-500 text-lg font-semibold"
                                : "text-lg hover:bg-yellow-500"
                                }`}>Judgment</button>
                    </li>
                    <li className="text-2xl text-white font-bold text-center ">
                        <button
                            onClick={() => setTab("tab2")}
                            className={`cursor-pointer w-full py-3 h-full ${tab === "tab2"
                                ? "text-white bg-yellow-500 text-lg font-semibold"
                                : "text-lg hover:bg-yellow-500"
                                }`}>Curiosity</button>
                    </li>
                    <li className="text-2xl text-white font-bold text-center ">
                        <button
                            onClick={() => setTab("tab3")}
                            className={`cursor-pointer w-full py-3 h-full ${tab === "tab3"
                                ? "text-white bg-yellow-500 text-lg font-semibold"
                                : "text-lg hover:bg-yellow-500"
                                }`}>Passion</button>
                    </li>
                    <li className="text-2xl text-white font-bold text-center ">
                        <button
                            onClick={() => setTab("tab4")}
                            className={`cursor-pointer w-full py-3 h-full ${tab === "tab4"
                                ? "text-white bg-yellow-500 text-lg font-semibold"
                                : "text-lg hover:bg-yellow-500"
                                }`}>Innovation</button>
                    </li>
                    <li className="text-2xl text-white font-bold text-center ">
                        <button
                            onClick={() => setTab("tab5")}
                            className={`cursor-pointer w-full py-3 h-full ${tab === "tab5"
                                ? "text-white bg-yellow-500 text-lg font-semibold"
                                : "text-lg hover:bg-yellow-500"
                                }`}>Communication</button>
                    </li>
                    <li className="text-2xl text-white font-bold text-center ">
                        <button
                            onClick={() => setTab("tab6")}
                            className={`cursor-pointer w-full py-3 h-full ${tab === "tab6"
                                ? "text-white bg-yellow-500 text-lg font-semibold"
                                : "text-lg hover:bg-yellow-500"
                                }`}>Honesty</button>
                    </li>
                    <li className="text-2xl text-white font-bold text-center ">
                        <button
                            onClick={() => setTab("tab7")}
                            className={`cursor-pointer w-full py-3 h-full ${tab === "tab7"
                                ? "text-white bg-yellow-500 text-lg font-semibold"
                                : "text-lg hover:bg-yellow-500"
                                }`}>Impact</button>
                    </li>
                </ul>


                <section className="">
                    {tab === "tab1" &&
                        <>
                            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 [grid-auto-rows:minmax(200px,_auto)] relative"
                            >
                                <div className="col-span-2 bg-white p-10 ">
                                    <h1 className="text-4xl font-bold pb-5">Judgement</h1>
                                    <li className="">Navigate ambiguity with wise decisions across people, technical, business, and creative spheres.</li>
                                    <li className="">Go beyond surface fixes, identifying and addressing root causes effectively.</li>
                                    <li className="">Articulate strategic objectives clearly, guiding actions purposefully.</li>
                                    <li className="">Prioritize tasks, balancing immediate needs with future improvements.</li>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={"/careers2.jpg"}
                                        fill
                                        priority
                                    />
                                </div>
                            </section>
                        </>

                    }
                    {tab === "tab2" &&
                        <>
                            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 [grid-auto-rows:minmax(200px,_auto)] relative"
                            >
                                <div className="col-span-2 bg-white p-10 ">
                                    <h1 className="text-4xl font-bold pb-5">Curiosity</h1>
                                    <li className="">Rapidly absorb new information and exhibit a strong eagerness to learn.</li>
                                    <li className="">Demonstrate a proactive effort to grasp our strategy, market dynamics, customer base, and partnerships.</li>
                                    <li className="">Possess a comprehensive understanding of business, technology, and digital realms.</li>
                                    <li className="">Contribute adeptly across various domains, extending beyond your primary expertise.</li>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={"/cc-careers-perfect-fit-4.jpg"}
                                        fill
                                        priority
                                    />
                                </div>
                            </section>
                        </>
                    }
                    {tab === "tab3" &&
                        <>
                            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 [grid-auto-rows:minmax(200px,_auto)] relative"
                            >
                                <div className="col-span-2 bg-white p-10 ">
                                    <h1 className="text-4xl font-bold pb-5">Passion</h1>
                                    <li className="">NexaForge is driven by a thirst for excellence, inspiring others.</li>
                                    <li className="">Demonstrates intense care for NexaForge’s success.</li>
                                    <li className="">Exhibits unwavering determination and tenacity.</li>
                                    <li className="">You smartly separate what must be done well now, and what can be improved later</li>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={"/careers2.jpg"}
                                        fill
                                        priority
                                    />
                                </div>
                            </section>
                        </>
                    }
                    {tab === "tab4" &&
                        <>
                            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 [grid-auto-rows:minmax(200px,_auto)] relative"
                            >
                                <div className="col-span-2 bg-white p-10 ">
                                    <h1 className="text-4xl font-bold pb-5">Innovation</h1>
                                    <li className="">Innovatively tackle tough problems with fresh perspectives and innovative thinking.</li>
                                    <li className="">Fearlessly challenge the status quo, suggesting improved methods and questioning prevailing assumptions.</li>
                                    <li className="">Proactively generate practical new ideas that prove instrumental in addressing challenges.</li>
                                    <li className="">Streamline processes and minimize complexity, fostering nimbleness and adaptability through simplification.</li>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={"/cc-careers-perfect-fit-4.jpg"}
                                        fill
                                        priority
                                    />
                                </div>
                            </section>
                        </>
                    }
                    {tab === "tab5" &&
                        <>
                            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 [grid-auto-rows:minmax(200px,_auto)] relative"
                            >
                                <div className="col-span-2 bg-white p-10 ">
                                    <h1 className="text-4xl font-bold pb-5">Communication</h1>
                                    <li className="">Articulate and concise in communication, both verbally and in writing.</li>
                                    <li className="">Prioritize active listening over immediate reaction for deeper understanding.</li>
                                    <li className="">Confidently engage in discussions, debates, and conflict resolution with clients.</li>
                                    <li className="">Treat all individuals with respect, regardless of status or differing opinions.</li>
                                    <li>Maintain composed demeanor in high-pressure scenarios, exhibiting calm poise.</li>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={"/solYellow.jpg"}
                                        fill
                                        priority
                                    />
                                </div>
                            </section>
                        </>
                    }
                    {tab === "tab6" &&
                        <>
                            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 [grid-auto-rows:minmax(200px,_auto)] relative"
                            >
                                <div className="col-span-2 bg-white p-10 ">
                                    <h1 className="text-4xl font-bold pb-5">Honesty</h1>
                                    <li className="">Renowned for candor and direct communication.</li>
                                    <li className="">Remain apolitical when disagreeing with others.</li>
                                    <li className="">Practice honesty by only speaking about colleagues what you’d say to their face.</li>
                                    <li className="">Promptly acknowledge and take responsibility for mistakes.
                                    </li>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={"/careers3.jpg"}
                                        fill
                                        priority
                                    />
                                </div>
                            </section>
                        </>
                    }
                    {
                        tab === "tab7" &&
                        <>
                            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 [grid-auto-rows:minmax(200px,_auto)] relative"
                            >
                                <div className="col-span-2 bg-white p-10 ">
                                    <h1 className="text-4xl font-bold pb-5">Impact</h1>
                                    <li className="">Achieve remarkable feats of essential tasks.</li>
                                    <li className="">Exhibit unwaveringly strong performance for dependable collaboration.</li>
                                    <li className="">Prioritize results over procedural intricacies.</li>
                                    <li>Embrace bias towards action, steering clear of over-analysis.</li>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={"/careers.jpg"}
                                        fill
                                        priority
                                    />
                                </div>
                            </section>
                        </>
                    }


                </section>

            </section>
        </>
    );
}
export default CareersTab;