import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { FiScissors, FiZap, FiFilm, FiDownload } from "react-icons/fi";
import CinematicBackground from "./background/CinematicBackground";

export default function About() {
  const aboutRef = useRef(null);

  const Aboutdata = [
    {
      icon: <FiScissors size={20} />,
      title: "Editing Mindset",
      subtitle: "CUT WITH PURPOSE",
      desc: "I focus on pacing, rhythm, transitions, and sound to make every cut serve the story rather than simply filling the timeline.",
    },
    {
      icon: <FiZap size={20} />,
      title: "Motion Design",
      subtitle: "BRING IDEAS TO LIFE",
      desc: "I use motion, typography, composition, and visual effects to create movement that adds energy, meaning, and personality to every edit.",
    },
    {
      icon: <FiFilm size={20} />,
      title: "Storytelling",
      subtitle: "EVERY FRAME MATTERS",
      desc: "Whether it's a short-form edit or a cinematic sequence, I build visuals around emotion, attention, and the story I want the viewer to experience.",
    },
  ];
  const Tools = [
    {
      icon: (
        <img
          src="/premier-pro.png"
          alt="Premiere Pro"
          className="h-8 w-8 object-contain scale-[1.7]"
        />
      ),
      title: "Premiere Pro",
    },
    {
      icon: (
        <img
          src="/after-effects (2).png"
          alt="After Effects"
          className="h-9 w-9 object-contain"
        />
      ),
      title: "After Effects",
    },
    {
      icon: (
        <img
          src="/daavinci-resolve.png"
          alt="DaVinci Resolve"
          className="h-8 w-8 object-contain"
        />
      ),
      title: "DaVinci Resolve",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          invalidateOnRefresh: true,
          once: false,
          onEnter: () => {
            gsap.fromTo(
              ".about-reveal",
              {
                opacity: 0,
                y: 40,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
              },
            );
          },
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      className="relative w-full min-h-screen bg-[#05030B] overflow-hidden flex items-center justify-center font-sans tracking-wide py-12 sm:py-20 px-4 sm:px-6 md:px-12"
    >
      {/* --- BG EFFECTS --- */}

      <CinematicBackground />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-[contactGlow_5s_ease-in-out_infinite] rounded-full bg-[#FFB238]/[0.06] blur-[120px]" />

      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div
        className="absolute inset-0 z-[15] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, transparent 20%, rgba(0,0,0,0.9) 100%)",
        }}
      ></div>

      {/* --- STATIC FRAME IMAGE (LEFT 45%) --- */}

      <div
        className="absolute inset-y-0 left-0 w-[45%] z-10 pointer-events-none overflow-hidden hidden lg:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        }}
      >
        <img
          src="/hero.png"
          alt="Motion Designer and Video Editor"
          className="w-full h-full object-cover opacity-50 grayscale"
        />
      </div>

      {/* --- CONTENT (RIGHT 55%) --- */}

      <div className="relative z-[50] w-full lg:w-[80%] flex flex-col md:flex-row items-center justify-end">
        {/* Visual Gap for the face mask area */}

        <div className="hidden lg:block w-[55%] h-full"></div>

        {/* Main Content Pane */}

        <div className="w-full lg:w-[65%] flex flex-col space-y-8 sm:space-y-10 pointer-events-auto bg-black/40 backdrop-blur-sm p-5 sm:p-8 md:p-12 border border-white/5 rounded-2xl">
          {/* Header */}

          <div className="about-reveal space-y-2">
            <p className="text-[#FFB52E] font-mono text-[10px] uppercase tracking-[0.5em]">
              ABOUT ME
            </p>

            <h2
              className="
    text-3xl
    font-extrabold
    uppercase
    leading-[0.95]
    tracking-[-0.04em]
    text-white
    sm:text-4xl
    md:text-6xl
    lg:text-7xl
  "
            >
              <span className="block whitespace-normal sm:whitespace-nowrap">THE EDITOR BEHIND</span>

              <span className="block whitespace-normal sm:whitespace-nowrap text-[#FFB52E]">
                THE TIMELINE.
              </span>
            </h2>
          </div>

          {/* Bio Paragraph */}

          <div className="about-reveal robotic-section">
            <p className="text-gray-400 text-sm md:text-md lg:text-xl font-light leading-relaxed max-w-2xl">
              I'm a{" "}
              <span className="text-white font-medium">Motion Designer</span>{" "}
              and <span className="text-white font-medium">Video Editor</span>{" "}
              focused on turning ideas into engaging visual experiences. I
              combine editing, motion, pacing, and visual storytelling to create
              work that feels intentional — from high-retention edits to
              cinematic sequences and motion-driven visuals.
            </p>
          </div>

          {/* Cards Grid */}

          <div className="about-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Aboutdata.map((item) => (
              <div
                key={item.title}
                className="group p-6 min-h-[250px] bg-white/5 border border-white/10 hover:border-[#FFB52E]/40 transition-all duration-300 rounded-xl"
              >
                <div className="text-[#FFB52E] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>

                <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                  {item.title}
                </h4>

                <p className="text-[#FFB52E] text-[10px] uppercase tracking-[0.25em] mt-2 mb-3 font-mono">
                  {item.subtitle}
                </p>

                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Dock */}

          <div className="space-y-4 about-reveal">
            <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">
              Creative Toolkit
            </h4>

            <div className="flex flex-wrap gap-5">
              {Tools.map((tool) => (
                <div key={tool.title} className="group relative">
                  {/* Tooltip */}

                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-[#FFB52E] text-black text-[9px] font-mono py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[999]">
                    {tool.title}
                  </span>

                  {/* Card */}

                  <div className="relative overflow-hidden p-4 rounded-xl bg-black/50 border border-white/5 hover:border-[#FFB52E]/50 hover:shadow-[0_0_20px_rgba(255,181,46,0.25)] transition-all duration-300 flex items-center justify-center cursor-help">
                    {/* Scan Effect */}

                    <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#FFB52E]/20 to-transparent group-hover:translate-x-[180%] transition-transform duration-700 pointer-events-none" />

                    {/* Icon */}

                    <div className="relative text-gray-500 transition-all duration-300 group-hover:text-[#FFB52E] group-hover:scale-110">
                      {tool.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}

          <div className="pt-2 about-reveal">
            <a
              href="#projects"
              className="group relative overflow-hidden inline-flex items-center gap-4 px-10 py-4 rounded-full bg-[#FFB52E] border border-[#FFB52E]/30 text-[#080808] font-bold text-xs uppercase tracking-[0.25em] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,181,46,0.35)]"
            >
              {/* Shine animation */}
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[180%] transition-transform duration-700 pointer-events-none" />

              <span className="relative z-10">View My Work</span>

              <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
