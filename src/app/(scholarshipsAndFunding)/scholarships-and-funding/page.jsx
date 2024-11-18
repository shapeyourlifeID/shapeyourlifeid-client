import AllFundingsSection from "@/components/scholarshipsAndFunding/AllFundingsSection";
import HeroScholarshipsAndFunding from "@/components/scholarshipsAndFunding/HeroScholarshipsAndFunding";
import HighlightScholarshipsAndFunding from "@/components/scholarshipsAndFunding/HighlightScholarshipsAndFunding";
import RelatedPublication from "@/components/scholarshipsAndFunding/RelatedPublication";

export default function ScholarshipsAndFundingPage() {
  return (
    <div>
      <HeroScholarshipsAndFunding />
      <HighlightScholarshipsAndFunding />
      <AllFundingsSection />
      <RelatedPublication />
    </div>
  );
}
