import { FaCheck } from "react-icons/fa6";


const Plan = () => {
    return(
        <div className="className='w-full flex-col items-center px-6 py-10 lg:py-20 ">
            <div className="w-full flex flex-col text-center">
                <h1 className='text-[#2D2D2D] text-4xl font-bold'>Pick Your Perfect Plan</h1>
                <p className='text-[#2D2D2D] text-base  font-normal mt-4 md:text-lg'>Find the perfect plan for your business with our flexible pricing options.</p>
            </div>

            <div className="w-full flex flex-col items-center mt-10 space-y-20 md:space-y-10 lg:space-y-0 lg:flex-row lg:justify-around ">
                <div className="group ...flex flex-col p-6 w-[370px] text-[#2D2D2D] bg-white rounded-[20px] 
                hover:bg-[#009379] group-hover:text-white transition duration-500">
                    <h2 className="text-xl font-semibold  group-hover:text-white ">Free</h2>
                    <div className="flex flex-row items-end mt-4">
                        <h1 className="text-6xl font-bold group-hover:text-white ">$0</h1>
                        <p className="text-lg font-semibold ml-3  group-hover:text-white ">/ month</p>
                    </div>
                    <p className="mt-4 text-lg  group-hover:text-white ">Best for Small Teams or Individuals.</p>
                    <div className="w-full flex-col mt-6 space-y-4  group-hover:text-white group-hover:stroke-white">
                        <div className="flex flex-row items-center">
                            <FaCheck className="text-[#009379] h-[20px] w-[20px] group-hover:text-white" />
                            <h1 className="ml-3 font-semibold  group-hover:text-white ">Write feature details here</h1>
                        </div>
                        <div className="flex flex-row items-center ">
                            <FaCheck className="text-[#009379] h-[20px] w-[20px] group-hover:text-white" />
                            <h1 className="ml-3 font-semibold ">Write feature details here</h1>
                        </div>
                        <div className="flex flex-row items-center">
                            <FaCheck className="text-[#009379] h-[20px] w-[20px] group-hover:text-white" />
                            <h1 className="ml-3 font-semibold">Write feature details here</h1>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <button className="text-[#009379] w-full font-bold text-lg px-10 py-3 rounded-[20px] cursor-pointer bg-[#E5F4F2] border border-transparent
                        hover:border-[#009379] transition duration-500">
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="group ...flex flex-col p-6 w-[370px] text-[#2D2D2D] bg-white rounded-[20px] 
                hover:bg-[#009379] group-hover:text-white transition duration-500">
                    <h2 className="text-xl font-semibold  group-hover:text-white ">Professional</h2>
                    <div className="flex flex-row items-end mt-4">
                        <h1 className="text-6xl font-bold group-hover:text-white ">$19</h1>
                        <p className="text-lg font-semibold ml-3  group-hover:text-white ">/ month</p>
                    </div>
                    <p className="mt-4 text-lg  group-hover:text-white ">Ideal for Growing Companies.</p>
                    <div className="w-full flex-col mt-6 space-y-4  group-hover:text-white group-hover:stroke-white">
                        <div className="flex flex-row items-center">
                            <FaCheck className="text-[#009379] h-[20px] w-[20px] group-hover:text-white" />
                            <h1 className="ml-3 font-semibold  group-hover:text-white ">Write feature details here</h1>
                        </div>
                        <div className="flex flex-row items-center ">
                            <FaCheck className="text-[#009379] h-[20px] w-[20px] group-hover:text-white" />
                            <h1 className="ml-3 font-semibold ">Write feature details here</h1>
                        </div>
                        <div className="flex flex-row items-center">
                            <FaCheck className="text-[#009379] h-[20px] w-[20px] group-hover:text-white" />
                            <h1 className="ml-3 font-semibold">Write feature details here</h1>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <button className="text-[#009379] w-full font-bold text-lg px-10 py-3 rounded-[20px] cursor-pointer bg-[#E5F4F2] border border-transparent
                            hover:border-[#009379] transition duration-500">
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="group ...flex flex-col p-6 w-[370px] text-[#2D2D2D] bg-white rounded-[20px] 
                hover:bg-[#009379] group-hover:text-white transition duration-500">
                    <h2 className="text-xl font-semibold  group-hover:text-white ">Enterprise</h2>
                    <div className="flex flex-row items-end mt-4">
                        <h1 className="text-6xl font-bold group-hover:text-white ">$49</h1>
                        <p className="text-lg font-semibold ml-3  group-hover:text-white ">/ month</p>
                    </div>
                    <p className="mt-4 text-lg  group-hover:text-white ">Ultimate for Enterprise Solutions.</p>
                    <div className="w-full flex-col mt-6 space-y-4  group-hover:text-white group-hover:stroke-white">
                        <div className="flex flex-row items-center">
                            <FaCheck className="text-[#009379] h-[20px] w-[20px] group-hover:text-white" />
                            <h1 className="ml-3 font-semibold  group-hover:text-white ">Write feature details here</h1>
                        </div>
                        <div className="flex flex-row items-center ">
                            <FaCheck className="text-[#009379] h-[20px] w-[20px] group-hover:text-white" />
                            <h1 className="ml-3 font-semibold ">Write feature details here</h1>
                        </div>
                        <div className="flex flex-row items-center">
                            <FaCheck className="text-[#009379] h-[20px] w-[20px] group-hover:text-white" />
                            <h1 className="ml-3 font-semibold">Write feature details here</h1>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <button className="text-[#009379] w-full font-bold text-lg px-10 py-3 rounded-[20px] cursor-pointer bg-[#E5F4F2] border border-transparent
                        hover:border-[#009379] transition duration-500">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default Plan