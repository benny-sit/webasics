import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="isolate relative w-full flex flex-col items-center"
    >
      <div className="w-screen h-full absolute -z-10 bg-[#FCFCB2]/25"></div>
      <Image
        src={"/webasics/webasics-icon.svg"}
        width={91}
        height={79}
        alt="icon webasics"
        className="relative mt-7 mb-11"
      />
      <p className="w-full">© כל הזכויות שמורות ל-webasics 2024</p>
      <div className="w-full bg-w-cream h-1 mt-2 mb-5"></div>
    </footer>
  );
}
