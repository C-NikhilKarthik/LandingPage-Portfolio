"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Detail from "./Detail";

export default function Landing() {
  const [open, setOpen] = useState<boolean>(false);
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
                <div className="duration-500 title-main relative left-0 text-[clamp(48px,10vw,180px)]">
                  Webdesigner
                </div>
                <div className="absolute top-0 left-0 pointer-events-none z-[4] h1_outline text-[clamp(48px,10vw,180px)]">
                  Webdesigner
                </div>
              </div>
              <div className="relative heading">
                <div className="duration-500 heading-main relative leading-10 left-0 text-[clamp(48px,10vw,180px)]">
                  & Photographer
                </div>
                <div className="absolute top-0 left-0 pointer-events-none leading-10 z-[4] h2_outline text-[clamp(48px,10vw,180px)]">
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
      <nav
        className={`w-full p-4 md:px-10 lg:px-20 xl:px-44 z-20 transition-all ${
          open ? "text-white" : "text-black"
        } flex justify-between items-center absolute top-0 left-0`}
      >
        <Link href={"/"} className="text-2xl font-semibold">
          Alex Smith
        </Link>
        <div className="md:flex hidden gap-8 items-center">
          <Link
            href={"/design"}
            className="text-sm translate-y-0 hover:-translate-y-1 transition-all duration-300"
          >
            Design
          </Link>
          <Link
            href={"/#works"}
            className="text-sm translate-y-0 hover:-translate-y-1 transition-all duration-300"
          >
            Works
          </Link>
          <Link
            href={"/contact"}
            className="text-sm translate-y-0 hover:-translate-y-1 transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            href={"/"}
            className="text-sm p-4 bg-black text-white hover:px-8 hover:shadow-2xl transition-all  rounded duration-300"
          >
            hello@aslex.en
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`transition-all text-xl cursor-pointer flex md:hidden ${
            open ? "text-white" : "text-black"
          }`}
        >
          <GiHamburgerMenu />
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 p-4 z-[10] w-full h-screen bg-[rgba(0,0,0,0.88)] backdrop-blur transition-all duration-500 flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full text-white p-4 flex justify-center sf-pro gap-4 h-full flex-col items-center">
          <Link
            href={"/design"}
            onClick={() => setOpen(!open)}
            className="text-xl"
          >
            Design
          </Link>
          <Link
            href={"/#works"}
            onClick={() => setOpen(!open)}
            className="text-xl"
          >
            Works
          </Link>
          <Link
            href={"/contact"}
            onClick={() => setOpen(!open)}
            className="text-xl"
          >
            Contact
          </Link>
        </div>

        <div className="absolute bottom-4 w-full left-0 p-4 flex justify-center">
          <div className="text-sm p-4 bg-white font-bold text-black hover:px-8 hover:shadow-2xl transition-all rounded duration-300">
            hello@aslex.en
          </div>
        </div>
      </div>

      <Detail />
    </section>
  );
}
