import { useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, type MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
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
  const stops = useMemo(() => Array.from({ length: N }, (_, i) => i / (N - 1)), []);

  const rotateY = useTransform(scrollYProgress, stops, perspectives.map((p) => p[0]));
  const rotateX = useTransform(scrollYProgress, stops, perspectives.map((p) => p[1]));
  const scaleValue = useTransform(scrollYProgress, stops, perspectives.map((p) => p[2]));
  const xVw = useTransform(scrollYProgress, stops, perspectives.map((p) => p[3]));

  const responsiveScale = useTransform(scaleValue, (s) => s * (isMobile ? 1.5 : 1.1));
  const responsiveX = useTransform(xVw, (v) => `calc(${v}vw + (var(--phone-offset, 0px)))`);

  const scrollIndicatorO = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <div ref={heroRef} className="relative" style={{ height: `${N * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <StarField scrollProgress={scrollYProgress} />
        <AdTemplateWall scrollProgress={scrollYProgress} />

        <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 pointer-events-none pt-48 md:pt-0">

          <div className="w-full md:w-1/2 flex-none md:flex-1 grid grid-cols-1 grid-rows-1 items-center md:items-center z-30 relative md:relative md:top-0 h-auto md:h-auto mb-4 md:mb-0">
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
                className="col-start-1 row-start-1 flex flex-col items-center md:items-start text-center md:text-left w-full will-change-transform"
              >
                <span
                  className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] backdrop-blur-md"
                >
                  {heroSteps[activeStep].subtitle}
                </span>
                <h2
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 md:mt-8 font-display leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-6 md:px-0"
                >
                  {heroSteps[activeStep].title}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full md:w-1/2 flex-none md:flex-1 flex items-center justify-center md:justify-end z-20 mt-[-40px] md:mt-0">
            <motion.div
              style={{
                x: responsiveX,
                rotateY,
                rotateX,
                scale: responsiveScale,
                transformPerspective: 1200,
              }}
              className="relative [--phone-offset:0px] md:[--phone-offset:8vw] will-change-transform"
            >
              <div className={`absolute -inset-20 bg-primary/20 rounded-full blur-[100px] will-change-transform opacity-40`} />
              <div className="relative z-10 w-[320px] sm:w-[340px] md:w-[360px] lg:w-[420px] xl:w-[480px] aspect-[9/19] flex items-center justify-center">
                <div className="absolute inset-0 pointer-events-none">
                  <img
                    src={screens[0]}
                    alt="Visbly App"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
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


