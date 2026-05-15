import { createRoot, html } from "./lib/react.js";
import App from "./App.js";

createRoot(document.getElementById("root")).render(html`<${App} />`);
