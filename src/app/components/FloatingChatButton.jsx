"use client";

import Link from "next/link";
import { useState } from "react";

function FloatingChatButton() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>

            {isOpen ? <section className="bg-white w-full lg:w-100 fixed bottom-25 right-0 md:right-5 z-50 rounded-2xl ">

                <div className="bg-green-500 px-10 py-2">
                    <div className=" flex items-center justify-between">

                        <h1 className="font-bold text-white text-2xl mt-2">Hello!</h1>
                        <span
                            onClick={() => setIsOpen(!isOpen)}
                            className="cursor-pointer text-white">X</span>

                    </div>
                    <p className=" text-white pb-2">Please feel free to click on any of the contacts below to initiate a conversation via WhatsApp.</p>
                </div>

                <Link
                    href="https://wa.me/923001234567"
                    target="_blank"
                >
                    <div className="flex items-center gap-2 px-10 py-5">
                        <div className="border border-gray-300 rounded-full overflow-hidden ">
                            <img
                                src="/CallMen.webp"
                                alt="service Men"
                                className="w-20"
                            />
                        </div>
                        <span className="text-gray-500 text-sm"> Support Team </span>
                    </div>
                </Link>
                <div className="flex justify-end items-center">
                    <div className="w-5 h-5 bg-white rotate-45 relative -bottom-2 right-8"></div>
                </div>

            </section> : null}


            <a onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 bg-green-400 md:hover:bg-green-500 text-white py-2 px-3 md:py-3 md:px-5 rounded-full z-50 transition flex justify-center items-center shadow-2xl shadow-gray-400 cursor-pointer"
            >
                <img
                    src="/whatsapp.png"
                    alt="WhatsApp Icon"
                    className="w-6 h-6 mr-3"
                />
                How can i help you?
            </a>
        </>
    );
}

export default FloatingChatButton;
