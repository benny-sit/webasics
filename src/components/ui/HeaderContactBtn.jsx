"use client";
import { event } from "@/utils/gtag";
import React from "react";

const REGISTRATION_URL = process.env.NEXT_PUBLIC_REGISTRATION_URL;

export default function HeaderContactBtn() {
  return (
    <a
      href={REGISTRATION_URL}
      className="link-style"
      onClick={() =>
        event({
          action: "header_contact_button",
          category: "registration-click",
          label: "Register",
          value: 1,
        })
      }
    >
      צור קשר
    </a>
  );
}
