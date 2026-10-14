import React from "react";
import { Project } from "@/data/portfolioData";
import { Icons } from "./Icons";

interface ProjectCardProps {
  project: Project;
  detailed?: boolean;
}

export default function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  const getCategoryLabel = (category: Project["category"]) => {
    switch (category) {
      case "ai":
        return "AI & GenAI";
      case "frontend":
        return "Frontend Architecture";
      case "fullstack":
        return "Full-Stack & Cloud";
      default:
        return category;
    }
  };

  const getCategoryColor = (category: Project["category"]) => {
    switch (category) {
      case "ai":
        return {
          bg: "#eff6ff",
          text: "#1d4ed8",
          border: "#bfdbfe",
        };
      case "frontend":
        return {
          bg: "#f0fdf4",
          text: "#15803d",
          border: "#bbf7d0",
        };
      case "fullstack":
        return {
          bg: "#faf5ff",
          text: "#7e22ce",
          border: "#e9d5ff",
        };
    }
  };

  const catColors = getCategoryColor(project.category);

  return (
    <article
      className="card-base card-hoverable"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        padding: detailed ? "32px" : "28px",
      }}
    >
      <div>
        {/* Top Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              borderRadius: "var(--radius-full)",
              fontSize: "0.75rem",
              fontWeight: 600,
              backgroundColor: catColors.bg,
              color: catColors.text,
              border: `1px solid ${catColors.border}`,
              letterSpacing: "0.01em",
            }}
          >
            {project.category === "ai" && <Icons.Sparkles size={13} />}
            {project.category === "frontend" && <Icons.Layers size={13} />}
            {project.category === "fullstack" && <Icons.Cpu size={13} />}
            {getCategoryLabel(project.category)}
          </span>

          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              padding: "3px 9px",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-muted)",
              border: "1px solid var(--border-light)",
            }}
          >
            {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3
          className="heading-card"
          style={{
            marginBottom: "8px",
            color: "var(--text-primary)",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.9375rem",
            color: "var(--text-secondary)",
            lineHeight: 1.5,
            marginBottom: "20px",
            fontWeight: 450,
          }}
        >
          {project.tagline}
        </p>

        {/* Problem & Architecture */}
        <div
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderRadius: "var(--radius-md)",
            padding: "16px",
            marginBottom: "20px",
            fontSize: "0.875rem",
            border: "1px solid var(--border-light)",
          }}
        >
          <div style={{ marginBottom: detailed ? "12px" : "8px" }}>
            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Problem: </span>
            <span style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>{project.problem}</span>
          </div>

          <div>
            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Architecture: </span>
            <span style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>{project.architecture}</span>
          </div>
        </div>

        {/* Key Engineering Decisions / Highlights (for detailed view) */}
        {detailed && (
          <div style={{ marginBottom: "20px" }}>
            <h4
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
                marginBottom: "10px",
              }}
            >
              Key Technical Decisions &amp; Contributions
            </h4>
            <ul
              style={{
                paddingLeft: "18px",
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              {project.contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom Area: Stack & Links */}
      <div style={{ marginTop: "16px" }}>
        {/* Technologies */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          {project.stack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "14px",
            borderTop: "1px solid var(--border-light)",
            fontSize: "0.875rem",
          }}
        >
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: 600,
                color: "var(--accent-primary)",
                transition: "color 0.15s ease",
              }}
            >
              <span>View Live App</span>
              <Icons.ExternalLink size={14} />
            </a>
          ) : (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--text-muted)",
                fontSize: "0.8125rem",
              }}
            >
              <Icons.CheckCircle2 size={14} />
              <span>Verified Implementation</span>
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              <Icons.Github size={15} />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
