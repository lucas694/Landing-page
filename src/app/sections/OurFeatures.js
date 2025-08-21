import Image from "next/image";
import { GiInterceptorShip } from "react-icons/gi";
import { FaMagic } from "react-icons/fa";
import { RiShape2Line } from "react-icons/ri";
import { BsBoxSeamFill } from "react-icons/bs";


const OurFeatures = () => {
    return(
        <div className="w-full flex flex-col-reverse px-6 justify-around py-10 md:px-14 lg:py-20 lg:flex-row">
            <div className='w-full flex justify-center mt-10 lg:mt-0 lg:w-auto'>
                <Image src='/assets/features-img.png'
                width={540}
                height={450}
                alt="features"/>
            </div>
            <div className='w-full flex flex-col lg:w-1/2 2xl:pr-40'>
                <h1 className='text-[#2D2D2D] text-4xl font-bold'>Our Features</h1>
                <p className='text-[#2D2D2D] text-base md:text-lg font-normal mt-2'>Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.</p>
                <div className='w-full flex flex-row items-center justify-around mt-20 '>
                    <div className='flex flex-row items-center w-auto '>
                        <GiInterceptorShip className='h-4 w-4 mr-1 text-[#009379] sm:h-6 sm:w-6 sm:mr-4' />
                        <h1 className='text-[#2D2D2D] text-lg font-semibold sm:text-xl'>Fast building</h1>
                    </div>
                    <div className='flex flex-row items-center w-auto'>
                        <FaMagic className='h-4 w-4 mr-1 text-[#009379] sm:h-6 sm:w-6 sm:mr-4' />
                        <h1 className='text-[#2D2D2D] text-lg font-semibold sm:text-xl'>Easy to edit</h1>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-around mt-16 '>
                    <div className='flex flex-row items-center w-auto'>
                        <RiShape2Line className='h-4 w-4 mr-1 text-[#009379] sm:h-6 sm:w-6 sm:mr-4' />
                        <h1 className='text-[#2D2D2D] text-lg font-semibold sm:text-xl'>Responsiveness</h1>
                    </div>
                    <div className='flex flex-row items-center w-auto'>
                        <BsBoxSeamFill className='h-4 w-4 mr-1 text-[#009379] sm:h-6 sm:w-6 sm:mr-4' />
                        <h1 className='text-[#2D2D2D] text-lg font-semibold sm:text-xl'>No code needed</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default OurFeatures;