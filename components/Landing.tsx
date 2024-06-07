import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Landing() {
  return (
    <section className="p-4 bg-white h-screen flex flex-col justify-center w-full md:px-10 lg:px-20 xl:px-44">
      <nav className="w-full p-4 md:px-10 lg:px-20 xl:px-44 z-10 text-black flex justify-between items-center absolute top-0 left-0">
        <div className="text-2xl font-semibold">Bazil</div>
        <div className="md:flex hidden gap-8 items-center">
          <Link
            href={"/"}
            className="text-sm translate-y-0 hover:-translate-y-1 transition-all duration-300"
          >
            Design
          </Link>
          <Link
            href={"/"}
            className="text-sm translate-y-0 hover:-translate-y-1 transition-all duration-300"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="text-sm translate-y-0 hover:-translate-y-1 transition-all duration-300"
          >
            Design
          </Link>
          <Link
            href={"/"}
            className="text-sm p-4 bg-black text-white hover:px-8 hover:shadow-2xl transition-all  rounded duration-300"
          >
            hello@bazil.fr
          </Link>
        </div>
        <div className="text-black text-xl flex md:hidden">
          <GiHamburgerMenu />
        </div>
      </nav>

      <div className="flex text-black flex-col relative items-center pt-32 md:pt-44 h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[clamp(18px,3vw,26px)] text-center">
            My name is Bazil and I am a freelancer
          </div>
          <div className="relative title">
            <div className="duration-500 title-main relative tracking-tight left-0 text-[clamp(48px,10vw,140px)] font-semibold">
              Web Designer
            </div>
            <div className="absolute top-0 left-0 pointer-events-none tracking-tight z-[4] h1_outline text-[clamp(48px,10vw,140px)] font-semibold">
              Web Designer
            </div>
          </div>
          <div className="relative heading">
            <div className="duration-500 heading-main relative leading-10 tracking-tighter left-0 text-[clamp(48px,10vw,140px)] font-semibold">
              & Photographer
            </div>
            <div className="absolute top-0 left-0 pointer-events-none leading-10 tracking-tighter z-[4] h2_outline text-[clamp(48px,10vw,140px)] font-semibold">
              & Photographer
            </div>
          </div>
        </div>
        <Image
          src={"/Profile.webp"}
          height={0}
          width={0}
          sizes="100%"
          alt="profile"
          className="absolute pointer-events-none z-[3] max-w-full md:w-[50%] w-full top-auto left-auto right-auto bottom-0 align-middle clip-margin inline-block overflow-clip "
        />
      </div>
    </section>
  );
}
