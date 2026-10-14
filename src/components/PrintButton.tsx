"use client";

import React from "react";
import { Icons } from "./Icons";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn btn-primary"
      style={{ padding: "8px 16px", fontSize: "0.875rem" }}
    >
      <Icons.Download size={16} />
      <span>Print / Save as PDF</span>
    </button>
  );
}
