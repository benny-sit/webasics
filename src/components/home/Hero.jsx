import Image from "next/image";
import React from "react";
import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <div
      dir="rtl"
      className="flex flex-col md:flex-row items-center justify-between px-6 w-full mt-10"
    >
      <div className="max-w-[590px] w-full mb-20 md:mb-10">
        <h1 className="max-w-[590px] text-5xl font-semibold tracking-tight leading-tight">
          בואו ללמוד את הבסיס לטכנולוגיות החדשניות בשוק ה-
          <span className="font-oswald text-w-blue">Web</span> וה-
          <span className="font-oswald text-w-red">Ai</span>
        </h1>
        <p className="text-[#868686] mt-1">
          תוכנית ייחודית וחדשנית, מספר המקומות מוגבל
        </p>
        <HeroButton />
      </div>
      <div className="w-full flex justify-center">
        <div className="aspect-[575/715] max-w-[390px] md:max-w-[575px] w-full relative">
          <Image
            src={"/hero/bgHexas.svg"}
            alt="hexagons"
            width={575}
            height={549}
            className="absolute top-[5%] opacity-50"
          />
          <Image
            src={"/hero/hexagon3d.png"}
            width={555}
            height={356}
            className="absolute bottom-0 left-0 w-[calc((555/575)*100%)]"
            alt="web 3d image"
          />
          <Image
            src={"/hero/web3d.png"}
            width={196}
            height={195}
            className="absolute top-0 left-[25%] w-[calc((196/575)*100%)] animate-bounce-down-slow"
            alt="web 3d image"
          />
          <Image
            src={"/hero/www3d.png"}
            width={172}
            height={72}
            className="absolute top-[40%] left-0 w-[calc((172/575)*100%)]  animate-bounce-down-slow-d-6"
            alt="web 3d image"
          />
          <Image
            src={"/hero/openAi3d.png"}
            width={199}
            height={199}
            className="absolute top-[30%] right-0 w-[calc((199/575)*100%)] animate-bounce-down-slow-d-3"
            alt="web 3d image"
          />
        </div>
      </div>
    </div>
  );
}
