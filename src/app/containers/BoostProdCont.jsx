"use client"
import BtnOne from "../components/BtnOne";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function BoostProdCont({ className }) {

    useEffect(() => {
        AOS.init({});
    });

    return (
        <>
            <section className={`w-full ${className}`}>
                <div className="flex flex-col justify-center items-center
                 text-center px-10
                 "
                    data-aos="zoom-in"
                    style={{
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)'
                    }}
                >
                    <h1 className="text-3xl md:text-3xl lg:text-3xl font-extrabold my-3">
                        Boost Productivity with Our Staff Augmentation
                    </h1>
                    <p className="text-base md:text-lg lg:text-2xl my-3">
                        Harness the power of our bespoke workforce solutions, delivering specialized
                        skills on demand to take productivity and efficiency to the next level.
                        Partner with us to drive exceptional results for your business.
                    </p>

                    <BtnOne
                        name={'Explore our plan'}
                        className={'my-5 hover:scale-110 transition duration-700'}
                        href={"/staff-augmentation"}
                    />
                </div>


                <div className="flex flex-col justify-center items-center px-4 text-center sm:px-2 py-10"
                // style={{
                //     boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)'
                // }}
                >
                    <h1 className="text-3xl md:text-3xl lg:text-3xl font-extrabold my-3">
                        Your Innovation Collaborators
                    </h1>
                    <p className="text-base md:text-lg lg:text-2xl my-5">
                        We transcend the role of a mere innovation delivery agency. We integrate seamlessly with your team, becoming an invaluable extension. Regardless of industry or business scope, we stand as your steadfast partners. Above all, were your staunchest advocates on the journey toward tangible innovation. Thats our commitment.
                    </p>

                    <Link href={'https://www.designrush.com/'}>
                        <img src="/Verified-Agency.png" alt="agency-logo" data-aos="zoom-in"
                            className="cursor-pointer"
                        /></Link>
                </div>
            </section>
        </>
    );
}

export default BoostProdCont;
