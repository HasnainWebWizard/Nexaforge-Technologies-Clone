"use client";

import Link from "next/link";
import BtnOne from "./BtnOne";
import { useState, useEffect } from "react";
import LogoW from './LogoW';
import LogoB from "./LogoB";

function NavBar({ className }) {
    const [menuOpen, setMenuOpen] = useState(false);

    // ✅ Move scrollHandler inside useEffect to avoid SSR window error
    useEffect(() => {
        function scrollHandler() {
            const Navbar = document.querySelector("nav");
            if (window.scrollY > 0) {
                Navbar.style.backgroundColor = "white";
            } else {
                Navbar.style.backgroundColor = "white";
            }
        }

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <>
            <nav className={`flex w-full items-center justify-between fixed top-0 py-2 z-20
            px-5 md:px-18 lg:px-20 bg-white
                 ${className}`}>

                <LogoB />

                <div id="right" className="flex justify-between items-center">

                    <BtnOne
                        name={'Book Demo'}
                        className={'mr-5'}
                    />

                    <span
                        onClick={() => setMenuOpen(true)}
                        className="material-symbols-outlined text-black cursor-pointer">
                        menu
                    </span>

                </div>
            </nav>

            {/* Hamburger Menu */}
            {menuOpen && (
                <section id="menu"
                    className="w-full h-screen bg-[#000000f6] fixed top-0 py-2 z-20">
                    <div className="w-full flex justify-between items-center px-5 lg:px-20">
                        <Link href={'/'} onClick={() => setMenuOpen(false)}>
                            <LogoW />
                        </Link>

                        <span id="cross"
                            onClick={() => setMenuOpen(false)}
                            className="text-white text-3xl cursor-pointer">
                            x
                        </span>
                    </div>

                    <div className="h-screen">
                        <div className="mt-5 flex justify-center items-center flex-col">
                            <Link href={'/services'} onClick={() => setMenuOpen(false)}
                                className="text-white hover:text-blue-400 font-sans lg:text-2xl py-2">
                                Services
                            </Link>
                            <Link href={'/solutions'} onClick={() => setMenuOpen(false)}
                                className="text-white hover:text-blue-400 font-sans lg:text-2xl py-2">
                                Solutions
                            </Link>
                            <Link href={'/portfolio'} onClick={() => setMenuOpen(false)}
                                className="text-white hover:text-blue-400 font-sans lg:text-2xl py-2">
                                Portfolio
                            </Link>
                            <Link href={'/work'} onClick={() => setMenuOpen(false)}
                                className="text-white hover:text-blue-400 font-sans lg:text-2xl py-2">
                                Work
                            </Link>
                            <Link href={'/blogs'} onClick={() => setMenuOpen(false)}
                                className="text-white hover:text-blue-400 font-sans lg:text-2xl py-2">
                                Blogs
                            </Link>
                            <Link href={'/clients'} onClick={() => setMenuOpen(false)}
                                className="text-white hover:text-blue-400 font-sans lg:text-2xl py-2">
                                Clients
                            </Link>
                            <Link href={'/careers'} onClick={() => setMenuOpen(false)}
                                className="text-white hover:text-blue-400 font-sans lg:text-2xl py-2">
                                Careers
                            </Link>
                            <Link href={'/contactus'} onClick={() => setMenuOpen(false)}
                                className="text-white hover:text-blue-400 font-sans lg:text-2xl py-2">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default NavBar;
