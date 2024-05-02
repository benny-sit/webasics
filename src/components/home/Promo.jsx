import Image from "next/image";
import React from "react";

export default function Promo() {
  return (
    <div
      dir="rtl"
      className="my-24 sm:my-48 flex flex-col items-center lg:flex-row lg:items-start justify-between w-full"
    >
      <div className="w-full max-w-[590px] mb-20">
        <h2 className="text-4xl border-b-2 border-b-w-cream w-fit inline">
          דלת הכניסה שלך לעולם התוכנה
        </h2>
        <p className="text-w-gray mt-2">הנושאים שנעבור בקורס:</p>
        <ul>
          <li className="flex items-center gap-5">
            <Image
              src={"/icons/ion_checkmark.svg"}
              width={43}
              height={43}
              alt="checkmark"
            />
            <span className="text-xl">שימוש בסביבת העבודה ותוספים נלווים</span>
          </li>
          <li className="flex items-center gap-5">
            <Image
              src={"/icons/ion_checkmark.svg"}
              width={43}
              height={43}
              alt="checkmark"
            />
            <span className="text-xl">
              תכנות ב-Javascript, לא נדרש ידע מקדים
            </span>
          </li>
          <li className="flex items-center gap-5">
            <Image
              src={"/icons/ion_checkmark.svg"}
              width={43}
              height={43}
              alt="checkmark"
            />
            <span className="text-xl">למידה היקפית על עולם ה-web</span>
          </li>
          <li className="flex items-center gap-5">
            <Image
              src={"/icons/ion_checkmark.svg"}
              width={43}
              height={43}
              alt="checkmark"
            />
            <span className="text-xl">הכרת עולם ה-Ai והכלים השונים</span>
          </li>
          <li className="flex items-center gap-5">
            <Image
              src={"/icons/ion_checkmark.svg"}
              width={43}
              height={43}
              alt="checkmark"
            />
            <span className="text-xl">יישום הידע הנלמד בקורס</span>
          </li>
          <li className="flex items-center gap-5">
            <Image
              src={"/icons/ion_checkmark.svg"}
              width={43}
              height={43}
              alt="checkmark"
            />
            <span className="text-xl">
              היכרות עם git ו-github וכלים שימושיים אחרים
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full grid place-items-center max-w-[860px] px-4 pb-4 pt-10 bg-[#FFFEF0] rounded-2xl">
          <Image
            src={"/home/webTech3d.png"}
            loading="lazy"
            width={2246}
            height={1352}
            alt="js logo, html5 logo, chrome logo"
            className="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
