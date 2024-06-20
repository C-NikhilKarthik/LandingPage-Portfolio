import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Detail() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="w-full max-w-[900px] mx-auto flex flex-col gap-8">
        <p className="text-center text-black">
          I have been working for the past 10 years with JavaScript. I&apos;ve
          been writing/refactoring code and connecting restful apis using
          Angular, React and Vuejs for a couple of years but I also worked with
          different stacks in the past. I can help/guide your developers with
          best practices as well.
        </p>
        <div className="gap-4 flex justify-center">
          <button className="text-xs p-2 md:text-sm md:p-3 w-fit flex gap-2 bg-transparent text-black border-2 items-center font-semibold border-black hover:px-8 hover:shadow-2xl transition-all rounded duration-300">
            Know more
            <FaExternalLinkAlt className="text-sm" />
          </button>
          <button className="text-xs p-2 md:text-sm md:p-3 w-fit flex gap-2 bg-black text-white hover:px-8 items-center font-semibold hover:shadow-2xl transition-all rounded duration-300">
            Contact
            <FaExternalLinkAlt className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
