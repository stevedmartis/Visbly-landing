import { motion, useScroll, useTransform, type Easing } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import AuroraBackground from "./AuroraBackground";
import ImmersiveHero from "./ImmersiveHero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Ecosystem from "./Ecosystem";
import AppStoreButtons from "./AppStoreButtons";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as Easing },
};

const LandingPage = () => {
  const isMobile = useIsMobile();
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef });

  const agents = [
    { emoji: "🔍", name: "Discovery Agent", subtitle: "Growth Engine", desc: "Escanea tendencias en LinkedIn y Google para encontrar ganchos psicológicos en segundos.", gradient: "from-blue-500/20 to-purple-500/20" },
    { emoji: "🎨", name: "Creative Agent", subtitle: "Visual Engine", desc: "Genera anuncios de alto rendimiento con layouts probados que respetan tu marca.", gradient: "from-purple-500/20 to-pink-500/20" },
    { emoji: "🧠", name: "Audit Agent", subtitle: "Marketing Brain", desc: "Auditorías instantáneas de URLs para detectar fallos y extraer el ADN de marca.", gradient: "from-pink-500/20 to-orange-500/20" },
  ];

  const powers = [
    { title: "Scanner de Tendencias", subtitle: "Growth Engine", desc: "Detecta ángulos de venta ganadores analizando LinkedIn y Google en tiempo real. No adivines qué funciona, compruébalo.", icon: "🔍" },
    { title: "Extracción de ADN", subtitle: "Marketing Brain", desc: "Tu IA ingiere cualquier URL para clonar tu voz, estilo y psicología de marca al 100% en segundos.", icon: "🧬" },
    { title: "Generación Studio", subtitle: "Visual Engine", desc: "Crea anuncios con estética de alta gama 'Liquid Glass' y fondos orgánicos que detienen el scroll.", icon: "✨" },
    { title: "Orquestación Meta", subtitle: "Direct Deployment", desc: "Configura y lanza tus campañas a FB e IG directamente desde Visibly. Automatización total de extremo a extremo.", icon: "🚀" },
  ];

  const metrics = [
    { metric: "Tiempo de Creación", before: "3 - 5 Días", after: "30 Segundos", impact: "99% Faster" },
    { metric: "Costo por Ángulo", before: "$250 - $500", after: "< $1 USD", impact: "80% Reducción" },
    { metric: "Rendimiento (CTR)", before: "Promedio", after: "+24% Avg", impact: "Alto Impacto" },
  ];

  const contrasts = [
    {
      icon: "⏱️",
      title: "Velocidad",
      old: "3-5 días por ángulo",
      visbly: "30 segundos",
      label: "Iteración Instantánea"
    },
    {
      icon: "💸",
      title: "Costos",
      old: "$250 - $500 USD",
      visbly: "< $1 USD",
      label: "Escalabilidad Total"
    },
    {
      icon: "🧠",
      title: "Creatividad",
      old: "Humano-dependiente",
      visbly: "IA Multi-Agente",
      label: "Ángulos Infinitos"
    },
  ];

  return (
    <div ref={pageRef} className="relative">
      <AuroraBackground scrollProgress={scrollYProgress} />
      <Navbar />

      <ImmersiveHero />

      {/* ═══ CONTRAST / PROBLEM ═══ */}
      <section className="pt-12 pb-6 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">El Desafío</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              El Cuello de Botella Creativo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              La fatiga creativa ocurre 10x más rápido que hace dos años. Mantener el rendimiento hoy exige una rotación constante que es costosa, lenta y difícil de escalar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contrasts.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] ${isMobile ? '' : 'backdrop-blur-sm'} overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-6xl">{item.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-6">{item.title}</h3>

                <div className="space-y-6">
                  <div className="opacity-50">
                    <span className="text-xs uppercase tracking-wider font-semibold block mb-1">Método Tradicional</span>
                    <div className="text-lg line-through text-muted-foreground decoration-primary/50">{item.old}</div>
                  </div>

                  <div className="relative">
                    <span className="text-xs uppercase tracking-wider font-semibold text-primary block mb-1">Con Visibly</span>
                    <div className="text-2xl font-bold text-foreground">{item.visbly}</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-foreground/5 text-sm font-medium text-primary/80 tracking-wide uppercase">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ECOSYSTEM ═══ */}
      <Ecosystem />

      {/* ═══ AGENTS ═══ */}
      <section className="pt-12 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">La Solución</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              Arquitectura Multi-Agente
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tres agentes de IA especializados que trabajan en sincronía para producir creativos de alto rendimiento.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className={`group relative p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] ${isMobile ? '' : 'backdrop-blur-sm'} hover:border-primary/30 transition-all duration-500`}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <span className="text-4xl">{agent.emoji}</span>
                  <h3 className="text-xl font-bold text-foreground mt-4">{agent.name}</h3>
                  <span className="text-sm text-primary font-medium">{agent.subtitle}</span>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{agent.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POWERS DETAILED ═══ */}
      <section id="powers" className="py-12 px-1 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Capacidades</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              Tus Superpoderes
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {powers.map((pow, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] ${isMobile ? '' : 'backdrop-blur-sm'}`}
              >
                <span className="text-3xl">{pow.icon}</span>
                <span className="text-primary font-semibold text-xs uppercase tracking-widest ml-3">{pow.subtitle}</span>
                <h3 className="text-2xl font-bold text-foreground mt-3">{pow.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{pow.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ METRICS ═══ */}
      <section className="py-12 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Impacto</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              Métricas de Transformación
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`rounded-3xl border border-foreground/10 bg-foreground/[0.02] ${isMobile ? '' : 'backdrop-blur-sm'} overflow-hidden`}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-foreground/10">
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Métrica</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Antes</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Con Visibly</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-primary">Impacto</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((row, i) => (
                    <tr key={i} className="border-b border-foreground/5 last:border-0">
                      <td className="px-6 py-5 font-medium text-foreground">{row.metric}</td>
                      <td className="px-6 py-5 text-muted-foreground line-through opacity-60">{row.before}</td>
                      <td className="px-6 py-5 text-foreground font-semibold">{row.after}</td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold whitespace-nowrap">
                          {row.impact}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <Pricing />

      {/* ═══ TRUST BAR / ARCHETYPES ═══ */}
      <section className="py-12 border-y border-foreground/5 bg-foreground/[0.01]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] mb-8">
            Arququetipos Optimizados para
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl md:text-2xl font-bold font-display tracking-tighter">SaaS & Software</span>
            <span className="text-xl md:text-2xl font-bold font-display tracking-tighter">Fintech</span>
            <span className="text-xl md:text-2xl font-bold font-display tracking-tighter">DTC Brands</span>
            <span className="text-xl md:text-2xl font-bold font-display tracking-tighter">E-commerce</span>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-12 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className={`absolute inset-0 bg-primary/5 rounded-[60px] ${isMobile ? 'blur-[40px]' : 'blur-[100px]'}`} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-display leading-tight">
              Deja de Quemar Presupuesto.
              <br />
              <span className="text-primary">Empieza a Escalar.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Únete a los Media Buyers que ya están rompiendo el cuello de botella creativo con Visibly.
            </p>
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)] mb-10">
              Genera tu primer Ángulo Gratis
            </button>

            <div className="flex flex-col items-center gap-4">
              <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Disponible en</span>
              <AppStoreButtons className="justify-center scale-90 md:scale-100" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <Footer />
    </div>
  );
};

export default LandingPage;

