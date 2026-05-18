import { html } from "../lib/react.js";

const logoSrc = "./src/assets/cognix-logo.svg";

export default function BrandLogo({ className = "", alt = "" } = {}) {
  return html`
    <img
      className=${`brand-logo-image ${className}`.trim()}
      src=${logoSrc}
      alt=${alt}
      loading="eager"
      decoding="async"
    />
  `;
}
