import { html } from "../lib/react.js";
import { privateContact } from "../data/private-contact.js";

export default function Footer() {
  return html`
    <footer className="footer section-shell">
      <div>
        <a className="footer-brand" href="#top">Cognix Systems</a>
        <p>AI, automation, ads, and web systems for businesses that want to move faster.</p>
      </div>
      <div className="footer-links">
        <a href=${`mailto:${privateContact.email}`}>${privateContact.email}</a>
        <a href=${`https://wa.me/${privateContact.whatsapp}`}>WhatsApp</a>
        <a href=${privateContact.linkedin}>LinkedIn</a>
        <a href="#top">Back to top</a>
      </div>
      <p className="copyright">Copyright ${new Date().getFullYear()} Cognix Systems. All rights reserved.</p>
    </footer>
  `;
}
