import HeroEventAndWebinar from "@/components/eventAndWebinar/HeroEventAndWebinar";
import PreviousEventSection from "@/components/eventAndWebinar/PreviousEventSection";
import PreviousWebinarSection from "@/components/eventAndWebinar/PreviousWebinarSection";
import UpcomingSection from "@/components/eventAndWebinar/UpcomingSection";
import React from "react";

export default function EventAndWebinarPage() {
  return (
    <div>
      <HeroEventAndWebinar />
      <UpcomingSection />
      <PreviousEventSection />
      <PreviousWebinarSection />
    </div>
  );
}
