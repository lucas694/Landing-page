import Image from "next/image";

const TestimonialCards = (props) => {
    const {img, name, job, dribbble, text, rating} = props
    return(
        <div className="flex flex-col items-center text-center p-6 w-[370px] md:flex-row md:w-[770px] lg:flex-col lg:w-[370px] ">
            <div className='w-full flex flex-col items-center text-center '>
                <Image src={img}
                width={56}
                height={56}
                alt="."/>
                <h1 className='text-[#2D2D2D] text-xl sm:text-3xl font-bold mt-3'>{name}</h1>
                <p className='text-[#374151] text-base font-semibold  mt-2 '>{job} {dribbble}</p> 
            </div>
            
            <div className='w-full flex flex-col items-center text-center md:text-start lg:text-center'>
                <p className='text-[#2D2D2D] text-xl font-semibold mt-7 md:text-lg lg:text-xl'>{text}</p>
                <Image src={rating}
                    className="mt-4"
                    width={300}
                    height={24}
                    alt="."/>
            </div>
        </div>
    )
};
export default TestimonialCards