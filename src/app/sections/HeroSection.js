import Image from "next/image"; 
import { MdOutlineRocketLaunch } from "react-icons/md";

const HeroSection = () => {
    return(
        <div className='w-full flex flex-col justify-between bg-[#F8D57E] px-6 pt-10 md:px-14 md:pt-20 lg:flex-row  '>
            <div className='w-full  xl:w-[40%] mt-10'>
                <h1 className="text-[#2D2D2D] text-5xl font-bold text-center md:text-5xl lg:text-6xl lg:text-start ">Create Engaging Landing Pages</h1>
                <p className="text-[#2D2D2D] text-xl font-normal mt-6 text-center lg:text-2xl lg:text-start">Build beautiful landing pages in record time with Anima’s Landing Page UI kit for Figma. No code required!</p>
                <div className='w-full flex flex-col mt-8 pb-2 space-y-4 space-x-4 lg:flex-row lg:space-y-0 lg:space-x-4'>
                    <button className="w-full flex items-center justify-center  text-[#E5F4F2] font-bold text-lg px-10 py-3 rounded-[20px] cursor-pointer bg-[#009379]
                    lg:w-auto">
                        <MdOutlineRocketLaunch className="mr-1"/>
                        Get Started
                    </button>

                    <button className="w-full text-[#009379] font-bold text-lg px-10 py-3 rounded-[20px] cursor-pointer bg-[#E5F4F2] border border-transparent 
                    hover:border-[#009379] transition duration-500 lg:w-auto">
                        How it works
                    </button>
                </div>
            </div>
            <div className='w-full mt-10  flex justify-center md:mt-0 lg:w-1/2'>
                <Image src="/assets/hero-img.png" 
                    width={450}
                    height={450} 
                    alt="hero"
                />
            </div>
        </div>
    )
};
export default HeroSection;