import Image from "next/image";
import React from "react";

const images = [
  "/Logos/BKT.png",
  "/Logos/Enea.png",
  "/Logos/Kinderkraft.png",
  "/Logos/ODM.png",
  "/Logos/PKP.png",
  "/Logos/sisem.png",
  "/Logos/SkinsMonkey.png",
  "/Logos/wsip.png",
  "/Logos/BKT.png",
  "/Logos/Enea.png",
  "/Logos/Kinderkraft.png",
  "/Logos/ODM.png",
  "/Logos/PKP.png",
  "/Logos/sisem.png",
  "/Logos/SkinsMonkey.png",
  "/Logos/wsip.png",
];

export default function Worked() {
  return (
    <section className="py-20 w-full px-4 md:px-10">
      <div className="flex uppercase font-bold gap-10 md:flex-row flex-col items-center text-[#646b73]">
        <h4 className="text-[clamp(1.5rem,1.3442rem+.6926vw,2rem)]">
          <span className="text-[#ced2d4]">Worked</span> with:
        </h4>
        <div className="overflow-hidden w-full masking">
          <div className="flex gap-12 opacity-[0.4] w-fit relative items-center flex-nowrap scroll">
            {images?.map((item, index) => (
              <Image
                key={index}
                height={0}
                width={0}
                alt="logo"
                sizes="100%"
                src={item}
                className="img"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
