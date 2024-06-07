import React, { useEffect, useLayoutEffect } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CodeZoom() {
  //   useEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);

  //     const { innerHeight } = window;

  //     // Zoom-in animation for section2
  //     gsap.to("#zoom-in", {
  //       scrollTrigger: {
  //         trigger: "#zoom-in",
  //         start: "top bottom",
  //         end: `top ${innerHeight / 2}`,
  //         markers: true,
  //         // pin: true,
  //         scrub: 1,
  //         // anticipatePin: 1,
  //       },
  //       scale: 2,
  //       rotation: 360,
  //       delay: 3,
  //     });
  //   }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.to("#zoom-in", { scale: 3, rotation: 45, duration: 3 });
      t1.to("#zoom-in", { scale: 250, rotation: 360, duration: 6 });
      t1.to("#main-section", {
        width: "98%",
        borderRadius: 20,
        duration: 3,
      });
      ScrollTrigger.create({
        animation: t1,
        trigger: "#zoom-in",
        start: "center center",
        pin: true,
        anticipatePin: 1,
        // toggleActions: "restart pause reverse pause",
        pinSpacing: "50%",
        end: () => {
          const mainSection = document.querySelector(
            "#main-section"
          ) as HTMLElement;
          return "+=" + (mainSection?.offsetHeight ?? 0) / 2;
        },
        scrub: 3,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      id="main-section"
      className="w-full h-[200vh] flex justify-center pt-[400px] overflow-hidden relative"
    >
      <div id="zoom-in" className="h-20 scale-[0.3] w-20 mask bg-white"></div>
    </div>
  );
}
