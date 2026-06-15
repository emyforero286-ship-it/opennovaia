import type { Metadata } from "next";
import Link from "next/link";
import { blogCategories, blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog de Inteligencia Artificial para Empresas | OpenNovaIA",
  description:
    "Guías, estrategias y casos de uso para automatizar ventas, atención al cliente y procesos con agentes IA en empresas de Colombia.",
  alternates: {
    canonical: "https://opennovaia.com/blog"
  },
  openGraph: {
    title: "Blog de Inteligencia Artificial para Empresas | OpenNovaIA",
    description:
      "Guías, estrategias y casos de uso para automatizar ventas, atención al cliente y procesos con agentes IA.",
    url: "https://opennovaia.com/blog",
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
    title: "Blog de Inteligencia Artificial para Empresas | OpenNovaIA",
    description:
      "Guías, estrategias y casos de uso para automatizar ventas, atención al cliente y procesos con agentes IA.",
    images: ["/logo.svg"]
  }
};

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden bg-nova-black text-white">
      <div className="nova-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="neural-field absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-[540px] w-[52vw] bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.44),transparent_64%)] blur-2xl" />
      <div className="absolute right-0 top-12 h-[540px] w-[48vw] bg-[radial-gradient(ellipse_at_center,rgba(255,61,255,0.3),transparent_62%)] blur-2xl" />

      <section className="section-shell relative py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-nova-fuchsia/25 bg-nova-fuchsia/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-nova-pink shadow-glow">
            Blog OpenNovaIA
          </p>
          <h1 className="mt-7 text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Blog de Inteligencia Artificial para Empresas
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/[0.7]">
            Guías, estrategias y casos de uso para automatizar ventas, atención al cliente
            y procesos con agentes IA.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#agentes"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-7 py-4 text-center text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Conocer Agentes IA
            </Link>
            <Link
              href="/#proceso"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-7 py-4 text-center text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Automatización WhatsApp
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {blogCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-nova-lilac/25 bg-white/[0.055] px-4 py-2 text-sm font-bold text-white/72 shadow-[0_12px_44px_rgba(106,0,255,0.14)]"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.16),transparent_52%)]" />
        <div className="section-shell relative">
          <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-violet">
            Artículos recientes
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            Estrategias prácticas para automatizar conversaciones y procesos.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex min-h-full flex-col rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(76,29,149,0.16)]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.16em]">
                  <span className="rounded-full bg-nova-violet/10 px-3 py-1 text-nova-violet">
                    {post.category}
                  </span>
                  <span className="text-[#7a668d]">{post.readingTime}</span>
                </div>
                <h3 className="mt-5 text-2xl font-black leading-tight text-[#211033]">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-[#5a476f]">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-7 inline-flex w-fit rounded-full border border-nova-violet/25 px-5 py-3 text-sm font-black text-nova-violet transition duration-300 hover:-translate-y-1 hover:border-nova-gold hover:bg-nova-gold hover:text-nova-black"
                >
                  Leer artículo
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07020f] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(251,191,36,0.16),transparent_42%),radial-gradient(ellipse_at_left,rgba(192,132,252,0.22),transparent_50%)]" />
        <div className="section-shell relative text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-gold">
            Siguiente paso
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            ¿Quieres aplicar IA en tu empresa?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Conoce cómo OpenNovaIA puede ayudarte a automatizar ventas, atención y seguimiento
            desde WhatsApp, web y CRM.
          </p>
          <Link
            href="/"
            className="mt-9 inline-flex rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-8 py-4 text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
          >
            Conocer OpenNovaIA
          </Link>
        </div>
      </section>
    </main>
  );
}
