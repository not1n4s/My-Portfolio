import { html } from "../lib/react.js";

export default function AmbientBackground() {
  return html`
    <div className="ambient-stage" aria-hidden="true">
      <span className="ambient-liquid ambient-liquid-a"></span>
      <span className="ambient-liquid ambient-liquid-b"></span>
      <span className="ambient-liquid ambient-liquid-c"></span>
      <span className="ambient-band ambient-band-a"></span>
      <span className="ambient-band ambient-band-b"></span>
      <span className="ambient-band ambient-band-c"></span>
      <span className="ambient-mesh"></span>
      <span className="ambient-vignette"></span>
    </div>
  `;
}
