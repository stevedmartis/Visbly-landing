import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const Privacy = () => {
  const lastUpdated = "11 de mayo de 2026";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-foreground/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/">
            <img src="/visbly_logo.webp" alt="Visbly" className="h-7 w-auto opacity-90" />
          </Link>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Privacidad</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold font-display mb-4">Política de Privacidad</h1>
            <p className="text-muted-foreground">Última actualización: {lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Quiénes somos</h2>
              <p>Visbly ("nosotros", "nuestro") es una plataforma de inteligencia artificial para la creación y automatización de campañas publicitarias en Meta (Facebook e Instagram). Operamos bajo la razón social de Visbly AI y puedes contactarnos en <a href="mailto:hola@visblyai.com" className="text-primary hover:underline">hola@visblyai.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Datos que recopilamos</h2>
              <p>Cuando usas Visbly, recopilamos:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong className="text-foreground">Datos de cuenta:</strong> Nombre, correo electrónico y foto de perfil (vía Google Sign-In o email/contraseña).</li>
                <li><strong className="text-foreground">Datos de marca:</strong> URL de tu sitio web, logotipos, colores y assets que subes para generar tu ADN de marca.</li>
                <li><strong className="text-foreground">Datos de Meta Ads:</strong> Tokens de acceso OAuth de Meta para conectar y gestionar tus cuentas publicitarias. Estos tokens son almacenados de forma cifrada.</li>
                <li><strong className="text-foreground">Datos de uso:</strong> Interacciones dentro de la app, campañas creadas y métricas de rendimiento.</li>
                <li><strong className="text-foreground">Datos de pago:</strong> Gestionados íntegramente por RevenueCat y las tiendas de aplicaciones (Google Play / App Store). No almacenamos datos de tarjetas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Cómo usamos tus datos</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Autenticarte y gestionar tu sesión.</li>
                <li>Generar creativos publicitarios personalizados usando IA (Google Gemini / Imagen).</li>
                <li>Lanzar y optimizar campañas en Meta en tu nombre (solo con tu autorización explícita).</li>
                <li>Gestionar tu suscripción y límites de uso del plan.</li>
                <li>Mejorar la calidad del servicio mediante análisis de uso anonimizados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Compartición de datos con terceros</h2>
              <p>Solo compartimos tus datos con los siguientes proveedores de servicios, y únicamente lo necesario para operar:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong className="text-foreground">Google Firebase:</strong> Autenticación, base de datos (Firestore) y almacenamiento de archivos.</li>
                <li><strong className="text-foreground">Google AI (Gemini / Imagen):</strong> Generación de texto e imágenes para creativos.</li>
                <li><strong className="text-foreground">Meta Platforms:</strong> Para lanzar campañas en Facebook/Instagram con tus credenciales autorizadas.</li>
                <li><strong className="text-foreground">RevenueCat:</strong> Gestión de suscripciones y compras in-app.</li>
              </ul>
              <p className="mt-3">No vendemos, alquilamos ni compartimos tus datos personales con fines publicitarios de terceros.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Retención de datos</h2>
              <p>Conservamos tus datos mientras tu cuenta esté activa. Al eliminar tu cuenta, borramos todos tus datos en un máximo de 30 días, excepto los registros de facturación que debemos conservar por obligación legal (hasta 7 años según normativa chilena).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Tus derechos</h2>
              <p>Tienes derecho a acceder, rectificar, portar y eliminar tus datos personales. Para ejercer estos derechos, escríbenos a <a href="mailto:hola@visblyai.com" className="text-primary hover:underline">hola@visblyai.com</a> o visita nuestra <Link to="/delete-data" className="text-primary hover:underline">página de eliminación de datos</Link>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Seguridad</h2>
              <p>Implementamos medidas de seguridad estándar de la industria: cifrado en tránsito (HTTPS/TLS), autenticación segura mediante Firebase Auth y acceso restringido a datos sensibles mediante reglas de Firestore.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Cambios a esta política</h2>
              <p>Notificaremos cualquier cambio relevante vía correo electrónico y actualizaremos la fecha en la parte superior de esta página.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Contacto</h2>
              <p>Para cualquier consulta sobre privacidad, contáctanos en <a href="mailto:hola@visblyai.com" className="text-primary hover:underline">hola@visblyai.com</a>.</p>
            </section>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-foreground/5 py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2026 Visbly · <Link to="/delete-data" className="hover:text-primary">Eliminar Datos</Link> · <Link to="/" className="hover:text-primary">Inicio</Link></p>
      </footer>
    </div>
  );
};

export default Privacy;
