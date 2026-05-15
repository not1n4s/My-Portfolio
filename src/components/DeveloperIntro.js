import { html, useLayoutEffect, useRef } from "../lib/react.js";
import { ArrowRight } from "./Icons.js";
import { gsap } from "../vendor/gsap/index.js";
import { ScrollTrigger } from "../vendor/gsap/ScrollTrigger.js";

export default function DeveloperIntro() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        })
        .from(".developer-intro-copy > *", {
          opacity: 0,
          y: 28,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
        })
        .from(
          ".developer-focus-card",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.45"
        );

      gsap.to(".developer-orb", {
        yPercent: -8,
        xPercent: 6,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return html`
    <section className="developer-intro section-shell" ref=${sectionRef} aria-labelledby="developer-title">
      <div className="developer-orb" aria-hidden="true"></div>
      <div className="developer-grid">
        <div className="developer-intro-copy">
          <p className="section-label">Developer Introduction</p>
          <p className="developer-greeting">Hello, I'm Anas.</p>
          <h2 id="developer-title">
            I turn AI-driven case studies into sharp digital stories that make complex systems feel credible,
            measurable, and ready to scale.
          </h2>
          <p className="developer-description">
            My focus is building presentation-ready products and experiments where automation, interfaces,
            and growth logic come together. The goal is not just to launch something sleek, but to show how
            a business problem became a cleaner workflow, a smarter funnel, or a stronger operating system.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">
              See AI Case Studies <${ArrowRight} size=${18}></${ArrowRight}>
            </a>
            <a className="button-secondary" href="#contact">Work With Anas</a>
          </div>
        </div>

        <div className="developer-focus">
          <article className="developer-focus-card">
            <span>01</span>
            <strong>AI System Narratives</strong>
            <p>Case studies that explain what was built, what improved, and why the system matters.</p>
          </article>
          <article className="developer-focus-card">
            <span>02</span>
            <strong>Automation With Proof</strong>
            <p>Flows, APIs, and assistants presented with clarity so outcomes feel concrete instead of abstract.</p>
          </article>
          <article className="developer-focus-card">
            <span>03</span>
            <strong>Premium Technical Positioning</strong>
            <p>Design direction shaped to help modern brands look advanced, trustworthy, and commercially ready.</p>
          </article>
        </div>
      </div>
    </section>
  `;
}
