import { SectionHeader } from "./SectionHeader";

const agents = [
  {
    name: "Nova Sales",
    label: "Ventas",
    icon: "01",
    copy: "Captura leads, identifica intención, califica prospectos y agenda seguimientos para aumentar conversiones."
  },
  {
    name: "Nova Support",
    label: "Soporte",
    icon: "02",
    copy: "Responde preguntas frecuentes 24/7, reduce tiempos de espera y escala casos complejos con contexto completo."
  },
  {
    name: "Nova Ops",
    label: "Operaciones",
    icon: "03",
    copy: "Automatiza tareas internas, conecta herramientas, resume información crítica y libera horas de trabajo manual."
  }
];

export function AgentsSection() {
  return (
    <section id="agentes" className="relative overflow-hidden bg-white py-24 text-[#130824]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.2),transparent_54%),radial-gradient(ellipse_at_bottom_left,rgba(255,108,240,0.12),transparent_50%)]" />
      <div className="section-shell relative">
      <SectionHeader
        eyebrow="Agentes"
        title="Agentes neurales entrenados para producir resultados."
        description="Cada agente trabaja con tus reglas, tu tono, tus datos y objetivos de negocio claros: vender más, responder mejor y operar con menos fricción."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {agents.map((agent) => (
          <article key={agent.name} className="group relative overflow-hidden rounded-lg border border-[#eadcff] bg-white p-6 shadow-[0_20px_60px_rgba(76,29,149,0.1)] transition duration-300 hover:-translate-y-2 hover:border-nova-fuchsia/35 hover:shadow-[0_26px_80px_rgba(168,85,247,0.18)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-nova-fuchsia/80 to-transparent" />
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-nova-fuchsia/15 blur-3xl transition duration-500 group-hover:bg-nova-pink/25" />
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-nova-bright/15 bg-gradient-to-br from-nova-lilac/25 to-nova-fuchsia/10 text-lg font-black text-nova-violet shadow-[0_18px_42px_rgba(168,85,247,0.18)]">
                {agent.icon}
              </div>
              <span className="rounded-full border border-nova-bright/15 bg-nova-bright/10 px-3 py-1 text-xs font-semibold text-nova-violet">
                {agent.label}
              </span>
            </div>
            <h3 className="text-2xl font-semibold">{agent.name}</h3>
            <p className="mt-4 leading-7 text-[#3e2a57]">{agent.copy}</p>
            <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-[#efe3ff]">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-nova-electric via-nova-fuchsia to-nova-pink transition-all duration-500 group-hover:w-full" />
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
