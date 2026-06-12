import type { Metadata } from "next";
import { FunnelPageViewTracker } from "@/components/FunnelPageViewTracker";
import { TrackableLink } from "@/components/TrackableLink";

export const metadata: Metadata = {
  title: "Embudo Automatizado OpenNovaIA v1",
  description:
    "Conoce el embudo automatizado de OpenNovaIA: tráfico, landing, demo automática, precios, pago, KronoCloud y activación de agentes IA.",
  alternates: {
    canonical: "https://opennovaia.com/embudo"
  },
  openGraph: {
    title: "Embudo Automatizado OpenNovaIA v1",
    description:
      "Flujo automatizado para convertir visitantes en clientes activos con agentes IA, pago y activación en KronoCloud.",
    url: "https://opennovaia.com/embudo",
    siteName: "OpenNovaIA",
    images: [
      {
        url: "/logo.svg",
        width: 240,
        height: 160,
        alt: "OpenNovaIA Logo"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Embudo Automatizado OpenNovaIA v1",
    description:
      "Flujo automatizado para convertir visitantes en clientes activos con agentes IA, pago y activación en KronoCloud.",
    images: ["/logo.svg"]
  }
};

const phases = [
  {
    name: "Tráfico",
    objective:
      "Atraer usuarios desde Instagram, Facebook, Google, Google Business Profile, SEO y referidos.",
    happens:
      "La persona ve una publicación, anuncio o resultado de búsqueda y entra a OpenNovaIA.",
    opennovaia:
      "Crear contenido, anuncios, SEO, perfiles confiables y mensajes que conecten con problemas reales de ventas y atención.",
    client:
      "Reconocer una necesidad de automatización y entrar a la web para entender la solución.",
    metric: "Fuente de tráfico, visitas, clics, CTR."
  },
  {
    name: "Landing",
    objective: "Generar confianza y explicar el valor de OpenNovaIA.",
    happens:
      "El visitante entiende que puede automatizar ventas, atención y procesos con agentes IA.",
    opennovaia:
      "Presentar valor, beneficios, planes, prueba social y rutas claras hacia demo automática y precios.",
    client:
      "Explorar la oferta, comparar valor y avanzar hacia la demo o la sección de planes.",
    metric: "Tiempo en página, clics en CTA, scroll, visitas a planes."
  },
  {
    name: "Demo automática",
    objective: "Que la web explique y muestre el valor sin intervención humana.",
    happens:
      "El usuario ve cómo funciona un agente IA, qué automatiza, qué resultados puede generar y cómo se activa.",
    opennovaia:
      "Mantener una demo clara, persuasiva y orientada a mostrar el antes, el después y el siguiente paso.",
    client:
      "Consumir la demo, entender el caso de uso y decidir si quiere avanzar a precios o activación.",
    metric: "Visitas a /demo, clics en CTA de demo, tiempo en demo."
  },
  {
    name: "Precios",
    objective: "Que el usuario compare Starter, Growth y Elite y elija el plan adecuado.",
    happens:
      "El usuario revisa beneficios, precios, créditos, agentes incluidos y decide avanzar.",
    opennovaia:
      "Mostrar planes claros, diferenciar Growth como opción recomendada y reducir dudas antes del pago.",
    client:
      "Elegir el plan que mejor se ajusta a su negocio, canales y volumen de atención.",
    metric: "pricing_section_view, view_plans_click, activate_agent_click."
  },
  {
    name: "Pago",
    objective: "Convertir al visitante en cliente.",
    happens:
      "El usuario paga el plan elegido mediante el sistema definido.",
    opennovaia:
      "Ofrecer un proceso de pago simple, confiable, medible y conectado al siguiente paso de activación.",
    client:
      "Confirmar el plan, completar el pago y avanzar al acceso de la plataforma.",
    metric: "Clics de pago, pagos iniciados, pagos completados."
  },
  {
    name: "KronoCloud",
    objective:
      "Llevar al cliente al sistema donde se registra, inicia sesión o activa su cuenta.",
    happens:
      "Después del pago, el cliente accede a KronoCloud para gestionar su agente IA.",
    opennovaia:
      "Conectar pago, cuenta, acceso y configuración inicial dentro del flujo operativo.",
    client:
      "Registrarse, iniciar sesión o activar la cuenta para empezar la configuración.",
    metric: "Registros, inicios de sesión, cuentas activadas."
  },
  {
    name: "Activación",
    objective: "Que el cliente tenga su agente funcionando.",
    happens:
      "El cliente completa datos, configura su negocio, activa agentes y empieza a usar la plataforma.",
    opennovaia:
      "Guiar la activación, medir uso, detectar fricción y facilitar que el cliente llegue a valor rápido.",
    client:
      "Completar información del negocio, activar agentes y revisar primeras conversaciones.",
    metric: "Agentes activados, clientes activos, retención."
  }
];

export default function EmbudoPage() {
  return (
    <main className="relative overflow-hidden bg-nova-black text-white">
      <FunnelPageViewTracker />
      <div className="nova-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="neural-field absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-[540px] w-[52vw] bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.44),transparent_64%)] blur-2xl" />
      <div className="absolute right-0 top-20 h-[520px] w-[46vw] bg-[radial-gradient(ellipse_at_center,rgba(255,61,255,0.32),transparent_62%)] blur-2xl" />

      <section className="section-shell relative py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex rounded-full border border-nova-fuchsia/25 bg-nova-fuchsia/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-nova-pink shadow-glow">
            Embudo automatizado OpenNovaIA v1
          </p>
          <h1 className="mt-7 text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Tráfico → Landing → Demo automática → Precios → Pago → KronoCloud → Activación
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/[0.72]">
            OpenNovaIA debe convertir visitantes en clientes activos sin depender de conversaciones
            manuales como flujo principal. La web explica, mide, vende y conecta con KronoCloud.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackableLink
              href="/demo"
              eventName="demo_from_funnel_click"
              eventLabel="Ver demo automática"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-7 py-4 text-center text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Ver demo automática
            </TrackableLink>
            <TrackableLink
              href="/#planes"
              eventName="pricing_from_funnel_click"
              eventLabel="Ver planes"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-7 py-4 text-center text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Ver planes
            </TrackableLink>
          </div>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-7">
          {phases.map((phase, index) => (
            <div
              key={phase.name}
              className="rounded-lg border border-white/10 bg-white/[0.055] px-4 py-4 text-center text-sm font-black text-white/78 shadow-[0_18px_60px_rgba(106,0,255,0.14)] backdrop-blur-xl"
            >
              <span className="block text-nova-gold">{index + 1}</span>
              {phase.name}
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.16),transparent_52%)]" />
        <div className="section-shell relative">
          <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
            Fases del embudo automático
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Cada etapa debe acercar al usuario al pago y a la activación.
          </h2>
          <div className="mt-12 grid gap-5">
            {phases.map((phase, index) => (
              <article
                key={phase.name}
                className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.09)]"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-nova-violet">
                      Fase {index + 1}
                    </p>
                    <h3 className="mt-2 text-3xl font-black text-[#211033]">{phase.name}</h3>
                    <p className="mt-4 max-w-3xl text-lg font-bold leading-8 text-[#5a476f]">
                      Objetivo: {phase.objective}
                    </p>
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-4 py-2 text-sm font-black text-nova-black">
                    {phase.metric}
                  </span>
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-[#eadcff] bg-white p-5">
                    <h4 className="text-sm font-black uppercase tracking-[0.16em] text-nova-violet">
                      Qué ocurre
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-[#5a476f]">{phase.happens}</p>
                  </div>
                  <div className="rounded-lg border border-[#eadcff] bg-white p-5">
                    <h4 className="text-sm font-black uppercase tracking-[0.16em] text-nova-violet">
                      Qué debe hacer OpenNovaIA
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-[#5a476f]">{phase.opennovaia}</p>
                  </div>
                  <div className="rounded-lg border border-[#eadcff] bg-white p-5">
                    <h4 className="text-sm font-black uppercase tracking-[0.16em] text-nova-violet">
                      Qué debe hacer el cliente
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-[#5a476f]">{phase.client}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07020f] py-24">
        <div className="neural-field absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.34),transparent_60%)]" />
        <div className="section-shell relative text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-gold">
            Objetivo del embudo
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            OpenNovaIA debe vender incluso cuando no estás conectada
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            El objetivo del embudo no es depender de llamadas manuales. El objetivo es que la página
            explique, convenza, mida el interés, lleve al usuario al pago y conecte con KronoCloud
            para activar su agente IA.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackableLink
              href="/demo"
              eventName="demo_from_funnel_click"
              eventLabel="Ver demo automática"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-8 py-4 text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Ver demo automática
            </TrackableLink>
            <TrackableLink
              href="/#planes"
              eventName="pricing_from_funnel_click"
              eventLabel="Ver planes"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-8 py-4 text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Ver planes
            </TrackableLink>
          </div>
        </div>
      </section>
    </main>
  );
}
