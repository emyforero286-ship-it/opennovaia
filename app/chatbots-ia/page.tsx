import type { Metadata } from "next";
import Link from "next/link";
import { TrackableLink } from "@/components/TrackableLink";

export const metadata: Metadata = {
  title: "Chatbots IA para Empresas | OpenNovaIA",
  description:
    "Implementamos chatbots con inteligencia artificial para automatizar ventas, atención al cliente y soporte en WhatsApp, web e Instagram.",
  keywords: [
    "chatbots IA",
    "chatbot para empresas",
    "chatbot con inteligencia artificial",
    "chatbot para WhatsApp",
    "chatbots inteligentes"
  ],
  alternates: {
    canonical: "https://opennovaia.com/chatbots-ia"
  },
  openGraph: {
    title: "Chatbots IA para Empresas | OpenNovaIA",
    description:
      "Implementamos chatbots con inteligencia artificial para automatizar ventas, atención al cliente y soporte en WhatsApp, web e Instagram.",
    url: "https://opennovaia.com/chatbots-ia",
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
    title: "Chatbots IA para Empresas | OpenNovaIA",
    description:
      "Implementamos chatbots con inteligencia artificial para automatizar ventas, atención al cliente y soporte en WhatsApp, web e Instagram.",
    images: ["/logo.svg"]
  }
};

const benefits = [
  "Respuestas inmediatas para prospectos y clientes.",
  "Atención 24/7 en canales comerciales clave.",
  "Captura automática de datos y oportunidades.",
  "Menos carga operativa para equipos de ventas y soporte.",
  "Conversaciones más consistentes con el tono de tu marca.",
  "Derivación a humanos cuando la conversación requiere atención especializada."
];

const differences = [
  {
    traditional: "Depende de menús rígidos y palabras clave.",
    ai: "Entiende preguntas escritas de distintas formas y responde con lenguaje natural."
  },
  {
    traditional: "Suele resolver solo preguntas muy específicas.",
    ai: "Puede orientar ventas, soporte, seguimiento y captura de leads con más contexto."
  },
  {
    traditional: "Se rompe cuando el usuario se sale del flujo.",
    ai: "Mantiene conversaciones más flexibles y deriva a humano cuando corresponde."
  }
];

const useCases = [
  {
    title: "Ventas",
    copy: "Responde preguntas sobre servicios, precios, disponibilidad y próximos pasos para convertir conversaciones en oportunidades."
  },
  {
    title: "Atención al cliente",
    copy: "Automatiza preguntas frecuentes, orientación inicial, estado de solicitudes y escalamiento con contexto."
  },
  {
    title: "WhatsApp e Instagram",
    copy: "Atiende consultas desde canales conversacionales donde tus clientes ya están hablando con la marca."
  },
  {
    title: "Soporte web",
    copy: "Agrega un chatbot inteligente en tu sitio para capturar leads, resolver dudas y guiar a visitantes."
  }
];

const faqs = [
  {
    question: "¿Qué es un chatbot IA?",
    answer:
      "Es un asistente conversacional con inteligencia artificial que responde preguntas, guía clientes, captura datos y ayuda a automatizar procesos comerciales o de soporte."
  },
  {
    question: "¿En qué se diferencia de un chatbot tradicional?",
    answer:
      "Un chatbot tradicional suele depender de flujos rígidos. Un chatbot con IA entiende mejor la intención del usuario, mantiene conversaciones más naturales y puede adaptarse al contexto."
  },
  {
    question: "¿Un chatbot IA sirve para WhatsApp?",
    answer:
      "Sí. Puede ayudar a responder consultas, calificar leads, orientar clientes y hacer seguimiento desde WhatsApp Business cuando el flujo está bien configurado."
  },
  {
    question: "¿Puede un chatbot IA vender por mi empresa?",
    answer:
      "Puede apoyar el proceso comercial respondiendo dudas, capturando oportunidades y guiando al prospecto. El cierre puede seguir en manos del equipo humano cuando sea necesario."
  },
  {
    question: "¿OpenNovaIA implementa chatbots IA para empresas en Colombia?",
    answer:
      "Sí. OpenNovaIA implementa chatbots y agentes IA para empresas que quieren automatizar ventas, atención al cliente y soporte en canales como WhatsApp, web e Instagram."
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

export default function ChatbotsIaPage() {
  return (
    <main className="relative overflow-hidden bg-nova-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="nova-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="neural-field absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-[540px] w-[52vw] bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.44),transparent_64%)] blur-2xl" />
      <div className="absolute right-0 top-20 h-[520px] w-[46vw] bg-[radial-gradient(ellipse_at_center,rgba(255,61,255,0.32),transparent_62%)] blur-2xl" />

      <section className="section-shell relative grid min-h-[82vh] items-center gap-12 py-28 lg:grid-cols-[1.06fr_0.94fr]">
        <div>
          <p className="inline-flex rounded-full border border-nova-fuchsia/25 bg-nova-fuchsia/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-nova-pink shadow-glow">
            Chatbots IA para empresas
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Chatbots inteligentes para vender, atender y automatizar conversaciones
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.7]">
            Implementamos chatbots con inteligencia artificial para WhatsApp, web e Instagram,
            diseñados para responder clientes, capturar oportunidades y reducir trabajo manual.
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
              href="/automatizacion-whatsapp"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-7 py-4 text-center text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Ver automatización WhatsApp
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/58">
            <Link href="/" className="font-bold text-nova-lilac transition hover:text-white">
              Volver a OpenNovaIA
            </Link>
            <Link href="/agentes-ia" className="font-bold text-nova-lilac transition hover:text-white">
              Conoce nuestros Agentes de IA
            </Link>
            <Link href="/automatizacion-whatsapp" className="font-bold text-nova-gold transition hover:text-white">
              Chatbot para WhatsApp
            </Link>
          </div>
        </div>

        <div className="premium-border gradient-border relative rounded-lg p-7">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-nova-fuchsia/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1020] shadow-[0_32px_120px_rgba(106,0,255,0.24)]">
            <div className="flex items-center justify-between bg-gradient-to-r from-[#2d0b5f] via-[#4c1d95] to-[#7e22ce] px-5 py-4">
              <div>
                <p className="text-sm font-black text-white">Chatbot IA OpenNovaIA</p>
                <p className="text-xs text-white/75">online · ventas y soporte</p>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">
                Activo
              </span>
            </div>
            <div className="space-y-4 bg-[linear-gradient(180deg,rgba(6,10,24,0.99),rgba(7,3,16,0.98))] p-6">
              <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-[#263142] px-4 py-3 text-sm leading-6 text-white">
                Hola, quiero saber si el servicio funciona para mi empresa.
              </div>
              <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#6a00ff] to-[#b200ff] px-4 py-3 text-sm leading-6 text-white shadow-[0_10px_24px_rgba(106,0,255,0.22)]">
                Sí. Podemos automatizar respuestas, capturar leads y derivar casos importantes a tu equipo.
              </div>
              <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-[#263142] px-4 py-3 text-sm leading-6 text-white">
                ¿También sirve para WhatsApp e Instagram?
              </div>
              <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#6a00ff] to-[#b200ff] px-4 py-3 text-sm leading-6 text-white shadow-[0_10px_24px_rgba(106,0,255,0.22)]">
                Sí. Diseñamos el flujo para tus canales y objetivos comerciales.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.16),transparent_52%)]" />
        <div className="section-shell relative">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-violet">Beneficios</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Chatbots IA que responden rápido y ayudan a capturar más oportunidades.
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
            Chatbot tradicional vs chatbot con IA
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            La diferencia está en la conversación, el contexto y la capacidad de avanzar el proceso.
          </h2>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {differences.map((item) => (
              <article key={item.traditional} className="premium-border gradient-border rounded-lg p-7">
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-nova-gold">
                  Tradicional
                </h3>
                <p className="mt-3 text-base leading-7 text-white/62">{item.traditional}</p>
                <h3 className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-nova-lilac">
                  Con IA
                </h3>
                <p className="mt-3 text-base leading-7 text-white/78">{item.ai}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(251,191,36,0.14),transparent_44%),radial-gradient(ellipse_at_left,rgba(192,132,252,0.18),transparent_50%)]" />
        <div className="section-shell relative">
          <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
            Casos de uso
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Chatbots inteligentes para ventas, soporte y atención multicanal.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-7 shadow-[0_20px_60px_rgba(76,29,149,0.09)]"
              >
                <h3 className="text-2xl font-black text-[#211033]">{useCase.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5a476f]">{useCase.copy}</p>
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
            Lo esencial sobre chatbots IA para empresas.
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
            Convierte tu chatbot en un canal de ventas y atención inteligente.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5a476f]">
            Implementamos chatbots IA para responder clientes, capturar oportunidades y automatizar
            conversaciones en WhatsApp, web e Instagram.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackableLink
              href="/#planes"
              eventName="activate_agent_click"
              eventLabel="Activar mi Agente IA"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-8 py-4 text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Activar mi Agente IA
            </TrackableLink>
            <Link
              href="/agentes-ia"
              className="rounded-full border border-nova-violet/25 px-8 py-4 text-sm font-black text-nova-violet transition duration-300 hover:-translate-y-1 hover:border-nova-gold hover:bg-nova-gold hover:text-nova-black"
            >
              Conocer Agentes IA
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
