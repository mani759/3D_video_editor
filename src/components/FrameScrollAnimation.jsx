import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

const FrameScrollAnimation = ({ frameCount = 192 }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const images = useRef([]);
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);

  // 1. Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Smooth Easing (Spring) for the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 3. Transform Progress to Frame Index
  const frameIndex = useTransform(
    smoothProgress,
    [0, 0.9],
    [0, frameCount - 1],
  );
  const cutOpacity = useTransform(frameIndex, [69, 70, 110, 120], [0, 1, 1, 0]);
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const frame = Math.round(latest);

    if (frame < 70) {
      setCurrentScene(0);
    } else if (frame < 140) {
      setCurrentScene(1);
    } else if (frame < 200) {
      setCurrentScene(2);
    } else {
      setCurrentScene(3);
    }
  });

  // 4. Anti-Gravity 3D Effects
  // Floating motion
  const y = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [0, 15, 0]);
  const rotateY = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [0, -10, 10, 0],
  );
  const scale = useTransform(smoothProgress, [0, 0.8, 0.95], [1, 1.05, 1.2]);

  // Depth effect (Z-axis translation)
  const z = useTransform(smoothProgress, [0, 1], [0, 100]);

  // Preloading Logic
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNumber = String(i).padStart(3, "0");
        // Using new URL for Vite asset compatibility
        const imgUrl = new URL(
          `../assets/img-4/ezgif-frame-${frameNumber}.jpg`,
          import.meta.url,
        ).href;
        img.src = imgUrl;
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
          if (loadedCount === frameCount) {
            setLoaded(true);
          }
        };
        images.current.push(img);
      }
    };
    preloadImages();
  }, [frameCount]);

  // Canvas Rendering
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const render = () => {
      const index = Math.round(frameIndex.get());
      const img = images.current[index];

      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Responsive cover logic
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Frame update loop
    const unsubscribe = frameIndex.on("change", render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
    };
  }, [loaded, frameIndex]);

  // Final Scene Transitions
  const opacity = useTransform(smoothProgress, [0.85, 0.95], [1, 0]);
  const blur = useTransform(
    smoothProgress,
    [0.85, 0.95],
    ["blur(0px)", "blur(20px)"],
  );

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-[#080808]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center perspective-2000">
        {/* Loading Overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#080808]">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.5em] text-[#FFB52E]">
              Syncing Core Frames... {loadingProgress}%
            </div>
            <div className="h-[1px] w-1/4 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-[#FFB52E]"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* The Animated Frame (Full Screen Canvas) */}
        <motion.div
          style={{
            y,
            rotateX,
            rotateY,
            scale,
            z,
            opacity,
            filter: blur,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full overflow-hidden"
        >
          <canvas ref={canvasRef} className="w-full h-full object-cover" />
        </motion.div>

        {/* Global Cinematic Vibe */}
        <div className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-40" />
      </div>

      {/* Transitional Text Overlay */}

      <motion.div
        style={{ opacity: cutOpacity }}
        className="absolute inset-0 z-[60] flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-center font-extrabold uppercase tracking-[-0.04em] leading-none text-[#F5F3EF] text-7xl md:text-9xl">
          CUT
        </h2>
      </motion.div>
      <motion.div
        style={{
          opacity: useTransform(
            smoothProgress,
            [0.1, 0.3, 0.7, 0.9],
            [0, 1, 1, 1],
          ),
        }}
        className="absolute  inset-x-0 top-[70%] -translate-y-1/2 flex flex-col items-center justify-center text-center pointer-events-none z-[60]"
      >
        <h3 className="mb-2 text-7xl font-extrabold uppercase tracking-tighter text-[#F5F3EF] drop-shadow-2xl md:text-8xl">
          MOTION
        </h3>
      </motion.div>

      <motion.div
        style={{
          opacity: useTransform(
            smoothProgress,
            [0.1, 0.3, 0.7, 0.9],
            [0, 1, 1, 1],
          ),
        }}
        className="absolute  inset-x-0 top-[60%] -translate-y-1/2 flex flex-col items-center justify-center text-center pointer-events-none z-[60]"
      >
        <h3 className="mb-2 text-6xl font-extrabold uppercase tracking-tighter text-[#FFB52E] drop-shadow-2xl md:text-8xl">
          STORY
        </h3>
      </motion.div>
      <motion.div
        style={{
          opacity: useTransform(
            smoothProgress,
            [0.1, 0.3, 0.7, 0.9],
            [0, 1, 1, 1],
          ),
        }}
        className="absolute  inset-x-0 top-[90%] -translate-y-1/2 flex flex-col items-center justify-center text-center pointer-events-none z-[60]"
      >
        <h2 className="font-extrabold uppercase tracking-[-0.04em] leading-[0.9] text-[#F5F3EF] text-5xl md:text-8xl">
          EVERY FRAME
          <br />
          HAS A <span className="text-[#FFB52E]">PURPOSE.</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default FrameScrollAnimation;
