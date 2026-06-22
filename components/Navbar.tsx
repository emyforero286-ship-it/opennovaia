import { NeuralLogo } from "./NeuralLogo";
import { TrackableLink } from "./TrackableLink";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Agentes de IA", href: "#agentes" },
  { label: "Industrias", href: "#industrias" },
  { label: "Planes", href: "#planes" },
  { label: "Testimonios", href: "#testimonios" }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-nova-lilac/15 bg-[#090314]/[0.82] backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="OpenNovaIA inicio">
          <NeuralLogo compact size="sm" />
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-nova-lilac/15 bg-white/[0.045] px-2 py-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/[0.72] transition duration-300 hover:bg-nova-fuchsia/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://opennovaia.kronocloud.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-nova-lilac/35 bg-white/[0.045] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-nova-fuchsia/60 hover:bg-nova-fuchsia/10"
          >
            Acceder
          </a>

          {/* TODO: Conectar este boton al sistema de registro cuando este disponible. */}
          <TrackableLink
            href="https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=1b892279d6fd414c9f5c65c08300e4a8"
            target="_blank"
            rel="noopener noreferrer"
            eventName="demo_cta_click"
            eventLabel="Registrarse"
            className="rounded-full border border-nova-gold/45 bg-gradient-to-r from-nova-gold to-nova-amber px-5 py-3 text-sm font-bold text-nova-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_70px_rgba(251,191,36,0.42)]"
          >
            Registrarse
          </TrackableLink>
        </div>
      </nav>
    </header>
  );
}
