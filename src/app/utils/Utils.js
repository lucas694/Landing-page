

const LatestWorksData = [
    {id:1,title:"Portlight", description:"Short Description",category:"Category",img:'/assets/Portlight.png',link:"https://portlight.vercel.app",},
    {id:2,title:"Fitness Gym", description:"Short Description",category:"Category",img:'/assets/Fitness.png',link:"https://fitness-gym-theta.vercel.app",},
    {id:3,title:"Digital Marketing", description:"Short Description",category:"Category",img:'/assets/DigitalMarketing.png',link:"https://digital-marketing-seven.vercel.app",},
];

const OurTeamData = [
    {id:1,name:'Sarah K.', job:'UX Designer',twitter:'#sarah',dribbble:'@Brello',instagram:'#sarah',ourTeam:"/assets/team/sarah-team.png", testimonialImg:"/assets/team/sarah-testimonial.png", testimonialStars:'/assets/team/5star.png',text:'"I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"'},
    {id:2,name:'Michael L.', job:'Creative Director',twitter:'#michael',dribbble:'@Yo',instagram:'#michael',ourTeam:"/assets/team/michael-team.png", testimonialImg:"/assets/team/michael-testimonial.png", testimonialStars:'/assets/team/4star.png',text:'"The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"'},
    {id:3,name:'Lauren M.', job:'UI Designer',twitter:'#lauren',dribbble:'@Boo',instagram:'#lauren',ourTeam:"/assets/team/lauren-team.png", testimonialImg:"/assets/team/lauren-testimonial.png", testimonialStars:'/assets/team/5star.png',text:'"Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether Im working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."'}
]

export function getLatestWorksData() {
    return LatestWorksData
}

export function getOurTeamData() {
    return OurTeamData
}
