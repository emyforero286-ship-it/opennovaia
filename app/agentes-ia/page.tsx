import type { Metadata } from "next";
import Link from "next/link";
import { TrackableLink } from "@/components/TrackableLink";

export const metadata: Metadata = {
  title: "Agentes de IA para Empresas | OpenNovaIA",
  description:
    "Implementamos agentes de inteligencia artificial para automatizar ventas, soporte y operaciones empresariales disponibles 24/7.",
  alternates: {
    canonical: "https://opennovaia.com/agentes-ia"
  },
  openGraph: {
    title: "Agentes de IA para Empresas | OpenNovaIA",
    description:
      "Implementamos agentes de inteligencia artificial para automatizar ventas, soporte y operaciones empresariales disponibles 24/7.",
    url: "https://opennovaia.com/agentes-ia",
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
    title: "Agentes de IA para Empresas | OpenNovaIA",
    description:
      "Implementamos agentes de inteligencia artificial para automatizar ventas, soporte y operaciones empresariales disponibles 24/7.",
    images: ["/logo.svg"]
  }
};

const benefits = [
  "Atención automática 24/7 para clientes y prospectos.",
  "Captura y calificación de leads sin trabajo manual.",
  "Respuestas consistentes en ventas, soporte y operaciones.",
  "Seguimiento automático para convertir más conversaciones.",
  "Implementación rápida con una experiencia premium para tu marca.",
  "Reportes claros para medir oportunidades, productividad y conversión."
];

const useCases = [
  {
    title: "Ventas",
    copy: "Agentes que responden consultas, califican prospectos, resuelven objeciones y ayudan a agendar demos o citas comerciales."
  },
  {
    title: "Atención al cliente",
    copy: "Soporte inmediato para preguntas frecuentes, estado de solicitudes, orientación de servicios y escalamiento con contexto."
  },
  {
    title: "Operaciones",
    copy: "Automatización de tareas repetitivas, seguimiento interno, captura de datos y coordinación de procesos empresariales."
  }
];

const faqs = [
  {
    question: "¿Qué es un agente de IA para empresas?",
    answer:
      "Es un asistente inteligente entrenado con información de tu negocio para responder clientes, capturar datos, orientar conversaciones y ejecutar tareas comerciales u operativas de forma automática."
  },
  {
    question: "¿Qué procesos puede automatizar un agente de IA?",
    answer:
      "Puede automatizar atención al cliente, calificación de leads, soporte, seguimiento comercial, reservas, preguntas frecuentes, captura de datos y procesos internos repetitivos."
  },
  {
    question: "¿Un agente de IA reemplaza a mi equipo?",
    answer:
      "No necesariamente. El objetivo es reducir trabajo manual y liberar tiempo del equipo para que se enfoque en cierres, decisiones y relaciones de mayor valor."
  },
  {
    question: "¿Cuánto tarda la implementación?",
    answer:
      "Depende del alcance, los canales y la información disponible, pero una primera versión funcional puede implementarse de forma ágil con entrenamiento, pruebas y ajustes progresivos."
  },
  {
    question: "¿OpenNovaIA trabaja con empresas en Colombia?",
    answer:
      "Sí. OpenNovaIA trabaja con empresas en Colombia que buscan automatizar ventas, atención, soporte y operaciones mediante agentes de inteligencia artificial."
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

export default function AgentesIaPage() {
  return (
    <main className="relative overflow-hidden bg-nova-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="nova-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="neural-field absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-[520px] w-[52vw] bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.44),transparent_64%)] blur-2xl" />
      <div className="absolute right-0 top-20 h-[520px] w-[46vw] bg-[radial-gradient(ellipse_at_center,rgba(255,61,255,0.34),transparent_62%)] blur-2xl" />

      <section className="section-shell relative grid min-h-[82vh] items-center gap-12 py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex rounded-full border border-nova-fuchsia/25 bg-nova-fuchsia/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-nova-pink shadow-glow">
            Agentes de IA para empresas
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Automatiza ventas, soporte y operaciones con agentes de IA 24/7
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.7]">
            OpenNovaIA implementa agentes de inteligencia artificial entrenados para responder clientes,
            capturar oportunidades y reducir trabajo manual en procesos empresariales.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <TrackableLink
              href="/#planes"
              eventName="activate_agent_click"
              eventLabel="Activar mi Agente IA"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-7 py-4 text-center text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Activar mi Agente IA
            </TrackableLink>
            <Link
              href="/#proceso"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-7 py-4 text-center text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Ver cómo funciona
            </Link>
          </div>
        </div>

        <div className="premium-border gradient-border relative rounded-lg p-7">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-nova-fuchsia/25 blur-3xl" />
          <div className="relative space-y-4">
            {["Lead capturado", "Cliente calificado", "Respuesta automática", "Demo agendada"].map((item, index) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_60px_rgba(106,0,255,0.16)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-nova-lilac">
                    Automatización {index + 1}
                  </p>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">
                    Activa
                  </span>
                </div>
                <p className="mt-3 text-2xl font-black">{item}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-nova-electric via-nova-fuchsia to-nova-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.16),transparent_52%)]" />
        <div className="section-shell relative">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-violet">Beneficios</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Agentes que trabajan para vender más y responder mejor.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit}
                className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.09)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-nova-gold text-sm font-black text-nova-black shadow-gold">
                  ✓
                </span>
                <p className="mt-5 text-lg font-bold leading-7 text-[#2a1741]">{benefit}</p>
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
            Casos de uso
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Automatización empresarial aplicada a conversaciones reales.
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {useCases.map((useCase) => (
              <article key={useCase.title} className="premium-border gradient-border rounded-lg p-7">
                <h3 className="text-2xl font-black text-white">{useCase.title}</h3>
                <p className="mt-5 text-base leading-7 text-white/68">{useCase.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.14),transparent_52%)]" />
        <div className="section-shell relative">
          <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
            Preguntas frecuentes
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Lo esencial sobre agentes de IA para empresas.
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.08)]"
              >
                <h3 className="text-xl font-black text-[#211033]">{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-[#5a476f]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbf7ff] py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(251,191,36,0.16),transparent_42%),radial-gradient(ellipse_at_left,rgba(192,132,252,0.22),transparent_50%)]" />
        <div className="section-shell relative text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-violet">OpenNovaIA</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Convierte conversaciones en clientes con agentes de IA para empresas.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5a476f]">
            Implementamos la estrategia, entrenamiento y automatización para que tu empresa responda 24/7,
            capture leads y opere con menos fricción.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#6c5b7d]">
            Si tu canal principal es WhatsApp, también puedes{" "}
            <Link href="/#proceso" className="font-black text-nova-violet transition hover:text-nova-bright">
              ver automatización de WhatsApp
            </Link>
            . Para regresar a la experiencia principal,{" "}
            <Link href="/" className="font-black text-nova-violet transition hover:text-nova-bright">
              vuelve a OpenNovaIA
            </Link>
            .
          </p>
          <TrackableLink
            href="/#planes"
            eventName="activate_agent_click"
            eventLabel="Activar mi Agente IA"
            className="mt-9 inline-flex rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-8 py-4 text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
          >
            Activar mi Agente IA
          </TrackableLink>
        </div>
      </section>
    </main>
  );
}
