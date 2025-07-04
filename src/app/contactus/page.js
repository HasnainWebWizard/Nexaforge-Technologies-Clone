"use client";
import Image from "next/image";
import HeadText from "../components/HeadText";
import BtnOne from "../components/BtnOne";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function ContactUs() {
    let [effect, setEffect] = useState("zoom-in");
    useEffect(() => {
        Aos.init({});

        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) {
            setEffect("fade-left");
        }
        else {
            setEffect("zoom-in");
        }
    });
    return (
        <>
            <HeadText
                topic="OUR WORK"
                heading="We're Ready to Help You Build Something Incredible!"
                description="Give us your details by filling out the form below and our associate will get back to you with the best possible solution."
                para="Give us your details by filling out the form below and our associate will get back to you with the best possible solution."
            />



            <section className={`bg-[url('/contactus-bg1.jpg')] bg-cover bg-center max-w-screen mx-[calc(50%-50vw)]
            grid grid-cols-1 lg:grid-cols-2 px-0 sm:px-4 md:px-8 lg:px-12 `}
            >
                <ul className=" px-5 sm:px-8 md:px-10 lg:px-10 text-white flex justify-center flex-col py-10 lg:py-0">
                    <h1 className="text-3xl font-bold mb-8">Ask a Nexaforge Technologies Associate how we can help you with:</h1>

                    <li className="flex gap-x-5 items-center mb-3">
                        <img
                            src="ico-contact1-1.png" className="w-7"
                        />
                        <p className="text-base text-left"> This is the heading </p>
                    </li>

                    <li className="flex gap-x-5 items-center mb-3">
                        <img
                            src="ico-contact2.png" className="w-7"
                        />
                        <p className="text-base text-left"> Digital Transformation Engagements </p>
                    </li>

                    <li className="flex gap-x-5 items-center mb-3">
                        <img
                            src="ico-contact3-1.png" className="w-7"
                        />
                        <p className="text-base text-left"> Building an MVP </p>
                    </li>

                    <li className="flex gap-x-5 items-center mb-3">
                        <img
                            src="ico-contact4-1.png" className="w-7"
                        />
                        <p className="text-base text-left">
                            Augumenting & Scaling Your Development Team </p>
                    </li>
                </ul>



                <div className="flex justify-center items-center px-10 py-10">
                    <form className="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[450px] px-10 py-10 shadow-lg flex flex-col gap-6"
                        data-aos={effect}>
                        <input
                            placeholder="Company name"
                            type="text"
                            className="border-b border-blue-500 focus:outline-none text-sm"
                            required
                        />

                        <input
                            placeholder="Your Name"
                            type="text"
                            className="border-b border-blue-500 focus:outline-none text-sm"
                            required
                        />

                        <input
                            placeholder="Your e-mail"
                            type="email"
                            className="border-b border-blue-500 focus:outline-none text-sm"
                            required
                        />

                        <input
                            placeholder="Your Phone"
                            type="number"
                            className="border-b border-blue-500 focus:outline-none text-sm"
                            required
                        />

                        <input
                            placeholder="What can nexaforge do for you?"
                            type="text"
                            className="border-b border-blue-500 focus:outline-none text-sm"
                            required
                        />

                        <input
                            placeholder="What is your budget?"
                            type="text"
                            className="border-b border-blue-500 focus:outline-none text-sm"
                            required
                        />

                        <input
                            placeholder="How did you hear about nexaforge?"
                            type="text"
                            className="border-b border-blue-500 focus:outline-none text-sm"
                            required
                        />

                        <BtnOne name="send message"
                            className="w-full" />
                    </form>

                </div>
            </section>

            <section className="w-full grid grid-cols-1 lg:grid-cols-2 py-10">
                <div className="flex flex-col justify-start px-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
                        Get in Touch
                    </h1>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 ">
                        <img
                            src="ico-boston.png"
                            alt="Nottingham Icon"
                            className="w-16 h-16 lg:mr-10 object-contain"
                        />

                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl font-bold text-[#363636] mb-2">Nottingham</h2>
                            <p className="mb-3">29 Ainsley Rd, NG8 3PP, Nottingham, UK</p>

                            <ul className="space-y-2">
                                <li className="flex justify-center lg:justify-start items-center">
                                    <span className="material-symbols-outlined">mail</span>
                                    <p className="text-sm ml-2">info@nexaforgetech.com</p>
                                </li>
                                <li className="flex justify-center lg:justify-start items-center">
                                    <span className="material-symbols-outlined">call</span>
                                    <p className="text-sm ml-2">+44 7882 414162</p>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>


                <div className="lg:mr-10 mt-10 lg:mt-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19219.856559433672!2d-1.15781!3d52.975731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c197bc6335d5%3A0x590349095e7decc7!2s6%20Maud%20St%2C%20New%20Basford%2C%20Nottingham%20NG7%207AQ%2C%20UK!5e0!3m2!1sen!2sus!4v1749925882516!5m2!1sen!2sus"
                        width="100%"
                        height="240"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </section>
        </>
    );
}
export default ContactUs;
