const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OpenNovaIA",
  url: "https://opennovaia.com",
  logo: "https://opennovaia.com/logo.svg",
  description:
    "Agencia de inteligencia artificial especializada en agentes IA, automatización empresarial y atención 24/7.",
  email: "hello@opennovaia.com"
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agentes de IA para empresas",
  serviceType: "Automatización empresarial con inteligencia artificial",
  areaServed: "Colombia",
  provider: {
    "@type": "Organization",
    name: "OpenNovaIA",
    url: "https://opennovaia.com"
  },
  description:
    "Implementación de agentes de inteligencia artificial para ventas, atención al cliente, soporte y procesos empresariales 24/7."
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, serviceSchema])
      }}
    />
  );
}
