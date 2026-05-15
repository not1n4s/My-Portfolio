import {
  Bot,
  PhoneCall,
  Plug,
  Search,
  Workflow,
} from "../components/Icons.js";

export const services = [
  {
    title: "API Integrations",
    description: "Custom API connections that let your tools, CRMs, forms, and channels exchange data cleanly.",
    tags: ["REST", "Webhooks", "CRM"],
    icon: Plug,
  },
  {
    title: "Custom Automations",
    description: "Tailored automations that remove repetitive work and keep lead flow and operations moving.",
    tags: ["n8n", "Ops", "Automation"],
    icon: Workflow,
  },
  {
    title: "AI Voice Receptionists",
    description: "AI call flows that capture leads, answer questions, and route conversations cleanly.",
    tags: ["Voice AI", "Leads", "CRM"],
    icon: PhoneCall,
  },
  {
    title: "Workflow Systems",
    description: "Internal workflow design that reduces handoff friction, missed follow-ups, and operational drag.",
    tags: ["Systems", "Ops", "Integrations"],
    icon: Bot,
  },
  {
    title: "Websites & Web Apps",
    description: "Premium web experiences and practical tools built around business outcomes.",
    tags: ["React", "Laravel", "UX"],
    icon: Bot,
  },
  {
    title: "SEO & Growth Systems",
    description: "Structured content, analytics, and technical foundations for compounding growth.",
    tags: ["SEO", "GA4", "Systems"],
    icon: Search,
  },
];
