import { html } from "../lib/react.js";
import { techStack } from "../data/techStack.js";

export default function TechStack() {
  const marqueeItems = [...techStack, ...techStack];

  return html`
    <section className="tech-stack section-shell" aria-labelledby="tech-title">
      <div className="section-heading compact">
        <div>
          <p className="section-label">Tech Stack</p>
          <h2 id="tech-title">Modern tools without unnecessary weight.</h2>
        </div>
      </div>
      <div className="marquee" aria-label="Tools and platforms">
        <div className="marquee-track">
          ${marqueeItems.map(
            (tool, index) => html`
              <span className="tech-chip" key=${`${tool}-${index}`}>${tool}</span>
            `,
          )}
        </div>
      </div>
    </section>
  `;
}
