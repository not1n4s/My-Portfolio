import { html, useLayoutEffect, useRef } from "../lib/react.js";
import { gsap } from "../vendor/gsap/index.js";
import { testimonials } from "../data/testimonials.js";

export default function Testimonials() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 38,
        stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return html`
    <section className="testimonials section-shell" ref=${sectionRef}>
      <div className="section-heading">
        <div>
          <p className="section-label">Testimonials</p>
          <h2>What the work feels like from the client side.</h2>
        </div>
      </div>

      <div className="testimonial-grid">
        ${testimonials.map(
          (testimonial) => html`
            <article className="testimonial-card" key=${testimonial.name + testimonial.service}>
              <p className="quote">"${testimonial.quote}"</p>
              <div>
                <strong>${testimonial.name}</strong>
                <span>${testimonial.role}</span>
                <small>${testimonial.service}</small>
              </div>
            </article>
          `,
        )}
      </div>
    </section>
  `;
}
