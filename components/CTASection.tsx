import { siteConfig } from "@/config/site";

export function CTASection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[#07020f] py-20">
      <div className="neural-field absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.22),transparent_48%),radial-gradient(ellipse_at_left,rgba(255,61,255,0.34),transparent_52%)]" />
      <div className="section-shell relative">
        <div className="gradient-border relative overflow-hidden rounded-lg border border-nova-gold/30 bg-[#080311] p-8 shadow-glow sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(106,0,255,0.4),rgba(45,11,95,0.84)_42%,rgba(255,61,255,0.22))]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-nova-gold to-transparent" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,108,240,0.24),transparent_65%)]" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-nova-gold">Demo estratégica</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Convierte tu operación en una red de agentes IA.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/[0.72]">
              Agenda una demo y recibe una propuesta clara para automatizar ventas, soporte y tareas operativas con agentes neurales.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-7 py-4 text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1"
              >
                Agendar demo gratis
              </a>
              <a
                href="#planes"
                className="inline-flex rounded-full border border-nova-lilac/35 bg-white/[0.045] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-nova-gold/50 hover:bg-white/[0.08]"
              >
                Comparar planes
              </a>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/55">
              Tambi&eacute;n puedes{" "}
              <a href="/agentes-ia" className="font-bold text-nova-lilac transition hover:text-white">
                conocer nuestros Agentes de IA
              </a>{" "}
              o ver la{" "}
              <a href="/automatizacion-whatsapp" className="font-bold text-nova-gold transition hover:text-white">
                automatizaci&oacute;n de WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
