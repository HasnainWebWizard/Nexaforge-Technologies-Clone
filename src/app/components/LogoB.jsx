import Link from "next/link";

function LogoB(className) {
    return (
        <Link href="/">
        <img src="logo.png" alt="logo"
            className={`w-35 lg:w-42 cursor-pointer ${className}`}
        />
        </Link>
    );
}
export default LogoB;