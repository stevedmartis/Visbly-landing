import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trash2, Mail, ShieldCheck, Clock, Database } from "lucide-react";

const DeleteData = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-foreground/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/">
            <img src="/visbly_logo.webp" alt="Visbly" className="h-7 w-auto opacity-90" />
          </Link>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Data Deletion</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
              <Trash2 className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-4xl font-bold font-display mb-4">Eliminar tu Cuenta y Datos</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Puedes solicitar la eliminación de tu cuenta y todos tus datos asociados en cualquier momento. Este proceso es permanente e irreversible.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6 mb-16">
            <h2 className="text-xl font-semibold mb-6">¿Cómo solicitar la eliminación?</h2>

            {[
              {
                icon: <Mail className="w-5 h-5" />,
                step: "01",
                title: "Envía un correo a nuestro equipo",
                desc: (
                  <>
                    Escribe a{" "}
                    <a href="mailto:hola@visblyai.com" className="text-primary hover:underline font-medium">
                      hola@visblyai.com
                    </a>{" "}
                    con el asunto <strong>"Solicitud de Eliminación de Cuenta"</strong> desde el correo registrado en tu cuenta Visbly.
                  </>
                ),
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                step: "02",
                title: "Verificación de identidad",
                desc: "Te enviaremos un correo de confirmación para verificar que eres el propietario de la cuenta antes de proceder.",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                step: "03",
                title: "Procesamiento (máx. 30 días)",
                desc: "Una vez confirmada tu identidad, eliminaremos tu cuenta y todos tus datos en un plazo máximo de 30 días calendario.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="flex gap-6 p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02]"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-primary/60 uppercase tracking-widest font-semibold">Paso {item.step}</span>
                  <h3 className="text-foreground font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What gets deleted */}
          <div className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">¿Qué datos se eliminan?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "✅ Eliminados", items: ["Tu perfil y datos de cuenta", "ADN de marca e identidad guardada", "Historiales de campañas y estrategias", "Creativos y assets generados", "Datos de conexión de Meta Ads", "Tokens de autenticación"] },
                { label: "⏳ Retención temporal (hasta 90 días)", items: ["Logs de transacciones (requeridos por ley fiscal)", "Datos de facturación (obligación legal)", "Registros de auditoría de seguridad"] },
              ].map((col, i) => (
                <div key={i}>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">{col.label}</span>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="mailto:hola@visblyai.com?subject=Solicitud%20de%20Eliminaci%C3%B3n%20de%20Cuenta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl font-semibold hover:bg-red-500/20 transition-all"
            >
              <Trash2 className="w-4 h-4" />
              Enviar solicitud de eliminación
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              También puedes eliminar datos individuales (campañas, creativos, brand DNA) directamente desde la configuración de la app.
            </p>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-foreground/5 py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2026 Visbly · <Link to="/privacy" className="hover:text-primary">Política de Privacidad</Link> · <Link to="/" className="hover:text-primary">Inicio</Link></p>
      </footer>
    </div>
  );
};

export default DeleteData;
