import type { Metadata } from "next";
import ProjectsPage from "@/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects & Engineering Case Studies — Asad Anwar",
  description:
    "Verified engineering case studies: Autonomous multi-agent systems, hybrid RAG pipelines, text-to-SQL systems, and enterprise frontend architecture by Asad Anwar.",
};

export default function Page() {
  return <ProjectsPage />;
}
