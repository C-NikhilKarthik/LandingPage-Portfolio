import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 w-full flex flex-col gap-10 pb-16 text-[#C7C7CC] py-8 md:px-10 lg:px-20 xl:px-44">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="text-[clamp(32px,5vw,64px)] font-bold basis-1/2">
          Alex Smith
        </div>
        <div className="basis-1/2 flex md:flex-row flex-col gap-6 justify-between">
          <div className="flex flex-col gap-2">
            <div>Behance</div>
            <div>Dribble</div>
            <div>GitHub</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>LinkedIn</div>
            <div>Twitter</div>
            <div>Instagram</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>California, USA</div>
            <div>alexsmith@gmail.com</div>
            <div>+1 4536621348</div>
          </div>
        </div>
      </div>
      <div className="text-center">const passionatelyCurious = true;</div>
    </footer>
  );
}
