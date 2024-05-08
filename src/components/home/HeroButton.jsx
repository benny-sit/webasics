"use client";
import { event } from "@/utils/gtag";
import React from "react";

const REGISTRATION_URL = process.env.NEXT_PUBLIC_REGISTRATION_URL;

export default function HeroButton() {
  return (
    <div className="w-full max-w-[290px] mt-4 relative group/cta">
      <div className="absolute inset-0 bg-w-blue rounded-xl"></div>
      <div className="absolute inset-0 bg-w-red rounded-xl group-hover/cta:-translate-x-1 group-hover/cta:-translate-y-1 transition-transform"></div>
      <a
        target="_blank"
        href={REGISTRATION_URL}
        onClick={() =>
          event({
            action: "hero_button",
            category: "registration-click",
            label: "Register",
            value: 2,
          })
        }
        className="relative inline-block text-center rounded-[11px] max-w-[290px] w-full bg-w-cream-light py-4 text-xl active:bg-w-cream   group-hover/cta:-translate-x-2 group-hover/cta:-translate-y-2 transition-transform ease-out"
      >
        <span>להרשמה</span>
      </a>
    </div>
  );
}
