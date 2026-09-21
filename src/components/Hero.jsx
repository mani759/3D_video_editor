import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);

  const textContainerRef = useRef(null);
  const roleWrapperRef = useRef(null);
  const subtitleWrapperRef = useRef(null);
  const highlightWrapperRef = useRef(null);

  const frameCount = 263;
  const currentFrame = (index) =>
    `/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

  const imagesRef = useRef([]);
  // We use an object to track the frame so GSAP can animate the value smoothly
  const seqRef = useRef({ frame: 0 });

  useEffect(() => {
    // Preload sequence
    let loadedCount = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) setLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === frameCount) setLoaded(true);
      };
      imagesRef.current.push(img);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const render = () => {
      if (!canvasRef.current || !imagesRef.current.length) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Clamp frame just in case
      let frameIdx = Math.round(seqRef.current.frame);
      if (frameIdx >= frameCount) frameIdx = frameCount - 1;

      const img = imagesRef.current[frameIdx];
      if (img && img.complete && img.naturalHeight !== 0) {
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height,
        );
        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }

      // Update state only if threshold is crossed to minimize re-renders
      setCurrentFrameIdx(frameIdx);
    };

    render(); // Draw initial 0th frame

    // --- 1. SYSTEM BOOT OPENING EXPERIENCE (Runs on Mount) ---
    const bootTl = gsap.timeline({ delay: 0.5 });

    // Boot visuals
    // bootTl.fromTo(
    //   ".noise-overlay",
    //   { opacity: 0 },
    //   { opacity: 0.15, duration: 1, ease: "none" },
    //   0,
    // );
    bootTl.fromTo(
      ".center-glow",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power1.inOut" },
      0.2,
    );

    // Navbar slide in
    bootTl.fromTo(
      "nav",
      { y: -50, opacity: 0, filter: "blur(10px)" },
      { y: 0, opacity: 1, filter: "blur(0)", duration: 1, ease: "power2.out" },
      0.5,
    );

    // Initial Face Reveal
    bootTl.fromTo(
      canvas,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
      0.8,
    );
    // Slowly play initial frames immediately
    bootTl.to(
      seqRef.current,
      {
        frame: 10,
        snap: "frame",
        duration: 1.5,
        ease: "power1.inOut",
        onUpdate: render,
      },
      0.8,
    );

    // HUD Elements sequence
    bootTl.fromTo(
      ".hud-element",
      { opacity: 0 },
      { opacity: 1, duration: 0.1, stagger: 0.1, ease: "none" },
      1.2,
    );

    // Robotic Text Sequence
    if (textContainerRef.current) {
      // LEESHARK chars glitch/stagger in
      bootTl.to(
        ".title-char",
        { opacity: 1, x: 0, duration: 0.05, stagger: 0.05, ease: "none" },
        1.5,
      );

      // Full Stack Developer
      bootTl.fromTo(
        roleWrapperRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3, ease: "none" },
        2.0,
      );
      bootTl.fromTo(
        ".role-underline",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.3, ease: "none" },
        2.2,
      );

      // Right Content
      bootTl.fromTo(
        subtitleWrapperRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.3, ease: "none" },
        2.4,
      );
      bootTl.fromTo(
        highlightWrapperRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.2, ease: "none" },
        2.6,
      );

      // Social Icons Bottom Left
      bootTl.fromTo(
        ".social-icon",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.1, ease: "none" },
        2.8,
      );
    }

    // --- 2. MAIN SCROLL CONTINUATION ---
    // User scroll takes over from whatever frame bootTl left off at, up to 239.
    const tlScroll = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    tlScroll.to(seqRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 0.95,
      onUpdate: render,
    });

    // Content stays fixed. No aggressive re-animations.
    // Just a clean sharp fade out at the very end of the scroll.
    tlScroll.fromTo(
      ".portfolio-ui",
      { opacity: 1, filter: "blur(0px)" },
      { opacity: 0, filter: "blur(5px)", duration: 0.1, ease: "none" },
      0.9,
    );

    tlScroll.fromTo(
      canvas,
      { opacity: 1, filter: "blur(0px)" },
      { opacity: 0, filter: "blur(10px)", duration: 0.1, ease: "none" },
      0.9,
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loaded]);

  const titleText = "MANIKANTA";

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#080808] overflow-hidden flex items-center justify-center font-sans tracking-wide"
    >
      {/* Loading State */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#080808]">
          <div className="text-[#A8A39A] font-mono text-xs uppercase tracking-[0.3em] mb-4">
            &gt; INITIALIZING_CORE_SYSTEM
          </div>
          <div className="w-64 h-[1px] bg-white/10 overflow-hidden">
            <div
              className="h-full bg-[#FFB52E] transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* --- BACKGROUND EFFECTS --- */}

      {/* Center Subdued Amber Glow */}
      <div className="portfolio-ui center-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-amber-600/5 blur-[150px] rounded-full pointer-events-none opacity-0 mix-blend-screen z-[1]"></div>

      {/* --- HUD ELEMENTS --- */}
      {/* --- HUD ELEMENTS --- */}
      <div className="portfolio-ui absolute top-10 left-4 md:top-32 md:left-12 z-[60] font-mono text-[8px] md:text-[9px] tracking-[0.15em] md:tracking-[0.25em] flex flex-col space-y-1 md:space-y-2 pointer-events-none">
        <span className="hud-element opacity-0 text-[#FFB52E]">
          ▶ EDITING ENGINE INITIALIZING...
        </span>

        <span className="hud-element opacity-0 text-[#FFB52E]">
          ▶ TIMELINE SYSTEM READY
        </span>

        <div className="hud-element opacity-0 flex flex-col">
          <span className="text-[#FFB52E]">▶ MOTION MODULE ONLINE</span>
        </div>

        <div className="hud-element opacity-0 flex">
          <span className="text-[#FFB52E]">▶ VISUAL PROCESSING :</span>
          <span className="ml-2 text-[#F5F3EF] tracking-[0.15em]">ACTIVE</span>
        </div>

        <div className="hud-element opacity-0 flex">
          <span className="text-[#FFB52E]">▶ STORYTELLING ENGINE:</span>
          <span className="ml-2 text-[#FFD666] animate-pulse">READY</span>
        </div>

        <div className="hud-element opacity-0 flex items-center">
          <span className="text-[#FFB52E]">▶ SYSTEM READY</span>

          <span className="ml-2 text-[#FFB52E] animate-pulse">█</span>
        </div>
      </div>
      <div
        className="
    portfolio-ui
    absolute
    bottom-4 right-3
    md:bottom-12 md:right-12
    z-[60]
    font-mono
    text-[8px] md:text-[10px]
    tracking-[0.15em] md:tracking-[0.25em]
  "
      >
        {/* HUD CARD */}
        <div
          className="
      relative
      w-[145px] sm:w-[165px] md:w-[205px]
    px-2.5 py-2 sm:px-3.5 sm:py-3
      rounded-2xl
      overflow-hidden
      border border-[#FFB52E]/30
      bg-black/45
      backdrop-blur-md
      shadow-[0_0_30px_rgba(0,0,0,0.35)]
    "
        >
          {/* Environmental glow */}
          <div
            className="
        pointer-events-none
        absolute inset-0
        bg-[radial-gradient(circle_at_80%_20%,rgba(255,181,46,0.12),transparent_55%)]
      "
          />

          {/* Top HUD line */}
          <div
            className="
        relative
        mb-3
        flex
        items-center
        justify-between
        border-b
        border-[#FFB52E]/20
        pb-2
      "
          >
            {/* HUD SPARK */}
            <div
              className="
    absolute
    top-4
    right-5
    w-4
    h-4
    pointer-events-none
  "
            >
              <span
                className="
      absolute
      left-1/2
      top-0
      -translate-x-1/2
      w-[2px]
      h-full
      rounded-full
      bg-[#FFD666]
      shadow-[0_0_7px_rgba(255,214,102,0.8)]
    "
              />

              <span
                className="
      absolute
      top-1/2
      left-0
      -translate-y-1/2
      w-full
      h-[2px]
      rounded-full
      bg-[#FFD666]
      shadow-[0_0_7px_rgba(255,214,102,0.8)]
    "
              />

              <span
                className="
      absolute
      inset-[5px]
      rounded-full
      bg-[#FFD666]
      shadow-[0_0_5px_rgba(255,214,102,0.8)]
    "
              />
            </div>
            <span className="text-[8px] text-[#FFB52E] tracking-[0.3em]">
              SYSTEM
            </span>

            <span className="text-[7px] text-[#FFD666]/70">ONLINE ●</span>
          </div>

          {/* DATA */}
          <div className="relative space-y-1.5">
            <div className="hud-element opacity-0 flex justify-between">
              <span className="text-[#FFB52E]">BUILD :</span>

              <span className="text-[#F5F3EF]">PORTFOLIO v2.0</span>
            </div>

            <div className="hud-element opacity-0 flex justify-between">
              <span className="text-[#FFB52E]">ENGINE :</span>

              <span className="text-[#F5F3EF]">REACT • GSAP</span>
            </div>

            <div className="hud-element opacity-0 flex justify-between">
              <span className="text-[#FFB52E]">STATUS :</span>

              <span className="text-[#FFD666] animate-pulse">ONLINE</span>
            </div>
          </div>

          {/* Bottom scan line */}
          <div className="relative mt-3 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="
          h-full
          w-[35%]
          bg-[#FFB52E]
          shadow-[0_0_8px_rgba(255,181,46,0.7)]
        "
            />
          </div>
        </div>
      </div>
      {/* --- SOCIAL LINKS --- */}
      <div className="portfolio-ui absolute bottom-4 left-4 md:bottom-12 md:left-12 z-[60] flex flex-col space-y-5">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon opacity-0 text-[#A8A39A] hover:text-[#FFB52E] hover:drop-shadow-[0_0_8px_rgba(255,181,46,0.6)] transition-all"
        >
          {/* GitHub */}
          <svg
            className="w-[18px] h-[18px]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon opacity-0 text-[#A8A39A] hover:text-[#FFB52E] hover:drop-shadow-[0_0_8px_rgba(255,181,46,0.6)] transition-all"
        >
          {/* LinkedIn */}
          <svg
            className="w-[18px] h-[18px]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      {/* --- CANVAS --- */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-0 scale-95"
      />

      {/* --- PORTFOLIO TEXT OVERLAY --- */}
      <AnimatePresence>
        {loaded && (
          <div className="portfolio-ui absolute inset-0 z-[50] pointer-events-none flex flex-col md:flex-row justify-between items-center md:items-center px-4 md:px-8 pt-20 pb-16 md:pt-0 md:pb-0">
            {/* LEFT SIDE: Name and Role */}
            <div className="w-full md:w-[35%] mt-12 md:mt-20 ml-0 md:ml-5 flex flex-col items-center md:items-start text-center md:text-left">
              {currentFrameIdx >= 145 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-4"
                >
                  <h1
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5F3EF] tracking-[0.1em] uppercase leading-none"
                    style={{ textShadow: "0 0 20px rgba(255,181,46,0.15)" }}
                  >
                    <span className="title-not block text-[#F5F3EF] text-[clamp(2.5rem,8vw,4rem)] md:text-[clamp(4rem,6vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
                      NOT
                    </span>

                    {/* 2. JUST */}
                    <span className="title-just block text-[#F5F3EF] text-[clamp(2.5rem,8vw,4rem)] md:text-[clamp(4rem,6vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
                      JUST
                    </span>

                    {/* 3. A VIDEO EDITOR */}
                    <span className="title-editor block text-[#FFB52E] text-[clamp(2rem,7vw,3.5rem)] md:text-[clamp(3.5rem,5.5vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] whitespace-normal md:whitespace-nowrap">
                      A VIDEO EDITOR
                    </span>
                  </h1>
                </motion.div>
              )}

              {currentFrameIdx >= 150 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="relative inline-block"
                >
                  <h2 className="font-display text-sm md:text-md lg:text-lg text-[#A8A39A] tracking-[0.2em] uppercase pb-2">
                    MANIKANTA
                  </h2>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FFB52E]/60"></div>
                </motion.div>
              )}
            </div>

            {/* RIGHT SIDE: Description and Button */}
            <div className="w-full md:w-[30%] flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 md:pl-8">
              {currentFrameIdx >= 224 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-8"
                >
                  <div className="w-[360px] max-w-[calc(100vw-2rem)] md:max-w-[360px] rounded-3xl border border-[#FFB52E]/20 bg-[#11100F]/40 backdrop-blur-xl p-4 md:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#F5F3EF]/10 pb-3 mb-4">
                      <span className="font-mono text-[#FFB52E] text-[10px] md:text-[11px] tracking-[0.35em] uppercase">
                        Editor Status
                      </span>

                      <span className="font-mono text-[#FFD666] text-[10px] tracking-[0.2em] animate-pulse">
                        ONLINE ●
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 font-mono text-[11px]">
                      <div className="flex justify-between items-center">
                        <span className="text-[#FFB52E] tracking-[0.25em] uppercase">
                          Editor
                        </span>
                        <span className="text-[#F5F3EF]">MANIKANTA</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#FFB52E] tracking-[0.25em] uppercase">
                          Role
                        </span>
                        <span className="text-[#F5F3EF] text-right">
                          Editor and Motion designer
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#FFB52E] tracking-[0.25em] uppercase">
                          Mission
                        </span>
                        <span className="text-[#F5F3EF] text-right">
                          Craft Scroll Stopping Edits
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#FFB52E] tracking-[0.25em] uppercase">
                          Stack
                        </span>
                        <span className="text-[#F5F3EF] text-right">
                          Premier Pro • After Effects
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#FFB52E] tracking-[0.25em] uppercase">
                          Status
                        </span>

                        <span className="text-[#FFD666]">AVAILABLE ●</span>
                      </div>

                      <div className="pt-2">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#FFB52E] tracking-[0.25em] uppercase">
                            Health
                          </span>

                          <span className="text-[#F5F3EF]">100%</span>
                        </div>

                        <div className="h-1.5 rounded-full bg-[#F5F3EF]/10 overflow-hidden">
                          <div className="h-full w-full rounded-full bg-gradient-to-r from-[#FFB52E] via-[#FFD666] to-[#FFD666]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentFrameIdx >= 224 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="pointer-events-auto"
                >
                  <button className="group inline-flex  items-center  gap-3 px-6 md:px-8 py-3 md:py-3.5   rounded-full  border border-[#FFB52E]/30 bg-[#11100F]/40 backdrop-blur-xl text-[#FFB52E] transition-all duration-300 hover:border-[#FFB52E] hover:bg-[#FFB52E]/10    hover:shadow-[0_0_35px_rgba(255,181,46,0.25)] ">
                    <span className="font-medium tracking-wide uppercase text-sm">
                      Explore Work
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
