import React from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import shop6 from "@/assets/shopcard6.png";
import Button from "../components/Button/Button";
import Link from "next/link";

function MiniCart() {
  return (
    <section className="mt-25">
      <div className="w-185.25 h-247.5 py-11.25 px-11">
        <div className="flex items-center justify-between pb-7">
          <h1 className="text-[42px] ">Shopping Cart</h1>
          <IoClose className="bg-white shadow-2xl rounded-full h-11.25 w-11.25 p-2" />
        </div>
        <div className="flex items-center gap-2 pb-13">
          <span className="text-[26px] text-[#8A8A8A]">Buy</span>
          <span className="text-[26px] text-[#000000] font-bold">$122.35</span>
          <span className="text-[26px] text-[#8A8A8A]">more and get</span>
          <span className="text-[26px] text-[#000000] font-bold">
            free shipping
          </span>
        </div>

        <div className="w-90 h-56.25 flex gap-6">
          <div className="w-42 h-56.25">
            <Image
              className="w-full h-full object-cover"
              src={shop6}
              alt="Hero Image"
              priority
            />
          </div>
          <div>
            <h4 className="text-[22px] ">Denim Jacket</h4>
            <p className="text-[#8A8A8A] text-[22px] pt-2 pb-4">Color : Red</p>
            <p className="text-[22px] pb-3">$14.80</p>
            <div className="flex items-center justify-between px-3 w-[128px] h-[45px] rounded-[10px] bg-[#F1F1F1] border border-gray-200">
              <button className="text-[35.75px]">-</button>
              <p className="text-[35.75px] text-[#8A8A8A]">01</p>
              <button className="text-[35.75px]">+</button>
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-gray-200 mt-5"></div>

        <div className="flex items-center gap-2  py-3 w-fit mt-50">
          <input
            type="checkbox"
            className="w-5 h-5 border-2 border-black accent-black"
          />

          <p className="text-gray-500 text-sm">
            For <span className="text-black font-semibold">$10.00</span> Please
            Wrap The Product
          </p>
        </div>

       <div className="w-full h-1 bg-gray-200 mt-2"></div>

       <div className="flex items-center justify-between py-7">
        <h5 className="text-[22px]">Subtotal</h5>
        <p className="text-[22px]">$100.00</p>
       </div>

       <Button text1="Checkout"/>

       <Link className="text-center underline" href="/products" ><h6 className="pt-3 text-[22px]">View Cart</h6></Link>


      </div>
    </section>
  );
}

export default MiniCart;
