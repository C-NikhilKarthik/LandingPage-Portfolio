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
        trigger: "#main-section",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // First animation (for the first 1/6 of the section)
    tl.fromTo(
      "#main-scale2",
      { scale: 0.3, rotate: 0 },
      {
        scale: 1,
        rotate: 45,
        scrollTrigger: {
          trigger: "#main-section",
          start: "top center",
          end: () => "+=" + (mainSection?.offsetHeight ?? 0) / 6,
          scrub: 1,
        },
      }
    );

    tl.fromTo(
      "#rotate",
      { rotate: 0 },
      {
        rotate: 180,
        scrollTrigger: {
          trigger: "#main-section",
          start: () => "+=" + (mainSection?.offsetHeight ?? 0) / 6,
          end: () => "+=" + ((mainSection?.offsetHeight ?? 0) * 4) / 6,
          scrub: 1,
        },
      }
    );

    tl.fromTo(
      "#word",
      { xPercent: 100 },
      {
        xPercent: 0,
        scrollTrigger: {
          trigger: "#main-section",
          start: () => "+=" + (mainSection?.offsetHeight ?? 0) / 6,
          end: () => "+=" + ((mainSection?.offsetHeight ?? 0) * 2) / 6,
          scrub: 1,
        },
      }
    );

    tl.fromTo(
      "#main-scale2",
      { height: "20em", width: "20em" },
      {
        height: "23em",
        width: "23em",
        scrollTrigger: {
          trigger: "#main-section",
          start: () => "+=" + (mainSection?.offsetHeight ?? 0) / 6,
          end: () => "+=" + ((mainSection?.offsetHeight ?? 0) * 4) / 6,
          scrub: 1,
        },
      }
    );

    tl.fromTo(
      "#main-scale1",
      { scale: 1 },
      {
        scale: 30,
        scrollTrigger: {
          trigger: "#main-section",
          start: () => "+=" + (mainSection?.offsetHeight ?? 0) / 6,
          end: () => "+=" + ((mainSection?.offsetHeight ?? 0) * 4) / 6,
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      id="main-section"
      className="will-change-transform w-full overflow-clip mix-blend-lighten"
    >
      <div className="min-h-[300vh] w-full relative">
        <div className="h-screen sticky w-full top-0 overflow-hidden">
          <div
            id="word"
            className="absolute top-[0%] uppercase bottom-[0%] text-[3em] left-[0%] right-[0%] flex justify-center items-center"
          >
            Where Different is the standard.
          </div>
          <div hsc-scale="" className="c is-hsc" id="main-scale1">
            <div hsc-rotate="" id="rotate" className="hsc-rotate">
              <div
                hsc-img=""
                id="main-scale2"
                className="hsc-img-w h-full w-full"
                style={{
                  height: "451.493px",
                  width: "451.493px",
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
