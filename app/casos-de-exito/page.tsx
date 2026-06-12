import type { Metadata } from "next";
import Link from "next/link";
import { TrackableLink } from "@/components/TrackableLink";

export const metadata: Metadata = {
  title: "Casos de Éxito | OpenNovaIA",
  description:
    "Descubre cómo los agentes IA de OpenNovaIA ayudan a empresas en Colombia a automatizar ventas, atención al cliente y procesos por WhatsApp, web y CRM.",
  keywords: [
    "agentes IA Colombia",
    "casos de éxito IA",
    "automatización WhatsApp Colombia",
    "inteligencia artificial para empresas",
    "agentes IA para negocios"
  ],
  alternates: {
    canonical: "https://opennovaia.com/casos-de-exito"
  },
  openGraph: {
    title: "Casos de Éxito | OpenNovaIA",
    description:
      "Casos piloto y escenarios de implementación de agentes IA para empresas en Colombia.",
    url: "https://opennovaia.com/casos-de-exito",
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
    title: "Casos de Éxito | OpenNovaIA",
    description:
      "Casos piloto y escenarios de implementación de agentes IA para empresas en Colombia.",
    images: ["/logo.svg"]
  }
};

const trustMetrics = [
  {
    metric: "Hasta 24/7",
    title: "Disponibilidad de atención",
    copy: "Los agentes IA pueden operar de forma continua cuando el flujo está bien diseñado y entrenado."
  },
  {
    metric: "Potencial",
    title: "Menos chats repetitivos",
    copy: "En implementaciones bien configuradas, las preguntas frecuentes pueden resolverse sin fricción manual."
  },
  {
    metric: "Mejor seguimiento",
    title: "Oportunidades comerciales",
    copy: "Según el caso, los agentes ayudan a capturar datos, priorizar leads y activar próximos pasos."
  }
];

const modelCases = [
  {
    sector: "E-commerce",
    problem: "Muchos mensajes repetidos sobre pedidos, pagos y envíos.",
    solution: "Agente IA para WhatsApp y web conectado al proceso comercial.",
    expected:
      "Mejor respuesta, seguimiento de pedidos y recuperación de oportunidades que podrían perderse por demora."
  },
  {
    sector: "Clínica / Salud",
    problem: "Pérdida de tiempo en agendamiento, recordatorios y preguntas frecuentes.",
    solution: "Agente IA para agenda, orientación inicial y recordatorios.",
    expected:
      "Atención más rápida y menos carga administrativa para el equipo de recepción o coordinación."
  },
  {
    sector: "Inmobiliaria",
    problem: "Leads fríos, seguimiento lento y preguntas repetidas sobre inmuebles.",
    solution: "Agente IA que califica interesados, responde dudas y agenda visitas.",
    expected:
      "Mejor priorización comercial, atención inmediata y conversaciones más listas para cierre."
  }
];

const successMetrics = [
  "Tiempo de respuesta",
  "Conversaciones automatizadas",
  "Leads capturados",
  "Citas agendadas",
  "Oportunidades calificadas",
  "Tasa de derivación a humano"
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Casos de Éxito | OpenNovaIA",
  url: "https://opennovaia.com/casos-de-exito",
  description:
    "Casos piloto y escenarios de implementación de agentes IA para empresas en Colombia."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "OpenNovaIA",
      item: "https://opennovaia.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Casos de Éxito",
      item: "https://opennovaia.com/casos-de-exito"
    }
  ]
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos modelo de agentes IA",
  itemListElement: modelCases.map((caseItem, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: `Caso modelo: ${caseItem.sector}`,
      description: `${caseItem.problem} ${caseItem.solution} ${caseItem.expected}`
    }
  }))
};

export default function CasosDeExitoPage() {
  return (
    <main className="relative overflow-hidden bg-nova-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageJsonLd, breadcrumbJsonLd, itemListJsonLd])
        }}
      />
      <div className="nova-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="neural-field absolute inset-0 opacity-24" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-[540px] w-[52vw] bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.45),transparent_64%)] blur-2xl" />
      <div className="absolute right-0 top-20 h-[520px] w-[46vw] bg-[radial-gradient(ellipse_at_center,rgba(255,61,255,0.32),transparent_62%)] blur-2xl" />

      <section className="section-shell relative grid min-h-[82vh] items-center gap-12 py-28 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="inline-flex rounded-full border border-nova-fuchsia/25 bg-nova-fuchsia/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-nova-pink shadow-glow">
            Casos de éxito
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Empresas que convierten conversaciones en crecimiento
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.7]">
            Explora cómo los agentes IA pueden ayudar a automatizar ventas, atención al cliente
            y procesos operativos en empresas colombianas.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contacto"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-7 py-4 text-center text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Solicitar demo
            </Link>
            <TrackableLink
              href="/#planes"
              eventName="view_plans_click"
              eventLabel="Ver planes"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-7 py-4 text-center text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Ver planes
            </TrackableLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/58">
            <Link href="/" className="font-bold text-nova-lilac transition hover:text-white">
              Volver a OpenNovaIA
            </Link>
            <Link href="/agentes-ia" className="font-bold text-nova-lilac transition hover:text-white">
              Conoce nuestros Agentes de IA
            </Link>
            <Link href="/automatizacion-whatsapp" className="font-bold text-nova-gold transition hover:text-white">
              Ver automatización de WhatsApp
            </Link>
          </div>
        </div>

        <div className="premium-border gradient-border relative rounded-lg p-7">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-nova-fuchsia/25 blur-3xl" />
          <div className="relative space-y-5">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-gold">
              Prueba social responsable
            </p>
            <h2 className="text-3xl font-black leading-tight text-white">
              Casos modelo hoy. Casos reales cuando existan datos verificables.
            </h2>
            <p className="text-base leading-7 text-white/68">
              Esta página está preparada para publicar resultados reales con contexto, proceso,
              métricas y aprendizajes. Mientras tanto, usamos escenarios de implementación prudentes.
            </p>
            <div className="grid gap-3">
              {["Sin testimonios falsos", "Sin resultados inventados", "Métricas con contexto"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-white/78">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.16),transparent_52%)]" />
        <div className="section-shell relative">
          <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
            Señales de confianza
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Indicadores orientativos para implementaciones bien configuradas.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {trustMetrics.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-7 shadow-[0_20px_60px_rgba(76,29,149,0.09)]"
              >
                <p className="text-3xl font-black text-nova-violet">{item.metric}</p>
                <h3 className="mt-4 text-xl font-black text-[#211033]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5a476f]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07020f] py-24">
        <div className="neural-field absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(178,0,255,0.34),transparent_54%)]" />
        <div className="section-shell relative">
          <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-pink">
            Casos modelo
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Escenarios de implementación para empresas en Colombia.
          </h2>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {modelCases.map((caseItem) => (
              <article key={caseItem.sector} className="premium-border gradient-border flex flex-col rounded-lg p-7">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-nova-gold">
                  {caseItem.sector}
                </p>
                <div className="mt-6 space-y-5">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.16em] text-nova-lilac">
                      Problema
                    </h3>
                    <p className="mt-2 text-base leading-7 text-white/70">{caseItem.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.16em] text-nova-lilac">
                      Solución
                    </h3>
                    <p className="mt-2 text-base leading-7 text-white/70">{caseItem.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.16em] text-nova-lilac">
                      Resultado esperado
                    </h3>
                    <p className="mt-2 text-base leading-7 text-white/70">{caseItem.expected}</p>
                  </div>
                </div>
                <Link
                  href="/#contacto"
                  className="mt-8 inline-flex w-fit rounded-full border border-nova-gold/45 bg-white/[0.045] px-5 py-3 text-sm font-black text-nova-gold transition duration-300 hover:-translate-y-1 hover:bg-nova-gold hover:text-nova-black"
                >
                  Quiero un caso similar
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(251,191,36,0.14),transparent_44%),radial-gradient(ellipse_at_left,rgba(192,132,252,0.18),transparent_50%)]" />
        <div className="section-shell relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
              Cómo medimos el éxito
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Métricas claras para saber si el agente realmente aporta valor.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5a476f]">
              Cada implementación debe evaluarse con datos del negocio, objetivos definidos y
              lectura honesta de lo que la automatización sí puede mejorar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {successMetrics.map((metric, index) => (
              <article
                key={metric}
                className="flex gap-4 rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-5 shadow-[0_20px_60px_rgba(76,29,149,0.08)]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-nova-gold to-nova-amber text-sm font-black text-nova-black">
                  {index + 1}
                </span>
                <p className="text-base font-bold leading-7 text-[#2a1741]">{metric}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07020f] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.34),transparent_60%)]" />
        <div className="section-shell relative text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-gold">
            Transparencia
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Resultados reales, no promesas vacías.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            En OpenNovaIA preferimos construir confianza con datos. Por eso, cada caso de éxito real
            debe mostrar contexto, proceso, métricas y aprendizajes.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbf7ff] py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(251,191,36,0.16),transparent_42%),radial-gradient(ellipse_at_left,rgba(192,132,252,0.22),transparent_50%)]" />
        <div className="section-shell relative text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-violet">OpenNovaIA</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            ¿Quieres ser uno de los primeros casos de éxito de OpenNovaIA?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5a476f]">
            Implementa un agente IA para tu empresa y empieza a medir resultados desde tus conversaciones.
          </p>
          <Link
            href="/#contacto"
            className="mt-9 inline-flex rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-8 py-4 text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
          >
            Solicitar demo
          </Link>
        </div>
      </section>
    </main>
  );
}
