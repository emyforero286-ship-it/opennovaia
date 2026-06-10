import { NeuralLogo } from "./NeuralLogo";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-nova-lilac/10 bg-[#05020b] py-9">
      <div className="section-shell flex flex-col gap-7 text-sm text-white/[0.52] md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <NeuralLogo compact size="sm" />
          </div>
          <p className="mt-3">Agentes neurales para vender más, responder 24/7 y automatizar operaciones empresariales.</p>
          <p className="mt-2">{siteConfig.contactEmail}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="#agentes" className="transition hover:text-white">Agentes</a>
          <a href="#industrias" className="transition hover:text-white">Industrias</a>
          <a href="#planes" className="transition hover:text-white">Planes</a>
          <a href={`mailto:${siteConfig.contactEmail}`} className="transition hover:text-white">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
