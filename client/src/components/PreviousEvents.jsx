import React from "react";

const PreviousEvents = () => {
  const events = [
    {
      year: "2024",
      name: "Catalyst 2.0",
      theme: "AI & Machine Learning",
      participants: 450,
      projects: 89,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      highlights: ["24-hour Hackathon", "Industry Mentors", "₹40K Prize Pool"],
      color: "blue",
    },
    {
      year: "2023",
      name: "Catalyst 1.0",
      theme: "Web3 & Blockchain",
      participants: 320,
      projects: 67,
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      highlights: ["Startup Pitches", "Tech Workshops", "Networking Sessions"],
      color: "cyan",
    },
    {
      year: "2022",
      name: "TechFusion",
      theme: "IoT & Smart Solutions",
      participants: 280,
      projects: 54,
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      highlights: ["Hardware Hacks", "Live Demos", "Product Launch"],
      color: "violet",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b06_1px,transparent_1px),linear-gradient(to_bottom,#1e293b06_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/[0.08] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-600/[0.06] rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-slate-900/50 border border-slate-800/50 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
            <span className="text-blue-400/90 text-sm font-medium uppercase tracking-wider">
              Our Legacy
            </span>
          </div>

          {/* Main Title */}
          <h2 className="font-bruno text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-200 via-blue-400 to-blue-700 mb-6 tracking-tight">
            Previous Events
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A journey through innovation, collaboration, and groundbreaking
            achievements from our past events
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-blue-500/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
            <div className="w-20 h-px bg-gradient-to-r from-blue-500/40 to-transparent"></div>
          </div>
        </div>

        {/* Events Timeline */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={event.year}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Event Card */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-slate-900/60 to-slate-950/60 border border-slate-800/50 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.01] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    event.color === "blue"
                      ? "from-blue-600/[0.05]"
                      : event.color === "cyan"
                      ? "from-cyan-600/[0.05]"
                      : "from-violet-600/[0.05]"
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10"></div>
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Year Badge on Image */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/50 rounded-2xl px-6 py-3 shadow-xl">
                        <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                          Year
                        </div>
                        <div className="text-blue-400 text-3xl font-bold">
                          {event.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    {/* Event Name */}
                    <h3 className="text-3xl md:text-4xl font-bruno font-bold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {event.name}
                    </h3>

                    {/* Theme */}
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      <span className="text-blue-400 text-sm font-medium">
                        {event.theme}
                      </span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="backdrop-blur-lg bg-slate-800/30 border border-slate-700/30 rounded-xl p-4">
                        <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                          Participants
                        </div>
                        <div className="text-slate-100 text-2xl font-bold">
                          {event.participants}+
                        </div>
                      </div>
                      <div className="backdrop-blur-lg bg-slate-800/30 border border-slate-700/30 rounded-xl p-4">
                        <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                          Projects
                        </div>
                        <div className="text-slate-100 text-2xl font-bold">
                          {event.projects}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-3">
                        Event Highlights
                      </div>
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              event.color === "blue"
                                ? "bg-blue-400"
                                : event.color === "cyan"
                                ? "bg-cyan-400"
                                : "bg-violet-400"
                            } shadow-[0_0_8px_rgba(59,130,246,0.6)]`}
                          ></div>
                          <span className="text-slate-300 text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <button className="mt-8 group/btn inline-flex items-center gap-2 backdrop-blur-lg bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 hover:border-blue-400/50 rounded-xl px-6 py-3 text-blue-400 hover:text-blue-300 font-medium transition-all duration-300">
                      View Gallery
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-4 backdrop-blur-xl bg-gradient-to-br from-slate-900/60 to-slate-950/60 border border-slate-800/50 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <h3 className="text-2xl md:text-3xl font-bruno font-bold text-slate-100">
              Ready to be part of{" "}
              <span className="text-blue-400">Catalyst 2025</span>?
            </h3>
            <p className="text-slate-400 text-sm max-w-md">
              Join us in creating the next chapter of innovation and excellence
            </p>
            <button className="group mt-4 relative px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-xl font-semibold text-white text-base overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_10px_40px_rgba(59,130,246,0.4)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                Register for 2025
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;
