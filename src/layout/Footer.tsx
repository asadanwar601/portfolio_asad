"use client";

import React from "react";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Bio & Positioning */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "6px",
                  backgroundColor: "var(--text-primary)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                }}
              >
                AA
              </div>
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "20px",
                maxWidth: "360px",
              }}
            >
              Senior Software Engineer building production GenAI systems, RAG retrieval pipelines, and enterprise frontend architecture.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-light)",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
              }}
            >
              <span className="status-dot" />
              <span>Available for AI &amp; Frontend Opportunities</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/" className="footer-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="footer-nav-link">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-nav-link">
                  Services &amp; Solutions
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-nav-link">
                  About &amp; Verified Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-nav-link">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="footer-col-title">Direct Contact</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <Link
                href="/contact#form"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  transition: "color 0.15s ease",
                }}
              >
                <Icons.Mail size={16} />
                <span>{PERSONAL_INFO.email}</span>
              </Link>
              <a
                href={PERSONAL_INFO.calendarScheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  transition: "color 0.15s ease",
                }}
              >
                <Icons.Calendar size={16} />
                <span>Schedule Call (Google Calendar)</span>
                <Icons.ArrowUpRight size={13} />
              </a>
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  transition: "color 0.15s ease",
                }}
              >
                <Icons.WhatsApp size={16} />
                <span>Chat on WhatsApp</span>
                <Icons.ArrowUpRight size={13} />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.9375rem",
                  color: "var(--text-muted)",
                  transition: "color 0.15s ease",
                }}
              >
                <Icons.Phone size={16} />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.9375rem",
                  color: "var(--text-muted)",
                }}
              >
                <Icons.MapPin size={16} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "24px",
              }}
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.15s ease",
                }}
              >
                <Icons.Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.15s ease",
                }}
              >
                <Icons.Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All verified career and project credentials documented faithfully.
          </div>
          <div>
            Crafted with Next.js, TypeScript &amp; Vanilla CSS Design System
          </div>
        </div>
      </div>
    </footer>
  );
}
