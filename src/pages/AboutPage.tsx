"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  EXPERIENCES,
  EDUCATION_LIST,
  CERTIFICATIONS,
  LANGUAGES,
} from "@/data/portfolioData";
import { Icons } from "@/components/Icons";

export default function AboutPage() {
  return (
    <div style={{ paddingBottom: "96px" }}>
      {/* Page Header */}
      <section
        style={{
          paddingTop: "64px",
          paddingBottom: "56px",
          borderBottom: "1px solid var(--border-light)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div>
              <span className="section-tagline">About &amp; Experience</span>
              <h1 className="heading-hero" style={{ marginBottom: "20px" }}>
                Engineering reliable software and intelligent systems.
              </h1>
              <p className="subheadline">
                Senior Software Engineer with 8+ years building enterprise web applications, reusable design systems, and production Generative AI pipelines in Python.
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "240px",
                  height: "260px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--border-card)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <Image
                  src="/images/asad-anwar.jpg"
                  alt="Asad Anwar - Senior Software Engineer"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Philosophy */}
      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
            }}
          >
            {/* Story */}
            <div>
              <h2 className="heading-section" style={{ marginBottom: "20px" }}>
                My Journey &amp; Focus
              </h2>
              <div
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p>
                  I have spent over 8 years in the software industry building scalable, high-throughput web applications across FinTech, workflow automation, and booking systems. In roles ranging from independent consulting to leading frontend initiatives on a 24-person enterprise team, I have developed a strong appreciation for modular component architecture, state management, and resilient API contracts.
                </p>
                <p>
                  As artificial intelligence evolved from experimental notebooks into production infrastructure, I expanded my focus into <strong>AI and Generative AI engineering</strong>. Rather than treating LLMs as mere black boxes, I apply rigorous software engineering principles to AI systems: building <strong>hybrid RAG pipelines</strong> with BM25 lexical search and PubMedBERT embeddings, designing <strong>multi-agent workflows</strong> with CrewAI, and implementing claim-level verification to prevent hallucinations.
                </p>
                <p>
                  Having a deep frontend background allows me to design AI applications that users actually enjoy using: responsive streaming tokens, clear evidence provenance, thoughtful latency indicators, and rock-solid error recovery.
                </p>
              </div>
            </div>

            {/* Core Principles */}
            <div>
              <h2 className="heading-section" style={{ marginBottom: "20px" }}>
                Engineering Principles
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="card-base" style={{ padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <Icons.CheckCircle2 size={18} style={{ color: "var(--accent-primary)" }} />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      Grounded Provenance over Hallucinations
                    </h3>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    In production AI, accuracy is everything. I engineer hybrid retrieval systems combining lexical BM25 and dense semantic search with cross-encoder rerankers, ensuring every generated response is backed by traceable source evidence.
                  </p>
                </div>

                <div className="card-base" style={{ padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <Icons.Layers size={18} style={{ color: "var(--accent-primary)" }} />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      Component-Driven &amp; Reusable Architecture
                    </h3>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    Duplicated UI is tech debt waiting to happen. I have architected platform-wide component libraries adopted across 5 enterprise repositories, standardizing patterns and reducing debugging overhead.
                  </p>
                </div>

                <div className="card-base" style={{ padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <Icons.Cpu size={18} style={{ color: "var(--accent-primary)" }} />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      AI-Assisted Engineering Acceleration
                    </h3>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    I actively leverage cutting-edge agentic development tools (Antigravity, Cursor, Claude Code, GitHub Copilot) to accelerate refactoring, automate test suites, and deliver production features with high velocity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="experience" className="section-padding">
        <div className="container">
          <div className="section-header-wrap">
            <span className="section-tagline">Career History</span>
            <h2 className="heading-section">Verified Professional Experience</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "8px" }}>
              Every role and contribution documented below is drawn directly from verified employment records.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="card-base"
                style={{
                  padding: "32px",
                  position: "relative",
                  borderLeft: idx === 0 ? "4px solid var(--accent-primary)" : "1px solid var(--border-card)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
                      {exp.role} <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>at</span> {exp.company}
                    </h3>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                      {exp.location} · {exp.workType} {exp.teamSize && `· ${exp.teamSize}`}
                    </div>
                  </div>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "4px 12px",
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-light)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "18px",
                    fontWeight: 500,
                  }}
                >
                  {exp.summary}
                </p>

                <div style={{ marginBottom: "20px" }}>
                  <h4
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      color: "var(--text-muted)",
                      marginBottom: "10px",
                    }}
                  >
                    Key Contributions &amp; Outcomes
                  </h4>
                  <ul
                    style={{
                      paddingLeft: "20px",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.stack.map((item) => (
                    <span key={item} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education, Certifications & Languages */}
      <section style={{ padding: "72px 0", borderBottom: "1px solid var(--border-light)", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "36px",
            }}
          >
            {/* Education */}
            <div className="card-base">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <Icons.GraduationCap size={22} style={{ color: "var(--accent-primary)" }} />
                <h3 className="heading-card">Education</h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {EDUCATION_LIST.map((edu, idx) => (
                  <div key={idx} style={{ borderBottom: idx < EDUCATION_LIST.length - 1 ? "1px solid var(--border-light)" : "none", paddingBottom: idx < EDUCATION_LIST.length - 1 ? "16px" : 0 }}>
                    <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                      {edu.degree}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                      {edu.institution}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "6px" }}>
                      <span>{edu.period}</span>
                      <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Languages */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="card-base">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <Icons.FileText size={20} style={{ color: "var(--accent-primary)" }} />
                  <h3 className="heading-card">Technical Certifications</h3>
                </div>
                <ul
                  style={{
                    paddingLeft: "18px",
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert.name}>{cert.name}</li>
                  ))}
                </ul>
              </div>

              <div className="card-base">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <Icons.CheckCircle2 size={20} style={{ color: "var(--accent-primary)" }} />
                  <h3 className="heading-card">Languages</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name} style={{ fontSize: "0.875rem" }}>
                      <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>{lang.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{lang.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download & Contact CTA */}
      <section id="resume" style={{ paddingTop: "72px" }}>
        <div className="container">
          <div className="cta-banner-card">
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "var(--bg-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                color: "var(--accent-primary)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Icons.Download size={22} />
            </div>

            <h2 className="heading-section" style={{ marginBottom: "12px" }}>
              Download Verified Resume
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                maxWidth: "520px",
                lineHeight: 1.6,
                marginBottom: "28px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Complete verified employment history, technical stack details, and AI/GenAI project references.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <Link
                href="/resume"
                className="btn btn-primary"
                style={{ padding: "12px 24px" }}
              >
                <Icons.FileText size={18} />
                <span>View Formatted Resume</span>
              </Link>

              <Link href="/contact" className="btn btn-secondary" style={{ padding: "12px 24px" }}>
                <Icons.Mail size={18} />
                <span>Email Asad</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
