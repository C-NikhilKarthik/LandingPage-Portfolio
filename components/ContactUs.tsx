import Image from "next/image";
import React from "react";

export default function ContactUs() {
  return (
    <section className="px-4 md:px-10 lg:px-20 xl:px-40 py-20">
      <Image
        height={0}
        width={0}
        sizes="100%"
        alt="contact"
        src={"/letsConnect.png"}
        className="w-full h-auto"
      />
    </section>
  );
}
