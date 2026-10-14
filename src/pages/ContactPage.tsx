"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Icons } from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    delivered?: boolean;
    requiresDirectEmail?: boolean;
    message: string;
  } | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = "Please enter a subject (minimum 3 characters).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please write a message of at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitResult({
          success: false,
          message: data.error || "Failed to submit message. Please try again.",
        });
      } else {
        setSubmitResult({
          success: true,
          delivered: data.delivered,
          requiresDirectEmail: data.requiresDirectEmail,
          message: data.message,
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        message: "Network error occurred while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.calendarEmail || PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || "Engineering Opportunity / Inquiry"
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
  )}`;

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
          <div style={{ maxWidth: "760px" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-accent)",
                marginBottom: "8px",
                display: "block",
              }}
            >
              Get in Touch
            </span>
            <h1 className="heading-hero" style={{ marginBottom: "16px" }}>
              Let&apos;s Start a Conversation
            </h1>
            <p className="subheadline">
              Whether you are looking to automate critical business operations, build autonomous AI agents, deploy grounded enterprise RAG systems, or discuss a project — I would welcome the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ paddingTop: "64px" }}>
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Contact Details & Channels */}
            <div>
              <h2 className="heading-section" style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
                Contact Information
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "32px",
                }}
              >
                Feel free to email me directly, connect via LinkedIn, or explore my source code on GitHub.
              </p>

              <div className="contact-channels-wrap">
                {/* 1. Email -> Redirects to Contact Form */}
                <a
                  href="#form"
                  className="card-base card-hoverable"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      backgroundColor: "#eff6ff",
                      color: "#1d4ed8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icons.Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                      Email Inquiry
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                {/* 2. Call -> Schedule with Asad on Google Calendar (asadanwar601@gmail.com) */}
                <a
                  href={PERSONAL_INFO.calendarScheduleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-base card-hoverable"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                    border: "1px solid var(--border-accent)",
                    backgroundColor: "var(--bg-tag-accent)",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      backgroundColor: "#ffffff",
                      color: "#1d4ed8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <Icons.Calendar size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-accent)", textTransform: "uppercase", fontWeight: 600 }}>
                      Schedule Call
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span>Schedule on Google Calendar</span>
                      <Icons.ArrowUpRight size={15} />
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                      Adds meeting to both your calendar &amp; Asad&apos;s (asadanwar601@gmail.com)
                    </div>
                  </div>
                </a>

                {/* 3. WhatsApp Direct Chat */}
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-base card-hoverable"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      backgroundColor: "#f0fdf4",
                      color: "#16a34a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icons.WhatsApp size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#16a34a", textTransform: "uppercase", fontWeight: 600 }}>
                      WhatsApp
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span>Chat on WhatsApp ({PERSONAL_INFO.phone})</span>
                      <Icons.ArrowUpRight size={15} />
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                      Direct messaging for quick project questions &amp; scoping
                    </div>
                  </div>
                </a>

                {/* 4. Direct Phone Call */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="card-base card-hoverable"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icons.Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                      Direct Phone
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                <div
                  className="card-base"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      backgroundColor: "#faf5ff",
                      color: "#7e22ce",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icons.MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                      Location
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      {PERSONAL_INFO.location}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                      Available for Remote, Hybrid &amp; On-Site Roles
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
                  Verified Profiles
                </h3>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1 }}
                  >
                    <Icons.Github size={18} />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1 }}
                  >
                    <Icons.Linkedin size={18} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div id="form" className="card-base" style={{ padding: "36px", scrollMarginTop: "90px" }}>
              <h2 className="heading-section" style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
                Send a Message
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", marginBottom: "28px" }}>
                Fill out the form below to initiate an inquiry or project discussion.
              </p>

              {submitResult ? (
                <div
                  style={{
                    backgroundColor: submitResult.success ? "#f0fdf4" : "#fef2f2",
                    border: `1px solid ${submitResult.success ? "#bbf7d0" : "#fecaca"}`,
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    {submitResult.success ? (
                      <Icons.CheckCircle2 size={24} style={{ color: "#16a34a", flexShrink: 0 }} />
                    ) : (
                      <Icons.AlertCircle size={24} style={{ color: "#dc2626", flexShrink: 0 }} />
                    )}
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "1rem",
                          color: submitResult.success ? "#166534" : "#991b1b",
                          marginBottom: "4px",
                        }}
                      >
                        {submitResult.success
                          ? submitResult.delivered
                            ? "Message Delivered"
                            : "Message Prepared"
                          : "Submission Failed"}
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: submitResult.success ? "#14532d" : "#7f1d1d",
                          lineHeight: 1.5,
                        }}
                      >
                        {submitResult.message}
                      </p>
                    </div>
                  </div>

                  {submitResult.requiresDirectEmail && (
                    <div style={{ paddingTop: "8px", borderTop: "1px solid #bbf7d0" }}>
                      <a
                        href={mailtoUrl}
                        className="btn btn-primary"
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        <Icons.Mail size={16} />
                        <span>Send Now via Email Client</span>
                        <Icons.ArrowUpRight size={16} />
                      </a>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitResult(null);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    style={{
                      marginTop: "8px",
                      background: "none",
                      border: "none",
                      color: "var(--text-muted)",
                      fontSize: "0.8125rem",
                      cursor: "pointer",
                      textAlign: "center",
                      textDecoration: "underline",
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        style={{
                          display: "block",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "var(--text-primary)",
                          marginBottom: "6px",
                        }}
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Arsh Asad"
                        className={`form-input-text ${errors.name ? "form-input-error" : ""}`}
                      />
                      {errors.name && (
                        <span style={{ fontSize: "0.75rem", color: "#dc2626", marginTop: "4px", display: "block" }}>
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          display: "block",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "var(--text-primary)",
                          marginBottom: "6px",
                        }}
                      >
                        Your Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. asadwiseboxs@gmail.com"
                        className={`form-input-text ${errors.email ? "form-input-error" : ""}`}
                      />
                      {errors.email && (
                        <span style={{ fontSize: "0.75rem", color: "#dc2626", marginTop: "4px", display: "block" }}>
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        style={{
                          display: "block",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "var(--text-primary)",
                          marginBottom: "6px",
                        }}
                      >
                        Subject *
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Opportunity: Senior AI Engineer Role"
                        className={`form-input-text ${errors.subject ? "form-input-error" : ""}`}
                      />
                      {errors.subject && (
                        <span style={{ fontSize: "0.75rem", color: "#dc2626", marginTop: "4px", display: "block" }}>
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        style={{
                          display: "block",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "var(--text-primary)",
                          marginBottom: "6px",
                        }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe the role, team, or project requirements..."
                        className={`form-input-text ${errors.message ? "form-input-error" : ""}`}
                        style={{ resize: "vertical" }}
                      />
                      {errors.message && (
                        <span style={{ fontSize: "0.75rem", color: "#dc2626", marginTop: "4px", display: "block" }}>
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{
                        padding: "12px 24px",
                        width: "100%",
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    >
                      {isSubmitting ? (
                        <span>Validating &amp; Sending...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Icons.ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
