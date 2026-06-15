import type { Metadata } from "next";
import Link from "next/link";
import { TrackableLink } from "@/components/TrackableLink";

export const metadata: Metadata = {
  title: "Automatización de WhatsApp con IA | OpenNovaIA",
  description:
    "Automatiza conversaciones, seguimiento de clientes y atención comercial mediante inteligencia artificial integrada con WhatsApp.",
  alternates: {
    canonical: "https://opennovaia.com/automatizacion-whatsapp"
  },
  openGraph: {
    title: "Automatización de WhatsApp con IA | OpenNovaIA",
    description:
      "Automatiza conversaciones, seguimiento de clientes y atención comercial mediante inteligencia artificial integrada con WhatsApp.",
    url: "https://opennovaia.com/automatizacion-whatsapp",
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
    title: "Automatización de WhatsApp con IA | OpenNovaIA",
    description:
      "Automatiza conversaciones, seguimiento de clientes y atención comercial mediante inteligencia artificial integrada con WhatsApp.",
    images: ["/logo.svg"]
  }
};

const benefits = [
  "Responde consultas comerciales en segundos, incluso fuera del horario laboral.",
  "Captura datos de contacto, intención de compra y necesidades del cliente.",
  "Califica leads automáticamente antes de enviarlos al equipo comercial.",
  "Activa seguimientos para clientes que preguntan y no compran de inmediato.",
  "Reduce tareas repetitivas de atención sin perder el tono de tu marca.",
  "Centraliza conversaciones y oportunidades para medir resultados."
];

const useCases = [
  {
    title: "Ventas por WhatsApp",
    copy: "Convierte preguntas frecuentes en conversaciones guiadas, recomendaciones y oportunidades listas para seguimiento comercial."
  },
  {
    title: "Reservas y citas",
    copy: "Ayuda a clientes a elegir horarios, confirmar datos y recibir recordatorios automáticos para reducir ausencias."
  },
  {
    title: "Soporte comercial",
    copy: "Resuelve dudas sobre servicios, precios, disponibilidad, estado de solicitudes y próximos pasos con respuesta inmediata."
  }
];

const integrationSteps = [
  "Definimos los flujos de conversación y objetivos comerciales.",
  "Entrenamos el agente con información real de tu negocio.",
  "Conectamos WhatsApp Business con tu proceso de ventas y atención.",
  "Medimos conversaciones, leads, velocidad de respuesta y oportunidades."
];

const faqs = [
  {
    question: "¿Qué es la automatización de WhatsApp con IA?",
    answer:
      "Es la implementación de un agente inteligente que responde conversaciones, captura información, guía clientes y ejecuta seguimientos comerciales desde WhatsApp Business."
  },
  {
    question: "¿Puedo automatizar respuestas de clientes?",
    answer:
      "Sí. OpenNovaIA permite automatizar respuestas frecuentes, orientación comercial, información de servicios, reservas, disponibilidad y próximos pasos sin depender de atención manual permanente."
  },
  {
    question: "¿Sirve para ventas y soporte?",
    answer:
      "Sí. La automatización de WhatsApp con IA puede atender prospectos, calificar leads, resolver dudas, hacer seguimiento y apoyar soporte comercial o de servicio."
  },
  {
    question: "¿Funciona con WhatsApp Business?",
    answer:
      "Sí. La solución está pensada para integrarse con procesos comerciales que usan WhatsApp Business como canal principal de atención, ventas y seguimiento."
  },
  {
    question: "¿Puede capturar leads automáticamente?",
    answer:
      "Sí. El agente puede solicitar datos clave, identificar intención de compra, registrar oportunidades y preparar la información para el equipo comercial."
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

export default function AutomatizacionWhatsappPage() {
  return (
    <main className="relative overflow-hidden bg-nova-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="nova-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="neural-field absolute inset-0 opacity-24" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-[540px] w-[50vw] bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.45),transparent_64%)] blur-2xl" />
      <div className="absolute right-0 top-16 h-[540px] w-[48vw] bg-[radial-gradient(ellipse_at_center,rgba(255,61,255,0.32),transparent_62%)] blur-2xl" />

      <section className="section-shell relative grid min-h-[82vh] items-center gap-12 py-28 lg:grid-cols-[1.03fr_0.97fr]">
        <div>
          <p className="inline-flex rounded-full border border-nova-fuchsia/25 bg-nova-fuchsia/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-nova-pink shadow-glow">
            Automatización de WhatsApp
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Automatiza WhatsApp con IA para vender y atender 24/7
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.7]">
            OpenNovaIA implementa agentes inteligentes para responder conversaciones,
            capturar leads, hacer seguimiento y mejorar la atención comercial desde WhatsApp Business.
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
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1020] shadow-[0_32px_120px_rgba(106,0,255,0.24)]">
            <div className="flex items-center justify-between bg-gradient-to-r from-[#2d0b5f] via-[#4c1d95] to-[#7e22ce] px-5 py-4">
              <div>
                <p className="text-sm font-black text-white">OpenNovaIA Business</p>
                <p className="text-xs text-white/75">en línea · Agente IA</p>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">
                Activo
              </span>
            </div>
            <div className="space-y-4 bg-[linear-gradient(180deg,rgba(6,10,24,0.99),rgba(7,3,16,0.98))] p-6">
              <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-[#263142] px-4 py-3 text-sm leading-6 text-white">
                Hola, quiero información sobre sus servicios.
              </div>
              <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#6a00ff] to-[#b200ff] px-4 py-3 text-sm leading-6 text-white shadow-[0_10px_24px_rgba(106,0,255,0.22)]">
                Claro. Te ayudo a elegir la solución ideal y puedo agendar una demo con el equipo.
              </div>
              <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-[#263142] px-4 py-3 text-sm leading-6 text-white">
                Perfecto, somos una clínica y recibimos muchos mensajes.
              </div>
              <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#6a00ff] to-[#b200ff] px-4 py-3 text-sm leading-6 text-white shadow-[0_10px_24px_rgba(106,0,255,0.22)]">
                Podemos automatizar respuestas, citas, seguimiento y calificación de pacientes 24/7.
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
            WhatsApp deja de ser solo chat y se convierte en un canal de ventas.
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
            Automatización de WhatsApp aplicada a negocios reales.
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(251,191,36,0.14),transparent_44%),radial-gradient(ellipse_at_left,rgba(192,132,252,0.18),transparent_50%)]" />
        <div className="section-shell relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
              WhatsApp Business
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Integramos IA con tus conversaciones comerciales.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5a476f]">
              Diseñamos flujos para que tu negocio responda mejor, haga seguimiento y convierta más clientes sin depender de tareas manuales.
            </p>
          </div>
          <div className="grid gap-4">
            {integrationSteps.map((step, index) => (
              <article
                key={step}
                className="flex gap-4 rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-5 shadow-[0_20px_60px_rgba(76,29,149,0.08)]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-nova-gold to-nova-amber text-sm font-black text-nova-black">
                  {index + 1}
                </span>
                <p className="text-base font-bold leading-7 text-[#2a1741]">{step}</p>
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
            Lo esencial sobre automatización de WhatsApp con IA.
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
            Convierte WhatsApp en un canal automatizado de atención y ventas.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5a476f]">
            Implementamos agentes de IA para responder clientes, capturar leads y ejecutar seguimientos comerciales 24/7.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#6c5b7d]">
            Si quieres automatizar más canales y procesos,{" "}
            <Link href="/#agentes" className="font-black text-nova-violet transition hover:text-nova-bright">
              conoce nuestros Agentes de IA
            </Link>
            . También puedes{" "}
            <Link href="/" className="font-black text-nova-violet transition hover:text-nova-bright">
              volver a OpenNovaIA
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
