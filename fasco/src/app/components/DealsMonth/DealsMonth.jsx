import React from "react";
import Button from "@/app/components/Button/Button";
import Image from "next/image";
import two from "@/assets/02.png";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import d1 from "@/assets/d1.png";
import d2 from "@/assets/d2.png";
import d3 from "@/assets/d3.png";
import d4 from "@/assets/d4.png";

function DealsMonth() {
  return (
    <section className="bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA] pt-20 pb-22">
      <div className="max-w-7xl mx-auto px-12 flex items-center gap-2">
        <div className="flex flex-col gap-10">
          <div className="w-111 h-63.5 flex flex-col gap-10">
            <h2 className="text-[#484848] text-[46px]">Deals Of The Month</h2>
            <p className="text-[#8A8A8A] leading-6.6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin{" "}
            </p>
            <div className="w-fit">
              <Button text1="Buy Now" />
            </div>
          </div>

          <div>
            <p className="text-[#484848] text-[28px]">
              Hurry, Before It’s Too Late!
            </p>
            <div className="flex items-center gap-x-7 pt-2 mb-35">
              <div className="flex flex-col items-center gap-x-2">
                <div className="w-19 h-19">
                  <Image
                    className="w-full h-full object-cover"
                    src={two}
                    alt="Hero Image"
                    priority
                  />
                </div>
                <span className="text-[#484848] text-[24px]">Days</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-19 h-19">
                  <Image
                    className="w-full h-full object-cover"
                    src={two}
                    alt="Hero Image"
                    priority
                  />
                </div>
                <span className="text-[#484848] text-[24px]">Hr</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-19 h-19">
                  <Image
                    className="w-full h-full object-cover"
                    src={two}
                    alt="Hero Image"
                    priority
                  />
                </div>
                <span className="text-[#484848] text-[24px]">Mins</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-19 h-19">
                  <Image
                    className="w-full h-full object-cover"
                    src={two}
                    alt="Hero Image"
                    priority
                  />
                </div>
                <span className="text-[#484848] text-[24px]">Sec</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center  gap-x-4">
          <RiArrowDropLeftLine className="cursor-pointer hover:bg-gray-100 w-12 h-12 bg-white rounded-full shadow-2xl shadow-[#B6B6B6] text-[#B6B6B6] mt-135" />
          <RiArrowDropRightLine className="cursor-pointer hover:bg-gray-100 w-12 h-12 bg-white rounded-full shadow-2xl shadow-[#B6B6B6] text-[#B6B6B6] mt-135" />
        </div>

        <div className="flex-1 flex gap-4 relative">
          <div className="w-101 h-145.5">
            <Image
              className="w-full h-full object-cover"
              src={d1}
              alt="Hero Image"
              priority
            />
          </div>
          <div className="w-93 h-121.5">
            <Image
              className="w-full h-full object-cover"
              src={d2}
              alt="Hero Image"
              priority
            />
          </div>
          <div className="w-40 h-121.5">
            <Image
              className="w-full h-full object-cover"
              src={d4}
              alt="Hero Image"
              priority
            />
          </div>
          <Image
            className=" absolute top-139 right-60 z-10"
            src={d3}
            alt="Hero Image"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default DealsMonth;
