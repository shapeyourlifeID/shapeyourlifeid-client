import CheckOutInstagram from "@/components/publications/CheckOutInstagram";
import HeroPublication from "@/components/publications/HeroPublication";
import HightlightPublicationSection from "@/components/publications/HightlightPublicationSection";
import HightlightSection from "@/components/publications/HightlightPublicationSection";
import PublicationSection from "@/components/publications/PublicationSection";
import React from "react";

export default function PublicationPage() {
  return (
    <div>
      <HeroPublication />
      <HightlightPublicationSection />
      <PublicationSection />
      <CheckOutInstagram />
    </div>
  );
}
