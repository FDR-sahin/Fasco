import React from "react";
import s1 from "@/assets/s1.png";
import s2 from "@/assets/s2.png";
import Image from "next/image";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

function Subscribe() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between gap-4">
        <div className="w-[355px] h-[747px]">
          <Image
            className="w-full h-full object-cover"
            src={s1}
            alt="Hero Image"
            priority
          />
        </div>

        <div className="flex-1  ">
          <div className="w-[631px] p-4 shadow-[0_8px_6px_-6px_rgba(0,0,0,0.3)]">
            <Heading
              hed="Subscribe To Our Newsletter"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin "
            />
            <p className="text-[22px] text-[#8A8A8A] pt-12">
              michael@ymail.com
            </p>
          </div>
          <div className="bg-gradient-to-b from-gray-200 to-white">
            <div className="w-fit mx-auto py-6">
              <Button text1="Subscribe Now" />
            </div>
          </div>
        </div>

        <div className="w-[355px] h-[747px]">
          <Image
            className="w-full h-full object-cover"
            src={s2}
            alt="Hero Image"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
