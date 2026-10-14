"use client";

import React from "react";
import Link from "next/link";
import { SERVICES, CLIENT_PROCESS, WHY_WORK_WITH_ME, PERSONAL_INFO } from "@/data/portfolioData";
import { Icons } from "@/components/Icons";

export default function ServicesPage() {
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
      {/* 1. HERO SECTION */}
      <section
        style={{
          paddingTop: "64px",
          paddingBottom: "56px",
          borderBottom: "1px solid var(--border-light)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "840px" }}>
            <span className="section-tagline">AI Solutions &amp; Consulting</span>
            <h1 className="heading-hero" style={{ marginBottom: "20px" }}>
              AI solutions, built around <span style={{ color: "var(--accent-primary)" }}>your business</span>.
            </h1>
            <p className="subheadline" style={{ marginBottom: "32px" }}>
              I help businesses eliminate repetitive manual work, reduce operational costs, and scale faster using AI — from strategy and architecture through full deployment. Every system is tailored to how your business actually operates, not a generic template dropped into your stack.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <a
                href={PERSONAL_INFO.calendarScheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "12px 24px" }}
              >
                <Icons.Calendar size={16} />
                <span>Schedule Call (Google Calendar)</span>
                <Icons.ArrowUpRight size={14} />
              </a>
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: "12px 20px" }}
              >
                <Icons.WhatsApp size={16} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/contact#form"
                className="btn btn-secondary"
                style={{ padding: "12px 20px" }}
              >
                <Icons.Mail size={16} />
                <span>Email Asad</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-wrap">
            <span className="section-tagline">Core Services</span>
            <h2 className="heading-section">Specialized AI &amp; Software Solutions</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "8px", fontSize: "1rem" }}>
              Four focus areas, each solving a distinct set of operational and software bottlenecks.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "32px",
            }}
          >
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="card-base card-hoverable"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "36px",
                  position: "relative",
                }}
              >
                <div>
                  {/* Top Header with Step Counter */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        backgroundColor: "var(--bg-tag-accent)",
                        color: "var(--accent-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid var(--border-accent)",
                      }}
                    >
                      {getServiceIcon(service.icon)}
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="heading-card" style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-accent)",
                      fontWeight: 600,
                      marginBottom: "16px",
                      lineHeight: 1.45,
                    }}
                  >
                    {service.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div style={{ marginBottom: "24px" }}>
                    <h4
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--text-muted)",
                        marginBottom: "12px",
                      }}
                    >
                      What We Deliver
                    </h4>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {service.deliverables.map((del, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "0.875rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.5,
                          }}
                        >
                          <Icons.CheckCircle2
                            size={16}
                            style={{ color: "var(--accent-primary)", flexShrink: 0, marginTop: "2px" }}
                          />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stack & Inquire Link */}
                <div style={{ paddingTop: "20px", borderTop: "1px solid var(--border-light)" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "20px",
                    }}
                  >
                    {service.stack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="btn btn-secondary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <span>Inquire About This Solution</span>
                    <Icons.ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STRUCTURED CLIENT PROCESS */}
      <section style={{ padding: "72px 0", borderBottom: "1px solid var(--border-light)", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="section-header-wrap">
            <span className="section-tagline">Delivery Process</span>
            <h2 className="heading-section">How We Work Together</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "8px", fontSize: "1rem" }}>
              A structured, transparent path from kickoff to production deployment. You always know what is being built at every stage.
            </p>
          </div>

          <div className="process-grid">
            {CLIENT_PROCESS.map((p) => (
              <div
                key={p.step}
                className="card-base"
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--accent-primary)",
                      fontFamily: "var(--font-mono)",
                      marginBottom: "12px",
                    }}
                  >
                    {p.step}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY WORK WITH ME */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-wrap">
            <span className="section-tagline">Why Partner With Me</span>
            <h2 className="heading-section">Engineered for Production Rigor</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "8px", fontSize: "1rem" }}>
              The engineering standards, security principles, and accountability behind every solution.
            </p>
          </div>

          <div className="why-work-grid">
            {WHY_WORK_WITH_ME.map((reason) => (
              <div key={reason.title} className="card-base" style={{ padding: "28px" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "10px" }}>
                  {reason.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section style={{ paddingTop: "72px" }}>
        <div className="container">
          <div className="cta-banner-card">
            <h2 className="heading-section" style={{ marginBottom: "16px", maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
              Ready to eliminate manual bottlenecks or deploy AI agents?
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
              Start with a focused 30-minute intro call. We&apos;ll walk through your workflows, technical requirements, and where AI can create immediate leverage.
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
