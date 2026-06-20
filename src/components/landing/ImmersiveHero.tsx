import { useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useSpring, type MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { trackLead } from "@/lib/meta-pixel";
import StarField from "./StarField";
import AdTemplateWall from "./AdTemplateWall";
// REEMPLAZA ESTOS ARCHIVOS EN src/assets/ CON TUS CAPTURAS REALES
import screen1 from "@/assets/screen1.webp";
import screen2 from "@/assets/screen2.webp";
import screen3 from "@/assets/screen3.webp";
import screen4 from "@/assets/screen4.webp";
import screen0 from "@/assets/screen0.webp";

const heroSteps = [
  {
    subtitle: "Audit Agent",
    title: "Clona tu ADN de Marca\nal 100%",
    mobileTitle: "Clona tu ADN de Marca",
    image: screen1
  },
  {
    subtitle: "Creative Agent",
    title: "Anuncios Premium\nListos para Vender",
    mobileTitle: "Anuncios de Élite al instante",
    image: screen2
  },
  {
    subtitle: "Mi Contenido",
    title: "Carruseles IA y Guiones\nUGC en 30 Segundos",
    mobileTitle: "Carruseles y Guiones UGC",
    image: screen3
  },
  {
    subtitle: "Meta Orchestrator",
    title: "Escala tus Campañas\nen Piloto Automático",
    mobileTitle: "Escala tus Ads sin esfuerzo",
    image: screen4
  }
];

const perspectives: [number, number, number, number, number][] = [
  [0, 0, 0, 1.05, -8],       // Step 0: Perfectly centered and straight front view
  [32, 0, 0, 1.05, -22],     // Step 1: Slide left, rotated Y inward (facing center), perfectly upright
  [-32, 0, 0, 1.05, 10],     // Step 2: Slide right, rotated Y inward (facing center), perfectly upright
  [-10, 0, 0, 1.05, -8],     // Step 3: Center, subtle Y angle for depth, perfectly upright
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

  const storeLink = useMemo(() => {
    if (typeof window === "undefined") return "https://play.google.com/store/apps/details?id=cl.freeily.visbly";
    const userAgent = window.navigator.userAgent || window.navigator.vendor;
    const isApple = /iPad|iPhone|iPod|Macintosh|Mac OS X/.test(userAgent);
    return isApple
      ? "https://apps.apple.com/us/app/visbly/id6761484670"
      : "https://play.google.com/store/apps/details?id=cl.freeily.visbly";
  }, []);

  const handleCtaClick = () => {
    trackLead();
  };

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

          <div className="w-full md:w-[65%] flex-none md:flex-[1.4] flex flex-col items-center md:items-start z-30 relative md:relative md:top-0 h-auto md:h-auto mb-0 md:mb-0">
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
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white mt-2 md:mt-8 font-display leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-6 md:px-0 w-full whitespace-pre-line"
                  >
                    {isMobile ? heroSteps[activeStep].mobileTitle : heroSteps[activeStep].title}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className="mt-3 md:mt-8 flex flex-col items-center md:items-start gap-2.5 md:gap-4 z-40 pointer-events-auto"
            >
              <motion.div
                style={{
                  scale: useTransform(scrollYProgress, [0, 0.1], [1, 0.95]),
                  opacity: useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [1, 1, 1, 0]),
                }}
                className="flex flex-col items-center md:items-start gap-2.5 md:gap-4 w-full"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative inline-flex group will-change-transform"
                >
                  {/* Glow behind button */}
                  <div className="absolute -inset-4 bg-primary/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Drawing SVG border */}
                  <svg className="absolute -inset-[1.2px] w-[calc(100%+2.4px)] h-[calc(100%+2.4px)] pointer-events-none rounded-[14px] z-10">
                    <rect
                      x="0.6"
                      y="0.6"
                      width="calc(100% - 1.2px)"
                      height="calc(100% - 1.2px)"
                      rx="14"
                      fill="transparent"
                      stroke="url(#neon-grad-hero)"
                      strokeWidth="1.2"
                      pathLength="100"
                      className="cta-border-rect"
                      style={{
                        transform: 'scaleX(-1)',
                        transformOrigin: 'center',
                      }}
                    />
                    <defs>
                      <linearGradient id="neon-grad-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#818CF8" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Shimmer sweep overlay */}
                  <div
                    className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-20"
                  >
                    <div
                      className="absolute inset-0 w-[50%] h-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                        animation: 'shimmer-sweep 4s ease-in-out infinite',
                      }}
                    />
                  </div>

                  {/* Button content */}
                  <a
                    href={storeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCtaClick}
                    className="relative z-10 inline-flex items-center justify-center gap-3 px-8 py-3.5 md:px-14 md:py-4.5 bg-[#0a0c14] text-white rounded-xl font-semibold text-base md:text-lg transition-all duration-300 group-hover:bg-[#0f1120] w-auto whitespace-nowrap overflow-hidden"
                  >
                    {/* Glowing gradient background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 via-[#818CF8]/25 to-[#ec4899]/20 opacity-0 pointer-events-none cta-bg-glow" />

                    <span className="relative z-10 flex items-center gap-3">
                      Prueba Visbly Gratis
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </motion.div>

                {/* Trust Badges */}
                <div className="flex flex-col items-center md:items-start gap-1 sm:gap-1.5 opacity-60 hover:opacity-95 transition-opacity duration-300 mt-0.5 md:mt-1">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
                    className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold block"
                  >
                    Disponible en
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2 h-5 sm:h-6 will-change-transform"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="App Store"
                      className="h-full w-auto filter brightness-90 contrast-125"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-full w-auto filter brightness-90 contrast-125"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="w-full md:w-[35%] flex-none md:flex-[0.6] flex items-center justify-center md:justify-center z-20 mt-20 md:mt-0 md:-ml-20">
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


