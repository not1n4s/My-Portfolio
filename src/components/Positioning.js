import { html, useLayoutEffect, useRef } from "../lib/react.js";
import { gsap } from "../vendor/gsap/index.js";

const capabilities = ["Growth", "Automation", "AI", "Web Systems"];

export default function Positioning() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=65%",
              pin: true,
              scrub: 0.7,
            },
          })
          .from(".positioning-title span", { yPercent: 105, stagger: 0.12, ease: "power3.out" })
          .from(".capability-pill", { opacity: 0, y: 34, stagger: 0.12, ease: "power3.out" }, "-=0.2")
          .to(".positioning-aura", { opacity: 0.9, scale: 1.1, ease: "none" }, 0);
      });

      mm.add("(max-width: 899px), (prefers-reduced-motion: reduce)", () => {
        gsap.from(".positioning-title span, .capability-pill", {
          opacity: 0,
          y: 22,
          stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return html`
    <section id="positioning" className="positioning section-shell" ref=${sectionRef}>
      <div className="positioning-aura" aria-hidden="true"></div>
      <div className="section-label">Positioning</div>
      <h2 className="positioning-title">
        <span>We design the digital systems behind faster, cleaner business momentum.</span>
      </h2>
      <div className="capability-grid" aria-label="Core capabilities">
        ${capabilities.map(
          (capability) => html`
            <div className="capability-pill" key=${capability}>${capability}</div>
          `,
        )}
      </div>
    </section>
  `;
}
