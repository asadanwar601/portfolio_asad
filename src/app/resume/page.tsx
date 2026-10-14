import type { Metadata } from "next";
import ResumePage from "@/pages/ResumePage";

export const metadata: Metadata = {
  title: "Resume — Asad Anwar | Senior Software Engineer",
  description:
    "Official verified resume of Asad Anwar: Senior Software Engineer specializing in AI/GenAI, RAG systems, and frontend architecture with 8+ years experience.",
};

export default function Page() {
  return <ResumePage />;
}
