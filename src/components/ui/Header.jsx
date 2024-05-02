import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full py-4 flex justify-between items-center">
      <Link href={"/"}>
        <Image
          src={"/webasics/webasics-logo.svg"}
          width={230}
          height={83}
          alt="webasics logo"
          className="md:w-[230px] w-[150px]"
        />
      </Link>
      <nav>
        <ul dir="rtl" className="flex items-center gap-9 md:mt-7">
          <li>
            <Link href={"/"} className="link-style">
              דף הבית
            </Link>
          </li>
          <li>
            <Link href={"/"} className="link-style">
              צור קשר
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
