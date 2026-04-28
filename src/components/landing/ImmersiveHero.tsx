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
            <div className="absolute -inset-40 bg-primary/20 rounded-full blur-[180px]" />
            <div className="relative z-10 w-[450px] md:w-[550px] lg:w-[650px] aspect-square">
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

        {/* Text overlays — crossfade between steps */}
        <AnimatePresence>
          <motion.div
            key={activeStep}
            layout
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2, y: -30 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center absolute inset-0 pt-[8%] md:pt-[10%]"
          >
            <motion.span 
              layout
              className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              {heroSteps[activeStep].subtitle}
            </motion.span>
            <motion.h2 
              layout
              className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mt-8 font-display leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {heroSteps[activeStep].title}
            </motion.h2>
          </motion.div>
        </AnimatePresence>

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
