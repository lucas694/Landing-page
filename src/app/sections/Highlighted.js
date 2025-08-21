import Image from "next/image";
import { MdOutlineRocketLaunch } from "react-icons/md";


const Highlighted = () => {
    return(
        <div className='w-full flex justify-center p-6 py-10 lg:px-14 lg:py-20'>
            <div className='w-[100%] flex flex-col bg-[#F2BFAF]  rounded-3xl xl:w-[80%] lg:flex-row 2xl:w-[65%]'>
                <div className='w-full p-6 text-center lg:w-1/2 lg:text-start lg:px-12 lg:pt-12'>
                    <h1 className="text-[#2D2D2D] text-4xl font-bold lg:text-5xl">Get Landing Page <br /> UI Kit Today!</h1>
                    <p className="mt-5 text-lg text-[#2D2D2D] lg:text-xl">Break the Figma limits and explore the endless possibilities with Anima.</p>
                    <div className='w-full mt-8 lg:w-auto'>
                        <button className="w-full flex items-center justify-center text-[#E5F4F2] font-bold text-lg px-10 py-3 rounded-[20px] cursor-pointer bg-[#009379]
                        lg:w-auto">
                            <MdOutlineRocketLaunch className="mr-1"/>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-end lg:w-1/2">
                    <Image src={"/assets/highlighted.png"}
                        width={584}
                        height={434}
                        alt="."/>

                </div>
            </div>
        </div>
    )
}; export default Highlighted