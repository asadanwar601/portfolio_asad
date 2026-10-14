import type { Metadata } from "next";
import ContactPage from "@/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact & Collaboration — Asad Anwar | Senior AI & Software Engineer",
  description:
    "Direct contact channels, calendar booking, WhatsApp, and inquiry form for Asad Anwar (Senior Software Engineer specializing in Generative AI, RAG, and Frontend Architecture).",
};

export default function Page() {
  return <ContactPage />;
}
