import React from "react";
import InfoCard from "./InfoCard";

const InfoCardQuestion = () => (
  <InfoCard icon={"/icons/question.svg"}>
    הקורס מיועד לתלמידי חטיבה ותיכון,לא נדרש ידע מקדים בכלל.
    <br />
    בעיקר עבור גילאי 13-16.
  </InfoCard>
);
const InfoCardBuilding = () => (
  <InfoCard icon={"/icons/building.svg"}>
    הקורס מתקיים באזור מרכז, באופן פרונטלי. מספר המקומות מוגבל, תשאירו פרטים
    ונחזור אליכם בהקדם עם פרטים נוספים.
  </InfoCard>
);
const InfoCardTime = () => (
  <InfoCard icon={"/icons/time.svg"}>
    משך הקורס הוא 13 מפגשים, אחת לשבוע כל מפגש באורך של שעה וחצי.
    <br />
    הקורס יתקיים בחודשי הקיץ. כל מפגש נלמד וניישם את הידע.
  </InfoCard>
);

export default function Info() {
  return (
    <div className="w-full">
      <div className="flex-col w-full hidden 2xl:flex">
        <div className="flex justify-center -mb-[15%]">
          <InfoCardQuestion />
        </div>
        <div className="flex justify-between">
          <InfoCardBuilding />
          <InfoCardTime />
        </div>
      </div>
      <div className="hidden lg:flex 2xl:hidden items-center justify-center">
        <div className="-mr-[65px]">
          <InfoCardBuilding />
        </div>
        <div className="flex flex-col gap-5 -ml-[65px]">
          <InfoCardQuestion />
          <InfoCardTime />
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-5 items-center">
        <InfoCardQuestion />
        <InfoCardBuilding />
        <InfoCardTime />
      </div>
    </div>
  );
}
