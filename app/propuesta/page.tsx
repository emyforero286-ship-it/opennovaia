import type { Metadata } from "next";
import { ProposalPageViewTracker } from "@/components/ProposalPageViewTracker";
import { TrackableLink } from "@/components/TrackableLink";

export const metadata: Metadata = {
  title: "Propuesta Comercial OpenNovaIA",
  description:
    "Descubre cómo OpenNovaIA puede ayudarte a automatizar ventas, atención al cliente y procesos empresariales mediante agentes de inteligencia artificial.",
  alternates: {
    canonical: "https://opennovaia.com/propuesta"
  },
  openGraph: {
    title: "Propuesta Comercial OpenNovaIA",
    description:
      "Descubre cómo OpenNovaIA puede ayudarte a automatizar ventas, atención al cliente y procesos empresariales mediante agentes de inteligencia artificial.",
    url: "https://opennovaia.com/propuesta",
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
    title: "Propuesta Comercial OpenNovaIA",
    description:
      "Descubre cómo OpenNovaIA puede ayudarte a automatizar ventas, atención al cliente y procesos empresariales mediante agentes de inteligencia artificial.",
    images: ["/logo.svg"]
  }
};

const benefits = [
  "Atención 24/7",
  "Respuesta inmediata",
  "Captura automática de leads",
  "Seguimiento inteligente",
  "Escalabilidad"
];

const plans = [
  {
    name: "Starter",
    price: "$199.000 COP",
    label: "Primer agente IA",
    copy: "Ideal para iniciar con automatización comercial y atención básica 24/7."
  },
  {
    name: "Growth",
    price: "$599.000 COP",
    label: "Recomendado",
    featured: true,
    copy: "Diseñado para automatizar ventas, soporte y seguimiento sin aumentar el equipo."
  },
  {
    name: "Elite",
    price: "$1.990.000 COP",
    label: "Operación avanzada",
    dark: true,
    copy: "Para empresas que necesitan mayor escala, control, marca y operación multi-canal."
  }
];

const process = [
  {
    step: "Paso 1",
    title: "Reunión inicial",
    copy: "Alineamos objetivos, canales, prioridades y procesos que necesitan automatización."
  },
  {
    step: "Paso 2",
    title: "Configuración",
    copy: "Preparamos el flujo, reglas de conversación, tono de marca y criterios de escalamiento."
  },
  {
    step: "Paso 3",
    title: "Entrenamiento del agente",
    copy: "Entrenamos el agente IA con información real de tu negocio, servicios y preguntas frecuentes."
  },
  {
    step: "Paso 4",
    title: "Pruebas",
    copy: "Validamos conversaciones, capturas, respuestas y derivaciones antes de activar."
  },
  {
    step: "Paso 5",
    title: "Activación",
    copy: "Lanzamos el agente y empezamos a medir oportunidades, atención y seguimiento."
  }
];

const includes = [
  "Implementación",
  "Configuración",
  "Entrenamiento",
  "Soporte inicial",
  "Optimización"
];

const faqs = [
  {
    question: "¿Cuánto tarda la implementación?",
    answer:
      "Depende del alcance y los canales, pero la implementación inicial puede avanzar de forma ágil cuando la información del negocio está organizada."
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No. OpenNovaIA se encarga de la implementación, configuración y entrenamiento del agente para que tu equipo se enfoque en ventas y operación."
  },
  {
    question: "¿Puedo usar WhatsApp?",
    answer:
      "Sí. La propuesta puede incluir automatización para WhatsApp, web y otros canales comerciales según las necesidades del negocio."
  },
  {
    question: "¿Qué plan me recomiendan?",
    answer:
      "La recomendación depende del volumen de conversaciones, canales, equipo y objetivos. Growth suele ser la opción más equilibrada para empresas en crecimiento."
  },
  {
    question: "¿Hay soporte?",
    answer:
      "Sí. La propuesta incluye soporte inicial y acompañamiento para ajustar el agente durante la activación."
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

export default function PropuestaPage() {
  return (
    <main className="relative overflow-hidden bg-nova-black text-white">
      <ProposalPageViewTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="nova-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="neural-field absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-[540px] w-[52vw] bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.44),transparent_64%)] blur-2xl" />
      <div className="absolute right-0 top-20 h-[520px] w-[46vw] bg-[radial-gradient(ellipse_at_center,rgba(255,61,255,0.32),transparent_62%)] blur-2xl" />

      <section className="section-shell relative grid min-h-[84vh] items-center gap-12 py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex rounded-full border border-nova-fuchsia/25 bg-nova-fuchsia/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-nova-pink shadow-glow">
            Propuesta comercial
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Tu empresa puede automatizar más de lo que imaginas
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.72]">
            Después de analizar tu negocio, hemos preparado una propuesta para ayudarte a captar
            más clientes, responder más rápido y optimizar procesos mediante agentes de IA.
          </p>
          <TrackableLink
            href="mailto:hello@opennovaia.com?subject=Quiero%20comenzar%20la%20implementacion%20con%20OpenNovaIA"
            eventName="proposal_cta_click"
            eventLabel="Comenzar implementación"
            className="mt-9 inline-flex rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-7 py-4 text-center text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
          >
            Comenzar implementación
          </TrackableLink>
        </div>

        <div className="premium-border gradient-border relative rounded-lg p-7">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-nova-fuchsia/25 blur-3xl" />
          <div className="relative space-y-5">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-gold">
              OpenNovaIA para tu operación
            </p>
            <h2 className="text-3xl font-black leading-tight text-white">
              Una ruta clara para activar agentes IA sin complejidad.
            </h2>
            <div className="grid gap-3">
              {["Ventas", "Atención al cliente", "Seguimiento", "Procesos internos"].map((item) => (
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
            Beneficios
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Una propuesta orientada a vender mejor, atender más rápido y operar con menos fricción.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit) => (
              <article key={benefit} className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.09)]">
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
            Planes
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Elige el nivel de implementación que mejor se ajusta a tu etapa.
          </h2>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-lg p-7 transition duration-300 hover:-translate-y-2 ${
                  plan.featured
                    ? "gradient-border border border-nova-gold/55 bg-white text-[#130824] shadow-[0_30px_90px_rgba(251,191,36,0.3)]"
                    : plan.dark
                      ? "border border-nova-lilac/35 bg-gradient-to-br from-[#18052f] via-[#2D0B5F] to-[#0A0617] text-white shadow-[0_28px_80px_rgba(76,29,149,0.22)]"
                      : "premium-border gradient-border"
                }`}
              >
                <p className={`text-sm font-black uppercase tracking-[0.18em] ${plan.featured ? "text-nova-amber" : "text-nova-gold"}`}>
                  {plan.label}
                </p>
                <h3 className={`mt-4 text-3xl font-black ${plan.featured ? "text-nova-violet" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-4 text-2xl font-black ${plan.dark ? "text-nova-gold" : plan.featured ? "text-nova-pink" : "text-nova-lilac"}`}>
                  {plan.price}
                </p>
                <p className={`mt-5 text-base leading-7 ${plan.featured ? "text-[#5a476f]" : "text-white/70"}`}>
                  {plan.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(251,191,36,0.14),transparent_44%),radial-gradient(ellipse_at_left,rgba(192,132,252,0.18),transparent_50%)]" />
        <div className="section-shell relative">
          <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
            ¿Cómo funciona?
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            De la propuesta a la activación del primer agente IA.
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {process.map((item) => (
              <article key={item.step} className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.08)]">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-nova-violet">{item.step}</p>
                <h3 className="mt-4 text-xl font-black text-[#211033]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#5a476f]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.14),transparent_52%)]" />
        <div className="section-shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
              Qué incluye OpenNovaIA
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Acompañamiento para pasar de idea a agente activo.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {includes.map((item, index) => (
              <article key={item} className="flex gap-4 rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-5 shadow-[0_20px_60px_rgba(76,29,149,0.08)]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-nova-gold to-nova-amber text-sm font-black text-nova-black">
                  {index + 1}
                </span>
                <p className="text-base font-bold leading-7 text-[#2a1741]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07020f] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.34),transparent_60%)]" />
        <div className="section-shell relative text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-gold">
            Siguiente paso
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            ¿Listo para activar tu primer agente IA?
          </h2>
          <TrackableLink
            href="mailto:hello@opennovaia.com?subject=Quiero%20comenzar%20ahora%20con%20OpenNovaIA"
            eventName="proposal_cta_click"
            eventLabel="Comenzar ahora"
            className="mt-9 inline-flex rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-8 py-4 text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
          >
            Comenzar ahora
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
            Respuestas clave antes de comenzar.
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
