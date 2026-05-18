import { html } from "../lib/react.js";
import { privateContact } from "../data/private-contact.js";
import BrandLogo from "./BrandLogo.js";

export default function Footer() {
  const inquiryMessage = encodeURIComponent(
    "Hey I am interested in your services, can I have more info about the service you provide?",
  );
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(privateContact.email)}`;

  return html`
    <footer className="footer section-shell">
      <div>
        <a className="footer-brand" href="#top">
          <${BrandLogo} className="brand-logo-footer" />
          <span>Cognix Systems</span>
        </a>
        <p>AI, automation, ads, and web systems for businesses that want to move faster.</p>
      </div>
      <div className="footer-links">
        <a href=${gmailComposeLink} target="_blank" rel="noreferrer">${privateContact.email}</a>
        <a href=${`https://wa.me/${privateContact.whatsapp}?text=${inquiryMessage}`}>WhatsApp</a>
        <a href=${privateContact.linkedin}>LinkedIn</a>
        <a href="#top">Back to top</a>
      </div>
      <p className="copyright">Copyright ${new Date().getFullYear()} Cognix Systems. All rights reserved.</p>
    </footer>
  `;
}
