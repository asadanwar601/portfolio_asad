import type { Metadata } from "next";
import AboutPage from "@/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Asad Anwar | Senior Software Engineer · AI & Frontend",
  description:
    "Learn about Asad Anwar's 8+ years career journey from enterprise frontend engineering to applied Generative AI systems, RAG pipelines, and multi-agent workflows.",
};

export default function Page() {
  return <AboutPage />;
}
