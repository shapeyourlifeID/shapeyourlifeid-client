import HeroSection from "@/components/homepage/HeroSection";
import AchievmentSection from "@/components/homepage/AchievmentSection";
import ContentPublicationsSection from "@/components/homepage/ContentPublicationsSection";
import OurPartners from "@/components/homepage/OurPartner";
import ProgramsSection from "@/components/homepage/ProgramsSection";
import ScholarshipExchangeSection from "@/components/homepage/ScholarshipExchangeSection";
import TheTeamsSection from "@/components/homepage/TheTeamsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurPartners />
      <AchievmentSection />
      <ProgramsSection />
      <ScholarshipExchangeSection />
      <ContentPublicationsSection />
      <TheTeamsSection />
    </main>
  );
}
