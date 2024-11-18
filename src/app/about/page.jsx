import AllTeamSection from "@/components/about/AllTeamSection";
import FeaturedSection from "@/components/about/FeaturedSection";
import GetInTouch from "@/components/about/GetInTouch";
import HeroAboutPage from "@/components/about/HeroAboutPage";

export default function AboutPage() {
  return (
    <div>
      <HeroAboutPage />
      <FeaturedSection />
      <AllTeamSection />
      <GetInTouch />
    </div>
  );
}
