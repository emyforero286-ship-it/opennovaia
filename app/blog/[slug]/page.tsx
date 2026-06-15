import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blogPosts";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const url = `https://opennovaia.com/blog/${post.slug}`;

  return {
    title: `${post.title} | OpenNovaIA`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${post.title} | OpenNovaIA`,
      description: post.description,
      url,
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
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | OpenNovaIA`,
      description: post.description,
      images: ["/logo.svg"]
    }
  };
}

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const articleUrl = `https://opennovaia.com/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://opennovaia.com"
    },
    publisher: {
      "@type": "Organization",
      name: "OpenNovaIA",
      logo: {
        "@type": "ImageObject",
        url: "https://opennovaia.com/logo.svg"
      }
    },
    mainEntityOfPage: articleUrl,
    image: "https://opennovaia.com/logo.svg",
    keywords: post.keywords.join(", ")
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "OpenNovaIA",
        item: "https://opennovaia.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://opennovaia.com/blog"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl
      }
    ]
  };

  const faqJsonLd = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    : null;

  return (
    <main className="relative overflow-hidden bg-nova-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd, faqJsonLd].filter(Boolean))
        }}
      />
      <div className="nova-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="neural-field absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-[540px] w-[52vw] bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.44),transparent_64%)] blur-2xl" />
      <div className="absolute right-0 top-12 h-[540px] w-[48vw] bg-[radial-gradient(ellipse_at_center,rgba(255,61,255,0.3),transparent_62%)] blur-2xl" />

      <article className="section-shell relative py-28">
        <div className="mx-auto max-w-4xl">
          <Link href="/blog" className="text-sm font-black uppercase tracking-[0.18em] text-nova-gold transition hover:text-white">
            Blog OpenNovaIA
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-white/58">
            <span className="rounded-full border border-nova-fuchsia/25 bg-nova-fuchsia/10 px-3 py-1 text-nova-pink">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
            <span>{post.author}</span>
          </div>
          <h1 className="mt-7 text-5xl font-black leading-[1.03] text-white sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-7 text-lg leading-8 text-white/[0.72]">{post.description}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#agentes"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-7 py-4 text-center text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Conocer Agentes IA
            </Link>
            <Link
              href="/#testimonios"
              className="rounded-full border border-nova-pink/35 bg-white/[0.045] px-7 py-4 text-center text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-nova-fuchsia/70 hover:bg-nova-fuchsia/10"
            >
              Ver casos modelo
            </Link>
          </div>
        </div>
      </article>

      <section className="relative bg-white py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.16),transparent_52%)]" />
        <div className="section-shell relative grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="h-fit rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.08)] lg:sticky lg:top-28">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-nova-violet">
              Tabla de contenidos
            </p>
            <nav className="mt-5 grid gap-3">
              {post.content.map((section) => (
                <a
                  key={section.heading}
                  href={`#${sectionId(section.heading)}`}
                  className="text-sm font-bold leading-6 text-[#5a476f] transition hover:text-nova-violet"
                >
                  {section.heading}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-10">
            {post.content.map((section) => (
              <section
                key={section.heading}
                id={sectionId(section.heading)}
                className="scroll-mt-28 rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-7 shadow-[0_20px_60px_rgba(76,29,149,0.08)]"
              >
                <h2 className="text-3xl font-black leading-tight text-[#211033]">{section.heading}</h2>
                <p className="mt-5 text-lg leading-8 text-[#5a476f]">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-6 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-base font-bold leading-7 text-[#2a1741]">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-nova-gold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {post.faq && (
              <section className="rounded-lg border border-[#eadcff] bg-[#fbf7ff] p-7 shadow-[0_20px_60px_rgba(76,29,149,0.08)]">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-nova-violet">
                  Preguntas frecuentes
                </p>
                <div className="mt-6 grid gap-5">
                  {post.faq.map((faq) => (
                    <div key={faq.question}>
                      <h2 className="text-xl font-black text-[#211033]">{faq.question}</h2>
                      <p className="mt-2 text-base leading-7 text-[#5a476f]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="relative overflow-hidden bg-[#07020f] py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(178,0,255,0.3),transparent_54%)]" />
          <div className="section-shell relative">
            <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-nova-pink">
              Lecturas relacionadas
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
              Sigue construyendo tu estrategia de automatización.
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="premium-border gradient-border rounded-lg p-7">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-nova-gold">
                    {relatedPost.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-white">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/68">
                    {relatedPost.description}
                  </p>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="mt-7 inline-flex rounded-full border border-nova-gold/45 bg-white/[0.045] px-5 py-3 text-sm font-black text-nova-gold transition duration-300 hover:-translate-y-1 hover:bg-nova-gold hover:text-nova-black"
                  >
                    Leer artículo
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-[#fbf7ff] py-24 text-[#130824]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(251,191,36,0.16),transparent_42%),radial-gradient(ellipse_at_left,rgba(192,132,252,0.22),transparent_50%)]" />
        <div className="section-shell relative text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-nova-violet">OpenNovaIA</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Convierte conversaciones en oportunidades reales.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5a476f]">
            Explora cómo OpenNovaIA puede ayudarte a automatizar atención, ventas y seguimiento
            con agentes IA para WhatsApp, web y CRM.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-gradient-to-r from-nova-gold to-nova-amber px-8 py-4 text-sm font-black text-nova-black shadow-gold transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(251,191,36,0.42)]"
            >
              Conocer OpenNovaIA
            </Link>
            <Link
              href="/#proceso"
              className="rounded-full border border-nova-violet/25 px-8 py-4 text-sm font-black text-nova-violet transition duration-300 hover:-translate-y-1 hover:border-nova-gold hover:bg-nova-gold hover:text-nova-black"
            >
              Ver automatización WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
