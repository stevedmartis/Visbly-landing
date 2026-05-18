import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const Terms = () => {
  const lastUpdated = "11 de mayo de 2026";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-foreground/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/">
            <img src="/visbly_logo.webp" alt="Visbly" className="h-7 w-auto opacity-90" />
          </Link>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Términos de Uso</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold font-display mb-4">Términos y Condiciones</h1>
            <p className="text-muted-foreground">Última actualización: {lastUpdated}</p>
          </div>

          <div className="space-y-10 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Aceptación de los Términos</h2>
              <p>Al acceder y usar Visbly ("la Plataforma"), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo, no debes usar la plataforma. Estos términos aplican a todos los usuarios de la app móvil y el sitio web de Visbly.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Descripción del Servicio</h2>
              <p>Visbly es una plataforma de inteligencia artificial que permite a los usuarios:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Generar estrategias publicitarias y creativos mediante IA.</li>
                <li>Conectar y gestionar cuentas publicitarias de Meta (Facebook/Instagram).</li>
                <li>Lanzar y monitorear campañas publicitarias de forma automatizada.</li>
                <li>Analizar el ADN de marca a través de URLs y assets subidos por el usuario.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Planes y Suscripciones</h2>
              <p>Visbly opera bajo un modelo de suscripción con los siguientes planes: <strong className="text-foreground">Starter</strong>, <strong className="text-foreground">Scale</strong> e <strong className="text-foreground">Infinity</strong>. Los precios, características y límites de cada plan están disponibles en la sección de precios de la plataforma y pueden cambiar con aviso previo de 30 días.</p>
              <p className="mt-3">Las suscripciones se gestionan a través de Google Play (Android) o App Store (iOS). Los reembolsos se rigen por las políticas de cada tienda.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Uso Aceptable</h2>
              <p>Al usar Visbly, te comprometes a:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Usar la plataforma solo con fines legales y éticos.</li>
                <li>No generar contenido publicitario engañoso, ilegal o que viole las políticas de Meta.</li>
                <li>No intentar acceder a funcionalidades no autorizadas mediante ingeniería inversa.</li>
                <li>Ser el titular legítimo o tener autorización para gestionar las cuentas publicitarias conectadas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Propiedad Intelectual</h2>
              <p>Los creativos, textos e imágenes generados mediante Visbly usando tus datos de marca son de tu propiedad. Visbly se reserva el derecho de usar datos anonimizados y agregados para mejorar sus modelos de IA.</p>
              <p className="mt-3">La plataforma, su código, diseño y marca son propiedad exclusiva de Visbly AI y están protegidos por las leyes de propiedad intelectual aplicables.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Integración con Meta</h2>
              <p>Al conectar tu cuenta de Meta Ads, autorizas a Visbly a actuar en tu nombre para crear y gestionar campañas. Eres responsable del cumplimiento de las <a href="https://www.facebook.com/policies/ads/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Políticas Publicitarias de Meta</a>. Visbly no se responsabiliza por la suspensión de cuentas publicitarias derivada de contenido creado por el usuario.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitación de Responsabilidad</h2>
              <p>Visbly no garantiza resultados específicos en campañas publicitarias. El rendimiento de los anuncios depende de factores externos fuera de nuestro control (algoritmos de Meta, presupuesto, mercado, etc.). La plataforma se proporciona "tal cual" sin garantías de disponibilidad ininterrumpida.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Terminación</h2>
              <p>Puedes cancelar tu cuenta en cualquier momento. Visbly se reserva el derecho de suspender o terminar cuentas que violen estos términos, sin reembolso de períodos ya pagados.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Ley Aplicable</h2>
              <p>Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa se resolverá en los tribunales competentes de Valparaíso, Chile.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Contacto</h2>
              <p>Para consultas sobre estos términos, escríbenos a <a href="mailto:hola@visblyai.com" className="text-primary hover:underline">hola@visblyai.com</a>.</p>
            </section>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-foreground/5 py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2026 Visbly · <Link to="/privacy" className="hover:text-primary">Privacidad</Link> · <Link to="/delete-data" className="hover:text-primary">Eliminar Datos</Link> · <Link to="/" className="hover:text-primary">Inicio</Link></p>
      </footer>
    </div>
  );
};

export default Terms;
