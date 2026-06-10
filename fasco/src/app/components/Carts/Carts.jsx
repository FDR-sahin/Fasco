import React from "react";
import { FaStar } from "react-icons/fa";
import cart from "@/assets/cart-1.png";
import Image from "next/image";

function Carts() {
  return (
    <div className="w-96.5 h-109.5 bg-white rounded-[10px]  shadow-xl ">
      <div className="py-3.75 px-6.25 h-full w-full object-contain">
        <div className="w-84 h-61">
          <Image
            className="w-full h-full object-contain"
            src={cart}
            alt="Hero Image"
            priority
          />
        </div>

        <div className="conten">
          <div className="flex items-center justify-between pt-3">
            <p className="text-[#484848] text-[20px]">Shiny Dress</p>
            <div className="flex items-center gap-1 text-[#FCA120]">
              <FaStar className="w-4.75 h-4.75" />
              <FaStar className="w-4.75 h-4.75" />
              <FaStar className="w-4.75 h-4.75" />
              <FaStar className="w-4.75 h-4.75" />
              <FaStar className="w-4.75 h-4.75" />
            </div>
          </div>
          <p className="text-[#8A8A8A] text-[16px]">Al Karam</p>
          <p className="text-[#484848] text-[12px] py-6.25">
            (4.1k) Customer Reviews
          </p>
          <div className="flex items-center justify-between">
            <p className="text-[#484848] text-[24px]">$95.50</p>
            <p className="text-[#FF4646] text-[12px]">Almost Sold Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
