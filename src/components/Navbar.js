import { html, useState } from "../lib/react.js";
import { Menu, X } from "./Icons.js";
import BrandLogo from "./BrandLogo.js";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return html`
    <header className="site-nav" aria-label="Primary navigation">
      <a className="brand-mark" href="#top" onClick=${closeMenu} aria-label="Cognix Systems home">
        <${BrandLogo} className="brand-logo-nav" />
        <span>Cognix Systems</span>
      </a>

      <nav className="desktop-nav" aria-label="Desktop navigation">
        ${links.map(
          (link) => html`
            <a key=${link.href} href=${link.href}>${link.label}</a>
          `,
        )}
      </nav>

      <a className="nav-cta" href="#contact">Start a Project</a>

      <button
        className="menu-button"
        type="button"
        onClick=${() => setOpen((value) => !value)}
        aria-label=${open ? "Close menu" : "Open menu"}
        aria-expanded=${open}
      >
        ${open ? html`<${X} size=${20}></${X}>` : html`<${Menu} size=${20}></${Menu}>`}
      </button>

      <div className=${`mobile-panel ${open ? "is-open" : ""}`}>
        ${links.map(
          (link) => html`
            <a key=${link.href} href=${link.href} onClick=${closeMenu}>${link.label}</a>
          `,
        )}
        <a className="mobile-cta" href="#contact" onClick=${closeMenu}>Start a Project</a>
      </div>
    </header>
  `;
}
