import { motion, useScroll, useTransform, type Easing } from "framer-motion";
import { useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, ChevronDown } from "lucide-react";
import { trackLead } from "@/lib/meta-pixel";
import AuroraBackground from "./AuroraBackground";
import ImmersiveHero from "./ImmersiveHero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Ecosystem from "./Ecosystem";
import AppStoreButtons from "./AppStoreButtons";
import Partners from "./Partners";
import Testimonials from "./Testimonials";

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

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const agents = [
    { emoji: "🔍", name: "Discovery Agent", subtitle: "Market Intelligence", desc: "Escanea tendencias y ganchos psicológicos en tiempo real para encontrar tu próximo ángulo ganador.", gradient: "from-blue-500/20 to-purple-500/20" },
    { emoji: "🧠", name: "Audit Agent", subtitle: "Brand Strategy", desc: "Analiza cualquier URL para extraer y clonar el ADN de tu marca, asegurando consistencia total en cada anuncio.", gradient: "from-purple-500/20 to-pink-500/20" },
    { emoji: "🎨", name: "Creative Agent", subtitle: "Visual Studio", desc: "Diseña creativos de alto impacto con estética premium y layouts validados para maximizar tu CTR.", gradient: "from-pink-500/20 to-orange-500/20" },
    { emoji: "🚀", name: "Meta Orchestrator", subtitle: "Direct Execution", desc: "Tus agentes lanzan y escalan campañas a Meta directamente desde Visbly. Automatización de extremo a extremo.", gradient: "from-orange-500/20 to-red-500/20" },
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

  const socialProof = [
    { value: "2,400+", label: "Ángulos generados" },
    { value: "98%", label: "Satisfacción" },
    { value: "30s", label: "Tiempo promedio" },
    { value: "4.8★", label: "App Store Rating" },
  ];

  const faqs = [
    {
      q: "¿En qué se diferencia Visbly de Meta Advantage+?",
      a: "Advantage+ optimiza la entrega de tus anuncios dentro de Meta, pero no genera creativos ni analiza tu marca. Visbly va más allá: identifica ángulos de venta, clona tu ADN de marca, genera anuncios premium y los lanza directamente — todo automatizado por 4 agentes de IA especializados. Son complementarios: usa Visbly para crear y Advantage+ para entregar.",
    },
    {
      q: "¿Necesito experiencia en Meta Ads para usar Visbly?",
      a: "No. Visbly está diseñado tanto para media buyers experimentados como para emprendedores que quieren resultados sin complejidad. Los agentes guían cada paso y automatizan las decisiones técnicas.",
    },
    {
      q: "¿Qué pasa después de los 7 días de prueba gratis?",
      a: "Al terminar tu trial, puedes elegir el plan que mejor se adapte a tu negocio. No se te cobrará nada automáticamente — tú decides si continuar. Sin compromisos, sin letra chica.",
    },
    {
      q: "¿Visbly reemplaza a un diseñador o agencia?",
      a: "Visbly no reemplaza la creatividad humana, la potencia. Automatiza las tareas repetitivas (generación de variantes, análisis de rendimiento, lanzamiento de campañas) para que te enfoques en estrategia y storytelling. Muchos agencies usan Visbly para multiplicar su capacidad de producción.",
    },
    {
      q: "¿Puedo conectar más de una cuenta publicitaria?",
      a: "Sí. El plan Starter permite 1 cuenta, Scale hasta 3, e Infinity cuentas ilimitadas. Ideal para agencias o negocios con múltiples marcas.",
    },
    {
      q: "¿Cómo funciona la clonación de ADN de marca?",
      a: "Visbly analiza tus fuentes digitales — website, LinkedIn, Instagram, Notion, GitHub — para entender tu voz, estética y posicionamiento. Luego, los agentes generan anuncios que suenan y se ven exactamente como tu marca, con 100% de fidelidad.",
    },
  ];

  const handleCtaClick = () => {
    trackLead();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={pageRef} className="relative">
      <AuroraBackground scrollProgress={scrollYProgress} />
      <Navbar />

      <ImmersiveHero />

      {/* ═══ SOCIAL PROOF ═══ */}
      <section className="py-8 px-6 relative border-y border-foreground/5 bg-foreground/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {socialProof.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-primary font-display">{item.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTRAST / PROBLEM ═══ */}
      <section className="pt-16 pb-6 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">El Desafío</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              El Cuello de Botella Creativo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Mantener el rendimiento de tus campañas exige una rotación constante de anuncios. Visbly contrata a tu propio equipo de agentes de IA especializados que automatizan y escalan tu estrategia, diseño de creativos y ejecución en Meta Ads 24/7 — sin el costo de una agencia.
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
                    <span className="text-xs uppercase tracking-wider font-semibold text-secondary block mb-1">Con Visbly</span>
                    <div className="text-2xl font-bold text-foreground">{item.visbly}</div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-foreground/5 text-sm font-medium text-secondary/80 tracking-wide uppercase">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ECOSYSTEM ═══ */}
      <Ecosystem />

      <section id="powers" className="pt-16 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">La Solución</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              Tus Agentes con Superpoderes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuatro agentes de IA especializados que trabajan en sincronía para automatizar tu marketing de extremo a extremo.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <span className="text-sm text-secondary font-medium">{agent.subtitle}</span>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{agent.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ METRICS ═══ */}
      <section className="py-12 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Impacto</span>
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
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Con Visbly</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-secondary">Impacto</th>
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

      {/* ═══ PARTNERS / TECH STACK ═══ */}
      <Partners />

      {/* ═══ TESTIMONIALS ═══ */}
      <Testimonials />

      {/* ═══ FAQ ═══ */}
      <section className="py-16 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 font-display">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Todo lo que necesitas saber antes de empezar.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-base font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 px-6 relative">
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
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
              Únete a los Media Buyers que ya están rompiendo el cuello de botella creativo con Visbly.
            </p>
            <p className="text-sm text-secondary/80 font-medium mb-10">
              7 días gratis · Cancela cuando quieras
            </p>
            <div className="relative inline-flex mb-10 group">
              {/* Glow behind button */}
              <div className="absolute -inset-4 bg-primary/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Rotating gradient border */}
              <div className="absolute -inset-[2px] rounded-[14px] overflow-hidden">
                <div
                  className="w-[300%] h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: 'conic-gradient(from 0deg, #6366F1, #818CF8, #3B82F6, #6366F1)',
                    animation: 'border-spin 3s linear infinite',
                  }}
                />
              </div>

              {/* Shimmer sweep overlay */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-20"
              >
                <div
                  className="absolute inset-0 w-[50%] h-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                    animation: 'shimmer-sweep 3s ease-in-out infinite',
                  }}
                />
              </div>

              {/* Button content */}
              <a
                href="https://play.google.com/store/apps/details?id=cl.freeily.visbly"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="relative z-10 inline-flex items-center gap-3 px-10 py-4 bg-[#0a0c14] text-white rounded-xl font-semibold text-lg transition-all duration-300 group-hover:bg-[#0f1120]"
              >
                Prueba Visbly Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

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
