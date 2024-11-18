import React from "react";
import Marquee from "react-fast-marquee";

export default function AutoScrollComponent({ children }) {
  return (
    <Marquee
      direction="left"
      speed={30}
      delay={1}
      pauseOnHover={true}
      autoFill={true}
    >
      {children}
    </Marquee>
  );
}
