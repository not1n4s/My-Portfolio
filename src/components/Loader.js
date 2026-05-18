import { html, useLayoutEffect, useRef } from "../lib/react.js";
import { gsap } from "../vendor/gsap/index.js";
import BrandLogo from "./BrandLogo.js";

export default function Loader() {
  const loaderRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".loader-wordmark", { opacity: 0, y: 16, duration: 0.45, ease: "power3.out" })
        .to(".loader-line span", { scaleX: 1, duration: 0.75, ease: "power4.inOut" }, "-=0.1")
        .to(loaderRef.current, { yPercent: -100, duration: 0.58, ease: "power3.inOut" }, "+=0.1");
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return html`
    <div className="loader" ref=${loaderRef} aria-label="Loading Cognix Systems">
      <div className="loader-core">
        <div className="loader-logo-wrap">
          <${BrandLogo} className="loader-logo-mark" />
        </div>
        <p className="loader-wordmark">Cognix Systems</p>
        <div className="loader-line" aria-hidden="true">
          <span></span>
        </div>
      </div>
    </div>
  `;
}
