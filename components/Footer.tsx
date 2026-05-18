import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest mt-xl">
      <div className="w-full px-margin py-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="text-headline-md font-extrabold text-primary mb-sm">
            SC Unna
          </div>
          <p className="font-body-md text-body-md text-secondary mb-md">
            Gegründet 1963 · Fusion 01.04.2026 · Stralsunder Str. 63 · 59427 Unna
          </p>
        </div>
        <div>
          <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-sm">Kontakt</h4>
          <ul className="space-y-xs font-body-md text-body-md text-secondary">
            <li>Stralsunder Str. 63, 59427 Unna</li>
            <li>
              <a href="mailto:info@scunna.de" className="hover:text-primary transition-colors">
                info@scunna.de
              </a>
            </li>
            <li>02303 / 21960</li>
            <li>
              <Link className="hover:text-primary transition-colors inline-flex items-center gap-xs" href="/kontakt">
                Kontaktformular →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-sm">Links</h4>
          <ul className="space-y-xs font-body-md text-body-md text-secondary">
            <li><Link className="hover:text-primary transition-colors" href="/impressum">Impressum</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/datenschutz">Datenschutz</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/vorstand">Vorstand</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-sm">Social</h4>
          <div className="flex space-x-sm">
            <a className="text-secondary hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full px-margin py-md border-t border-surface-dim max-w-7xl mx-auto">
        <p className="font-body-md text-body-md text-secondary text-sm text-center">
          © 2024 Sport Club Unna e.V. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
