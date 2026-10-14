"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCES, SERVICES } from "@/data/portfolioData";
import { Icons } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Icons.Bot size={22} />;
      case "Database":
        return <Icons.Database size={22} />;
      case "Layers":
        return <Icons.Layers size={22} />;
      case "Workflow":
        return <Icons.Cpu size={22} />;
      default:
        return <Icons.Sparkles size={22} />;
    }
  };

  return (
    <div style={{ paddingBottom: "96px" }}>
      {/* 1. HERO SECTION WITH VERIFIED PORTRAIT */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Headline & Action CTAs */}
            <div>
              {/* Status Pill */}
              <div style={{ marginBottom: "20px" }}>
                <div className="badge-pill">
                  <span className="status-dot" />
                  <span>Senior Software Engineer · AI / GenAI &amp; Frontend Architecture</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="heading-hero" style={{ marginBottom: "20px" }}>
                Building intelligent applications and thoughtful digital experiences.
              </h1>

              {/* Subheadline */}
              <p className="subheadline" style={{ marginBottom: "32px" }}>
                I build production AI-powered applications, RAG systems, intelligent multi-agent workflows, and scalable web platforms — combining deep AI engineering with 8+ years of enterprise frontend architecture.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="hero-actions">
                <Link href="/projects" className="btn btn-primary" style={{ padding: "12px 24px" }}>
                  <span>Explore Projects</span>
                  <Icons.ArrowRight size={17} />
                </Link>

                <Link href="/services" className="btn btn-secondary" style={{ padding: "12px 20px" }}>
                  <span>Services I Provide</span>
                </Link>

                <Link href="/contact" className="btn btn-secondary" style={{ padding: "12px 20px" }}>
                  <span>Contact Me</span>
                </Link>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: "12px 16px" }}
                  aria-label="GitHub Profile"
                >
                  <Icons.Github size={17} />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: "12px 16px" }}
                  aria-label="LinkedIn Profile"
                >
                  <Icons.Linkedin size={17} />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Key Quick Proof Metrics */}
              <div className="hero-metrics-grid">
                <div>
                  <div className="metric-number">8+ Years</div>
                  <div className="text-meta">Enterprise Experience</div>
                </div>

                <div>
                  <div className="metric-number">Hybrid RAG</div>
                  <div className="text-meta">Dense + Lexical BM25</div>
                </div>

                <div>
                  <div className="metric-number">Multi-Agent</div>
                  <div className="text-meta">CrewAI, LangChain &amp; MCP</div>
                </div>

                <div>
                  <div className="metric-number">Vue &amp; React</div>
                  <div className="text-meta">Component Architecture</div>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Professional Portrait Card */}
            <div className="portrait-card-container">
              <div className="portrait-card">
                <div className="portrait-image-wrapper">
                  <Image
                    src="/images/asad-anwar.jpg"
                    alt="Asad Anwar - Senior Software Engineer & AI Architect"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  />
                </div>

                {/* Portrait Overlay Badge */}
                <div className="portrait-badge-overlay">
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)" }}>
                      {PERSONAL_INFO.name}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                      {PERSONAL_INFO.title} · Kolkata, India
                    </div>
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#15803d",
                    }}
                  >
                    <span className="status-dot" />
                    <span>Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "48px",
            }}
          >
            <div style={{ maxWidth: "640px" }}>
              <span className="section-tagline">Services &amp; Solutions</span>
              <h2 className="heading-section">AI Solutions, Built Around Your Business</h2>
              <p style={{ color: "var(--text-secondary)", marginTop: "8px", fontSize: "1rem" }}>
                Eliminate repetitive manual bottlenecks, automate customer engagement, and deploy grounded RAG knowledge systems with production engineering.
              </p>
            </div>

            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 600,
                color: "var(--accent-primary)",
                fontSize: "0.9375rem",
              }}
            >
              <span>Explore all services &amp; delivery process</span>
              <Icons.ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="card-base card-hoverable"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "28px",
                }}
              >
                <div>
                  <div className="service-icon-box">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="heading-card" style={{ fontSize: "1.15rem", marginBottom: "8px" }}>
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-accent)",
                      fontWeight: 600,
                      marginBottom: "12px",
                      lineHeight: 1.4,
                    }}
                  >
                    {service.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "20px",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "16px",
                    }}
                  >
                    {service.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag" style={{ fontSize: "0.7rem", padding: "3px 8px" }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/services"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--accent-primary)",
                    }}
                  >
                    <span>View Deliverables</span>
                    <Icons.ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SHOWCASE */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--border-light)", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "48px",
            }}
          >
            <div>
              <span className="section-tagline">Selected Work</span>
              <h2 className="heading-section">Featured Engineering Projects</h2>
            </div>

            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 600,
                color: "var(--accent-primary)",
                fontSize: "0.9375rem",
              }}
            >
              <span>View all {PROJECTS.length} verified projects</span>
              <Icons.ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "28px",
            }}
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} detailed={true} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL SKILLS MATRIX */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-wrap">
            <span className="section-tagline">Technical Expertise</span>
            <h2 className="heading-section">Organized Skills &amp; Stack</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "12px", fontSize: "1rem" }}>
              Practical experience delivering across AI engineering, enterprise frontend architecture, and full-stack systems.
            </p>
          </div>

          <div className="skills-grid">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title} className="card-base" style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                    marginBottom: "20px",
                    lineHeight: 1.5,
                  }}
                >
                  {cat.description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "0.875rem",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: skill.highlight ? "var(--accent-primary)" : "var(--border-card)",
                          marginTop: "8px",
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <span
                          style={{
                            fontWeight: skill.highlight ? 600 : 500,
                            color: "var(--text-primary)",
                          }}
                        >
                          {skill.name}
                        </span>
                        {skill.context && (
                          <span
                            style={{
                              display: "block",
                              fontSize: "0.75rem",
                              color: "var(--text-muted)",
                            }}
                          >
                            {skill.context}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT PREVIEW & CAREER CONTEXT */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--border-light)", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="about-preview-grid">
            <div>
              <span className="section-tagline">Background &amp; Track Record</span>
              <h2 className="heading-section" style={{ marginBottom: "20px" }}>
                From Enterprise Frontend Leadership to Applied AI Engineering
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  marginBottom: "16px",
                }}
              >
                Over the past 8+ years, I have architected and shipped enterprise-scale applications across FinTech, workflow automation, and booking systems. Most recently at <strong>EviDev LLP</strong>, I spearheaded frontend development across 3 core applications within a 5-repository platform for institutional asset trading.
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  marginBottom: "28px",
                }}
              >
                My work naturally expanded into Python-based GenAI engineering — building hybrid RAG systems with BM25 and PubMedBERT dense embeddings, multi-agent research pipelines with CrewAI, text-to-SQL systems, and omnichannel autonomous commerce agents via n8n and MCP.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/about" className="btn btn-primary">
                  <span>Read Full Background</span>
                  <Icons.ArrowRight size={16} />
                </Link>
                <Link href="/about#experience" className="btn btn-secondary">
                  <span>View Career Timeline</span>
                </Link>
              </div>
            </div>

            {/* Recent Career Milestone Card */}
            <div className="card-base" style={{ borderLeft: "4px solid var(--accent-primary)" }}>
              <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "6px" }}>
                Latest Verified Experience
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
                {EXPERIENCES[0].role} — {EXPERIENCES[0].company}
              </h3>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "16px" }}>
                {EXPERIENCES[0].period} · {EXPERIENCES[0].teamSize}
              </div>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
                {EXPERIENCES[0].summary}
              </p>
              <ul
                style={{
                  paddingLeft: "18px",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <li>Architected platform-wide component library adopted across 3 applications, eliminating duplicated UI development.</li>
                <li>Engineered multi-currency institutional transactions and real-time portfolio analytics.</li>
                <li>Accelerated engineering velocity by adopting Antigravity, Cursor, and agent-based workflows.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section style={{ paddingTop: "80px" }}>
        <div className="container">
          <div className="cta-banner-card">
            <h2 className="heading-section" style={{ marginBottom: "16px", maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
              Ready to eliminate manual bottlenecks or deploy production AI?
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                maxWidth: "540px",
                lineHeight: 1.6,
                marginBottom: "32px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Whether you need autonomous AI agents, workflow automations, grounded enterprise RAG, or high-performance frontend architecture — let&apos;s build something impactful together.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href={PERSONAL_INFO.calendarScheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "12px 28px" }}
              >
                <Icons.Calendar size={17} />
                <span>Schedule Call (Google Calendar)</span>
                <Icons.ArrowUpRight size={15} />
              </a>
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: "12px 24px" }}
              >
                <Icons.WhatsApp size={17} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link href="/services" className="btn btn-secondary" style={{ padding: "12px 24px" }}>
                <span>Review Services</span>
              </Link>
              <Link
                href="/contact#form"
                className="btn btn-secondary"
                style={{ padding: "12px 24px" }}
              >
                <Icons.Mail size={17} />
                <span>Email Asad</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
