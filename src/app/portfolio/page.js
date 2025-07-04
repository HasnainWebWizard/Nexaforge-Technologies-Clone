"use client";
import { useState } from "react";
import HeadText from "../components/HeadText";
import PortfolioImgComp from "../components/PortfolioImgComp";

function Portfolio() {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <HeadText
                topic={"Portfolio"}
                heading={"Partner with us to elevate business performance"}
                description={
                    "Empowering visionary enterprises in their digital transformation endeavors"
                }
            />

            {/* <div className="max-w-screen -mx-5 sm:-mx-10 md:-mx-14 lg:-mx-20"> */}
            <div className="w-screen ml-[calc(50%-50vw)]">
                <ul className="border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <li className="bg-[#F8F8F8] flex justify-center items-center">
                        <button
                            onClick={() => setActiveTab("tab1")}
                            className={`w-full h-full py-5 ${activeTab === "tab1"
                                ? "text-white bg-blue-500 text-lg font-semibold"
                                : "text-[#888787] text-lg font-semibold hover:bg-white"
                                }`}
                        >
                            All
                        </button>
                    </li>
                    <li className="bg-[#F8F8F8] flex justify-center items-center">
                        <button
                            onClick={() => setActiveTab("tab2")}
                            className={`w-full h-full py-5 ${activeTab === "tab2"
                                ? "text-white bg-blue-500 text-lg font-semibold"
                                : "text-[#888787] text-lg font-semibold hover:bg-white"
                                }`}
                        >
                            Web & Mobile Development
                        </button>
                    </li>
                    <li className="bg-[#F8F8F8] flex justify-center items-center">
                        <button
                            onClick={() => setActiveTab("tab3")}
                            className={`w-full h-full py-5 ${activeTab === "tab3"
                                ? "text-white bg-blue-500 text-lg font-semibold"
                                : "text-[#888787] text-lg font-semibold hover:bg-white"
                                }`}
                        >
                            Team Augmentation
                        </button>
                    </li>
                    <li className="bg-[#F8F8F8] flex justify-center items-center">
                        <button
                            onClick={() => setActiveTab("tab4")}
                            className={`w-full h-full py-5 ${activeTab === "tab4"
                                ? "text-white bg-blue-500 text-lg font-semibold"
                                : "text-[#888787] text-lg font-semibold hover:bg-white"
                                }`}
                        >
                            IT Network & Services
                        </button>
                    </li>
                </ul>

                <div className="">
                    {activeTab === "tab1" && (
                        <>
                            <PortfolioImgComp
                                title={"Web & Mobile Development"}

                                src1={"/headphone-guy.png"}
                                heading1={"Custom Web Development Solutions"}

                                src2={"/porfolio-laptop.png"}
                                heading2={"Comprehensive Maintenance & Support"}

                                src3={"/porfolio-mobile2.png"}
                                heading3={"Innovative Mobile App Development (iOS & Android)"}

                                src4={"/porfolio-mobile.png"}
                                heading4={"Exceptional UI/UX Design & User-Centric Optimization"}

                                href={"/contactus"}
                            />



                            <PortfolioImgComp
                                title={"Team Augmentation"}

                                src1={"/team1.png"}
                                heading1={"Flexible Staffing for Project Requirements"}

                                src2={"/team2.png"}
                                heading2={"Skilled Developers & Engineers On-Demand"}

                                src3={"/team3.png"}
                                heading3={"Expertise Across Web, Mobile, and Software Development"}

                                src4={"/team4.jpg"}
                                heading4={"Seamless Integration with Your Existing Team"}

                                href="/contactus"
                            />



                             <PortfolioImgComp
                                title={"IT Network & Services"}

                                src1={"/headphone-guy.png"}
                                heading1={"Network Design, Setup, and Optimization"}

                                src2={"/porfolio-laptop.png"}
                                heading2={"Cloud Infrastructure & Data Management"}

                                src3={"/porfolio-mobile2.png"}
                                heading3={"Managed IT Services & Support"}

                                src4={"/porfolio-mobile.png"}
                                heading4={"Cybersecurity Solutions & Risk Management"}

                                href="/contactus"
                            />

                        </>

                    )}
                    {activeTab === "tab2" && (
                        <>
                            <PortfolioImgComp
                                title={"Web & Mobile Development"}

                                src1={"/headphone-guy.png"}
                                heading1={"Custom Web Development Solutions"}

                                src2={"/porfolio-laptop.png"}
                                heading2={"Comprehensive Maintenance & Support"}

                                src3={"/porfolio-mobile2.png"}
                                heading3={"Innovative Mobile App Development (iOS & Android)"}

                                src4={"/porfolio-mobile.png"}
                                heading4={"Exceptional UI/UX Design & User-Centric Optimization"}

                                href="/contactus"
                            />

                        </>


                    )}
                    {activeTab === "tab3" && (
                        <>
                            <PortfolioImgComp
                                title={"Team Augmentation"}

                                src1={"/team1.png"}
                                heading1={"Flexible Staffing for Project Requirements"}

                                src2={"/team2.png"}
                                heading2={"Skilled Developers & Engineers On-Demand"}

                                src3={"/team3.png"}
                                heading3={"Expertise Across Web, Mobile, and Software Development"}

                                src4={"/team4.jpg"}
                                heading4={"Seamless Integration with Your Existing Team"}

                                href="/contactus"
                            />

                        </>
                    )}
                    {activeTab === "tab4" && (
                        <>
                            <PortfolioImgComp
                                title={"IT Network & Services"}

                                src1={"/headphone-guy.png"}
                                heading1={"Network Design, Setup, and Optimization"}

                                src2={"/porfolio-laptop.png"}
                                heading2={"Cloud Infrastructure & Data Management"}

                                src3={"/porfolio-mobile2.png"}
                                heading3={"Managed IT Services & Support"}

                                src4={"/porfolio-mobile.png"}
                                heading4={"Cybersecurity Solutions & Risk Management"}

                                href="/contactus"
                            />

                        </>

                    )}
                </div>
            </div>
        </>
    );
}

export default Portfolio;
