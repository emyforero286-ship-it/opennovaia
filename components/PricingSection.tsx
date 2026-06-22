import { PricingSectionViewTracker } from "./PricingSectionViewTracker";
import { SectionHeader } from "./SectionHeader";
import { TrackableLink } from "./TrackableLink";

const plans = [
  {
    icon: "🚀",
    name: "Starter",
    price: "$199.000 COP",
    tag: "Empieza",
    description: "Tu primer empleado con IA.",
    microBenefit: "Empieza a automatizar la atención y captura de clientes con un agente IA disponible 24/7.",
    idealFor: ["Freelancers", "Coaches", "Inmobiliarias pequeñas", "Consultores", "Negocios locales"],
    features: [
      "1 Agente IA entrenado con tu negocio",
      "WhatsApp Business",
      "Widget Web",
      "CRM Inteligente",
      "Captura automática de leads",
      "Atención 24/7",
      "Base de conocimiento",
      "1.200 créditos mensuales",
      "Analítica básica",
      "2 usuarios",
      "Soporte por correo"
    ],
    additionalAgent: "$120.000 COP/mes",
    checkoutUrl:
      "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=4da5cd5830d249298c9ac09010784859"
  },
  {
    icon: "⭐",
    name: "Growth",
    price: "$599.000 COP",
    tag: "MÁS POPULAR",
    featured: true,
    description: "El plan ideal para escalar.",
    microBenefit: "Multiplica tu capacidad de atención y ventas con varios agentes IA trabajando al mismo tiempo.",
    idealFor: ["PYMES", "Clínicas", "Academias", "E-commerce", "Empresas en crecimiento"],
    features: [
      "5 Agentes IA",
      "WhatsApp Business",
      "Widget Web",
      "CRM avanzado",
      "Embudos de ventas",
      "Seguimiento automático",
      "Calificación automática de leads",
      "7.000 créditos mensuales",
      "Reportes avanzados",
      "Integraciones con Zapier",
      "Integraciones con Make",
      "Analítica avanzada",
      "Soporte prioritario"
    ],
    additionalAgent: "$120.000 COP/mes",
    checkoutUrl:
      "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=1b892279d6fd414c9f5c65c08300e4a8"
  },
  {
    icon: "👑",
    name: "Elite",
    price: "$1.990.000 COP",
    tag: "Expande toda tu operación",
    dark: true,
    description: "IA empresarial sin límites.",
    microBenefit: "Expande toda tu operación con agentes IA conectados a múltiples canales y procesos.",
    idealFor: ["Empresas consolidadas", "Operaciones avanzadas", "Equipos comerciales grandes", "Atención multi-canal"],
    features: [
      "15 Agentes IA",
      "WhatsApp Business",
      "Widget Web",
      "Instagram",
      "Facebook Messenger",
      "CRM empresarial",
      "Automatizaciones avanzadas",
      "Integraciones ilimitadas",
      "20.000 créditos mensuales",
      "API empresarial",
      "Usuarios ilimitados",
      "Dashboard ejecutivo",
      "Soporte dedicado",
      "Onboarding personalizado"
    ],
    additionalAgent: "$120.000 COP/mes",
    checkoutUrl:
      "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=8da49abf8b074f41b6d47492507fb7f1"
  }
];

export function PricingSection() {
  return (
    <section id="planes" className="relative overflow-hidden bg-[#fbf7ff] py-24 text-[#130824]">
      <PricingSectionViewTracker />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(251,191,36,0.16),transparent_42%),radial-gradient(ellipse_at_left,rgba(192,132,252,0.22),transparent_50%)]" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow="Planes flexibles"
          title="Elige el plan para automatizar tu crecimiento."
          description="Growth es la opción recomendada para convertir más conversaciones en clientes, reducir trabajo manual y responder 24/7."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-lg p-6 transition duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "gradient-border border border-nova-gold/55 bg-white shadow-[0_30px_90px_rgba(251,191,36,0.3)] lg:-mt-4 lg:pb-8"
                  : plan.dark
                    ? "border border-nova-lilac/35 bg-gradient-to-br from-[#18052f] via-[#2D0B5F] to-[#0A0617] text-white shadow-[0_28px_80px_rgba(76,29,149,0.22)]"
                    : "border border-[#eadcff] bg-white shadow-[0_20px_60px_rgba(76,29,149,0.09)]"
              }`}
            >
              {plan.featured && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg bg-gradient-to-r from-nova-gold to-nova-amber px-5 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-nova-black">
                  MÁS POPULAR
                </div>
              )}
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                  plan.featured ? "via-nova-gold/80" : plan.dark ? "via-nova-fuchsia/65" : "via-nova-lilac/70"
                } to-transparent`}
              />

              <div className="flex items-center justify-between gap-4 pt-4">
                <h3 className={`flex items-center gap-2 text-2xl font-black ${plan.dark ? "text-white" : "text-nova-violet"}`}>
                  <span>{plan.icon}</span>
                  {plan.name}
                </h3>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-bold ${
                    plan.featured
                      ? "border-nova-gold/45 bg-nova-gold/15 text-nova-amber"
                      : plan.dark
                        ? "border-nova-fuchsia/35 bg-nova-fuchsia/10 text-nova-pink"
                        : "border-nova-fuchsia/25 bg-nova-fuchsia/10 text-nova-pink"
                  }`}
                >
                  {plan.tag}
                </span>
              </div>

              <p className={`mt-6 text-4xl font-black ${plan.dark ? "text-nova-gold" : "text-nova-pink"}`}>
                {plan.price}
                <span className={`block text-base font-bold ${plan.dark ? "text-white/60" : "text-[#5a476f]"}`}>/mes</span>
              </p>

              <p className={`mt-4 min-h-14 text-sm font-bold leading-6 ${plan.dark ? "text-white/80" : "text-[#3e2a57]"}`}>
                {plan.description}
              </p>
              <p
                className={`mt-3 rounded-lg border px-4 py-3 text-sm font-semibold leading-5 ${
                  plan.featured
                    ? "border-nova-gold/35 bg-nova-gold/10 text-[#5b3500]"
                    : plan.dark
                      ? "border-nova-fuchsia/25 bg-white/[0.06] text-white/75"
                      : "border-nova-lilac/25 bg-nova-lilac/10 text-nova-violet"
                }`}
              >
                {plan.microBenefit}
              </p>

              <div className="mt-6">
                <p className={`text-xs font-black uppercase tracking-[0.18em] ${plan.dark ? "text-nova-pink" : "text-nova-violet"}`}>
                  Ideal para
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {plan.idealFor.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-3 py-1 text-xs font-bold ${
                        plan.dark
                          ? "border-white/10 bg-white/[0.06] text-white/70"
                          : "border-[#eadcff] bg-white text-[#5a476f]"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex gap-3 text-sm leading-5 ${plan.dark ? "text-white/75" : "text-[#3e2a57]"}`}>
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-nova-amber text-[10px] font-black text-nova-black shadow-gold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div
                className={`mt-7 rounded-lg border px-4 py-3 text-sm font-bold ${
                  plan.dark
                    ? "border-nova-gold/30 bg-nova-gold/10 text-nova-gold"
                    : "border-nova-gold/25 bg-nova-gold/10 text-[#6f4300]"
                }`}
              >
                Agente adicional: {plan.additionalAgent}
              </div>

              <TrackableLink
                href={plan.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="activate_agent_click"
                eventLabel={`Activar mi Agente IA - ${plan.name}`}
                className={`mt-auto block rounded-full px-5 py-3 text-center text-sm font-black transition duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-r from-nova-gold to-nova-amber text-nova-black shadow-gold hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(251,191,36,0.42)]"
                    : plan.dark
                      ? "border border-nova-gold/40 bg-white/[0.06] text-nova-gold hover:-translate-y-1 hover:bg-nova-gold/10"
                      : "border border-nova-fuchsia/35 bg-white text-nova-violet hover:-translate-y-1 hover:bg-nova-pink/10"
                }`}
              >
                Activar mi Agente IA
              </TrackableLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
