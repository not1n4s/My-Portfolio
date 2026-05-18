import { html, useLayoutEffect, useRef } from "../lib/react.js";
import { gsap } from "../vendor/gsap/index.js";
import { services } from "../data/services.js";

export default function Services() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 42,
        stagger: 0.08,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 68%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return html`
    <section id="services" className="services section-shell" ref=${sectionRef}>
      <div className="section-heading">
        <div>
          <p className="section-label">Services</p>
          <h2>
            Built around the systems clients <span className="hero-chalk-word">actually</span> need.
          </h2>
        </div>
        <p>
          A compact capability stack for lead generation, operational automation, AI adoption, and premium
          web experiences.
        </p>
      </div>

      <div className="services-grid">
        ${services.map((service) => {
          const Icon = service.icon;
          return html`
            <article className="service-card" key=${service.title}>
              <div className="service-icon" aria-hidden="true">
                <${Icon} size=${22}></${Icon}>
              </div>
              <h3>${service.title}</h3>
              <p>${service.description}</p>
              <div className="tag-row">
                ${service.tags.map((tag) => html`<span key=${tag}>${tag}</span>`)}
              </div>
            </article>
          `;
        })}
      </div>
    </section>
  `;
}
