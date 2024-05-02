import Image from "next/image";
import React from "react";

export default function MoreDetails() {
  return (
    <div dir="rtl" className="my-44 flex flex-col items-center">
      <h2 className="text-5xl md:text-7xl text-center">רוצים לדעת עוד?</h2>
      <p className="text-3xl md:text-4xl text-w-gray mt-8 text-center">
        מוזמנים למלא את הפרטים בטופס, נחזור אליכם תוך יום עסקים.
      </p>
      <div className="w-full max-w-[360px] my-32 relative group/cta">
        <div className="absolute inset-0 bg-w-blue rounded-xl"></div>
        <div className="absolute inset-0 bg-w-red rounded-xl group-hover/cta:-translate-x-1 group-hover/cta:-translate-y-1 transition-transform"></div>
        <button className="flex items-center justify-center gap-3 relative rounded-[11px] tracking-tight text-3xl max-w-[360px] w-full bg-w-cream-light py-5 active:bg-w-cream   group-hover/cta:-translate-x-2 group-hover/cta:-translate-y-2 transition-transform ease-out">
          <span>למילוי פרטים</span>
          <Image
            src={"/icons/arrow_insert.svg"}
            width={36}
            height={36}
            alt="arrow insert"
            className="group-hover/cta:-translate-x-2 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
