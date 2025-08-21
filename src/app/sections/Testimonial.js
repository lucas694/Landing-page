import TestimonialCards from "../components/TestimonialCards"
import {getOurTeamData} from "../utils/Utils"

const Testimonial = () => {
    const ourTeam = getOurTeamData().slice(0, 3)
    return(
        <div className='w-full flex-col items-center px-6 py-10 lg:py-20 '>
            <div className="w-full flex flex-col text-center">
                <h1 className='text-[#2D2D2D] text-4xl font-bold'>Real Stories from Satisfied Customers</h1>
                <p className='text-[#2D2D2D] text-base  font-normal mt-4 md:text-lg'>See how our landing page ui kit is making an impact.</p>
            </div>
            <div className='w-full flex flex-col items-center mt-10 space-y-20 md:space-y-10 lg:space-y-0 lg:flex-row lg:justify-around '>
                {ourTeam.map(member => (
                    <TestimonialCards
                        key={member.id}
                        img={member.testimonialImg}
                        name={member.name}
                        job={member.job}
                        dribbble={member.dribbble}
                        text={member.text}
                        rating={member.testimonialStars}
                    />
                ))}
            </div>
        </div>
    )
};
export default Testimonial