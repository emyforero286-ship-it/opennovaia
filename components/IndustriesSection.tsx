import { SectionHeader } from "./SectionHeader";

const industries = [
  { name: "Clinicas y consultorios", icon: "M12 21s7-4.4 7-11a4 4 0 0 0-7-2.6A4 4 0 0 0 5 10c0 6.6 7 11 7 11zM12 7v6m-3-3h6" },
  { name: "Inmobiliarias", icon: "M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" },
  { name: "Restaurantes", icon: "M6 3v8m3-8v8M6 11h3m-1.5 0v10M15 3v18m0-18c3 2 4 5 2 8h-2" },
  { name: "E-commerce", icon: "M4 5h2l2 11h10l2-8H7m3 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" },
  { name: "Agencias de marketing", icon: "M4 13V9l12-5v14L4 13zm0 0l3 6h3l-2-5" },
  { name: "Educacion", icon: "M3 8l9-4 9 4-9 4-9-4zm4 3v5c3 2 7 2 10 0v-5" },
  { name: "Hoteles", icon: "M4 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M8 8h1m5 0h1M8 12h1m5 0h1M9 21v-5h4v5" },
  { name: "Servicios profesionales", icon: "M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-9 0h12v12H6V7zm0 5h12" }
];

export function IndustriesSection() {
  return (
    <section id="industrias" className="relative overflow-hidden bg-[#fbf7ff] py-20 text-[#130824]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(192,132,252,0.18),transparent_48%),radial-gradient(ellipse_at_right,rgba(255,108,240,0.12),transparent_45%)]" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow="Industrias que atendemos"
          title="Adaptamos nuestros agentes a tu industria."
          description="OpenNovaIA se adapta a procesos con volumen, repeticion, datos sensibles y necesidad de respuestas consistentes."
        />

        <div className="mt-12 grid gap-0 overflow-hidden rounded-lg border border-[#eadcff] bg-white shadow-[0_20px_70px_rgba(76,29,149,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry.name} className="group border-b border-r border-[#eadcff] p-6 text-center transition duration-300 hover:bg-[#fbf7ff]">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-lg border border-nova-bright/15 bg-gradient-to-br from-nova-lilac/25 to-nova-fuchsia/10 text-sm font-black text-nova-violet shadow-[0_14px_34px_rgba(168,85,247,0.16)]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={industry.icon} />
                </svg>
              </div>
              <h3 className="text-base font-bold">{industry.name}</h3>
              <div className="mx-auto mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-nova-electric to-nova-fuchsia opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
