"use client";
import gsap from "gsap";
import React from "react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

interface projectType {
  id: number;
  src: string;
  tags: string[];
  title: string;
}

interface ProjectCardProps {
  item: projectType;
  uniqueKey: number;
}

export default function ProjectCard({ item, uniqueKey }: ProjectCardProps) {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animate);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
      },
      x: "-300px",
    });
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.06 * direction;
  };
  return (
    <div
      key={uniqueKey}
      className="rounded overflow-hidden h-[75dvh] w-full relative flex p-4 bg-fixed bg-[length:auto_100%] md:bg-[length:100%_auto] bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${item?.src})` }}
    >
      <div className="absolute top-4 left-4 flex gap-4">
        {item?.tags?.map((tags: string, index: number) => (
          <div
            key={index}
            className="text-[#C7C7CC] border-2 uppercase font-bold border-[#C7C7CC] rounded-full px-4 py-2 text-xl"
          >
            {tags}
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 h-fit whitespace-nowrap -translate-y-1/2 ">
        <div
          ref={slider}
          className="text-white text-[clamp(100px,15vw,200px)] font-semibold uppercase flex relative"
        >
          <p ref={firstText} className="h-fit relative">
            {item?.title} {item?.title}
          </p>
          <p ref={secondText} className="absolute left-full ml-6">
            {item?.title} {item?.title}
          </p>
        </div>
      </div>
    </div>
  );
}
