import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "Tracción Inicial",
      price: "5.990",
      period: "/ mes",
      features: [
        "Conecta 1 Cuenta de Meta Ads",
        "Límite de 3 campañas activas",
        "10 Sprints diarios y copys de IA",
        "Lanzamiento automático de campañas",
      ],
      cta: "Empezar Ahora",
      highlight: false,
      gradient: "from-[#6366F1]/10 to-[#4F46E5]/10",
      borderClass: "border-[#6366F1]/20 hover:border-[#6366F1]/80 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]",
      badgeColor: "bg-[#6366F1]",
      checkBg: "bg-[#6366F1]/20",
      checkColor: "text-[#6366F1]",
      buttonClass: "bg-[#6366F1] text-white hover:bg-[#4F46E5] shadow-lg shadow-[#6366F1]/20 border border-transparent",
    },
    {
      name: "Scale",
      subtitle: "Crecimiento Acelerado",
      price: "9.990",
      period: "/ mes",
      features: [
        "Conecta hasta 3 Cuentas de Meta Ads",
        "Sprints y copys de IA ilimitados",
        "Detección automática de Ads ganadores",
        "Escalamiento de pauta con un clic",
      ],
      cta: "Escalar Ahora",
      highlight: true,
      gradient: "from-[#EC4899]/15 to-[#D946EF]/15",
      borderClass: "border-[#EC4899]/60 shadow-[0_0_40px_rgba(236,72,153,0.35)] hover:border-[#D946EF] hover:shadow-[0_0_50px_rgba(236,72,153,0.5)]",
      badgeColor: "bg-gradient-to-r from-[#EC4899] to-[#D946EF]",
      checkBg: "bg-[#EC4899]/20",
      checkColor: "text-[#EC4899]",
      buttonClass: "bg-gradient-to-r from-[#EC4899] to-[#D946EF] text-white hover:opacity-95 shadow-lg shadow-[#EC4899]/30 border border-transparent",
    },
    {
      name: "Infinity",
      subtitle: "Dominio Ilimitado",
      price: "14.990",
      period: "/ mes",
      features: [
        "Cuentas y campañas de Meta ilimitadas",
        "Todo el Growth Engine desbloqueado",
        "Reglas de Auto-Escalamiento (Autopilot)",
        "Soporte estratégico prioritario 1-a-1",
      ],
      cta: "Dominar Ahora",
      highlight: false,
      gradient: "from-[#F59E0B]/10 to-[#EF4444]/10",
      borderClass: "border-[#F59E0B]/20 hover:border-[#F59E0B]/80 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]",
      badgeColor: "bg-[#F59E0B]",
      checkBg: "bg-[#F59E0B]/20",
      checkColor: "text-[#F59E0B]",
      buttonClass: "bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white hover:opacity-95 shadow-lg shadow-[#F59E0B]/20 border border-transparent",
    },
  ];

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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-muted-foreground mt-2"
          >
            * Valores expresados en CLP (Pesos Chilenos) facturados a través de las tiendas oficiales de aplicaciones.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-8 rounded-[32px] border bg-gradient-to-br ${plan.gradient} bg-[#07090E]/60 backdrop-blur-2xl flex flex-col transition-all duration-300 ${plan.borderClass}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#EC4899] to-[#D946EF] text-white text-xs font-black rounded-full uppercase tracking-wider shadow-md">
                  Más Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground font-display">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.subtitle}</p>
              </div>

              <div className="mb-8 flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-display">${plan.price}</span>
                  <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.checkBg}`}>
                      <Check className={`w-3 h-3 ${plan.checkColor}`} />
                    </div>
                    <span className="text-sm text-foreground/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${plan.buttonClass}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
