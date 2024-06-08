import React, { useEffect, useLayoutEffect } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CodeZoom() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mainSection = document.querySelector("#main-section") as HTMLElement;
    const main1 = document.querySelector("#main1") as HTMLElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main1",
        start: "top center",
        end: () => "+=" + (mainSection?.offsetHeight * 4 ?? 0) / 5, // Adjusted the end point to cover both animations
        scrub: 1,
      },
    });

    // First animation
    tl.fromTo("#main2", { scale: 0.4 }, { scale: 1 });

    // // Padding between animations
    tl.to({}, { duration: 1 });
    tl.fromTo("#word", { xPercent: 100 }, { xPercent: 0 });
    // Second animation
    // tl.to("#main-sec", { scale: 10 });
    tl.fromTo("#main1", { scale: 1, rotate: 0 }, { scale: 20, rotate: 180 });
    tl.to("#main-section", { width: "98%", borderRadius: 20 });
  }, []);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#zoom-in",
  //         start: "center center",
  //         pin: true,
  //         markers: true,
  //         scrub: 3,
  //         end: () => {
  //           const mainSection = document.querySelector(
  //             "#main-section"
  //           ) as HTMLElement;
  //           return "+=" + (mainSection?.offsetHeight * 3 ?? 0) / 5;
  //         },
  //       },
  //     });

  //     // First animation: scale to 3 and rotate to 45 degrees
  //     t1.to("#zoom-in", { scale: 3, rotation: 45, duration: 3 });

  //     // Second animation: scale to 200 and rotate to 360 degrees
  //     t1.to("#zoom-in", { scale: 250, rotation: 360, duration: 10 }, ">1");
  //     t1.to("#main-section", {
  //       width: "98%",
  //       borderRadius: 20,
  //       duration: 3,
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);
  return (
    // <div
    //   id="main-section"
    //   className="w-full h-[300vh] flex justify-center pt-[50vh] overflow-hidden relative"
    // >
    //   <div
    //     id="zoom-in"
    //     className="h-20 scale-[0.3] w-20 mask transition-all bg-rainbow animate-rainbow"
    //   ></div>
    // </div>
    <section
      id="main-section"
      className="will-change-transform w-full overflow-clip mix-blend-lighten"
    >
      <div className="min-h-[300vh] w-full relative">
        <div className="h-screen sticky w-full top-0 overflow-hidden">
          <div
            id="word"
            className="absolute top-[0%] uppercase bottom-[0%] left-[0%] right-[0%] flex justify-center items-center"
          >
            Where Different is the standard.
          </div>
          <div
            hsc-scale=""
            className="c is-hsc"
            id="main-sec"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <div
              hsc-rotate=""
              id="main1"
              className="hsc-rotate"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div
                hsc-img=""
                id="main2"
                className="hsc-img-w h-full w-full"
                style={{
                  height: "451.493px",
                  width: "451.493px",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px) rotate(0deg);",
                }}
              >
                <div className="hsc-img w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 162 162"
                    // style={{ enableBackground: "new 0 0 162 162" }}
                  >
                    <path
                      className="hsc-img-path"
                      d="M108 88.7c-10.8 0-19.7 8.8-19.7 19.7v47.4c0 1.9-1.5 3.4-3.4 3.4h-8.6c-1.9 0-3.4-1.5-3.4-3.4v-47.4c0-10.8-8.8-19.7-19.7-19.7H6.4c-1.9 0-3.4-1.5-3.4-3.4v-8c0-1.9 1.5-3.4 3.4-3.4h46.9c10.8 0 19.7-8.8 19.6-19.7V6.4c0-1.9 1.5-3.4 3.4-3.4H85c1.9 0 3.4 1.5 3.4 3.4v47.8c0 10.8 8.8 19.7 19.7 19.7h46.6c1.9 0 3.4 1.5 3.4 3.4v8c0 1.9-1.5 3.4-3.4 3.4H108z"
                      style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-full z-[-1] bg-[linear-gradient(255deg,#facb0e,#f06ba8_30%,#78bae6_65%,#fff)] loop"></div>
        </div>
      </div>
    </section>
  );
}
