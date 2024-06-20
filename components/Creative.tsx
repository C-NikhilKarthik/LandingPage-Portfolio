import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Creative() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#creative-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.fromTo(
      "#creative",
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
      }
    );

    tl.fromTo(
      "#developer",
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
      },
      "<"
    );
  }, []);

  return (
    <section className="w-full font-manrope gap-24 py-40 flex flex-col px-2 md:px-24 relative">
      <p className="max-w-[36ch] text-[#68727D] block">
        I&apos;ve worked in UI design and front-end development, so I can
        understand designs well and builds effective communication between team
        members.
      </p>
      <h2
        id="creative-section"
        className="text-white relative flex flex-col items-center"
      >
        <span
          id="creative"
          className="text-[clamp(4.4rem,16dvh,10rem)] leading-[1.1cap] font-bold"
        >
          Creative
        </span>
        <span
          id="developer"
          className="text-[clamp(4.4rem,16dvh,10rem)] leading-[1.1cap] font-bold"
        >
          Developer
        </span>

        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[30%] bg-[conic-gradient(black,#ffffff1a)]"></div> */}
      </h2>
      <p className="max-w-[36ch] text-[#68727D] ml-auto block">
        Currently, I live in Seattle. In my personal life, I love to travel with
        my backpack, watch documentaries about geography, and explore new
        traditional music.
      </p>
    </section>
  );
}
