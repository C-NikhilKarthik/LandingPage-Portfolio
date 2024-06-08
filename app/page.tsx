"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader/Preloader";
import Landing from "@/components/Landing";
import CodeZoom from "@/components/CodeZoom";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import Projects from "@/components/Projects";
import Detail from "@/components/Detail";
import Worked from "@/components/Worked";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="flex flex-col items-center">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Detail />
      <Worked />
      <CodeZoom />
      <Projects />
      <ContactUs />
      <Footer />
    </main>
  );
}
