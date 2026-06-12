import type { Metadata } from "next";
import { FunnelPageViewTracker } from "@/components/FunnelPageViewTracker";
import { TrackableLink } from "@/components/TrackableLink";

export const metadata: Metadata = {
  title: "Embudo de Ventas OpenNovaIA v1",
  description:
    "Conoce el flujo comercial de OpenNovaIA desde tráfico, landing y demo hasta propuesta, pago, KronoCloud y activación del agente IA.",
  alternates: {
    canonical: "https://opennovaia.com/embudo"
  },
  openGraph: {
    title: "Embudo de Ventas OpenNovaIA v1",
    description:
      "Flujo comercial para convertir conversaciones en clientes activos con agentes IA, demo, propuesta y activación en KronoCloud.",
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
    title: "Embudo de Ventas OpenNovaIA v1",
    description:
      "Flujo comercial para convertir conversaciones en clientes activos con agentes IA, demo, propuesta y activación en KronoCloud.",
    images: ["/logo.svg"]
  }
};

const phases = [
  {
    name: "Tráfico",
    objective:
      "Atraer prospectos desde Google, Instagram, Facebook, Google Business, referidos y SEO.",
    happens:
      "La persona descubre OpenNovaIA por búsqueda, contenido, redes, perfil de negocio o recomendación.",
    opennovaia:
      "Optimizar contenido, mensajes, SEO, publicaciones, prueba social y llamadas a la demo.",
    client:
      "Identificar si tiene problemas de atención, ventas, seguimiento o procesos repetitivos.",
    metric: "Visitas, clics, fuentes de tráfico."
  },
  {
    name: "Landing",
    objective: "Generar confianza y llevar al visitante a la demo.",
    happens:
      "El prospecto entiende la propuesta de valor, revisa planes, beneficios, testimonios y casos modelo.",
    opennovaia:
      "Mantener una landing clara, rápida, persuasiva y orientada a conversión.",
    client:
      "Explorar la oferta y decidir si vale la pena ver una demo aplicada a su negocio.",
    metric: "Clics en CTA, visitas a planes, tiempo en página."
  },
  {
    name: "Demo",
    objective:
      "Mostrar cómo un agente IA puede automatizar atención, ventas y seguimiento.",
    happens:
      "Se revisa el negocio, se detectan oportunidades y se muestra un flujo posible del agente IA.",
    opennovaia:
      "Escuchar, diagnosticar, mostrar una ruta simple y recomendar el siguiente paso.",
    client:
      "Compartir contexto real del negocio, canales actuales y principales cuellos de botella.",
    metric: "Demos agendadas, demos asistidas."
  },
  {
    name: "Propuesta",
    objective:
      "Enviar una oferta clara con plan recomendado, precio, beneficios e implementación.",
    happens:
      "El prospecto recibe una propuesta profesional con alcance, beneficios, plan y próximos pasos.",
    opennovaia:
      "Personalizar la propuesta, explicar valor de negocio y dejar claro cómo iniciar.",
    client:
      "Revisar alcance, presupuesto, prioridad y responsables de decisión.",
    metric: "Propuestas enviadas, propuestas abiertas."
  },
  {
    name: "Seguimiento",
    objective: "Mantener contacto sin presionar y resolver dudas.",
    happens:
      "OpenNovaIA acompaña la decisión con mensajes útiles, claridad y objeciones resueltas.",
    opennovaia:
      "Dar seguimiento elegante, recordar beneficios concretos y resolver fricciones.",
    client:
      "Responder dudas, validar internamente y confirmar si quiere avanzar.",
    metric: "Respuestas al seguimiento, objeciones resueltas, intención de compra."
  },
  {
    name: "Pago",
    objective: "Confirmar el plan y recibir el pago.",
    happens:
      "El cliente elige plan, confirma condiciones y realiza el pago acordado.",
    opennovaia:
      "Enviar instrucciones claras, confirmar recepción y preparar la activación.",
    client:
      "Seleccionar plan, realizar pago y entregar datos administrativos necesarios.",
    metric: "Pagos recibidos, tasa de cierre."
  },
  {
    name: "KronoCloud",
    objective: "Crear cuenta, configurar cliente y preparar agentes IA.",
    happens:
      "Se crea la cuenta, se organiza la base de conocimiento y se preparan agentes, canales y flujos.",
    opennovaia:
      "Configurar cliente, cargar información, preparar agentes IA y validar integraciones.",
    client:
      "Entregar información del negocio, preguntas frecuentes, servicios y criterios de atención.",
    metric: "Cuentas creadas, agentes configurados."
  },
  {
    name: "Activación",
    objective: "Entregar el agente funcionando, capacitación inicial y soporte.",
    happens:
      "El agente entra en operación, el equipo aprende a usarlo y se miden primeras conversaciones.",
    opennovaia:
      "Acompañar activación, ajustar respuestas, medir desempeño y solicitar feedback.",
    client:
      "Usar el agente, revisar conversaciones y reportar oportunidades de mejora.",
    metric: "Cliente activo, satisfacción, testimonio."
  }
];

const followUpSequence = [
  {
    day: "Día 0",
    action: "Enviar propuesta"
  },
  {
    day: "Día 1",
    action: "Seguimiento suave"
  },
  {
    day: "Día 3",
    action: "Beneficio concreto"
  },
  {
    day: "Día 5",
    action: "Resolver objeciones"
  },
  {
    day: "Día 7",
    action: "Cierre elegante"
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
            Embudo de Ventas OpenNovaIA v1
          </p>
          <h1 className="mt-7 text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Tráfico → Landing → Demo → Propuesta → Seguimiento → Pago → KronoCloud → Activación
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/[0.72]">
            Un mapa comercial claro para convertir visitantes en clientes activos con agentes IA
            funcionando, seguimiento medible y activación ordenada.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackableLink
              href="/demo"
              eventName="demo_from_funnel_click"
              eventLabel="Ver página de demo"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-7 py-4 text-center text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Ver página de demo
            </TrackableLink>
            <TrackableLink
              href="/propuesta"
              eventName="proposal_from_funnel_click"
              eventLabel="Ver propuesta comercial"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-7 py-4 text-center text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Ver propuesta comercial
            </TrackableLink>
          </div>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-8">
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
            Fases del embudo
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Cada etapa tiene un objetivo, una acción y una métrica clara.
          </h2>
          <div className="mt-12 grid gap-5">
            {phases.map((phase, index) => (
              <article key={phase.name} className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.09)]">
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

                {phase.name === "Seguimiento" && (
                  <div className="mt-7 rounded-lg border border-nova-gold/25 bg-nova-gold/10 p-5">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#6f4300]">
                      Mini secuencia de seguimiento
                    </p>
                    <div className="mt-4 grid gap-3 md:grid-cols-5">
                      {followUpSequence.map((item) => (
                        <div key={item.day} className="rounded-lg border border-nova-gold/20 bg-white/70 p-4">
                          <p className="text-sm font-black text-nova-violet">{item.day}</p>
                          <p className="mt-2 text-sm font-bold leading-5 text-[#5a476f]">{item.action}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
            No vendemos tecnología. Convertimos conversaciones en clientes.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            El objetivo no es vender tecnología. El objetivo es convertir conversaciones en clientes,
            reducir trabajo manual y activar agentes IA que generen resultados reales para cada negocio.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackableLink
              href="/demo"
              eventName="demo_from_funnel_click"
              eventLabel="Ver página de demo"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-8 py-4 text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Ver página de demo
            </TrackableLink>
            <TrackableLink
              href="/propuesta"
              eventName="proposal_from_funnel_click"
              eventLabel="Ver propuesta comercial"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-8 py-4 text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Ver propuesta comercial
            </TrackableLink>
          </div>
        </div>
      </section>
    </main>
  );
}
