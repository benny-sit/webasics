import Image from "next/image";
import React from "react";
import MoreDetailsButton from "./MoreDetailsButton";

export default function MoreDetails() {
  return (
    <div dir="rtl" className="my-44 flex flex-col items-center">
      <h2 className="text-5xl md:text-7xl text-center">רוצים לדעת עוד?</h2>
      <p className="text-3xl md:text-4xl text-w-gray mt-8 text-center">
        מוזמנים למלא את הפרטים בטופס, נחזור אליכם תוך יום עסקים.
      </p>
      <MoreDetailsButton />
    </div>
  );
}
