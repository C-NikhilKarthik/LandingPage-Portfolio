import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Detail() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="w-full max-w-[900px] mx-auto flex flex-col gap-8">
        <p className="text-center text-[#dadada]">
          I have been working for the past 10 years with JavaScript. I&apos;ve
          been writing/refactoring code and connecting restful apis using
          Angular, React and Vuejs for a couple of years but I also worked with
          different stacks in the past. I can help/guide your developers with
          best practices as well.
        </p>
        <div className="gap-4 flex justify-center">
          <button className="rounded-full flex gap-2 items-center px-3 py-2 bg-white text-black">
            Know more
            <FaExternalLinkAlt className="text-sm" />
          </button>
          <button className="rounded-full flex gap-2 items-center px-3 py-2 border border-white text-white bg-transparent">
            Contact
            <FaExternalLinkAlt className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
