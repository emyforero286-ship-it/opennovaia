import { SectionHeader } from "./SectionHeader";

const steps = [
  ["01", "Analizamos", "Encontramos procesos repetitivos, cuellos de botella y oportunidades con retorno rápido."],
  ["02", "Disenamos", "Definimos tono, reglas, datos, canales y objetivos medibles para cada agente."],
  ["03", "Entrenamos", "Conectamos conocimiento, conversaciones, CRM y herramientas internas."],
  ["04", "Implementamos", "Lanzamos agentes en producción con seguimiento, escalamiento y control humano."],
  ["05", "Optimizamos", "Medimos ventas, velocidad de respuesta, productividad y calidad para mejorar cada semana."]
];

export function ProcessSection() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-[#07020f] py-24">
      <div className="neural-field absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(178,0,255,0.34),transparent_54%),radial-gradient(ellipse_at_top,rgba(106,0,255,0.22),transparent_50%)]" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow="Como funciona"
          title="De procesos manuales a una operación neural."
          description="Un método claro para pasar de tareas repetitivas a agentes conectados, medibles y listos para escalar."
        />

        <div className="relative mt-14 grid gap-5 lg:grid-cols-5">
          <div className="absolute left-8 right-8 top-10 hidden h-px bg-gradient-to-r from-transparent via-nova-fuchsia/60 to-transparent lg:block" />
          {steps.map(([number, title, copy]) => (
            <article key={number} className="premium-border gradient-border relative rounded-lg p-6 text-center transition duration-300 hover:-translate-y-2 hover:shadow-glow">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-nova-pink/35 bg-nova-fuchsia/20 text-sm font-black text-nova-pink shadow-glow">
                {number}
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/60">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
