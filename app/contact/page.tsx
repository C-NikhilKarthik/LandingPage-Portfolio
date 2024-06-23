"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { gsap } from "gsap";

const LeftLoop = [
  "/Logos/image1.jpg",
  "/Logos/image2.jpg",
  "/Logos/image3.jpg",
  "/Logos/image4.jpg",
  "/Logos/image5.jpg",
];

const RightLoop = [
  "/Logos/image6.jpg",
  "/Logos/image7.jpg",
  "/Logos/image8.jpg",
  "/Logos/image9.jpg",
  "/Logos/image10.jpg",
];

export default function Page() {
  const [open, setOpen] = useState<boolean>(false);

  const left1 = useRef(null);
  const left2 = useRef(null);

  const right1 = useRef(null);
  const right2 = useRef(null);

  let yPercent1 = 0;
  let yPercent2 = 0;
  const direction1 = 1;
  const direction2 = -1;

  const animate1 = () => {
    yPercent1 += 0.06 * direction1;
    if (yPercent1 < -100) {
      yPercent1 = 0;
    } else if (yPercent1 > 0) {
      yPercent1 = -100;
    }
    gsap.set(left1.current, { yPercent: yPercent1 });
    gsap.set(left2.current, { yPercent: yPercent1 });
    requestAnimationFrame(animate1);
  };

  const animate2 = () => {
    yPercent2 += 0.06 * direction2;
    if (yPercent2 < -100) {
      yPercent2 = 0;
    } else if (yPercent2 > 0) {
      yPercent2 = -100;
    }
    gsap.set(right1.current, { yPercent: yPercent2 });
    gsap.set(right2.current, { yPercent: yPercent2 });
    requestAnimationFrame(animate2);
  };

  useEffect(() => {
    requestAnimationFrame(animate1);
    requestAnimationFrame(animate2);
  }, []);
  return (
    <div className="grid bg-white h-screen md:grid-cols-2 md:grid-rows-1">
      <div className="w-full px-4 hidden md:flex">
        <div className="pl-20 py-6 flex gap-8 w-full overflow-hidden">
          <div className="flex flex-col gap-4 w-full">
            <div ref={left1} className="flex flex-col gap-4 w-full">
              {LeftLoop?.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item})` }}
                  className="rounded-lg bg-cover flex-none h-[35dvh] w-full"
                ></div>
              ))}
            </div>
            <div ref={left2} className="flex flex-col gap-4 w-full">
              {LeftLoop?.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item})` }}
                  className="rounded-lg bg-cover flex-none h-[35dvh] w-full"
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div ref={right1} className="flex flex-col gap-4 w-full">
              {RightLoop?.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item})` }}
                  className="rounded-lg bg-cover flex-none h-[35dvh] w-full"
                ></div>
              ))}
            </div>
            <div ref={right2} className="flex flex-col gap-4 w-full">
              {RightLoop?.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item})` }}
                  className="rounded-lg bg-cover flex-none h-[35dvh] w-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <nav
          className={`w-full p-4 md:px-10 lg:px-20 xl:px-44 z-20 transition-all ${
            open ? "text-white" : "text-black"
          } flex justify-between items-center absolute top-0 left-0`}
        >
          {" "}
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
              className="text-sm font-semibold translate-y-0 hover:-translate-y-1 transition-all duration-300"
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
            {" "}
            <GiHamburgerMenu />
          </div>
        </nav>
        <div className="p-4 w-full flex flex-col h-2/3 justify-end items-center">
          <div className="flex-1 relative w-full flex justify-center">
            <div className="flex flex-col absolute items-center top-24">
              <div className="relative title">
                <div className="duration-500 title-main relative left-0 text-[clamp(50px,10vw,100px)]">
                  Webdesigner
                </div>
                <div className="absolute top-0 left-0 pointer-events-none z-[4] h1_outline text-[clamp(50px,10vw,100px)]">
                  Webdesigner
                </div>
              </div>
              <div className="relative heading">
                <div className="duration-500 heading-main relative leading-10 left-0 text-[clamp(50px,10vw,100px)]">
                  & Photographer
                </div>
                <div className="absolute top-0 left-0 pointer-events-none leading-10 z-[4] h2_outline text-[clamp(50px,10vw,100px)]">
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
          <span className="sf-pro z-[10] text-[clamp(24px,6vw,44px)]">
            lets start something
            <span className="font-tangerine text-[clamp(48px,6vw,88px)] px-2">
              together
            </span>
          </span>
        </div>

        <div className="flex text-black sf-pro flex-col gap-4 px-10 md:px-24 lg:px-32">
          <div className="flex flex-col">
            <span className="">For project inquires </span>
            <span className="text-[#0A84FF]">alexsmith@projects.gmail.com</span>
          </div>
          <div className="flex flex-col">
            <span className="">For collaboration inquires </span>
            <span className="text-[#0A84FF]">alexsmith@collab.gmail.com </span>
          </div>
          <div className="flex flex-col">
            <span className="">For calls </span>
            <span className="text-[#0A84FF]">+191 6563619099 </span>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 p-4 z-[10] w-full h-screen bg-[rgba(0,0,0,0.88)] backdrop-blur transition-all duration-500 flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full text-white p-4 flex justify-center sf-pro gap-4 h-full flex-col items-center">
          <Link href={"/design"} className="text-xl">
            Design
          </Link>
          <Link href={"/#works"} className="text-xl">
            Works
          </Link>
          <Link href={"/contact"} className="text-xl">
            Contact
          </Link>
        </div>

        <div className="absolute bottom-4 w-full left-0 p-4 flex justify-center">
          <div className="text-sm p-4 bg-white font-bold text-black hover:px-8 hover:shadow-2xl transition-all rounded duration-300">
            hello@aslex.en
          </div>
        </div>
      </div>
    </div>
  );
}
