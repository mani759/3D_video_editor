// import { motion } from "framer-motion";

// import { Mail, ArrowUpRight } from "lucide-react";

// import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import CinematicBackground from "./background/CinematicBackground";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="relative z-[2] mx-auto w-[90%] max-w-[1400px] py-[100px] pt-[140px]"
//     >
//       <CinematicBackground />

//       <motion.div
//         className="relative flex min-h-[620px] flex-col items-center justify-center overflow-hidden rounded-[30px] border border-[#FFB238]/[0.12] bg-[radial-gradient(circle_at_50%_100%,rgba(255,178,56,0.08),transparent_45%),linear-gradient(145deg,rgba(20,20,22,0.85),rgba(8,8,10,0.9))] px-6 py-20 text-center backdrop-blur-[18px] sm:px-12 lg:px-16"
//         initial={{
//           opacity: 0,
//           y: 70,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         viewport={{
//           once: true,
//           amount: 0.25,
//         }}
//         transition={{
//           duration: 0.9,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         {/* BACKGROUND GLOW */}

//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-[contactGlow_5s_ease-in-out_infinite] rounded-full bg-[#FFB238]/[0.06] blur-[120px]" />

//         {/* SMALL HEADING */}

//         <motion.p
//           className="relative mb-[25px] text-[0.8rem] font-bold tracking-[5px] text-[#FFB238]"
//           initial={{
//             opacity: 0,
//           }}
//           whileInView={{
//             opacity: 1,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             delay: 0.2,
//           }}
//         >
//           LET'S CREATE SOMETHING
//         </motion.p>

//         {/* MAIN HEADING */}

//         <motion.h2
//           className="relative text-[clamp(3.5rem,7vw,7rem)] font-black leading-none tracking-[-5px] text-[#F4F1EB]"
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.2,
//           }}
//         >
//           Have A Project
//           <span>In Mind?</span>
//         </motion.h2>

//         {/* DESCRIPTION */}

//         <motion.p
//           className="relative mt-[35px] max-w-[650px] text-[1.05rem] leading-[1.8] text-[#8E8981]"
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.35,
//           }}
//         >
//           Whether you need a high-retention YouTube edit, short-form content, or
//           motion graphics, I'd love to hear about your project.
//         </motion.p>

//         {/* CONTACT BUTTON */}

//         <motion.a
//           href="mailto:manikantagurram5533@gmail.com"
//           className="relative mt-10 inline-flex items-center justify-center gap-3 rounded-[14px] bg-[#FFB238] px-7 py-[18px] text-[0.95rem] font-extrabold text-[#080808] no-underline shadow-[0_15px_50px_rgba(255,178,56,0.15)]"
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.5,
//           }}
//           whileHover={{
//             y: -5,
//             scale: 1.02,
//           }}
//           whileTap={{
//             scale: 0.97,
//           }}
//         >
//           <Mail size={20} />
//           Let's Work Together
//           <ArrowUpRight size={20} />
//         </motion.a>

//         {/* SOCIAL MEDIA ICONS */}

//         <motion.div
//           className="relative mt-[35px] flex items-center gap-[14px]"
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.65,
//           }}
//         >
//           {/* INSTAGRAM */}

//           <motion.a
//             href="https://www.instagram.com/maniframes_00?igsh=emh6M2psc2VsOG5y"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Instagram"
//             className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-[#8E8981] transition-colors duration-300 hover:border-[#FFB238] hover:bg-[#FFB238] hover:text-[#080808]"
//             whileHover={{
//               y: -5,
//               scale: 1.08,
//             }}
//             whileTap={{
//               scale: 0.9,
//             }}
//           >
//             <FaInstagram size={21} />
//           </motion.a>

//           {/* LINKEDIN */}

//           <motion.a
//             href="https://www.linkedin.com/in/manikanta-gurram-707145326"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="LinkedIn"
//             className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-[#8E8981] transition-colors duration-300 hover:border-[#FFB238] hover:bg-[#FFB238] hover:text-[#080808]"
//             whileHover={{
//               y: -5,
//               scale: 1.08,
//             }}
//             whileTap={{
//               scale: 0.9,
//             }}
//           >
//             <FaLinkedinIn size={21} />
//           </motion.a>

//           {/* YOUTUBE */}

//           <motion.a
//             href="https://www.youtube.com/@mani_frames0"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="YouTube"
//             className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-[#8E8981] transition-colors duration-300 hover:border-[#FFB238] hover:bg-[#FFB238] hover:text-[#080808]"
//             whileHover={{
//               y: -5,
//               scale: 1.08,
//             }}
//             whileTap={{
//               scale: 0.9,
//             }}
//           >
//             <FaYoutube size={21} />
//           </motion.a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiActivity,
  FiShield,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const formRef = useRef();

  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);

  const frameCount = 240;
  const imagesRef = useRef([]);
  const seqRef = useRef({ frame: 0 });

  const currentFrame = (index) =>
    `/images_contact/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

  // 1. Preload Sequence
  useEffect(() => {
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

  // 2. GSAP Scroll and Render Logic (Hero Sync)
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Responsive Canvas Size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    const render = () => {
      if (!canvas || !imagesRef.current.length) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let frameIdx = Math.round(seqRef.current.frame);
      if (frameIdx >= frameCount) frameIdx = frameCount - 1;

      const img = imagesRef.current[frameIdx];
      if (img && img.complete && img.naturalWidth !== 0) {
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height,
        );
        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
      setCurrentFrameIdx(frameIdx);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Scroll Animation - Sync with Hero logic
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 1.2, // Smoother scrub
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(seqRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === containerRef.current)
        .forEach((t) => t.kill());
    };
  }, [loaded]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7dhw5od",
        "template_vh2q0lj",
        formRef.current,
        "MVz4Ul7qDxiVHlPm0",
      )
      .then(() => {
        toast.success("TRANSMISSION_COMPLETE 🚀");
        formRef.current.reset();
      })
      .catch((err) => {
        toast.error("CONNECTION_FAILURE ❌");
      });
  };

  return (
    <div
      ref={containerRef}
      id="contactme"
      className="relative w-full h-screen bg-[#080808] overflow-hidden flex items-center justify-center font-sans select-none"
    >
      {/* 1. Loading Module (Ultra-high Z) */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-[100] bg-[#080808]"
          >
            <div className="text-[#FFB52E] font-mono text-[10px] uppercase tracking-[0.5em] mb-4 animate-pulse">
              SYNCING_COMM_STREAM {loadingProgress}%
            </div>
            <div className="w-64 h-[2px] bg-[#FFB52E]/10 overflow-hidden">
              <motion.div
                className="h-full bg-[#FFB52E]"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Cinematic Canvas Layer (Z-0) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 3. Aesthetic Overlays (Z-10) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-radial-vignette opacity-40" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* 4. Peripheral HUD Elements (Z-20) */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-20 pointer-events-none p-10"
          >
            {/* Top-left animated text */}
            <div className="absolute top-12 left-12">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#FFB52E] font-mono text-[9px] uppercase tracking-[0.7em] font-bold"
              >
                Establish Sub-Space Connection
              </motion.div>
            </div>

            {/* Brackets */}
            <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-[#FFB52E]/20" />
            <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-[#FFB52E]/20" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-[#FFB52E]/20" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-[#FFB52E]/20" />

            {/* Static HUD Text */}
            <div className="absolute top-12 left-12 flex items-center space-x-3">
              <FiActivity className="text-[#FFB52E] text-xs animate-pulse" />
              <span className="text-[#FFB52E]/40 text-[9px] tracking-[0.4em] uppercase font-bold">
                Signal_Stable
              </span>
            </div>

            <div className="absolute bottom-12 right-12 text-right hidden lg:block">
              <span className="text-white/10 text-[9px] tracking-[0.6em] uppercase block mb-1">
                Archive_003
              </span>
              <span className="text-[#FFB52E]/30 text-[9px] tracking-[0.4em] uppercase">
                &gt; System_Ready
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Central Contact UI (Z-50) */}
      <AnimatePresence>
        {loaded && currentFrameIdx >= 120 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-50 w-full max-w-4xl px-6 pointer-events-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tighter leading-tight max-w-4xl mx-auto mb-4">
                Let's Build Intelligent Digital Experiences.
              </h2>
              <div className="flex items-center justify-center space-x-2 text-[#FFB52E]/70 font-mono text-[9px] tracking-[0.6em] uppercase">
                <FiShield />
                <span>Protocol: Neural_Gate</span>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-[#11100F]/85 backdrop-blur-md border border-[#FFB52E]/20 p-10 md:p-14 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-10 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#FFB52E]/70 block ml-1">
                    ENTER_NAME
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="ENTER_NAME"
                    required
                    className="w-full bg-white/5 border-b border-white/10 py-5 px-6 text-[#F5F3EF] text-[11px] outline-none focus:border-[#FFB52E] transition-all placeholder:text-[#A8A39A]/40"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#FFB52E]/70 block ml-1">
                    ENTER_EMAIL
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="ENTER_EMAIL"
                    required
                    className="w-full bg-white/5 border-b border-white/10 py-5 px-6 text-[#F5F3EF] text-[11px] outline-none focus:border-[#FFB52E] transition-all placeholder:text-[#A8A39A]/40"
                  />
                  <p className="text-[10px] text-[#A8A39A]/70 ml-1">
                    Your email is only used to reply to your message.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#FFB52E]/70 block ml-1">
                  Tell me about your project...
                </label>
                <textarea
                  name="message"
                  placeholder="INPUT_TRANSMISSION..."
                  required
                  className="w-full bg-white/5 border-b border-white/10 py-5 px-6 text-[#F5F3EF] text-[11px] outline-none focus:border-[#FFB52E] transition-all min-h-[140px] resize-none placeholder:text-[#A8A39A]/40"
                />
              </div>

              <div className="flex justify-center md:justify-end">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 50px rgba(255, 181, 46, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="group flex items-center space-x-6 bg-[#FFB52E] text-[#080808] font-extrabold text-[11px] uppercase tracking-[0.6em] px-24 py-6 shadow-[0_15px_40px_rgba(255,181,46,0.2)] transition-all"
                >
                  <span>Send Message</span>

                  <FiSend className="text-lg transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer
        position="bottom-right"
        toastClassName="bg-[#11100F] border border-[#FFB52E]/30 text-[#F5F3EF] font-mono text-[9px] rounded-none backdrop-blur-xl"
        progressClassName="bg-[#FFB52E]"
      />
    </div>
  );
};

export default Contact;
