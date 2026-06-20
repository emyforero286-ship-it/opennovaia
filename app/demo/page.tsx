import type { Metadata } from "next";
import { DemoPageViewTracker } from "@/components/DemoPageViewTracker";
import { TrackableLink } from "@/components/TrackableLink";

export const metadata: Metadata = {
  title: "Demo OpenNovaIA | Agentes de IA para Empresas",
  description:
    "Mira la demostración de OpenNovaIA y descubre cómo los agentes de IA pueden automatizar ventas, atención al cliente y procesos empresariales 24/7.",
  alternates: {
    canonical: "https://opennovaia.com/demo"
  },
  openGraph: {
    title: "Demo OpenNovaIA | Agentes de IA para Empresas",
    description:
      "Mira la demostración de OpenNovaIA y descubre cómo los agentes de IA pueden automatizar ventas, atención al cliente y procesos empresariales 24/7.",
    url: "https://opennovaia.com/demo",
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
    title: "Demo OpenNovaIA | Agentes de IA para Empresas",
    description:
      "Mira la demostración de OpenNovaIA y descubre cómo los agentes de IA pueden automatizar ventas, atención al cliente y procesos empresariales 24/7.",
    images: ["/logo.svg"]
  }
};

const demoHighlights = [
  "Cómo un cliente pregunta y recibe respuesta inmediata",
  "Cómo el agente captura nombre, correo y necesidad",
  "Cómo califica prospectos automáticamente",
  "Cómo agenda o deriva a un humano",
  "Cómo trabaja incluso fuera del horario laboral"
];

const timeline = [
  {
    time: "Minuto 1-2",
    title: "Conocemos tu negocio",
    copy: "Entendemos tu operación, canales actuales y volumen de conversaciones."
  },
  {
    time: "Minuto 3-5",
    title: "Detectamos oportunidades de automatización",
    copy: "Identificamos procesos repetitivos, leads perdidos y puntos de fricción comercial."
  },
  {
    time: "Minuto 6-10",
    title: "Te mostramos el flujo del agente IA",
    copy: "Ves cómo el agente responde, captura datos, califica y ordena la conversación."
  },
  {
    time: "Minuto 11-13",
    title: "Revisamos el plan recomendado",
    copy: "Aterrizamos qué plan se ajusta mejor a tu tamaño, canales y objetivos."
  },
  {
    time: "Minuto 14-15",
    title: "Definimos el siguiente paso",
    copy: "Sales con claridad sobre implementación, prioridad y próximos pasos."
  }
];

const questions = [
  "¿Qué puedo automatizar primero?",
  "¿Cuánto tiempo tarda la implementación?",
  "¿Necesito saber de tecnología?",
  "¿Puedo usarlo con WhatsApp o mi web?",
  "¿Qué plan es mejor para mi negocio?"
];

const recommendedPlans = [
  {
    name: "Starter",
    copy: "Tu primer empleado IA por menos de $7.000 al día."
  },
  {
    name: "Growth",
    copy: "Automatiza ventas y atención sin contratar más personal."
  },
  {
    name: "Elite",
    copy: "Expande una operación completa con automatización avanzada."
  }
];

const faqs = [
  {
    question: "¿La demo de OpenNovaIA tiene costo?",
    answer:
      "No. La demostración está pensada para mostrarte cómo un agente IA puede ayudarte a automatizar conversaciones y procesos."
  },
  {
    question: "¿Cuánto dura la demo?",
    answer:
      "La demostración dura aproximadamente 15 minutos y se enfoca en oportunidades concretas de automatización para tu empresa."
  },
  {
    question: "¿Necesito tener conocimientos técnicos?",
    answer:
      "No. La demo está diseñada para equipos comerciales, gerentes y dueños de negocio. Hablamos en términos de resultados, no de configuración técnica."
  },
  {
    question: "¿Puedo automatizar WhatsApp?",
    answer:
      "Sí. OpenNovaIA puede ayudarte a diseñar agentes IA para WhatsApp, web y otros canales comerciales según el flujo de tu negocio."
  },
  {
    question: "¿Qué pasa después de la demostración?",
    answer:
      "Después de la demostración puedes revisar los planes y activar el agente IA que mejor se ajuste a tu negocio."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function DemoPage() {
  return (
    <main className="relative overflow-hidden bg-nova-black text-white">
      <DemoPageViewTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="nova-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="neural-field absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-[540px] w-[52vw] bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.44),transparent_64%)] blur-2xl" />
      <div className="absolute right-0 top-20 h-[520px] w-[46vw] bg-[radial-gradient(ellipse_at_center,rgba(255,61,255,0.32),transparent_62%)] blur-2xl" />

      <section className="section-shell relative grid min-h-[88vh] items-center gap-12 py-28 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <p className="inline-flex rounded-full border border-nova-fuchsia/25 bg-nova-fuchsia/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-nova-pink shadow-glow">
            Demostración OpenNovaIA v1
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Mira la demostración y descubre cómo un Agente IA puede trabajar por tu negocio 24/7
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.72]">
            En 15 minutos te mostramos cómo OpenNovaIA puede automatizar atención al cliente,
            ventas, seguimiento de prospectos y procesos internos sin aumentar tu equipo.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <TrackableLink
              href="/#planes"
              eventName="demo_cta_click"
              eventLabel="Ver planes"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-7 py-4 text-center text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Ver planes
            </TrackableLink>
            <TrackableLink
              href="/#proceso"
              eventName="demo_cta_click"
              eventLabel="Ver cómo funciona"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-7 py-4 text-center text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Ver cómo funciona
            </TrackableLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -left-8 top-10 hidden rounded-lg border border-nova-gold/25 bg-[#120720]/80 px-4 py-3 text-sm font-black text-nova-gold shadow-gold backdrop-blur-xl sm:block">
            Lead capturado
          </div>
          <div className="absolute -right-5 top-28 hidden rounded-lg border border-nova-lilac/25 bg-[#120720]/80 px-4 py-3 text-sm font-black text-nova-lilac shadow-glow backdrop-blur-xl sm:block">
            Demo automática
          </div>
          <div className="absolute -left-4 bottom-24 hidden rounded-lg border border-emerald-300/25 bg-[#120720]/80 px-4 py-3 text-sm font-black text-emerald-200 shadow-[0_18px_60px_rgba(16,185,129,0.2)] backdrop-blur-xl sm:block">
            Cliente calificado
          </div>

          <div className="premium-border gradient-border relative overflow-hidden rounded-[34px] p-4">
            <div className="rounded-[28px] border border-white/10 bg-[#080d18] shadow-[0_32px_120px_rgba(106,0,255,0.26)]">
              <div className="flex items-center justify-between bg-gradient-to-r from-[#2d0b5f] via-[#4c1d95] to-[#7e22ce] px-5 py-4">
                <div>
                  <p className="text-sm font-black text-white">OpenNovaIA Demo</p>
                  <p className="text-xs text-white/75">IA escribiendo...</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">
                  Online
                </span>
              </div>
              <div className="space-y-4 bg-[linear-gradient(180deg,rgba(6,10,24,0.99),rgba(7,3,16,0.98))] p-6">
                <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-[#263142] px-4 py-3 text-sm leading-6 text-white">
                  Hola, recibimos muchos mensajes y se nos pierden prospectos.
                </div>
                <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#6a00ff] to-[#b200ff] px-4 py-3 text-sm leading-6 text-white shadow-[0_10px_24px_rgba(106,0,255,0.22)]">
                  Podemos ayudarte a responder 24/7, capturar datos y priorizar clientes listos para hablar con ventas.
                </div>
                <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-[#263142] px-4 py-3 text-sm leading-6 text-white">
                  ¿La demo me muestra un flujo parecido a mi negocio?
                </div>
                <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#6a00ff] to-[#b200ff] px-4 py-3 text-sm leading-6 text-white shadow-[0_10px_24px_rgba(106,0,255,0.22)]">
                  Sí. En 15 minutos revisamos tu caso y definimos qué automatizar primero.
                </div>
                <div className="flex w-fit items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/70">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-nova-gold" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-nova-gold [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-nova-gold [animation-delay:240ms]" />
                  <span className="ml-2">IA escribiendo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {["8s respuesta", "+ leads", "24/7 activo"].map((metric) => (
              <div key={metric} className="rounded-lg border border-white/10 bg-white/[0.055] px-3 py-3 text-center text-xs font-black text-white/78 backdrop-blur-xl">
                {metric}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.16),transparent_52%)]" />
        <div className="section-shell relative">
          <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
            Qué verás en la demostración
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Una visión clara de cómo un agente IA trabaja dentro de tu negocio.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {demoHighlights.map((item) => (
              <article key={item} className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.09)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-nova-gold text-sm font-black text-nova-black shadow-gold">
                  ✓
                </span>
                <p className="mt-5 text-lg font-bold leading-7 text-[#2a1741]">{item}</p>
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
            Demostración en 15 minutos
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Corta, práctica y enfocada en oportunidades reales de automatización.
          </h2>
          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {timeline.map((step) => (
              <article key={step.time} className="premium-border gradient-border rounded-lg p-6">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-nova-gold">{step.time}</p>
                <h3 className="mt-4 text-xl font-black leading-tight text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/68">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(251,191,36,0.14),transparent_44%),radial-gradient(ellipse_at_left,rgba(192,132,252,0.18),transparent_50%)]" />
        <div className="section-shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
              Preguntas que resolvemos
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Sales de la demostración con claridad sobre qué automatizar primero.
            </h2>
          </div>
          <div className="grid gap-4">
            {questions.map((question, index) => (
              <article key={question} className="flex gap-4 rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-5 shadow-[0_20px_60px_rgba(76,29,149,0.08)]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-nova-gold to-nova-amber text-sm font-black text-nova-black">
                  {index + 1}
                </span>
                <p className="text-base font-bold leading-7 text-[#2a1741]">{question}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.14),transparent_52%)]" />
        <div className="section-shell relative">
          <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
            Plan recomendado según tu caso
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Te ayudamos a elegir una ruta simple para empezar.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {recommendedPlans.map((plan) => (
              <article key={plan.name} className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-7 shadow-[0_20px_60px_rgba(76,29,149,0.09)]">
                <h3 className="text-2xl font-black text-nova-violet">{plan.name}</h3>
                <p className="mt-4 text-base font-bold leading-7 text-[#5a476f]">{plan.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07020f] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.34),transparent_60%)]" />
        <div className="section-shell relative text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-gold">
            Cierre comercial
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            Tu negocio no necesita responder más rápido. Necesita no dejar escapar oportunidades.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Cada mensaje sin responder puede ser un cliente perdido. En la demostración verás cómo un
            agente IA puede ayudarte a atender, calificar y convertir más conversaciones en oportunidades reales.
          </p>
          <TrackableLink
            href="/#planes"
            eventName="demo_cta_click"
            eventLabel="Activar mi Agente IA"
            className="mt-9 inline-flex rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-8 py-4 text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
          >
            Activar mi Agente IA
          </TrackableLink>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.14),transparent_52%)]" />
        <div className="section-shell relative">
          <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
            Preguntas frecuentes
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Lo que debes saber antes de activar tu agente IA.
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.08)]">
                <h3 className="text-xl font-black text-[#211033]">{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-[#5a476f]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
