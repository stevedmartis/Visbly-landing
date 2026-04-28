import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import StarField from "./StarField";
import AdTemplateWall from "./AdTemplateWall";
import screenDashboard from "@/assets/screen-dashboard.png";
import screenEditor from "@/assets/screen-editor.png";
import screenStudio from "@/assets/screen-studio.png";
import screenAudit from "@/assets/screen-audit.png";
import screenTrends from "@/assets/screen-trends.png";
import screenBrand from "@/assets/screen-brand.png";
import screenAnalytics from "@/assets/screen-analytics.png";

const screens = [
  screenDashboard,
  screenTrends,
  screenEditor,
  screenStudio,
  screenBrand,
  screenAudit,
  screenAnalytics,
];

const heroSteps = [
  { subtitle: "Vence la Fatiga Creativa", title: "Tu Director Creativo de IA" },
  { subtitle: "Adiós al Bloqueo", title: "Ángulos de Venta en Segundos" },
  { subtitle: "Calidad Profesional", title: "Editor Studio de Alta Fidelidad" },
  { subtitle: "Product Showcase", title: "Fondos de Estudio Infinitos" },
  { subtitle: "Brand Integrity", title: "ADN de Marca Automatizado" },
  { subtitle: "Market Intelligence", title: "Auditoría de Landing Pages" },
  { subtitle: "Escalabilidad", title: "Métricas de Alto Rendimiento" },
];

// Per-step perspective: [rotateY, rotateX, scale, xVw]
const perspectives: [number, number, number, number][] = [
  [0, 0, 1, 0],
  [-14, 4, 0.98, 4],
  [10, -3, 1.02, -3],
  [-20, 6, 0.95, 2],
  [16, -2, 1, 5],
  [-10, -4, 0.98, -4],
  [0, 0, 1.05, 0],
];

const N = heroSteps.length;

const ImmersiveHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Clamp to [0, N-1]
    const idx = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
    setActiveStep(idx);
  });

  // Smooth perspective values driven by scroll
  const stops = Array.from({ length: N }, (_, i) => i / (N - 1));
  const rotateY = useTransform(scrollYProgress, stops, perspectives.map((p) => p[0]));
  const rotateX = useTransform(scrollYProgress, stops, perspectives.map((p) => p[1]));
  const scale = useTransform(scrollYProgress, stops, perspectives.map((p) => p[2]));
  const xVw = useTransform(scrollYProgress, stops, perspectives.map((p) => p[3]));
  const x = useTransform(xVw, (v) => `${v}vw`);

  const scrollIndicatorO = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <div ref={heroRef} className="relative" style={{ height: `${N * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <StarField scrollProgress={scrollYProgress} />
        <AdTemplateWall scrollProgress={scrollYProgress} />

        {/* Content Wrapper for side-by-side on Tablet/Desktop, Stacked on Mobile */}
        <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 pointer-events-none pt-0 md:pt-0">

          {/* Text Section — Absolute overlay on mobile, centered on Tablet up */}
          <div className="w-full md:w-1/2 flex-none md:flex-1 grid grid-cols-1 grid-rows-1 items-center md:items-center z-30 absolute top-20 left-0 right-0 md:relative md:top-0 h-auto md:h-auto">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20, y: -10 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="col-start-1 row-start-1 flex flex-col items-center md:items-start text-center md:text-left w-full"
              >
                <motion.span
                  className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] backdrop-blur-md"
                >
                  {heroSteps[activeStep].subtitle}
                </motion.span>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mt-4 md:mt-8 font-display leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-6 md:px-0"
                >
                  {heroSteps[activeStep].title}
                </motion.h2>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Phone Section — Impactful on Desktop, Massive on Mobile */}
          <div className="w-full md:w-1/2 flex-none md:flex-1 flex items-center justify-center md:justify-end z-20 h-screen md:h-auto pt-[12vh] md:pt-0">
            <motion.div
              style={{
                x: useTransform(xVw, (v) => `calc(${v}vw + (var(--phone-offset, 0px)))`),
                rotateY,
                rotateX,
                scale: useTransform(scale, (s) => s * (window.innerWidth < 768 ? 1.5 : 1)),
                transformPerspective: 1200,
              }}
              className="relative [--phone-offset:0px] md:[--phone-offset:5vw] h-full md:h-auto"
            >
              <div className="absolute -inset-40 bg-primary/20 rounded-full blur-[180px]" />
              <div className="relative z-10 h-[80vh] md:h-auto w-auto md:w-[400px] lg:w-[480px] xl:w-[550px] aspect-[9/19] flex items-center justify-center">
                {screens.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-out drop-shadow-2xl"
                    style={{ opacity: i === activeStep ? 1 : 0 }}
                    loading="eager"
                    decoding="sync"
                    draggable={false}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Synchronized dots */}
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

        {/* Scroll indicator */}
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
