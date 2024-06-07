"use client";
import gsap from "gsap";
import React from "react";
import { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";

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
];

export default function Projects() {
  return (
    <section className="flex flex-col w-full gap-4 px-4 pt-16">
      <div className="text-[clamp(36px,6vw,60px)] font-bold uppercase text-[#C7C7CC]">
        Selected works
      </div>
      <div className="w-full h-[2px] rounded bg-[#C7C7CC]" />
      {selectedProjects?.map((item) => (
        <ProjectCard key={item?.id} item={item} />
      ))}
    </section>
  );
}
