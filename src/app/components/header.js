import Image from "next/image";
import { MdOutlineRocketLaunch } from "react-icons/md";


const header = () => {
    return(
        <div className='w-full fixed flex-row items-center justify-center py-8 px-14 flex lg:justify-between'>
            <div className="flex flex-row items-center">
                <Image src='/assets/header-logo.png' 
                width={32}
                height={32}
                alt="header"
                />
                <p className='text-[#2D2D2D] text-3xl font-bold ml-1 lg:text-2xl'>Landing
                    <span className='text-[#2D2D2D] text-3xl font-normal lg:text-2xl '>Page</span>
                </p>
            </div>
            <div className=' hidden flex-row items-center space-x-6 lg:flex'>
                <button className="text-[#009379] font-bold text-lg px-10 py-3 rounded-[20px] cursor-pointer bg-[#E5F4F2] border border-transparent
                hover:border-[#009379] transition duration-500">
                    Contact
                </button>
                <button className="text-[#009379] font-bold text-lg px-10 py-3 rounded-[20px] cursor-pointer bg-[#E5F4F2] border border-transparent
                hover:border-[#009379] transition duration-500">
                    Get Started
                </button>
                <button className="flex items-center text-[#E5F4F2] font-bold text-lg px-10 py-3 rounded-[20px] cursor-pointer bg-[#009379]">
                    <MdOutlineRocketLaunch className="mr-1"/>
                    Get Started
                </button>
            </div>
        </div>
    )
};
export default header