import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TeamCards = (props) => {
    const {name,img,job,twitter,dribbble,instagram} = props
    return(
        <div className="flex flex-col max-w-[370px] rounded-t-3xl ">
            <Image src={img}
                width={370}
                height={278}
                alt="."/>
            <div className="flex flex-col items-center py-5">
                <h1 className='text-[#2D2D2D] text-xl sm:text-2xl font-bold'>{name}</h1>
                <p className='text-[#2D2D2D] text-base sm:text-lg  mt-2 '>{job}</p>
                <div className="w-full flex flex-row justify-center mt-4 py-4 space-x-5 border-t-2 border-[#D8D8D8]">
                    <Link href={twitter}>
                        <FaTwitter className='w-[23px] h-[23px] text-[#2D2D2D]'/>
                    </Link>
                    <Link href={dribbble}>
                        <FaDribbble className='w-[23px] h-[23px] text-[#2D2D2D]'/>
                    </Link>
                    <Link href={instagram}>
                        <FaInstagram className='w-[23px] h-[23px] text-[#2D2D2D]'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}; export default TeamCards