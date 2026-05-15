import { React, html, useEffect, useState } from "./lib/react.js";
import Lenis from "./vendor/lenis/index.js";
import { gsap } from "./vendor/gsap/index.js";
import { ScrollTrigger } from "./vendor/gsap/ScrollTrigger.js";
import AmbientBackground from "./components/AmbientBackground.js";
import Loader from "./components/Loader.js";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import DeveloperIntro from "./components/DeveloperIntro.js";
import Positioning from "./components/Positioning.js";
import Services from "./components/Services.js";
import FeaturedWork from "./components/FeaturedWork.js";
import Process from "./components/Process.js";
import Proof from "./components/Proof.js";
import TechStack from "./components/TechStack.js";
import Testimonials from "./components/Testimonials.js";
import CTA from "./components/CTA.js";
import Footer from "./components/Footer.js";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      document.documentElement.classList.add("reduced-motion");
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    const raf = (time) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    html`<${React.Fragment}>
      ${loading && html`<${Loader} />`}
      <${AmbientBackground} />
      <${Navbar} />
      <main id="top">
        <${Hero} />
        <${DeveloperIntro} />
        <${Positioning} />
        <${Services} />
        <${FeaturedWork} />
        <${Process} />
        <${Proof} />
        <${TechStack} />
        <${Testimonials} />
        <${CTA} />
      </main>
      <${Footer} />
    </${React.Fragment}>`
  );
}
