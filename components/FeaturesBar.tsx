const features = [
  ["Atención automática 24/7", "M12 6v6l4 2"],
  ["Respuestas instantaneas", "M13 2L4 14h7l-2 8 9-12h-7l2-8z"],
  ["Más ventas y conversiones", "M4 19V9m6 10V5m6 14v-7m3 0H3"],
  ["Integración con WhatsApp, Instagram y web", "M7 8h10M7 12h5m9 0a9 9 0 1 1-4.2-7.6"],
  ["Implementacion rápida", "M5 19c6-1 10-5 11-14 4 1 8 5 9 11-9-1-13 4-11 14z"],
  ["Soporte en espanol", "M4 13v-2a8 8 0 0 1 16 0v2M6 13v5H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2v5zm14 0h-2V8h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2z"]
];

export function FeaturesBar() {
  return (
    <section className="relative -mt-10 pb-12">
      <div className="section-shell gradient-border grid gap-0 overflow-hidden rounded-lg border border-nova-pink/20 bg-[#21103a]/[0.82] p-4 shadow-[0_28px_90px_rgba(192,132,252,0.24)] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-6">
        {features.map(([feature, path]) => (
          <div key={feature} className="flex min-h-28 flex-col items-center justify-center gap-3 border-white/10 px-4 text-center text-sm font-bold text-white/[0.82] lg:border-r last:border-r-0">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-nova-gold/35 bg-nova-gold/10 text-nova-gold shadow-gold">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={path} />
              </svg>
            </span>
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}
