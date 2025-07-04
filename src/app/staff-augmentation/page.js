"use client";

import { useEffect, useState } from "react";
import HeadText from "../components/HeadText";
import StaffCards from "../components/StaffCards";
import BtnOne from "../components/BtnOne";
import WhyChooseUsStaffAug from "../containers/WhyChooseUsStaffAug";
import NaivigatingStaffAug from "../containers/NaivigatingStaffAug";

function StaffAugmentation() {
    const [popupOpen, setPopupOpen] = useState(false);

    // Block scroll when popup is open
    useEffect(() => {
        if (popupOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [popupOpen]);

    return (
        <>
            <HeadText
                topic={"Staff Augmentation"}
                heading={"Accelerate Remote Team Building"}
                description={
                    "Our tailored workforce will empower your team with specialized skills on demand, enhancing productivity and efficiency. "
                }
            />
            <WhyChooseUsStaffAug />

            <NaivigatingStaffAug />
            <section>
                <h1 className="text-4xl md:text-5xl font-bold text-[#333333] text-center mb-10">
                    Our Services & Stacks
                </h1>

                <section className="flex justify-center items-center overflow-hidden">
                    <div className="flex slideRight w-[1000px]">
                        <div className="min-w-[450px] flex-shrink-0">
                            <img src="web-application.webp" className="w-[450px]" />
                        </div>
                        <div className="min-w-[450px] flex-shrink-0">
                            <img src="user-interface.webp" className="w-[450px]" />
                        </div>
                        <div className="min-w-[450px] flex-shrink-0">
                            <img src="digital-marketing.webp" className="w-[450px]" />
                        </div>
                        <div className="min-w-[450px] flex-shrink-0">
                            <img src="gen-ai.webp" className="w-[450px]" />
                        </div>
                        <div className="min-w-[450px] flex-shrink-0">
                            <img src="cloud-integration.webp" className="w-[450px]" />
                        </div>
                        <div className="min-w-[450px] flex-shrink-0">
                            <img src="machine-learning.webp" className="w-[450px]" />
                        </div>
                    </div>
                </section>
            </section>

            <section className="py-10">
                <h1 className="text-4xl md:text-5xl font-bold text-[#333333] text-center mb-10">
                    Our Pricing Options
                </h1>
                <p className="text-2xl text-[#333333] text-center mb-20">
                    We take pride in delivering tailored solutions that align with your
                    specific requirements and adhere to industry standards. This enables
                    you to focus on your core business goals within the IT sector.
                </p>

                <StaffCards openPopup={() => setPopupOpen(true)} />

            </section>

            {/* Popup Modal */}
            {popupOpen && (
                <section className="w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-[#000000d5] overflow-y-auto">
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-xl shadow-lg h-auto">
                        <div className=" p-8 max-w-md w-full text-center">
                            <div className="flex flex-row-reverse w-full md:hidden lg:hidden">
                                <button
                                    onClick={() => setPopupOpen(false)}
                                    className=" px-4 py-2 rounded-full text-gray-600 mt-5"
                                >
                                    X
                                </button>
                            </div>
                            <h1 className="text-2xl font-bold mb-4 text-left md:text-center">
                                Let&apos;s  Connect!
                            </h1>
                            <p className="text-left md:text-center mb-5">Reach out to us for any queries, feedback or support. We would love to talk or help make it right together.</p>

                            <form>
                                <input
                                    required
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 border border-gray-300 rounded mt-4"
                                />
                                <input
                                    required
                                    type="text"
                                    placeholder="Company"
                                    className="w-full p-2 border border-gray-300 rounded mt-4"
                                />
                                <textarea
                                    required
                                    type="text"
                                    placeholder="Please tell us how can we help you?"
                                    className="w-full p-2 border border-gray-300 rounded mt-4"
                                />
                                <BtnOne
                                    name={"Send a Message"}
                                    className="mt-5 w-full md:w-auto"
                                />
                            </form>

                        </div>
                        <div className="flex flex-col items-center justifyst pb-8">
                            <div className="hidden md:flex lg:flex flex-row-reverse w-full ">
                                <button
                                    onClick={() => setPopupOpen(false)}
                                    className=" px-4 py-2 rounded-full text-gray-600"
                                >
                                    X
                                </button>
                            </div>
                            <img
                                src="/CallMen.webp"
                                className="w-60"
                            />

                            <div className="grid grid-cols-2 gap-2 py-5">
                                <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm
                                     py-2 lg:py-2 px-4 lg:px-7 rounded flex justify-center items-center cursor-pointer`}>

                                    Call
                                    <span className="material-symbols-outlined text-2xl cursor-pointer ml-2">
                                        call
                                    </span>
                                </button>
                                <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm
                                     py-2 lg:py-2 px-4 lg:px-7 rounded flex justify-center items-center cursor-pointer`}>

                                    Email
                                    <span className="material-symbols-outlined text-2xl cursor-pointer ml-2">
                                        email
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section>
                </section>
            )}
        </>
    );
}

export default StaffAugmentation;
