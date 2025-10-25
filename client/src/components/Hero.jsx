import React from "react";
import TrueFocus from "./TrueFocus";
import GradientText from "./GradientText";

const Hero = () => {
  return (
    <div className="w-full h-full flex-col flex justify-center items-center gap-5 overflow-hidden py-20">
      {/* Enhanced Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(6,182,212,0.2),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_60%,rgba(59,130,246,0.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* Sophisticated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      {/* Diagonal Lines Accent */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.1)_49%,rgba(59,130,246,0.1)_51%,transparent_52%)] bg-[length:100px_100px]"></div>
      </div>

      {/* Enhanced Floating Orbs with Motion */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div
        className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-4 max-w-7xl mx-auto">
        {/* Enhanced Top Badge with Glow */}
        <div className="backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/40 rounded-full px-8 py-3 flex items-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] transition-all duration-300">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
          </span>
          <TrueFocus
            sentence="Codebusters Presents"
            manualMode={false}
            blurAmount={2}
            borderColor="blue"
            animationDuration={1.5}
            pauseBetweenAnimations={1}
          />
        </div>

        {/* Main Title with Enhanced Effects */}
        <div className="relative flex flex-col items-center gap-4">
          <h1 className="font-bruno text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-blue-700 to-blue-900 drop-shadow-2xl tracking-tight leading-none text-center">
            Catalyst
          </h1>

          {/* Enhanced Glow Effects */}
          <div className="absolute inset-0 blur-[100px] bg-gradient-to-b from-blue-400/40 via-blue-600/20 to-transparent -z-10 scale-110"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[60px] bg-blue-500/30 rounded-full -z-10"></div>

          {/* Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
        </div>

        {/* Enhanced Subtitle */}
        <div className="max-w-3xl mx-auto">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={5}
            showBorder={false}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-space text-center leading-relaxed font-light tracking-wide"
          >
            Catalyst is a 2-Days Flagship Tech Event filled with challenges,
            chaos and collaboration.
          </GradientText>
        </div>

        {/* Enhanced Event Details Cards with Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="group backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-blue-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <div className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">
              Duration
            </div>
            <div className="text-white text-2xl font-bold">2 Days</div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="group backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <div className="text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-1">
              Format
            </div>
            <div className="text-white text-2xl font-bold">Hybrid</div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="group backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-blue-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <div className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">
              Category
            </div>
            <div className="text-white text-2xl font-bold">Tech</div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>

      {/* Enhanced Floating Particles with Varied Sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor:
                i % 3 === 0
                  ? "rgba(59, 130, 246, 0.3)"
                  : i % 3 === 1
                  ? "rgba(6, 182, 212, 0.3)"
                  : "rgba(147, 51, 234, 0.2)",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 15}s`,
              filter: "blur(1px)",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
