'use client'
import Link from "next/link";
function LogoW(className) {
    return (
        <Link href="/">
        <img src="logo-white.png" alt="logo"
            className={` w-35 lg:w-42 h-auto cursor-pointer ${className}`}
        />
        </Link>
    );
}
export default LogoW;