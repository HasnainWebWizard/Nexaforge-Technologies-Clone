import Link from "next/link";
import LogoW from "./LogoW";
function Footer({ className }) {
    return (
        <>
            <footer className={` bg-[url('/shine.jpg')] bg-cover bg-top-left lg:bg-auto md:bg-auto flex text-white px-5  md:p-18 lg:px-20 
            ${className}`}>
                <section id="upperfooter"
                    className="flex flex-col md:flex-row  lg:items-start py-10 gap-15">

                    <div className="flex flex-col w-auto my-3">
                        <LogoW
                            className="w-15 h-15 cursor-pointer bg-amber-500"
                        />
                        <p className="my-3 lg:w-100">Our aim is to exceed your expectations through our development efforts, as we are dedicated to delivering results that go above and beyond.</p>
                    </div>


                    <ul className="my-3 flex flex-col justify-center">
                        <span className="text-2xl font-bold">Contact Us</span>
                        <li className=" text-sm flex items-center pt-2">
                            <span className="material-symbols-outlined mr-2 text-[#4789FC]">
                                call
                            </span>

                            +44 7882 414162</li>
                        <li className=" text-sm flex items-center pt-2">
                            <span className="material-symbols-outlined mr-2 text-[#4789FC]">
                                email
                            </span>
                            info@nexaforgetech.com</li>
                        <li className=" text-sm flex items-center pt-2">
                            <span className="material-symbols-outlined mr-2 text-[#4789FC]">
                                location_on
                            </span>
                            29 Ainsley Rd Nottingham NG8 3PP, UK
                        </li>
                    </ul>



                    <ul className="my-3">
                        <span className="text-2xl font-bold mb-3">Quick Links</span>
                        <Link href={'/staff-augmentation'}>
                            <li className=" text-sm p-2 cursor-pointer">
                                Staff Augmentation </li>
                        </Link>

                        <Link href={'/services'}>
                            <li className=" text-sm p-2 cursor-pointer">
                                Services</li>
                        </Link>
                        <Link href={'/blogs'}>
                            <li className=" text-sm p-2 cursor-pointer">
                                Blogs
                            </li>
                        </Link>
                        <Link href={'/careers'}>
                            <li className=" text-sm p-2 cursor-pointer">
                                Careers
                            </li>
                        </Link>
                    </ul>
                </section>
            </footer>
            <footer>

                <div id="lowerfooter"
                    className="bg-[#0A1C36] h-auto w-full py-3 flex flex-col lg:flex-row justify-between px-5 lg:px-20 text-sm">
                    <div id="social"
                        className="flex justify-center items-center gap-3 mt-3 lg:mt-0"
                    >
                        <Link href={'https://www.facebook.com/profile.php?id=61556582074660&mibextid=kFxxJD'}>
                            <img src="/facebook.png" alt="facebook" className="w-4 h-auto" />
                        </Link>
                        <Link href={'https://twitter.com/NexaForgeTech'}>
                            <img src="/twitter.png" alt="twitter" className="w-4 h-auto" />
                        </Link>
                        <Link href={'https://www.instagram.com/nexaforgetech?igsh=czJvMzA4bXNtbW9h'}>
                            <img src="/instagram.png" alt="instagram" className="w-4 h-auto" /></Link>
                        <Link href={'https://www.linkedin.com/company/nexaforge-tech-pvt-ltd/'}>
                            <img src="/linkedin.png" alt="linkedin" className="w-4 h-auto" />
                        </Link>

                    </div>
                    <p className="text-white text-center mt-3 lg:mt-0">© 2024 <span className="font-bold"> NEXAFORGE TECHNOLOGIES</span>. Privacy Policy | Terms & Conditions</p>

                </div>
            </footer>

        </>
    );
}
export default Footer;