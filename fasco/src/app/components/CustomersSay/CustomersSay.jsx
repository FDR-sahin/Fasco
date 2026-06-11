import React from "react";
import Heading from "../Heading/Heading";
import Image from "next/image";
import c1 from "@/assets/c1.png";
import c2 from "@/assets/c2.png";
import { FaStar } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";

function CustomersSay() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col justify-center items-center">
          <Heading
            hed="This Is What Our Customers Say"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis"
          />
          <div className=" my-13 w-216 h-100 rounded-[10px] bg-white shadow-2xl flex items-center justify-center gap-20 py-14 px-10 ">
            <div className="">
              <div className="relative  w-[242px] h-[242px]">
                <Image
                  className="absolute -top-5 left-5 w-full h-full object-cover"
                  src={c1}
                  alt="Hero Image"
                  priority
                />
                <Image
                  className="w-full  h-full object-cover"
                  src={c2}
                  alt="Hero Image"
                  priority
                />
              </div>
            </div>

            <div>
              <p className="text-[#484848] text-[16px] pb-11">
                "You won't regret it. I would like to personally thank you for
                your outstanding product. Absolutely wonderful!"
              </p>

              <div className="flex items-center gap-1 text-[#FCA120] pb-5">
                <FaStar className="w-4.75 h-4.75" />
                <FaStar className="w-4.75 h-4.75" />
                <FaStar className="w-4.75 h-4.75" />
                <FaStar className="w-4.75 h-4.75" />
                <FaStar className="w-4.75 h-4.75" />
              </div>
              <div className="w-57.5 h-px border-3 text-[#484848] my-6"></div>
              <h1 className="text-[32px] text-[#484848] py-3">James K.</h1>
              <p className="text-[#484848] text-[16px]">Traveler</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center   gap-x-4">
                <RiArrowDropLeftLine className="cursor-pointer  hover:text-black w-12 h-12 bg-white rounded-full shadow-2xl shadow-[#B6B6B6] text-[#B6B6B6]" />
                <RiArrowDropRightLine className="cursor-pointer  hover:text-black w-12 h-12 bg-white rounded-full shadow-2xl shadow-[#B6B6B6] text-[#B6B6B6]" />
              </div>
    </section>
  );
}

export default CustomersSay;
