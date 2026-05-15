import { html } from "../lib/react.js";
import { Calendar, Mail, MessageCircle } from "./Icons.js";
import { privateContact } from "../data/private-contact.js";

export default function CTA() {
  return html`
    <section id="contact" className="cta section-shell" aria-labelledby="cta-title">
      <div className="cta-orbit" aria-hidden="true"></div>
      <div className="cta-panel">
        <p className="section-label">Contact</p>
        <h2 id="cta-title">Have a business problem that needs a smarter system?</h2>
        <p>Let's turn it into something measurable, automated, and easier to manage.</p>
        <div className="cta-actions">
          <a className="button-primary shine" href=${`https://wa.me/${privateContact.whatsapp}`} aria-label="Contact on WhatsApp">
            <${MessageCircle} size=${18}></${MessageCircle}> WhatsApp
          </a>
          <a className="button-secondary" href=${`mailto:${privateContact.email}`}>
            <${Mail} size=${18}></${Mail}> ${privateContact.email}
          </a>
          <a className="button-secondary" href="#contact">
            <${Calendar} size=${18}></${Calendar}> Book a Call
          </a>
        </div>
      </div>
    </section>
  `;
}
