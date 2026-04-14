import { useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

const LERP_FACTOR = 0.08;

const HeroVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentTimeRef = useRef(0);
  const targetTimeRef = useRef(0);
  const rafRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Text section transforms
  const s1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.2, 0.28], [0, 1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.08, 0.2, 0.28], [40, 0, 0, -40]);
  const s1Blur = useTransform(scrollYProgress, [0, 0.08, 0.2, 0.28], [8, 0, 0, 8]);

  const s2Opacity = useTransform(scrollYProgress, [0.28, 0.36, 0.48, 0.56], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.28, 0.36, 0.48, 0.56], [40, 0, 0, -40]);
  const s2Blur = useTransform(scrollYProgress, [0.28, 0.36, 0.48, 0.56], [8, 0, 0, 8]);

  const s3Opacity = useTransform(scrollYProgress, [0.56, 0.64, 0.78, 0.88], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.56, 0.64, 0.78, 0.88], [40, 0, 0, -40]);
  const s3Blur = useTransform(scrollYProgress, [0.56, 0.64, 0.78, 0.88], [8, 0, 0, 8]);

  const animate = useCallback(() => {
    const video = videoRef.current;
    if (video && video.duration) {
      const diff = targetTimeRef.current - currentTimeRef.current;
      currentTimeRef.current += diff * LERP_FACTOR;
      video.currentTime = currentTimeRef.current;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const video = videoRef.current;
      if (video && video.duration) {
        targetTimeRef.current = v * video.duration;
      }
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      unsubscribe();
      cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress, animate]);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      {/* Fixed video background */}
      <video
        ref={videoRef}
        src={heroVideo.url}
        className="fixed inset-0 w-full h-full object-cover z-0"
        muted
        playsInline
        preload="auto"
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-background/50 z-[1]" />

      {/* Sticky content wrapper */}
      <div className="sticky top-0 h-screen z-[2] flex items-center justify-center">
        {/* Section 1 */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: s1Opacity,
            y: s1Y,
            filter: useTransform(s1Blur, (v) => `blur(${v}px)`),
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-4">
            Explore the Unknown
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Journey through landscapes that redefine what's possible
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: s2Opacity,
            y: s2Y,
            filter: useTransform(s2Blur, (v) => `blur(${v}px)`),
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-4">
            Beyond Horizons
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Every peak tells a story written in wind and stone
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: s3Opacity,
            y: s3Y,
            filter: useTransform(s3Blur, (v) => `blur(${v}px)`),
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-4">
            Begin Your Story
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            The adventure starts with a single step forward
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-sm text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-1.5"
          >
            <motion.div
              className="w-1 h-2 bg-muted-foreground rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroVideo;
