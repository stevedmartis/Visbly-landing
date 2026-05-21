import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Camila Rojas",
      role: "Media Buyer Freelance",
      text: "Visbly me permite generar 10 variantes de un ángulo ganador en minutos. Antes tardaba días con el diseñador. Mi CTR subió un 31% en el primer mes.",
      date: "MAR 12, 2025",
      rating: 5,
    },
    {
      name: "Diego Fernández",
      role: "Dueño de E-commerce",
      text: "Lancé mi tienda DTC sin saber nada de Facebook Ads. Con Visbly los agentes hicieron todo: encontraron ángulos, crearon los anuncios y los lanzaron. Ya estoy facturando todos los días.",
      date: "ABR 03, 2025",
      rating: 5,
    },
    {
      name: "Valentina Torres",
      role: "Agency Owner",
      text: "Escalar mi agencia a 8 cifras este año fue posible gracias a la automatización de Visbly. Gestiono 12 cuentas de clientes con la mitad del equipo. El ROI es brutal.",
      date: "FEB 28, 2025",
      rating: 5,
    },
    {
      name: "Andrés Gutiérrez",
      role: "Affiliate Marketer",
      text: "Las automatizaciones avanzadas de Visbly son un game-changer para affiliates. Manejo múltiples cuentas y BMs sin perder el control. La detección de ganadores es precisa.",
      date: "ENE 19, 2025",
      rating: 5,
    },
    {
      name: "Francisca Morales",
      role: "Brand Manager",
      text: "La clonación de ADN de marca es increíble. Subí nuestro sitio, LinkedIn e Instagram y los anuncios que genera Visbly suenan y se ven exactamente como nosotros. 100% fidelidad.",
      date: "MAR 25, 2025",
      rating: 5,
    },
    {
      name: "Matías Herrera",
      role: "Small Business Owner",
      text: "Configúralo y olvídalo. Visbly optimiza, escala y genera creativos automáticamente. He probado muchas herramientas y esta es la única que realmente entrega lo que promete.",
      date: "ABR 08, 2025",
      rating: 5,
    },
    {
      name: "Carolina Silva",
      role: "Growth Marketer",
      text: "El Discovery Agent encontró ángulos que nuestro equipo llevaba semanas sin ver. En 30 segundos tenía ganchos que funcionaron mejor que todo lo que habíamos probado antes.",
      date: "MAR 01, 2025",
      rating: 5,
    },
    {
      name: "Joaquín Reyes",
      role: "Performance Marketer",
      text: "Bootstrapeé mi marca a 6 cifras y necesitaba escalar el volumen creativo. Con Visbly creo 10 ads en menos de 1 hora. Ahora estoy escalando a 7 cifras y el sistema aguanta perfecto.",
      date: "FEB 14, 2025",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-widest"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4 font-display"
          >
            Nuestros Usuarios Hablan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            No tienes que creer en nuestra palabra. Mira lo que dicen quienes ya usan Visbly para escalar sus campañas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-sm text-foreground/85 leading-relaxed mb-6 min-h-[80px]">
                {review.text}
              </p>

              {/* Author info */}
              <div className="flex items-center justify-between pt-4 border-t border-foreground/5">
                <div>
                  <div className="text-sm font-semibold text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.role}</div>
                </div>
                <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                  {review.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
