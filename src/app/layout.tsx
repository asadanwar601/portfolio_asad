import type { Metadata, Viewport } from "next";
import "@/css/shared.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import WhatsAppButton from "@/layout/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Asad Anwar | Senior Software Engineer · AI / GenAI & Frontend Architecture",
  description:
    "Senior Software Engineer with 8+ years experience building scalable enterprise web applications and production AI/GenAI systems: RAG pipelines, multi-agent systems, and component architecture.",
  keywords: [
    "Asad Anwar",
    "AI Engineer",
    "Generative AI Engineer",
    "Applied AI Engineer",
    "Senior Software Engineer",
    "Senior Frontend Engineer",
    "Vue.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "LangChain",
    "CrewAI",
    "RAG",
    "Qdrant",
    "ChromaDB",
  ],
  authors: [{ name: "Asad Anwar", url: "https://github.com/asadanwar60" }],
  creator: "Asad Anwar",
  openGraph: {
    title: "Asad Anwar | Senior Software Engineer · AI / GenAI & Frontend Architecture",
    description:
      "Specializing in Generative AI, RAG retrieval pipelines, autonomous multi-agent workflows, and enterprise frontend architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Asad Anwar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asad Anwar | Senior Software Engineer",
    description: "AI / GenAI Engineering, RAG Systems & Frontend Architecture.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
