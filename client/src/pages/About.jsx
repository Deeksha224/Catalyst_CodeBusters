import React from "react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

const About = () => {
  return (
    <div className="relative z-10">
      <ScrollStack
        itemDistance={-100}
        itemScale={0}
        itemStackDistance={0}
        stackPosition="0%"
        scaleEndPosition="0%"
        baseScale={1}
        useWindowScroll={true}
      >
        {/* Card 1 - Red Theme: What is Catalyst */}
        <ScrollStackItem itemClassName="w-full h-[120vh] bg-gradient-to-br from-red-600 via-red-500 to-orange-600 flex justify-center items-center relative overflow-hidden pb-40">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bruno font-bold text-white mb-6 leading-tight">
              What is <span className="text-orange-200">Catalyst</span>?
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 font-space leading-relaxed max-w-4xl mx-auto mb-8">
              Catalyst is not just an event—it's an{" "}
              <span className="font-semibold text-orange-200">experience</span>{" "}
              that ignites innovation. A 48-hour journey where brilliant minds
              converge to solve real-world problems, build groundbreaking
              solutions, and push the boundaries of technology.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-8 py-4">
                <div className="text-4xl font-bold text-white mb-2">48</div>
                <div className="text-sm text-white/80 uppercase tracking-wider">
                  Hours
                </div>
              </div>
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-8 py-4">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-white/80 uppercase tracking-wider">
                  Innovators
                </div>
              </div>
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-8 py-4">
                <div className="text-4xl font-bold text-white mb-2">₹50K</div>
                <div className="text-sm text-white/80 uppercase tracking-wider">
                  Prize Pool
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Card 2 - Blue Theme: Why Join */}
        <ScrollStackItem itemClassName="w-full pb-40 h-[120vh] bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 flex justify-center items-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-8">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bruno font-bold text-white mb-12 text-center leading-tight">
              Why <span className="text-cyan-200">Participate</span>?
            </h2>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-cyan-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Network
                </h3>
                <p className="text-white/80 text-sm">
                  Connect with industry leaders, mentors, and like-minded
                  innovators
                </p>
              </div>

              {/* Feature 2 */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Learn</h3>
                <p className="text-white/80 text-sm">
                  Master new technologies through workshops and hands-on
                  challenges
                </p>
              </div>

              {/* Feature 3 */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-cyan-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Win Big
                </h3>
                <p className="text-white/80 text-sm">
                  Compete for exciting prizes, internships, and career
                  opportunities
                </p>
              </div>

              {/* Feature 4 */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Innovate
                </h3>
                <p className="text-white/80 text-sm">
                  Transform your ideas into reality with cutting-edge tools and
                  mentorship
                </p>
              </div>

              {/* Feature 5 */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-cyan-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Get Certified
                </h3>
                <p className="text-white/80 text-sm">
                  Earn certificates and showcase your achievements to employers
                </p>
              </div>

              {/* Feature 6 */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Have Fun
                </h3>
                <p className="text-white/80 text-sm">
                  Enjoy games, activities, and unforgettable experiences
                  throughout
                </p>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Card 3 - Yellow Theme: Event Timeline */}
        <ScrollStackItem itemClassName="w-full h-[120vh] bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 flex justify-center items-center relative overflow-hidden pb-40 pt-40">
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-8">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bruno font-bold text-white mb-12 text-center leading-tight">
              Event <span className="text-orange-900">Timeline</span>
            </h2>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Day 1 - Morning */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-white">Day 1</div>
                  <div className="text-sm text-white/80">9:00 AM</div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-white rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="w-0.5 h-full bg-white/30 group-hover:bg-white/50 transition-colors duration-300"></div>
                </div>
                <div className="flex-grow backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Registration & Opening Ceremony
                  </h3>
                  <p className="text-white/80">
                    Welcome address, team formation, and problem statement
                    reveal
                  </p>
                </div>
              </div>

              {/* Day 1 - Afternoon */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-sm text-white/80">12:00 PM</div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-white rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="w-0.5 h-full bg-white/30 group-hover:bg-white/50 transition-colors duration-300"></div>
                </div>
                <div className="flex-grow backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Hacking Begins + Lunch
                  </h3>
                  <p className="text-white/80">
                    Start building your solutions with mentor support
                  </p>
                </div>
              </div>

              {/* Day 1 - Evening */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-sm text-white/80">6:00 PM</div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-white rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="w-0.5 h-full bg-white/30 group-hover:bg-white/50 transition-colors duration-300"></div>
                </div>
                <div className="flex-grow backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Tech Talks & Workshops
                  </h3>
                  <p className="text-white/80">
                    Learn from industry experts and enhance your skills
                  </p>
                </div>
              </div>

              {/* Day 2 - Morning */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-white">Day 2</div>
                  <div className="text-sm text-white/80">9:00 AM</div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-white rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="w-0.5 h-full bg-white/30 group-hover:bg-white/50 transition-colors duration-300"></div>
                </div>
                <div className="flex-grow backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Final Sprint
                  </h3>
                  <p className="text-white/80">
                    Polish your project and prepare for presentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
};

export default About;
