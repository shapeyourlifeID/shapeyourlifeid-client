import HeroMentorshipAndBootcamps from "@/components/mentorshipAndBootcamps/HeroMentorshipAndBootcamps";
import PreviousBootcamps from "@/components/mentorshipAndBootcamps/PreviousBootcamps";
import PreviousMentorship from "@/components/mentorshipAndBootcamps/PreviousMentorship";
import UpcomingSectionMentoringBootcamps from "@/components/mentorshipAndBootcamps/UpcomingSectionMentoringBootcamps";
import React from "react";

export default function MentorshipAndBootcampPage() {
  return (
    <div>
      <HeroMentorshipAndBootcamps />
      <UpcomingSectionMentoringBootcamps />
      <PreviousMentorship />
      <PreviousBootcamps />
    </div>
  );
}
