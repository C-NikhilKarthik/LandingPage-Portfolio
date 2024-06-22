"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const selectedProjects = [
  {
    id: 1,
    src: "/Projects/Project1.jpg",
    tags: ["branding", "ui/ux", "dev"],
    title: "emperia",
  },
  {
    id: 2,
    src: "/Projects/Project2.jpg",
    tags: ["branding", "ui/ux"],
    title: "rdclr.live",
  },
  {
    id: 3,
    src: "/Projects/Project3.jpg",
    tags: ["ui/ux", "dev"],
    title: "im design",
  },
  {
    id: 4,
    src: "/Projects/Project4.jpg",
    tags: ["branding", "ui/ux"],
    title: "teshima",
  },
  {
    id: 5,
    src: "/Projects/Project5.jpg",
    tags: ["branding", "ui/ux", "dev"],
    title: "medivide",
  },
  {
    id: 6,
    src: "/Projects/Project6.jpg",
    tags: ["branding", "ui/ux", "dev"],
    title: "atom capital",
  },
  {
    id: 7,
    src: "/Projects/Project7.jpg",
    tags: ["branding", "ui/ux"],
    title: "solara",
  },
  {
    id: 8,
    src: "/Projects/Project8.jpg",
    tags: ["ui/ux", "dev"],
    title: "core fitness",
  },
  {
    id: 9,
    src: "/Projects/Project9.jpg",
    tags: ["branding", "ui/ux"],
    title: "brewberry",
  },
];

export default function Page() {
  useEffect(() => {
    const isAppleDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

    if (isAppleDevice) {
      const projectElements = document.getElementsByClassName("projects");
      Array.from(projectElements).forEach((element) => {
        element.classList.add("apple-device");
      });
    }
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white flex relative flex-col">
        <nav className="w-full p-4 md:px-10 lg:px-20 xl:px-44 z-10 text-black flex justify-between items-center absolute top-0 left-0">
          <Link href={"/"} className="text-2xl font-semibold">
            Alex Smith
          </Link>
          <div className="md:flex hidden gap-8 items-center">
            <Link
              href={"/design"}
              className="text-sm translate-y-0 font-semibold hover:-translate-y-1 transition-all duration-300"
            >
              Design
            </Link>
            <Link
              href={"#works"}
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
          <div className="text-black text-xl flex md:hidden">
            <GiHamburgerMenu />
          </div>
        </nav>

        <div className="flex flex-col leading-[1.1] items-center pt-44 justify-center text-black">
          <span className="sf-pro text-[clamp(24px,6vw,44px)]">
            Impactful
            <span className="font-tangerine text-[clamp(48px,6vw,88px)] px-2">
              designs
            </span>
            and high-end
          </span>
          <span className="sf-pro text-[clamp(24px,6vw,44px)]">
            Webflow websites for creatives.
          </span>
          <Link
            className="rounded border border-black sf-pro mt-8 px-10 hover:px-14 hover:shadow-lg transition-all py-2 w-fit text-black"
            href="/contact"
          >
            lets start a project together
          </Link>
        </div>

        <div className="w-full my-20 overflow-hidden">
          <div className="flex px-4 gap-2 projects horizontal-scroll overflow-x-auto">
            {selectedProjects?.map((item) => (
              <div key={item?.id} className="flex flex-col">
                <div
                  style={{ backgroundImage: `url('${item?.src}')` }}
                  className="h-[90dvh] rounded-lg bg-cover bg-fixed w-[60dvw] md:w-[40dvw]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
