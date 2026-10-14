import type { Metadata } from "next";
import ServicesPage from "@/pages/ServicesPage";

export const metadata: Metadata = {
  title: "AI Services & Solutions — Asad Anwar | Senior AI & Software Engineer",
  description:
    "AI solutions and consulting services built around your business: workflow automation, omnichannel AI agents, enterprise RAG systems, and custom software development.",
};

export default function Page() {
  return <ServicesPage />;
}
