"use client";
import { event } from "@/utils/gtag";
import Image from "next/image";
import React from "react";

const REGISTRATION_URL = process.env.NEXT_PUBLIC_REGISTRATION_URL;

export default function MoreDetailsButton() {
  return (
    <div className="w-full max-w-[360px] my-32 relative group/cta">
      <div className="absolute inset-0 bg-w-blue rounded-xl"></div>
      <div className="absolute inset-0 bg-w-red rounded-xl group-hover/cta:-translate-x-1 group-hover/cta:-translate-y-1 transition-transform"></div>
      <a
        href={REGISTRATION_URL}
        onClick={() =>
          event({
            action: "more_details_button",
            category: "registration-click",
            label: "Register",
            value: 3,
          })
        }
        target="_blank"
        className="flex items-center justify-center gap-3 relative rounded-[11px] tracking-tight text-3xl max-w-[360px] w-full bg-w-cream-light py-5 active:bg-w-cream   group-hover/cta:-translate-x-2 group-hover/cta:-translate-y-2 transition-transform ease-out"
      >
        <span>למילוי פרטים</span>
        <Image
          src={"/icons/arrow_insert.svg"}
          width={36}
          height={36}
          alt="arrow insert"
          className="group-hover/cta:-translate-x-2 transition-transform"
        />
      </a>
    </div>
  );
}
