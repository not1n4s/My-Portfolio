import { html, useLayoutEffect, useRef } from "../lib/react.js";
import { ArrowUpRight } from "./Icons.js";
import { gsap } from "../vendor/gsap/index.js";
import { projects } from "../data/projects.js";

export default function FeaturedWork() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray(".project-card");
        const distance = () => trackRef.current.scrollWidth - window.innerWidth + 64;

        const horizontalTween = gsap.to(trackRef.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card) => {
          gsap.fromTo(
            card.querySelector(".project-visual-aura"),
            { xPercent: -6, yPercent: 0, scale: 0.96 },
            {
              xPercent: 8,
              yPercent: -4,
              scale: 1.04,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });
      });

      mm.add("(max-width: 899px), (prefers-reduced-motion: reduce)", () => {
        gsap.from(".project-card", {
          opacity: 0,
          y: 34,
          stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return html`
    <section id="work" className="featured-work" ref=${sectionRef}>
      <div className="work-header section-shell">
        <p className="section-label">Featured Work</p>
        <h2>
          Proof-of-build moments for the systems Cognix can
          <span className="hero-chalk-word">create</span>.
        </h2>
      </div>

      <div className="work-track" ref=${trackRef}>
        ${projects.map(
          (project, index) => html`
            <article className="project-card" key=${project.name} style=${{ "--project-accent": project.accent }}>
              <div className="project-meta">
                <span>${`0${index + 1}`}</span>
                <span>${project.category}</span>
              </div>
              <div className="project-visual" aria-hidden="true">
                <div className="project-visual-aura"></div>
                <div className="project-visual-grid"></div>
              </div>
              <div className="project-content">
                <h3>${project.name}</h3>
                <p>${project.result}</p>
                <div className="tag-row">
                  ${project.tools.map((tool) => html`<span key=${tool}>${tool}</span>`)}
                </div>
                <button className="details-button" type="button">
                  View Details <${ArrowUpRight} size=${17}></${ArrowUpRight}>
                </button>
              </div>
            </article>
          `,
        )}
      </div>
    </section>
  `;
}
