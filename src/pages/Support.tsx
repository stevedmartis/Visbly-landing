import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LifeBuoy, Mail, MessageSquare, Clock, ShieldCheck } from "lucide-react";

const Support = () => {
  const faqs = [
    {
      q: "¿Cómo funcionan los agentes de Visbly?",
      a: "Nuestros agentes son especialistas en IA que trabajan en cadena. El agente de Discovery encuentra tendencias, el de Audit analiza tu marca, el Creative diseña los anuncios y el Orchestrator los lanza a Meta."
    },
    {
      q: "¿Es seguro conectar mi cuenta de Meta Ads?",
      a: "Totalmente. Usamos OAuth oficial de Meta y nunca almacenamos tus contraseñas. Los tokens de acceso se guardan de forma cifrada y solo se usan para las acciones que tú autorices."
    },
    {
      q: "¿Puedo cancelar mi suscripción en cualquier momento?",
      a: "Sí, puedes gestionar tu suscripción directamente desde la App Store o Google Play Store. Tendrás acceso a las funciones premium hasta el final del periodo facturado."
    },
    {
      q: "¿Cómo contacto con soporte técnico?",
      a: "Puedes escribirnos directamente a hola@visblyai.com. Nuestro equipo de ingenieros y marketers responde generalmente en menos de 24 horas hábiles."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-foreground/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/">
            <img src="/visbly_logo.png" alt="Visbly" className="h-7 w-auto opacity-90" />
          </Link>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Soporte</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <LifeBuoy className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold font-display mb-4">Centro de Ayuda y Soporte</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Estamos aquí para ayudarte a escalar tu estrategia de marketing con IA. Encuentra respuestas o contáctanos directamente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Contact Card */}
            <div className="p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email de Soporte</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Escríbenos para consultas técnicas, problemas de facturación o sugerencias.
              </p>
              <a 
                href="mailto:hola@visblyai.com" 
                className="text-primary font-semibold hover:underline text-lg"
              >
                hola@visblyai.com
              </a>
            </div>

            {/* Response Time Card */}
            <div className="p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tiempo de Respuesta</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Nuestro equipo humano revisa cada ticket personalmente.
              </p>
              <span className="text-foreground font-semibold text-lg">
                &lt; 24 Horas Hábiles
              </span>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold font-display">Preguntas Frecuentes</h2>
            </div>
            <div className="grid gap-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.01]"
                >
                  <h4 className="text-foreground font-semibold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Trust Section */}
          <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <ShieldCheck className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Compromiso de Seguridad</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tus datos y conexiones de anuncios están protegidos con los más altos estándares de seguridad. Si tienes dudas sobre cómo gestionamos tu información, revisa nuestra <Link to="/privacy" className="text-primary hover:underline">Política de Privacidad</Link>.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-foreground/5 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Visbly · <Link to="/terms" className="hover:text-primary">Términos</Link> · <Link to="/" className="hover:text-primary">Inicio</Link>
        </p>
      </footer>
    </div>
  );
};

export default Support;
