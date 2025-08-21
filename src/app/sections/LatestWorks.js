import LatestWorksCards from "../components/LatestWorksCards";
import { getLatestWorksData } from "../utils/Utils";

const LatestWorks = () => {
    const LatestWorkdsData = getLatestWorksData();
    return(
        <div className='w-full flex-col items-center px-6 py-10 lg:py-20 '>
            <div className="w-full flex flex-col text-center">
                <h1 className='text-[#2D2D2D] text-4xl font-bold'>Discover our latest work</h1>
                <p className='text-[#2D2D2D] text-base  font-normal mt-4 md:text-lg'>Explore our portfolio and see the latest and greatest projects that we&apos;ve brought to life.</p>
            </div>
            <div className='w-full flex flex-col items-center mt-10 space-y-6 lg:space-y-0 lg:flex-row lg:justify-around lg:space-x-6'>
                {LatestWorkdsData.slice(0, 3).map((work) => (
                    <LatestWorksCards
                        key={work.id}
                        link={work.link}
                        title={work.title}
                        description={work.description}
                        category={work.category}
                        img={work.img}
                    />
                ))}
            </div>
        </div>
    )
};export default LatestWorks