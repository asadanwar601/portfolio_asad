"use client";

import React, { useState } from "react";
import { Icons } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="Direct WhatsApp Contact" className="whatsapp-floating-wrap">
      {/* Tooltip Label */}
      <div
        className="whatsapp-tooltip"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateX(0)" : "translateX(8px)",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#22c55e",
            display: "inline-block",
          }}
        />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={PERSONAL_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Asad Anwar on WhatsApp (+91 7278903558)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="whatsapp-btn"
        style={{
          boxShadow: isHovered
            ? "0 8px 24px rgba(37, 211, 102, 0.45)"
            : "0 4px 16px rgba(37, 211, 102, 0.35)",
          transform: isHovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        <Icons.WhatsApp size={30} />
      </a>
    </aside>
  );
}
