import HeroSection from "@/app/sections/HeroSection";
import OurFeatures from "@/app/sections/OurFeatures";
import LatestWorks from "@/app/sections/LatestWorks";
import Testimonial from "@/app/sections/Testimonial";
import Plan from "@/app/sections/Plan";
import Team from "@/app/sections/Team";
import Highlighted from "@/app/sections/Highlighted";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <OurFeatures/>
      <LatestWorks/>
      <Testimonial/>
      <Plan/>
      <Team/>
      <Highlighted/>
    </div>
  );
}
