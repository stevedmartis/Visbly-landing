import { motion } from "framer-motion";
import { ArrowUp, Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const plans = [
    {
      name: "Starter",
      emoji: "⚡",
      subtitle: "Tracción Inicial",
      price: "9.990",
      futurePrice: "12.990",
      period: "/ mes",
      priceLabel: "Sube el 20 de Julio",
      features: [
        "Conecta 1 Cuenta de Meta Ads",
        "30 ángulos creativos de IA al mes",
        "Hasta 5 campañas activas",
        "Discovery + Creative Agent",
        "Lanzamiento automático de campañas",
        "Soporte por email",
      ],
      cta: "Empezar",
      highlight: false,
      gradient: "from-[#6366F1]/5 to-[#6366F1]/15",
      borderClass: "border-[#6366F1]/20 hover:border-[#6366F1]/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
      badgeColor: "bg-[#6366F1]",
      checkBg: "bg-[#6366F1]/15",
      checkColor: "text-[#818CF8]",
    },
    {
      name: "Scale",
      emoji: "📈",
      subtitle: "Crecimiento Acelerado",
      price: "19.990",
      futurePrice: "24.990",
      period: "/ mes",
      priceLabel: "Sube el 20 de Julio",
      features: [
        "Conecta hasta 3 Cuentas de Meta Ads",
        "Ángulos y copys de IA ilimitados",
        "Campañas ilimitadas",
        "Los 4 Agentes completos",
        "Detección automática de Ads ganadores",
        "Escalamiento de pauta con un clic",
        "Soporte prioritario",
      ],
      cta: "Escalar",
      highlight: true,
      gradient: "from-[#818CF8]/10 to-[#6366F1]/20",
      borderClass: "border-[#818CF8]/50 shadow-[0_0_40px_rgba(129,140,248,0.2)] hover:border-[#818CF8] hover:shadow-[0_0_50px_rgba(129,140,248,0.3)]",
      badgeColor: "bg-gradient-to-r from-[#6366F1] to-[#818CF8]",
      checkBg: "bg-[#818CF8]/15",
      checkColor: "text-[#A5B4FC]",
    },
    {
      name: "Infinity",
      emoji: "♾️",
      subtitle: "Dominio Ilimitado",
      price: "39.990",
      futurePrice: "49.990",
      period: "/ mes",
      priceLabel: "Sube el 20 de Julio",
      features: [
        "Cuentas y campañas de Meta ilimitadas",
        "Todo el Growth Engine desbloqueado",
        "Reglas de Auto-Escalamiento (Autopilot)",
        "API Access",
        "Brand kits ilimitados",
        "Analytics avanzado",
        "Soporte estratégico 1-a-1",
      ],
      cta: "Al Infinito",
      highlight: false,
      gradient: "from-[#4F46E5]/5 to-[#4338CA]/15",
      borderClass: "border-[#4F46E5]/20 hover:border-[#4F46E5]/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]",
      badgeColor: "bg-[#4F46E5]",
      checkBg: "bg-[#4F46E5]/15",
      checkColor: "text-[#818CF8]",
    },
    {
      name: "Agency",
      emoji: "🏢",
      subtitle: "White-Label & Multi-Cliente",
      price: "99.990",
      futurePrice: "129.990",
      period: "/ mes",
      priceLabel: "Sube el 20 de Julio",
      features: [
        "Todo lo de Infinity incluido",
        "Hasta 10 marcas/clientes",
        "Dashboard white-label",
        "Onboarding personalizado",
        "Canal dedicado en Slack",
        "Reportes multi-cuenta",
        "API prioritaria",
      ],
      cta: "Potencia",
      highlight: false,
      gradient: "from-[#3B82F6]/5 to-[#2563EB]/15",
      borderClass: "border-[#3B82F6]/20 hover:border-[#3B82F6]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      badgeColor: "bg-[#3B82F6]",
      checkBg: "bg-[#3B82F6]/15",
      checkColor: "text-[#60A5FA]",
    },
  ];

  const handlePlanClick = (planName: string) => {
    if (planName === "Agency") {
      window.location.href = "mailto:hola@visblyai.com?subject=Visbly Agency Plan - Consulta";
    } else {
      scrollToHero();
    }
  };

  return (
    <section id="pricing" className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-widest"
          >
            Inversión
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4 font-display"
          >
            Planes que escalan contigo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Elige el motor que mejor se adapte a tu ritmo de crecimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">7 días de prueba gratis,</span>
            <span className="text-sm text-muted-foreground">cancela cuando quieras</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-muted-foreground mt-4"
          >
            * Valores expresados en CLP (Pesos Chilenos) facturados a través de las tiendas oficiales de aplicaciones.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-10 rounded-[32px] border bg-gradient-to-br ${plan.gradient} bg-[#07090E]/60 backdrop-blur-2xl flex flex-col transition-all duration-300 ${plan.borderClass}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white text-xs font-black rounded-full uppercase tracking-wider shadow-md z-10">
                  Más Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground font-display">{plan.emoji} {plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{plan.subtitle}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-display">${plan.price}</span>
                  <span className="text-xs text-muted-foreground/50 font-medium">/mes</span>
                </div>
                <div className="mt-2">
                  <span className="text-base text-muted-foreground line-through">${plan.futurePrice}</span>
                  <p className="text-[10px] text-muted-foreground/50 mt-1">{plan.priceLabel}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.checkBg}`}>
                      <Check className={`w-3 h-3 ${plan.checkColor}`} />
                    </div>
                    <span className="text-sm text-foreground/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-xs text-muted-foreground mb-3">Prueba 7 días gratis · Cancela cuando quieras</p>

              <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#3B82F6]">
                <button
                  onClick={() => handlePlanClick(plan.name)}
                  className="w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#3B82F6] text-white hover:opacity-90"
                >
                  {plan.cta}
                  {plan.name === "Agency" ? (
                    <ArrowUp className="w-4 h-4 rotate-45" />
                  ) : (
                    <ArrowUp className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
