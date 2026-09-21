import { motion } from "framer-motion";
import { Scissors, Sparkles, WandSparkles, Film } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Scissors,
    title: "Video Editing",
    description:
      "Clean, fast-paced edits with smooth cuts, pacing, and storytelling that keeps viewers watching.",
    tags: ["YouTube", "Shorts", "Reels"],
  },

  {
    number: "02",
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Dynamic motion design and animations that make your content look polished, modern, and professional.",
    tags: ["After Effects", "Animation", "Visuals"],
  },

  {
    number: "03",
    icon: WandSparkles,
    title: "Color Grading",
    description:
      "Cinematic color correction and grading that gives your videos the right mood, tone, and visual identity.",
    tags: ["Color", "Cinematic", "Look"],
  },

  {
    number: "04",
    icon: Film,
    title: "Short-Form Content",
    description:
      "High-retention short-form edits designed for creators, brands, and social media growth.",
    tags: ["Instagram", "YouTube", "TikTok"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative z-[2] mx-auto w-[90%] max-w-[1400px] py-[60px] md:py-[140px]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-[contactGlow_5s_ease-in-out_infinite] rounded-full bg-[#FFB238]/[0.06] blur-[120px]" />

      {/* HEADING */}

      <motion.div
        className="mb-[35px] max-w-[800px] md:mb-[70px]"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <p className="mb-[18px] text-[0.85rem] font-bold tracking-[5px] text-[#FFB238]">
          WHAT I DO
        </p>

        <h2 className="text-[clamp(2.2rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-[-2px] sm:tracking-[-3px] text-[#F4F1EB]">
          Cinematic
          <span className="block text-[#FFB238]">Services.</span>
        </h2>

        <div className="mt-[30px] h-0.5 w-20 bg-[#FFB238] shadow-[0_0_20px_rgba(255,178,56,0.5)]" />
      </motion.div>

      {/* SERVICES GRID */}

      <div className="grid grid-cols-1 gap-6 min-[901px]:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              className="group relative min-h-0 sm:min-h-[380px] cursor-default overflow-hidden rounded-[20px] border border-[#FFB238]/10 bg-[linear-gradient(145deg,rgba(24,24,26,0.85),rgba(12,12,14,0.85))] p-[25px_20px] backdrop-blur-[14px] transition-[border-color,box-shadow] duration-500 hover:border-[#FFB238]/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:p-[45px]"
              key={service.title}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
              }}
            >
              {/* CARD GLOW */}

              <div className="pointer-events-none absolute -right-[150px] -top-[150px] h-[350px] w-[350px] rounded-full bg-[#FFB238]/[0.08] opacity-0 blur-[80px] transition-all duration-500 group-hover:scale-[1.3] group-hover:opacity-100" />

              {/* NUMBER */}

              <span className="absolute right-4 top-4 text-[3rem] font-extrabold leading-none text-white/[0.06] sm:right-[35px] sm:top-[30px] sm:text-[5rem]">
                {service.number}
              </span>

              {/* ICON */}

              <motion.div
                className="relative mb-[35px] flex h-[65px] w-[65px] items-center justify-center rounded-[15px] border border-[#FFB238]/[0.18] bg-[#FFB238]/[0.06] text-[#FFB238] shadow-[inset_0_0_25px_rgba(255,178,56,0.025)]"
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Icon size={30} strokeWidth={1.7} />
              </motion.div>

              {/* CONTENT */}

              <h3 className="relative mb-5 text-[1.7rem] font-extrabold tracking-[-1px] text-[#F4F1EB] sm:text-[2rem]">
                {service.title}
              </h3>

              <p className="relative max-w-[520px] text-base leading-[1.8] text-[#8E8981]">
                {service.description}
              </p>

              {/* TAGS */}

              <div className="relative mt-[35px] flex flex-wrap gap-2.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-xs font-semibold text-[#A7A096] transition-colors duration-300 group-hover:border-[#FFB238]/[0.18] group-hover:bg-[#FFB238]/[0.04] group-hover:text-[#FFB238]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
