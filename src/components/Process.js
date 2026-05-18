import { html, useLayoutEffect, useRef } from "../lib/react.js";
import { gsap } from "../vendor/gsap/index.js";

const steps = [
  {
    title: "Diagnose",
    text: "Map the business problem, current systems, traffic sources, and operational friction.",
  },
  {
    title: "Design",
    text: "Shape the offer, workflow, interface, campaign, or automation plan before building.",
  },
  {
    title: "Build",
    text: "Create the campaign, website, app, AI flow, or integration with clean implementation.",
  },
  {
    title: "Improve",
    text: "Use feedback, data, and real usage to tighten performance after launch.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".timeline-line span", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "bottom 55%",
          scrub: true,
        },
      });

      gsap.utils.toArray(".process-step").forEach((step) => {
        gsap.from(step, {
          opacity: 0,
          y: 28,
          duration: 0.55,
          scrollTrigger: {
            trigger: step,
            start: "top 74%",
            toggleClass: { targets: step, className: "is-active" },
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return html`
    <section id="process" className="process section-shell" ref=${sectionRef}>
      <div className="section-heading">
        <div>
          <p className="section-label">Process</p>
          <h2>
            A clear way to move from <span className="hero-chalk-word">problem</span> to working
            system.
          </h2>
        </div>
        <p>Simple enough to move quickly. Structured enough to avoid expensive guesswork.</p>
      </div>

      <div className="timeline">
        <div className="timeline-line" aria-hidden="true">
          <span></span>
        </div>
        ${steps.map(
          (step, index) => html`
            <article className="process-step" key=${step.title}>
              <span className="step-number">${`0${index + 1}`}</span>
              <div>
                <h3>${step.title}</h3>
                <p>${step.text}</p>
              </div>
            </article>
          `,
        )}
      </div>
    </section>
  `;
}
