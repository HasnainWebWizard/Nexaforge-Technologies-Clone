"use client";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Blogs() {
    useEffect(()=>{
        Aos.init({});  
    })
    
    return (
        <>
            <section className="bg-[url('/Main-slider-index.jpg')] h-100 bg-cover bg-bottom md:bg-auto text-white px-5 md:p-18 lg:px-20 w-screen ml-[calc(50%-50vw)] flex justify-start items-center">
                <div className="">
                    <h1 className="text-4xl md:text-5xl font-bold mb-5">
                        The Best Software Developer Blogs
                    </h1>
                    <p className="text-sm ">Posts Homepage</p>
                </div>
            </section>


            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 overflow-hidden">
                <Link href="/blog1">
                    <div className="cursor-pointer" data-aos="zoom-in" data-duration="1000">
                        <img
                            src="/blogs.jpg"
                            alt="Blogs"
                            className="object-cover w-full"
                        />
                        <h1 className="text-lg md:text-lg font-medium mb-3 mt-5">
                            Elevating Business Success through Professional Website Development and Design
                        </h1>
                        <p className="text-sm text-gray-400">
                            We Facilitate You Scale Your Business In today’s fast-paced business...
                        </p>
                    </div>
                </Link>

                <Link href="/blog2">
                    <div className="cursor-pointer" data-aos="zoom-in" data-duration="2000">
                        <img
                            src="/sol-team.jpg"
                            alt="Blogs"
                            className="object-cover w-full"
                        />
                        <h1 className="text-lg md:text-lg font-medium mb-3 mt-5">
                            A Master Guide to Marketing: How to Craft a Market-Fit Product in an Economic Downturn
                        </h1>
                        <p className="text-sm text-gray-400">
                            Intro In times of economic downturn, businesses face unique challenges...
                        </p>
                    </div>
                </Link>

                <Link href="/blog3">
                    <div className="cursor-pointer" data-aos="zoom-in" data-duration="1000">
                        <img
                            src="/blogs2.jpeg"
                            alt="Blogs"
                            className="object-cover w-full"
                        />
                        <h1 className="text-lg md:text-lg font-medium mb-3 mt-5">
                            Overcoming Common Challenges in Agile Implementation
                        </h1>
                        <p className="text-sm text-gray-400">
                            GIGS & GIGGLES The Rise of a Money Making Generation..
                        </p>
                    </div>
                </Link>

                <Link href="/blog4">
                    <div className="cursor-pointer" data-aos="zoom-in" data-duration="5000">
                        <img
                            src="/blogs3.jpg"
                            alt="Blogs"
                            className="object-cover w-full"
                        />
                        <h1 className="text-lg md:text-lg font-medium my-3">
                            The Evolution of IT Staff Augmentation in 2b24 mt-5: Navigating Challenges and Capitalizing on Opportunities
                        </h1>
                        <p className="text-sm text-gray-400">
                            The Evolution of IT Staff Augmentation in 2024: Navigating Challenges...
                        </p>
                    </div>
                </Link>
                
                <Link href="/blog5">
                    <div className="cursor-pointer" data-aos="zoom-in" data-duration="3000">
                        <img
                            src="/blogs4.png"
                            alt="Blogs"
                            className="object-cover w-full"
                        />
                        <h1 className="text-lg md:text-lg font-medium mb-3 mt-5">
                            What are the most important problem-solving skills?
                        </h1>
                        <p className="text-sm text-gray-400">
                            What are the most important problem solving skills? Learn more...
                        </p>
                    </div>
                </Link>
            </section>
        </>
    );
}
export default Blogs;