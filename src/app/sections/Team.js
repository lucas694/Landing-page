import TeamCards from "../components/TeamCards";
import {getOurTeamData} from "../utils/Utils"

const Team = () => {
    const ourTeam = getOurTeamData().slice(0, 3)
    return(
        <div className='w-full flex-col items-center px-6 py-10 lg:py-20 '>
            <div className="w-full flex flex-col text-center">
                <h1 className='text-[#2D2D2D] text-4xl font-bold'>Meet out team</h1>
                <p className='text-[#2D2D2D] text-base  font-normal mt-4 md:text-lg'>Get to know the faces behind the scenes and learn about the values that drive us.</p>
            </div>
            <div className='w-full flex flex-col items-center mt-10  space-y-20 md:space-y-10 lg:space-y-0 lg:flex-row lg:space-x-4 lg:justify-around '>
                {ourTeam.map(member => (
                    <TeamCards
                        key={member.id}
                        name={member.name}
                        img={member.ourTeam}
                        job={member.job}
                        twitter={member.twitter}
                        dribbble={member.dribbble}
                        instagram={member.instagram}
                    />
                ))}
            </div>
        </div>
    )
}; export default Team