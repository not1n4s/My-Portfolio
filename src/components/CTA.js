import { html } from "../lib/react.js";
import { Mail, MessageCircle } from "./Icons.js";
import { privateContact } from "../data/private-contact.js";

export default function CTA() {
  const inquiryMessage = encodeURIComponent(
    "Hey I am interested in your services, can I have more info about the service you provide?",
  );
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(privateContact.email)}`;

  return html`
    <section id="contact" className="cta section-shell" aria-labelledby="cta-title">
      <div className="cta-orbit" aria-hidden="true"></div>
      <div className="cta-panel">
        <p className="section-label">Contact</p>
        <h2 id="cta-title">Have a business problem that needs a smarter system?</h2>
        <p>Let's turn it into something measurable, automated, and easier to manage.</p>
        <div className="cta-actions">
          <a
            className="button-primary shine"
            href=${`https://wa.me/${privateContact.whatsapp}?text=${inquiryMessage}`}
            aria-label="Contact on WhatsApp"
          >
            <${MessageCircle} size=${18}></${MessageCircle}> WhatsApp
          </a>
          <a
            className="button-secondary"
            href=${gmailComposeLink}
            aria-label="Email via Gmail"
            target="_blank"
            rel="noreferrer"
          >
            <${Mail} size=${18}></${Mail}> ${privateContact.email}
          </a>
        </div>
      </div>
    </section>
  `;
}
