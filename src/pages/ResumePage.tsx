"use client";

import React from "react";
import Link from "next/link";
import {
  PERSONAL_INFO,
  EXPERIENCES,
  EDUCATION_LIST,
  PROJECTS,
  CERTIFICATIONS,
  LANGUAGES,
} from "@/data/portfolioData";
import PrintButton from "@/components/PrintButton";

export default function ResumePage() {
  return (
    <div style={{ padding: "64px 0 96px" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Top Control Bar */}
        <div
          className="no-print"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
            padding: "16px 20px",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-light)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="/about"
              className="btn btn-secondary"
              style={{ padding: "6px 12px", fontSize: "0.8125rem" }}
            >
              ← Back to About
            </Link>
            <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              Official Verified Resume
            </span>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <PrintButton />
          </div>
        </div>

        {/* Paper Document Container */}
        <div className="resume-paper">
          {/* Header */}
          <header style={{ borderBottom: "2px solid #1f2937", paddingBottom: "24px", marginBottom: "28px" }}>
            <h1
              style={{
                fontSize: "2.25rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#111827",
                marginBottom: "4px",
              }}
            >
              {PERSONAL_INFO.name}
            </h1>
            <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--accent-primary)", marginBottom: "12px" }}>
              Senior Software Engineer | AI/GenAI | Vue.js · React.js · TypeScript · AI-Assisted Workflows
            </div>
            <div className="resume-contact-row">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <Link href="/contact#form" style={{ color: "var(--accent-primary)" }}>
                {PERSONAL_INFO.email}
              </Link>
              <span>•</span>
              <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-primary)" }}>
                WhatsApp: {PERSONAL_INFO.phone}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.calendarScheduleUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-primary)" }}>
                Schedule Call
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-primary)" }}>
                GitHub
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-primary)" }}>
                LinkedIn
              </a>
            </div>
          </header>

          {/* Executive Summary */}
          <section className="resume-section-divider">
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#111827",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "4px",
                marginBottom: "10px",
              }}
            >
              Summary
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.65 }}>
              Senior Software Engineer with 8+ years building scalable, enterprise-grade web applications across FinTech, workflow automation, and hospitality using Vue.js, TypeScript, and React — plus hands-on experience designing and shipping AI/GenAI systems in Python: Retrieval-Augmented Generation (RAG) pipelines, multi-agent workflows, vector search, and LLM-powered applications using LangChain, CrewAI, Qdrant, and Groq. Combines deep frontend architecture and component-driven design with full-stack and AI product engineering — from UI systems and state management to RAG pipelines, agent orchestration, and API integration. Early adopter of AI-assisted development workflows (Claude Code, GitHub Copilot, Cursor).
            </p>
          </section>

          {/* Core Skills */}
          <section className="resume-section-divider">
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#111827",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "4px",
                marginBottom: "12px",
              }}
            >
              Core Skills
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem", lineHeight: 1.6 }}>
              <div>
                <strong>AI &amp; GenAI:</strong> LLM Applications, RAG (Hybrid dense + lexical), AI Agents &amp; Multi-Agent Systems, LangChain, CrewAI, Vector Search (Qdrant, ChromaDB), Embeddings, BM25 / Reciprocal Rank Fusion (RRF), Cross-Encoder Reranking (FlashRank), Text-to-SQL, Groq, LiteLLM, Prompt Engineering.
              </div>
              <div>
                <strong>Frontend:</strong> Vue.js (Vue 3 / Composition API), React, TypeScript, JavaScript (ES6+), Quasar, Pinia, TanStack Query, Vue Router, PrimeVue, Vuetify, Tailwind CSS, Bootstrap, HTML5/CSS3.
              </div>
              <div>
                <strong>Backend &amp; Data:</strong> Python, FastAPI, Node.js, NestJS, AdonisJS, PostgreSQL, Prisma, REST APIs, JWT/OTP Auth, Docker, SQLite, MySQL.
              </div>
              <div>
                <strong>Tools &amp; Delivery:</strong> Git, GitHub, GitLab, CI/CD, Cypress (E2E), Agile/Scrum, Component-Driven Architecture, Design Systems, Performance Optimization, Antigravity, Cursor, Copilot.
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="resume-section-divider">
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#111827",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "4px",
                marginBottom: "16px",
              }}
            >
              Professional Experience
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="resume-job-card">
                  <div className="resume-job-header">
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#111827" }}>
                      {exp.role} — <span style={{ color: "var(--accent-primary)" }}>{exp.company}</span>
                    </div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4b5563" }}>
                      {exp.period}
                    </div>
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "#6b7280", marginBottom: "8px" }}>
                    {exp.location} · {exp.workType} {exp.teamSize && `· ${exp.teamSize}`}
                  </div>
                  <ul className="resume-bullet-list">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi}>{h}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "6px", fontSize: "0.8125rem", color: "#6b7280" }}>
                    <strong>Stack:</strong> {exp.stack.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI & GenAI Projects */}
          <section className="resume-section-divider">
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#111827",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "4px",
                marginBottom: "16px",
              }}
            >
              Featured AI &amp; Software Projects
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#111827" }}>
                      {proj.title}
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent-primary)" }}>
                      {proj.status}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "#4b5563", marginBottom: "4px" }}>
                    <strong>Stack:</strong> {proj.stack.join(" • ")}
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.55 }}>
                    {proj.problem} {proj.architecture}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#111827",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "4px",
                marginBottom: "12px",
              }}
            >
              Education
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem" }}>
              {EDUCATION_LIST.map((edu, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <strong>{edu.degree}</strong> — {edu.institution}
                  </div>
                  <div style={{ color: "#4b5563" }}>
                    {edu.period} | <strong>{edu.score}</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Languages */}
          <section>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#111827",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "4px",
                marginBottom: "12px",
              }}
            >
              Certifications &amp; Languages
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.875rem", color: "#374151" }}>
              <div>
                <strong>Certifications:</strong> {CERTIFICATIONS.map((c) => c.name).join(" • ")}
              </div>
              <div>
                <strong>Languages:</strong> {LANGUAGES.map((l) => `${l.name} (${l.level})`).join(" • ")}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
