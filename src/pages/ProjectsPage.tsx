"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { Icons } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "frontend" | "fullstack">("all");
  const [detailedView, setDetailedView] = useState<boolean>(true);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  const tabCounts = {
    all: PROJECTS.length,
    ai: PROJECTS.filter((p) => p.category === "ai").length,
    frontend: PROJECTS.filter((p) => p.category === "frontend").length,
    fullstack: PROJECTS.filter((p) => p.category === "fullstack").length,
  };

  return (
    <div style={{ paddingBottom: "96px" }}>
      {/* Header */}
      <section
        style={{
          paddingTop: "64px",
          paddingBottom: "48px",
          borderBottom: "1px solid var(--border-light)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px" }}>
            <span className="section-tagline">Engineering Showcase</span>
            <h1 className="heading-hero" style={{ marginBottom: "16px" }}>
              Selected Projects &amp; Case Studies
            </h1>
            <p className="subheadline">
              A comprehensive showcase of verified engineering work across Generative AI systems, RAG retrieval pipelines, multi-agent workflows, and enterprise frontend architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar & View Toggle */}
      <section
        style={{
          borderBottom: "1px solid var(--border-light)",
          backgroundColor: "var(--bg-card)",
          position: "sticky",
          top: "72px",
          zIndex: 30,
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              padding: "16px 0",
            }}
          >
            {/* Filter Tabs */}
            <div className="project-filter-bar" style={{ marginBottom: 0 }}>
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`filter-btn ${activeTab === "all" ? "filter-btn-active" : ""}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>All Projects</span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    opacity: 0.8,
                    padding: "1px 6px",
                    borderRadius: "10px",
                    backgroundColor: activeTab === "all" ? "rgba(255,255,255,0.2)" : "var(--bg-secondary)",
                  }}
                >
                  {tabCounts.all}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("ai")}
                className="filter-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  border: activeTab === "ai" ? "1px solid #1d4ed8" : "1px solid var(--border-light)",
                  backgroundColor: activeTab === "ai" ? "#eff6ff" : "var(--bg-primary)",
                  color: activeTab === "ai" ? "#1d4ed8" : "var(--text-secondary)",
                }}
              >
                <Icons.Sparkles size={14} />
                <span>AI &amp; GenAI</span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    padding: "1px 6px",
                    borderRadius: "10px",
                    backgroundColor: activeTab === "ai" ? "#bfdbfe" : "var(--bg-secondary)",
                  }}
                >
                  {tabCounts.ai}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("frontend")}
                className="filter-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  border: activeTab === "frontend" ? "1px solid #15803d" : "1px solid var(--border-light)",
                  backgroundColor: activeTab === "frontend" ? "#f0fdf4" : "var(--bg-primary)",
                  color: activeTab === "frontend" ? "#15803d" : "var(--text-secondary)",
                }}
              >
                <Icons.Layers size={14} />
                <span>Frontend Systems</span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    padding: "1px 6px",
                    borderRadius: "10px",
                    backgroundColor: activeTab === "frontend" ? "#bbf7d0" : "var(--bg-secondary)",
                  }}
                >
                  {tabCounts.frontend}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("fullstack")}
                className="filter-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  border: activeTab === "fullstack" ? "1px solid #7e22ce" : "1px solid var(--border-light)",
                  backgroundColor: activeTab === "fullstack" ? "#faf5ff" : "var(--bg-primary)",
                  color: activeTab === "fullstack" ? "#7e22ce" : "var(--text-secondary)",
                }}
              >
                <Icons.Cpu size={14} />
                <span>Full-Stack &amp; Cloud</span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    padding: "1px 6px",
                    borderRadius: "10px",
                    backgroundColor: activeTab === "fullstack" ? "#e9d5ff" : "var(--bg-secondary)",
                  }}
                >
                  {tabCounts.fullstack}
                </span>
              </button>
            </div>

            {/* View Mode Toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Layout:</span>
              <button
                type="button"
                onClick={() => setDetailedView(!detailedView)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--bg-secondary)",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                }}
              >
                <Icons.FileText size={14} />
                <span>{detailedView ? "Deep Case Study" : "Compact Grid"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ paddingTop: "48px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: detailedView ? "repeat(auto-fit, minmax(360px, 1fr))" : "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} detailed={detailedView} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
