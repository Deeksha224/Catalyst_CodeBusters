import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import PreviousEvents from "../components/PreviousEvents";

const Homepage = () => (
  <div className="relative w-full">
    {/* Hero + About Section with sticky effect */}
    <div className="relative w-full" style={{ height: "460vh" }}>
      {/* Sticky Hero for first 100vh, scrolls up as About finishes */}
      <div className="sticky top-0 h-screen z-0">
        <Hero />
      </div>
      <div className="absolute top-[100vh] left-0 w-full z-10">
        <About />
      </div>
    </div>

    {/* Previous Events Section - Normal flow after Hero+About */}
    <div className="relative z-10 bg-slate-950">
      <PreviousEvents />
    </div>
  </div>
);

export default Homepage;
