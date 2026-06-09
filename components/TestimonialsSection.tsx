import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    quote:
      "OpenNovaIA redujo nuestro tiempo de respuesta de horas a minutos y aumento las solicitudes calificadas del equipo comercial.",
    author: "Laura Mendez",
    role: "Gerente Comercial",
    image: "/testimonials/laura-mendez.png"
  },
  {
    quote:
      "Ahora soporte responde 24/7, operaciones recibe resumenes claros y ventas trabaja con prospectos mejor priorizados.",
    author: "Andres Vidal",
    role: "Director de Operaciones",
    image: "/testimonials/andres-vidal.png"
  }
];

function RatingBadge() {
  return (
    <div className="mx-auto mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-nova-gold/25 bg-white/80 px-4 py-2 shadow-[0_12px_32px_rgba(251,191,36,0.16)]">
      <span className="text-lg font-black text-[#130824]">5.0</span>
      <div className="flex items-center gap-1.5 text-nova-gold drop-shadow-[0_0_10px_rgba(251,191,36,0.26)]" aria-label="Calificacion 5 de 5 estrellas">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
            aria-hidden="true"
          >
            <path d="M12 2.75l2.86 5.8 6.4.93-4.63 4.51 1.09 6.37L12 17.35l-5.72 3.01 1.09-6.37-4.63-4.51 6.4-.93L12 2.75z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-white py-24 text-[#130824]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.14),transparent_50%)]" />
      <div className="section-shell relative">
        <p className="mx-auto mb-5 max-w-3xl text-center text-sm font-black uppercase tracking-[0.28em] text-nova-violet">
          Empresas que ya automatizan su atencion y ventas con OpenNovaIA
        </p>
        <SectionHeader
          eyebrow="Testimonios"
          title="Resultados que se sienten en ventas y operaciones."
          description="Empresas con mas velocidad de respuesta, mas productividad y conversaciones que se convierten en oportunidades."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="rounded-xl border border-[#e3d2ff] bg-[#fbf7ff] p-7 text-center shadow-[0_20px_60px_rgba(76,29,149,0.09)] transition duration-300 hover:-translate-y-2 hover:border-nova-lilac/55 hover:shadow-[0_28px_90px_rgba(168,85,247,0.18)]"
            >
              <RatingBadge />

              <blockquote className="mx-auto max-w-xl text-xl font-medium leading-8 text-[#24143a]">
                "{testimonial.quote}"
              </blockquote>

              <figcaption className="mt-9 border-t border-[#eadcff] pt-7">
                <div className="mx-auto mb-5 h-20 w-20 overflow-hidden rounded-full border border-nova-lilac/45 bg-white shadow-[0_16px_42px_rgba(168,85,247,0.24)]">
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.author}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="text-lg font-black text-[#130824]">{testimonial.author}</p>
                <p className="mt-2 text-sm font-medium text-[#5a476f]">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
