import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


import Link from "next/link";

const Footer = () => {
    return(
        <div className="w-full flex flex-col px-6 py-6 justify-between items-center space-y-4 bg-[#2D2D2D] md:space-y-0 md:px-20 md:flex-row">
            <h1 className="text-white">© 2025 Anima Landing Page by Lucas. </h1>
            <div className="flex flex-row space-x-4">
                <Link href="#" className="rounded-full p-2 bg-[#4E4D4D]">
                    <FaYoutube className="w-[22px] h-[22px] text-white"/>
                </Link>
                <Link href="#" className="rounded-full p-2 bg-[#4E4D4D]">
                    <FaInstagram className="w-[22px] h-[22px] text-white"/>
                </Link>
                <Link href="#" className="rounded-full p-2 bg-[#4E4D4D]">
                    <FaGithub className="w-[22px] h-[22px] text-white"/>
                </Link>
                <Link href="#" className="rounded-full p-2 bg-[#4E4D4D]">
                    <FaLinkedinIn className="w-[22px] h-[22px] text-white"/>
                </Link>
            </div>
        </div>
    )
};export default Footer