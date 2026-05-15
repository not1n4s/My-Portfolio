import { html } from "../lib/react.js";

const paths = {
  ArrowDown: "M12 5v14m0 0 6-6m-6 6-6-6",
  ArrowRight: "M5 12h14m0 0-6-6m6 6-6 6",
  ArrowUpRight: "M7 17 17 7m0 0H8m9 0v9",
  Bot: "M12 8V4m-6 8a6 6 0 0 1 12 0v5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-5Zm3 1h.01M15 13h.01",
  Calendar: "M7 3v4m10-4v4M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
  ChartNoAxesCombined: "M4 19V5m4 14v-7m4 7V8m4 11v-4m4 4V4",
  Mail: "M4 6h16v12H4V6Zm0 1 8 6 8-6",
  Megaphone: "m4 13 12-5v8L4 13Zm0 0v4a2 2 0 0 0 2 2h2l1-4m11-6v6",
  Menu: "M4 7h16M4 12h16M4 17h16",
  MessageCircle: "M20 11.5a7.5 7.5 0 0 1-11.2 6.5L4 19l1.1-4.5A7.5 7.5 0 1 1 20 11.5Z",
  PhoneCall: "M7 5 5 7c0 7 5 12 12 12l2-2-4-4-2 2c-2.2-.9-3.8-2.5-4.8-4.8l2-2L7 5Zm10 1c1.8.6 3.4 2.2 4 4m-4-8c3.1.8 5.2 3 6 6",
  Plug: "M12 3v6m0 0V3m-4 6V5m8 4V5m-9 4h10a2 2 0 0 1 2 2v1a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-1a2 2 0 0 1 2-2Zm5 9v3m-4-3v3",
  Search: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm5-2 5 5",
  Workflow: "M6 7h6v6H6V7Zm6 3h4a3 3 0 0 1 3 3v1m-4 3h6v4h-6v-4ZM3 17h6v4H3v-4Z",
  X: "m6 6 12 12M18 6 6 18",
};

function Icon({ name, size = 24, className = "" }) {
  return html`
    <svg
      width=${size}
      height=${size}
      viewBox="0 0 24 24"
      className=${className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d=${paths[name]}></path>
    </svg>
  `;
}

export const ArrowDown = (props) => Icon({ name: "ArrowDown", ...props });
export const ArrowRight = (props) => Icon({ name: "ArrowRight", ...props });
export const ArrowUpRight = (props) => Icon({ name: "ArrowUpRight", ...props });
export const Bot = (props) => Icon({ name: "Bot", ...props });
export const Calendar = (props) => Icon({ name: "Calendar", ...props });
export const ChartNoAxesCombined = (props) => Icon({ name: "ChartNoAxesCombined", ...props });
export const Mail = (props) => Icon({ name: "Mail", ...props });
export const Megaphone = (props) => Icon({ name: "Megaphone", ...props });
export const Menu = (props) => Icon({ name: "Menu", ...props });
export const MessageCircle = (props) => Icon({ name: "MessageCircle", ...props });
export const PhoneCall = (props) => Icon({ name: "PhoneCall", ...props });
export const Plug = (props) => Icon({ name: "Plug", ...props });
export const Search = (props) => Icon({ name: "Search", ...props });
export const Workflow = (props) => Icon({ name: "Workflow", ...props });
export const X = (props) => Icon({ name: "X", ...props });
