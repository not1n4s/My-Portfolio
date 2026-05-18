import { html, useLayoutEffect, useRef } from "../lib/react.js";
import { gsap } from "../vendor/gsap/index.js";

const metrics = [
  { value: 12, suffix: "+", label: "Markets Worked Across" },
  { value: 25, suffix: "+", label: "Websites and Web Services Built" },
  { value: 15, suffix: "+", label: "API and Automation Systems Shipped" },
  { value: 8, suffix: "+", label: "AI & Automation Builds" },
];

export default function Proof() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".metric-card", {
        opacity: 0,
        y: 34,
        stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      gsap.utils.toArray(".metric-number").forEach((number) => {
        const value = Number(number.dataset.value);
        const counter = { value: 0 };
        gsap.to(counter, {
          value,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: number, start: "top 82%", once: true },
          onUpdate: () => {
            number.textContent = Math.round(counter.value).toString();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return html`
    <section id="proof" className="proof section-shell" ref=${sectionRef}>
      <div className="proof-glow" aria-hidden="true"></div>
      <div className="section-heading">
        <div>
          <p className="section-label">Proof</p>
          <h2>Signals that Cognix understands growth, systems, and execution.</h2>
        </div>
      </div>

      <div className="metrics-grid">
        ${metrics.map(
          (metric) => html`
            <article className="metric-card" key=${metric.label}>
              <strong>
                <span className="metric-number" data-value=${metric.value}>0</span>${metric.suffix}
              </strong>
              <p>${metric.label}</p>
            </article>
          `,
        )}
      </div>
    </section>
  `;
}
