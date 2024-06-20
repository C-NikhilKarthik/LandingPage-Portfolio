import { Calistoga } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Detail from "./Detail";

export default function Landing() {
  return (
    <section className="bg-white flex rounded-b-3xl flex-col justify-center w-full">
      <div className="p-4 h-screen w-full flex flex-col justify-center">
        <div className="flex text-black flex-col relative items-center pt-16 md:pt-32 h-full">
          <div className="flex h-full flex-col items-center md:justify-between">
            <div className="flex flex-col items-center">
              <div className="text-[clamp(14px,3vw,26px)] text-center">
                My name is Alex Smith and I am a freelancer
              </div>
              <div className="relative title">
                <div className="duration-500 title-main relative tracking-tight left-0 text-[clamp(48px,10vw,180px)] font-semibold">
                  Webdesigner
                </div>
                <div className="absolute top-0 left-0 pointer-events-none tracking-tight z-[4] h1_outline text-[clamp(48px,10vw,180px)] font-semibold">
                  Webdesigner
                </div>
              </div>
              <div className="relative heading">
                <div className="duration-500 heading-main relative leading-10 tracking-tighter left-0 text-[clamp(48px,10vw,180px)] font-semibold">
                  & Photographer
                </div>
                <div className="absolute top-0 left-0 pointer-events-none leading-10 tracking-tighter z-[4] h2_outline text-[clamp(48px,10vw,180px)] font-semibold">
                  & Photographer
                </div>
              </div>
              <div className="md:flex hidden w-full justify-center md:justify-start pt-6 md:pt-20 text-xl">
                <p>from California, USA</p>
              </div>
            </div>

            <div className="gap-4 md:gap-8 flex flex-col items-center md:flex-row z-[5] pt-6 justify-center">
              <div className="text-xs p-2 md:text-sm md:p-3 w-fit bg-black text-white hover:px-8 font-semibold hover:shadow-2xl transition-all rounded duration-300">
                You need a designer
              </div>
              <div className="text-xs p-2 md:text-sm md:p-3 w-fit bg-transparent text-black border-2 font-semibold border-black hover:px-8 hover:shadow-2xl transition-all rounded duration-300">
                You need a photographer
              </div>
            </div>
          </div>
          <Image
            src={"/Profile.webp"}
            height={0}
            width={0}
            sizes="100%"
            alt="profile"
            className="absolute pointer-events-none z-[3] max-w-full md:w-[40%] w-full top-auto left-auto right-auto bottom-0 align-middle clip-margin inline-block overflow-clip "
          />
        </div>
      </div>
      <nav className="w-full p-4 md:px-10 lg:px-20 xl:px-44 z-10 text-black flex justify-between items-center absolute top-0 left-0">
        <div className="text-2xl font-semibold">Alex Smith</div>
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
            hello@aslex.en
          </Link>
        </div>
        <div className="text-black text-xl flex md:hidden">
          <GiHamburgerMenu />
        </div>
      </nav>

      <Detail />
    </section>
  );
}
