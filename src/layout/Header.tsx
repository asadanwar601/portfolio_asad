"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="header-root">
      <div className="container header-container">
        {/* Brand / Logo */}
        <Link href="/" className="header-brand">
          <div className="header-brand-logo">AA</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              {PERSONAL_INFO.name}
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                letterSpacing: "-0.01em",
              }}
            >
              AI &amp; Frontend Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav header-nav">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="header-nav-link"
                style={{
                  fontWeight: active ? 600 : 500,
                  color: active ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                {link.label}
                {active && <span className="header-nav-indicator" />}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action CTA */}
        <div className="desktop-nav header-actions">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="header-icon-btn"
          >
            <Icons.Github size={18} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="header-icon-btn"
          >
            <Icons.Linkedin size={18} />
          </a>
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="header-icon-btn"
            style={{ color: "#16a34a" }}
          >
            <Icons.WhatsApp size={18} />
          </a>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              padding: "8px 16px",
              fontSize: "0.875rem",
            }}
          >
            <span>Let&apos;s Talk</span>
            <Icons.ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1rem",
                  fontWeight: active ? 600 : 500,
                  color: active ? "var(--accent-primary)" : "var(--text-primary)",
                  padding: "8px 0",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div
            style={{
              borderTop: "1px solid var(--border-light)",
              paddingTop: "16px",
              display: "flex",
              gap: "12px",
            }}
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              <Icons.Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              <Icons.Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, color: "#16a34a" }}
            >
              <Icons.WhatsApp size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>Let&apos;s Talk</span>
            <Icons.ArrowRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
