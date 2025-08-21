import Image from "next/image";

const LatestWorksCards = (props) => {
    const {title, description, category, img,link} = props
    return(
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col max-w-[370px] rounded-t-[20px] overflow-hidden">
            <Image src={img}
                className='w-[370px] h-[278px]'
                width={370}
                height={278}
                alt="."/>
            <div className="flex flex-col p-4 sm:p-5">
                <h1 className='text-[#2D2D2D] text-xl sm:text-2xl font-bold'>{title}</h1>
                <p className='text-[#2D2D2D] text-base sm:text-lg  font-semibold mt-2 '>{description}</p>
                <p className='text-[#2D2D2D] text-xs  sm:text-sm font-semibold mt-2 '>{category}</p>
            </div>
        </a>

    )
}  ;export default LatestWorksCards