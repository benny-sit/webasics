import Image from "next/image";
import React from "react";

export default function InfoCard({ icon, iconHeight = 113, children }) {
  return (
    <div dir="rtl" className="relative grid place-items-center">
      <Image
        src={"/webasics/polygon.svg"}
        width={588}
        height={509}
        alt="polygon"
      />
      <div className="absolute flex items-center flex-col h-full w-[calc((360/588)*100%)] sm:w-[calc((282/588)*100%)] py-3 md:py-5">
        <Image
          src={icon}
          width={97}
          height={iconHeight}
          alt="card icon"
          className={`sm:w-[97px] w-20 md:mt-4 sm:mt-2`}
        />
        <p className="min-[450px]:text-xl sm:text-2xl mt-2 sm:mt-4 md:mt-8 sm:leading-normal">
          {children}
        </p>
        <div className="w-[80%] sm:w-full self-end h-[2px] bg-w-cream mx-auto mt-auto"></div>
      </div>
    </div>
  );
}
