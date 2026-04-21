import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import StarField from "./StarField";
import AdTemplateWall from "./AdTemplateWall";
import screenDashboard from "@/assets/screen-dashboard.jpg";
import screenEditor from "@/assets/screen-editor.jpg";
import screenStudio from "@/assets/screen-studio.jpg";
import screenAudit from "@/assets/screen-audit.jpg";
import screenTrends from "@/assets/screen-trends.jpg";
import screenBrand from "@/assets/screen-brand.jpg";
import screenAnalytics from "@/assets/screen-analytics.jpg";

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
  { subtitle: "AI Creative Director", title: "Tu Director Creativo de IA" },
  { subtitle: "Growth Engine", title: "Ángulos de Venta en Segundos" },
  { subtitle: "Smart Ad Editor", title: "Editor Studio en Tiempo Real" },
  { subtitle: "AI Visuals", title: "Fondos de Estudio por IA" },
  { subtitle: "Brand DNA", title: "ADN de Marca Automático" },
  { subtitle: "Marketing Brain", title: "Auditoría Instantánea de URLs" },
  { subtitle: "Analytics", title: "Métricas de Alto Rendimiento" },
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

        {/* Single fixed phone — only perspective changes, screen swaps with crossfade */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{
              x,
              rotateY,
              rotateX,
              scale,
              transformPerspective: 1200,
            }}
            className="relative"
          >
            <div className="absolute -inset-20 bg-primary/20 rounded-full blur-[120px]" />
            <PhoneMockup className="relative z-10 w-[220px] md:w-[260px] lg:w-[280px]">
              <div className="relative w-full h-full bg-card">
                {screens.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out"
                    style={{ opacity: i === activeStep ? 1 : 0 }}
                    loading="eager"
                    decoding="sync"
                    draggable={false}
                  />
                ))}
              </div>
            </PhoneMockup>
          </motion.div>
        </div>

        {/* Text overlays — crossfade between steps */}
        <div className="absolute top-[12%] md:top-[15%] left-0 right-0 z-20 text-center px-6 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-[0.2em]">
                {heroSteps[activeStep].subtitle}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 font-display leading-tight">
                {heroSteps[activeStep].title}
              </h2>
            </motion.div>
          </AnimatePresence>
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
