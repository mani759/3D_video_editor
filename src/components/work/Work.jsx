import { motion } from "framer-motion";
import { Play, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import CinematicBackground from "../background/CinematicBackground";

const projects = [
  {
    title: "Cinematic Storytelling",
    category: "YouTube Editing",
    description:
      "Long-form editing built around pacing, visual rhythm, sound design, and cinematic storytelling.",
    video: "/videos/project-1.mp4",
  },
  {
    title: "High Retention Edit",
    category: "Short Form Content",
    description:
      "Fast-paced edits designed around hooks, timing, motion, typography, and retention-driven storytelling.",
    video: "/videos/project-2.mp4",
  },
  {
    title: "Motion Design",
    category: "Motion Graphics",
    description:
      "Visual sequences combining typography, transitions, compositing, and motion to give ideas energy.",
    video: "/videos/project-3.mp4",
  },
];

const Work = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="
    relative
    w-screen
    max-w-none
    ml-[calc(50%-50vw)]
    overflow-hidden
    bg-[#050505]
    px-6
    py-20
    text-[#F5F3EF]
    scroll-mt-16
    sm:px-8
    sm:py-24
    lg:px-10
    lg:py-28
    xl:px-14
    2xl:px-20
  "
      >
        <CinematicBackground />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-[contactGlow_5s_ease-in-out_infinite] rounded-full bg-[#FFB238]/[0.06] blur-[120px]" />

        {/* ================= BACKGROUND GRID ================= */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Warm background glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-[20%]
            top-[10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#FFB52E]/[0.035]
            blur-[140px]
          "
        />

        {/* Small background particles */}

        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-[8%] top-[18%] h-1 w-1 rounded-full bg-[#FFB52E]/50" />
          <span className="absolute left-[22%] top-[8%] h-[3px] w-[3px] rounded-full bg-[#FFB52E]/40" />
          <span className="absolute left-[38%] top-[22%] h-1 w-1 rounded-full bg-[#FFB52E]/30" />
          <span className="absolute left-[58%] top-[10%] h-[3px] w-[3px] rounded-full bg-[#FFB52E]/50" />
          <span className="absolute left-[74%] top-[25%] h-1 w-1 rounded-full bg-[#FFB52E]/30" />
          <span className="absolute left-[91%] top-[15%] h-[3px] w-[3px] rounded-full bg-[#FFB52E]/40" />
        </div>

        {/* ================= MAIN ================= */}

        <div className="relative z-10 mx-auto w-full max-w-[1800px]">
          {/* ================= HEADING ================= */}

          <motion.div
            className="mb-10 sm:mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Label */}

            <div className="mb-5 flex items-center gap-4">
              <p
                className="
                  font-mono
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.45em]
                  text-[#FFB52E]
                  sm:text-xs
                "
              >
                SELECTED WORK
              </p>

              <span className="h-px w-16 bg-[#FFB52E]/50" />
            </div>

            {/* Main title */}

            <h2
              className="
                max-w-[900px]
                text-3xl
                font-extrabold
                uppercase
                leading-[0.9]
                tracking-[-0.04em]
                text-[#F5F3EF]
                sm:text-5xl
                md:text-7xl
                lg:text-[92px]
                xl:text-[104px]
              "
            >
              Edits That <span className="text-[#FFB52E]">Hold</span>
              <br />
              <span className="text-[#FFB52E]">Attention.</span>
            </h2>

            {/* Accent line */}

            <div className="mt-6 sm:mt-8 h-[2px] w-20 bg-[#FFB52E]" />
          </motion.div>

          {/* ================= PROJECT GRID ================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:gap-7
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-7
              xl:gap-8
            "
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="
                  group
                  min-w-0
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-white/[0.10]
                  bg-[#101010]
                  transition-all
                  duration-500
                  hover:border-[#FFB52E]/50
                  hover:shadow-[0_0_45px_rgba(255,181,46,0.07)]
                "
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                }}
              >
                {/* ================= IMAGE ================= */}

                <div
                  className="
                    relative
                    aspect-[16/10]
                    cursor-pointer
                    overflow-hidden
                    bg-[#080808]
                    sm:aspect-[16/9]
                  "
                  onClick={() => setSelectedVideo(project.video)}
                >
                  <img
                    src={`/thumbnails/project-${index + 1}.jpg`}
                    alt={project.title}
                    className="
    h-full
    w-full
    object-cover
    transition-transform
    duration-700
    ease-out
    group-hover:scale-[1.045]
  "
                  />
                  <video
                    src={selectedVideo}
                    controls
                    autoPlay
                    playsInline
                    className="block max-h-[85vh] w-full bg-black"
                    onError={(e) => {
                      console.error("VIDEO FAILED TO LOAD:", selectedVideo);
                      console.error(e.currentTarget.error);
                    }}
                  />

                  {/* Dark cinematic gradient */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/75
                      via-black/10
                      to-transparent
                      opacity-60
                      transition-opacity
                      duration-500
                      group-hover:opacity-90
                    "
                  />

                  {/* Number */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/10
                      bg-black/50
                      font-mono
                      text-[9px]
                      font-bold
                      tracking-[0.15em]
                      text-[#FFB52E]
                      backdrop-blur-md
                    "
                  >
                    0{index + 1}
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-black/40
                      text-white/70
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:border-[#FFB52E]
                      group-hover:bg-[#FFB52E]
                      group-hover:text-black
                    "
                  >
                    <ArrowUpRight size={18} />
                  </div>

                  {/* ================= PLAY ================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <div
                      className="
                        flex
                        h-[68px]
                        w-[68px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FFB52E]
                        text-[#080808]
                        shadow-[0_0_35px_rgba(255,181,46,0.20)]
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:shadow-[0_0_55px_rgba(255,181,46,0.40)]
                      "
                    >
                      <Play size={25} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                </div>

                {/* ================= INFO ================= */}

                <div
                  className="
                    min-h-[185px]
                    border-t
                    border-white/[0.06]
                    bg-[#101010]
                    p-6
                    sm:p-7
                    lg:p-8
                  "
                >
                  {/* Category */}

                  <p
                    className="
                      mb-4
                      font-mono
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-[#FFB52E]
                    "
                  >
                    {project.category}
                  </p>

                  {/* Title */}

                  <h3
                    className="
                      mb-3
                      text-xl
                      font-bold
                      tracking-[-0.025em]
                      text-[#F5F3EF]
                      transition-colors
                      duration-300
                      sm:text-2xl
                      group-hover:text-[#FFB52E]
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      max-w-[430px]
                      text-[12px]
                      leading-6
                      text-[#77736D]
                      sm:text-[13px]
                    "
                  >
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ================= FOOTER LABEL ================= */}

          <div
            className="
              mt-10
              flex
              items-center
              justify-between
              border-t
              border-white/[0.06]
              pt-5
              sm:mt-12
            "
          >
            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/20
                sm:text-[9px]
              "
            >
              VISUAL ARCHIVE
            </span>

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-[#FFB52E]/70
                sm:text-[9px]
              "
            >
              003 SELECTED WORKS
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO MODAL
      ====================================================== */}

      {selectedVideo && (
        <motion.div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            backdrop-blur-md
            sm:p-8
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="
              relative
              w-full
              max-w-6xl
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-black
            "
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}

            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="
                absolute
                right-3
                top-3
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/70
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#FFB52E]
                hover:bg-[#FFB52E]
                hover:text-black
              "
              aria-label="Close video"
            >
              <X size={20} />
            </button>

            <video
              src={selectedVideo}
              controls
              autoPlay
              playsInline
              className="
                block
                max-h-[85vh]
                w-full
                bg-black
              "
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Work;
