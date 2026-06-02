import { useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useSpring, type MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import StarField from "./StarField";
import AdTemplateWall from "./AdTemplateWall";
import AppStoreButtons from "./AppStoreButtons";
// REEMPLAZA ESTOS ARCHIVOS EN src/assets/ CON TUS CAPTURAS REALES
import screen1 from "@/assets/screen1.webp";
import screen2 from "@/assets/screen2.webp";
import screen3 from "@/assets/screen3.webp";
import screen4 from "@/assets/screen4.webp";

const heroSteps = [
  {
    subtitle: "Audit Agent",
    title: "Clona tu ADN de Marca con Fidelidad del 100%",
    mobileTitle: "Clona tu ADN de Marca",
    image: screen1
  },
  {
    subtitle: "UGC Script Planner",
    title: "Tu Calendario de Contenido y Guiones UGC Semanales en 30s",
    mobileTitle: "Planifica tu Semana de UGC",
    image: screen4
  },
  {
    subtitle: "Creative Agent",
    title: "Anuncios Premium Listos para Vender",
    mobileTitle: "Anuncios de Élite al instante",
    image: screen2
  },
  {
    subtitle: "Meta Orchestrator",
    title: "Escala y Lanza tus Campañas en Piloto Automático",
    mobileTitle: "Escala tus Ads sin esfuerzo",
    image: screen3
  },
];

const perspectives: [number, number, number, number, number][] = [
  [0, 0, 0, 1.05, -8],       // Step 0: Perfectly centered and straight front view
  [32, 0, 0, 1.16, -22],     // Step 1: Slide left, rotated Y inward (facing center), perfectly upright
  [-32, 0, 0, 1.24, 10],     // Step 2: Slide right, rotated Y inward (facing center), perfectly upright
  [-10, 0, 0, 1.36, -8],     // Step 3: Center, subtle Y angle for depth, perfectly upright
];

const N = heroSteps.length;

const ImmersiveHero = () => {
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
    if (idx !== activeStep) {
      setActiveStep(idx);
    }
  });

  // Reverted to i / (N - 1) to ensure full 0-1 coverage for all perspectives
  const stops = useMemo(() => Array.from({ length: N }, (_, i) => i / (N - 1)), [N]);
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };

  const rawRotateY = useTransform(scrollYProgress, stops, perspectives.map((p) => p[0]));
  const rawRotateX = useTransform(scrollYProgress, stops, perspectives.map((p) => p[1]));
  const rawRotateZ = useTransform(scrollYProgress, stops, perspectives.map((p) => p[2]));
  const rawScale = useTransform(scrollYProgress, stops, perspectives.map((p) => p[3]));
  const rawX = useTransform(scrollYProgress, stops, perspectives.map((p) => p[4]));

  const rotateY = useSpring(rawRotateY, springConfig);
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateZ = useSpring(rawRotateZ, springConfig);
  const scaleValue = useSpring(rawScale, springConfig);
  const xVw = useSpring(rawX, springConfig);

  const responsiveScale = useTransform(scaleValue, (s) => s * (isMobile ? 1.15 : 0.85));
  const responsiveX = useTransform(xVw, (v) => isMobile ? '0px' : `calc(${v}vw + (var(--phone-offset, 0px)))`);

  const scrollIndicatorO = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <div ref={heroRef} className="relative" style={{ height: `${N * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <StarField scrollProgress={scrollYProgress} />
        <AdTemplateWall scrollProgress={scrollYProgress} />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-center justify-start md:justify-between px-6 md:px-12 pointer-events-none pt-12 md:pt-0">

          <div className="w-full md:w-[80%] flex-none md:flex-1 flex flex-col items-center md:items-start z-30 relative md:relative md:top-0 h-auto md:h-auto mb-0 md:mb-0">
            {/* Title Container with fixed min-height to prevent jumping */}
            <div className="w-full min-h-[90px] md:min-h-[180px] flex flex-col items-center md:items-start justify-center md:justify-start">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -10, y: 5 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 10, y: -5 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-center md:items-start text-center md:text-left w-full will-change-transform"
                >
                  <span
                    className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] backdrop-blur-md"
                  >
                    {heroSteps[activeStep].subtitle}
                  </span>
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2 md:mt-8 font-display leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-6 md:px-0 w-full whitespace-pre-line"
                  >
                    {isMobile ? heroSteps[activeStep].mobileTitle : heroSteps[activeStep].title}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{
                scale: useTransform(scrollYProgress, [0, 0.1], [1, 0.95]),
                opacity: useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [1, 1, 1, 0]),
              }}
              className="mt-1 md:mt-2 flex flex-col items-center md:items-start gap-1 z-40 pointer-events-auto will-change-transform"
            >
              <span className="text-[10px] text-white/70 uppercase tracking-[0.4em] font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                Descarga la Beta Pro
              </span>
              <AppStoreButtons className="scale-75 md:scale-90 origin-center md:origin-left" />
            </motion.div>
          </div>

          <div className="w-full md:w-[20%] flex-none md:flex-1 flex items-center justify-center md:justify-center z-20 mt-20 md:mt-0 md:-ml-20">
            {/* The Unified Phone Instance */}
            <motion.div
              style={{
                x: responsiveX,
                rotateY,
                rotateX,
                rotateZ,
                scale: responsiveScale,
                transformPerspective: 1400,
              }}
              className="relative [--phone-offset:0px] md:[--phone-offset:8vw] will-change-transform"
            >
              {/* Glow effect that stays with the phone */}
              <div className="absolute -inset-20 bg-primary/20 rounded-full blur-[100px] opacity-35" />

              {/* Ultra-Realistic iPhone Pro hardware wrapper */}
              <div className="relative p-[10px] bg-gradient-to-b from-[#2b2b2d] via-[#1c1c1e] to-[#0c0c0d] rounded-[3.2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),_inset_0_1px_2px_rgba(255,255,255,0.2),_inset_0_-1px_2px_rgba(0,0,0,0.8)] border border-black/40">

                {/* Simulated Polished Titanium bevel reflection */}
                <div className="absolute inset-[1px] rounded-[3.1rem] border border-white/10 pointer-events-none z-30 opacity-70" />
                <div className="absolute inset-[3px] rounded-[3.0rem] border border-black/80 pointer-events-none z-30" />

                {/* Left Side Buttons (Volume & Action) */}
                {/* Action button */}
                <div className="absolute -left-[2px] top-[18%] w-[2.5px] h-[16px] bg-gradient-to-b from-[#48484a] to-[#2c2c2e] rounded-l border-y border-black z-0 shadow-sm" />
                {/* Volume Up */}
                <div className="absolute -left-[2px] top-[26%] w-[2.5px] h-[34px] bg-gradient-to-b from-[#48484a] to-[#2c2c2e] rounded-l border-y border-black z-0 shadow-sm" />
                {/* Volume Down */}
                <div className="absolute -left-[2px] top-[36%] w-[2.5px] h-[34px] bg-gradient-to-b from-[#48484a] to-[#2c2c2e] rounded-l border-y border-black z-0 shadow-sm" />

                {/* Right Side Power Button */}
                <div className="absolute -right-[2px] top-[29%] w-[2.5px] h-[52px] bg-gradient-to-b from-[#48484a] to-[#2c2c2e] rounded-r border-y border-black z-0 shadow-sm" />

                {/* Screen Housing with thin uniform Pro Bezel */}
                <div className="relative z-10 w-[180px] sm:w-[200px] md:w-[260px] lg:w-[280px] xl:w-[310px] aspect-[9/19.5] bg-[#050505] rounded-[2.6rem] border-[4px] border-[#08080a] shadow-2xl overflow-hidden [webkit-mask-image:-webkit-radial-gradient(white,black)]">

                  {/* Screen Content Layers */}
                  {heroSteps.map((step, i) => (
                    <motion.img
                      key={i}
                      src={step.image}
                      alt={`Screen ${i}`}
                      initial={false}
                      animate={{
                        opacity: i === activeStep ? 1 : 0
                      }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover rounded-[2.2rem]"
                      style={{ zIndex: i === activeStep ? 20 : 10 }}
                      fetchPriority={i === 0 ? "high" : "low"}
                      decoding={i === 0 ? "sync" : "async"}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  ))}

                  {/* Top Dynamic Island */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[34%] h-[16px] bg-black rounded-full z-40 flex items-center justify-end px-3 shadow-inner border border-white/5">
                    {/* Simulated lens glare */}
                    <div className="w-[5px] h-[5px] rounded-full bg-[#111122] border border-[#222244] opacity-80" />
                  </div>

                  {/* Bottom Home Indicator Line (iOS) */}
                  <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[36%] h-[4px] bg-white/30 rounded-full z-40 pointer-events-none" />

                  {/* Fixed Premium Glass Reflection Overlay */}
                  <div className="absolute inset-0 z-30 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none opacity-60 mix-blend-overlay" />

                  {/* Inner bezel depth shadow */}
                  <div className="absolute inset-0 rounded-[2.2rem] shadow-[inset_0_0_12px_rgba(0,0,0,0.9)] pointer-events-none z-40" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {heroSteps.map((_, i) => {
            const active = i === activeStep;
            return (
              <motion.div
                key={i}
                className="rounded-full bg-primary"
                animate={{
                  width: active ? 8 : 6,
                  height: active ? 8 : 6,
                  opacity: active ? 1 : 0.3,
                  scale: active ? 1.2 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            );
          })}
        </div>

        <motion.div
          style={{ opacity: scrollIndicatorO }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
          <motion.div className="w-5 h-7 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1">
            <motion.div
              className="w-1 h-1.5 bg-muted-foreground rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImmersiveHero;


