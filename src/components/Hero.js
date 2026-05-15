import { html, useLayoutEffect, useRef } from "../lib/react.js";
import { ArrowDown, ArrowRight } from "./Icons.js";
import { gsap } from "../vendor/gsap/index.js";

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.9 })
        .from(".hero-kicker", { opacity: 0, y: 20, duration: 0.55, ease: "power3.out" })
        .from(".hero-title span", { yPercent: 105, duration: 0.9, stagger: 0.08, ease: "power4.out" }, "-=0.25")
        .from(".hero-copy", { opacity: 0, y: 24, duration: 0.65, ease: "power3.out" }, "-=0.35")
        .from(".hero-actions a", { opacity: 0, y: 20, duration: 0.55, stagger: 0.08, ease: "power3.out" }, "-=0.35");

      gsap.to(".hero-glow", {
        x: "10vw",
        y: "-8vh",
        rotate: 14,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return html`
    <section className="hero section-shell" ref=${heroRef} aria-labelledby="hero-title">
      <div className="grid-bg" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="hero-noise" aria-hidden="true"></div>
      <div className="abstract-stack" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-content">
        <p className="hero-kicker">AI systems. Growth engines. Cleaner operations.</p>
        <h1 id="hero-title" className="hero-title">
          <span>AI, automation, ads, and web systems built for businesses that want to move faster.</span>
        </h1>
        <p className="hero-copy">
          Cognix Systems helps businesses turn messy operations, weak lead flow, and manual work into
          cleaner digital systems.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#work">
            View Work <${ArrowRight} size=${18}></${ArrowRight}>
          </a>
          <a className="button-secondary" href="#contact">Contact</a>
        </div>
      </div>

      <a className="scroll-cue" href="#positioning" aria-label="Scroll to positioning section">
        <span>Scroll</span>
        <${ArrowDown} size=${17}></${ArrowDown}>
      </a>
    </section>
  `;
}
