import { RobotHeroVisual } from "./RobotHeroVisual";

export function Hero() {
  return (
    <section className="relative min-h-[94vh] pt-32">
      <div className="nova-grid absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="neural-field absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(ellipse_at_center,rgba(255,61,255,0.3),transparent_62%)]" />
      <div className="absolute right-0 top-20 h-[540px] w-[52vw] bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.42),transparent_62%)] blur-2xl" />
      <div className="absolute left-0 top-28 h-[420px] w-[42vw] bg-[radial-gradient(ellipse_at_center,rgba(178,0,255,0.34),transparent_68%)] blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-nova-black to-transparent" />

      <div className="section-shell relative grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-nova-fuchsia/25 bg-nova-fuchsia/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-nova-pink shadow-glow">
            Agencia de inteligencia artificial
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Automatiza tu negocio con agentes de IA que trabajan <span className="bg-gradient-to-r from-nova-lilac via-nova-fuchsia to-nova-gold bg-clip-text text-transparent">24/7</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.68]">
            Implementamos asistentes inteligentes para ventas, atención al cliente,
            soporte y procesos empresariales. Menos trabajo manual, más conversiones y respuestas inmediatas.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#planes"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-7 py-4 text-center text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Activar mi Agente IA
            </a>
            <a
              href="#proceso"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-7 py-4 text-center text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="relative">
          <RobotHeroVisual />
        </div>
      </div>
    </section>
  );
}
