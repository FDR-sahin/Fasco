import React from "react";
import shop6 from "@/assets/shopcard6.png";
import ac1 from "@/assets/ac1.png";
import ac3 from "@/assets/ac3.png";
import ac4 from "@/assets/ac4.png";
import ac5 from "@/assets/ac5.png";
import ac6 from "@/assets/ac6.png";
import ac7 from "@/assets/ac7.png";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import com from '@/assets/com.png'
import ask from '@/assets/ask.png'
import shere from '@/assets/shere.png'
import vaa from '@/assets/va.png'
import { FaCarSide } from "react-icons/fa";
import { PiShippingContainer } from "react-icons/pi";
import Link from "next/link";

import Image from "next/image";

function page() {
  return (
    <section className="py-20 mt-18">
      <div className="max-w-7xl mx-auto px-12 flex justify-between gap-15">

        <div className="flex-1">
          <div className="flex gap-5">
            <div className="flex flex-col gap-3">
              <div className="w-17.5 h-[93.33] p-1 ">
                <Image
                  className="w-full h-full object-contain"
                  src={ac1}
                  alt="Hero Image"
                  priority
                />
              </div>
              <div className="w-17.5 h-[93.33] p-1 border-2">
                <Image
                  className="w-full h-full object-contain"
                  src={shop6}
                  alt="Hero Image"
                  priority
                />
              </div>
              <div className="w-17.5 h-[93.33] p-1">
                <Image
                  className="w-full h-full object-contain"
                  src={ac3}
                  alt="Hero Image"
                  priority
                />
              </div>
              <div className="w-17.5 h-[93.33] p-1">
                <Image
                  className="w-full h-full object-contain"
                  src={ac4}
                  alt="Hero Image"
                  priority
                />
              </div>
              <div className="w-17.5 h-[93.33] p-1">
                <Image
                  className="w-full h-full object-contain"
                  src={ac5}
                  alt="Hero Image"
                  priority
                />
              </div>
              <div className="w-17.5 h-[93.33] p-1">
                <Image
                  className="w-full h-full object-contain"
                  src={ac6}
                  alt="Hero Image"
                  priority
                />
              </div>
              <div className="w-17.5 h-[93.33] p-1">
                <Image
                  className="w-full h-full object-contain"
                  src={ac7}
                  alt="Hero Image"
                  priority
                />
              </div>
            </div>

            <div className="w-122.75 h-163.75">
              <Image
                className="w-full h-full object-contain"
                src={shop6}
                alt="Hero Image"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex-1 px-4">
          <p className="text-[#666666] text=[14px] pb-3">Fasco</p>
          <div className="flex items-center justify-between">
            <h2 className="text-[#000000] text-[30px]">Denim Jacket</h2>
            <CiStar className="bg-white shadow-2xl rounded-full h-11.25 w-11.25 p-2" />
          </div>
          <div className="flex items-center gap-1 text-[#000000]">
            <FaStar className="w-3.75 h-4.75" />
            <FaStar className="w-3.75 h-4.75" />
            <FaStar className="w-3.75 h-4.75" />
            <FaStar className="w-3.75 h-4.75" />
            <CiStar className=" 3-4.75 h-4.75 " />
            <p className="text-[14px]">(3)</p>
          </div>

          <div className="flex items-center gap-3 py-5">
            <span className="text-[24px]">$39.00</span>{" "}
            <span className="text-[#666666] text-[16px] line-through">$59.00</span>{" "}
            <span className="bg-[#DA3F3F] py-1 px-2.5 rounded-2xl text-white text-[11px]">
              SAVE 33%
            </span>
          </div>
          
          <div className="flex gap-3 items-center">
            <FiEye className="w-6 h-6"/>
            <p className="text-[#8A8A8A] text-[16px]">24 people are viewing this right now</p>
          </div>

          <div className="bg-[#F8CCCC] py-3.75 px-3.5 shadow rounded-[4px] flex items-center justify-between border-2 border-[#F8CCCC] my-7">
                <h2 className="text-[#FF706B] text-[16px]">Hurry up! Sale ends in: </h2>
                <div className="flex items-center gap-3  text-[#FF706B] text-[16px]">
                  <span>01</span>: 
                  <span>05</span>:
                  <span>59</span>:
                  <span>47 </span>         
          </div>
        </div>
         

         <div className="pb-7">
          <p className="text-[#666666] text-[16px] pb-2">Only 9 item(s) left in stock!</p>
        <div className="w-full h-1 bg-gray-300 rounded-full">
          
         <div className="w-12 h-1 bg-red-500 rounded-full"></div>
      </div>
         </div>

         <div>
          <h3 className="pb-4">Size: M</h3>
          <div className="flex items-center gap-4">
            <button className="w-[45px] h-[45px] py-[9px] px-[14.7px] rounded-[10px] bg-black text-white">M</button>
            <button className="w-[45px] h-[45px] py-[9px] px-[14.7px] rounded-[10px] shadow text-black bg-white">L</button>
             <button className="w-[45px] h-[45px] py-[9px] px-[14.7px] rounded-[10px] shadow text-black bg-white">Xl</button>
              <button className="w-[45px] h-[45px] py-[9px] px-[14.7px] rounded-[10px] shadow text-black bg-white">XXL</button>
          </div>
         </div>
        
        <div className="pt-7 pb-7">
          <h3 className="pb-4">Color: Blue</h3>
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] border-2 border-black p-1 rounded-full text-center">
              <button className=" w-[40px] h-[40px]    rounded-full bg-[#8DB4D2] text-white"></button>
            </div>
            <div className="w-[50px] h-[50px]  p-1 rounded-full text-center">
              <button className=" w-[40px] h-[40px]    rounded-full bg-black text-white"></button>
            </div>
            <div className="w-[50px] h-[50px]  p-1 rounded-full text-center">
              <button className=" w-[40px] h-[40px]    rounded-full bg-[#FFD1DC] text-white"></button>
            </div>
             
            
             
          </div>
         </div>

         <div>
          <h3 className="pb-3">Quantity</h3>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center justify-between px-5 w-[128px] h-[45px] rounded-[10px] border border-gray-200">
              <button>-</button>
              <p>1</p>
              <button>+</button>

            </div>
            <div className="flex-1 w-[442px] h-[45px] rounded-[10px] border-2 ">
              <Link href="/minicart" className="flex items-center justify-center w-full h-full">Add to cart</Link>
            </div>
          </div>
         </div>

         <div className="flex items-center gap-8 pt-7 pb-3 border-b-2 border-b-gray-300">
          <div>
            <Image
                        className="w-full h-full object-cover"
                        src={com}
                        alt="Hero Image"
                        priority
                      />
          </div>
           <div>
            <Image
                        className="w-full h-full object-cover"
                        src={ask}
                        alt="Hero Image"
                        priority
                      />
          </div>
           <div>
            <Image
                        className="w-full h-full object-cover"
                        src={shere}
                        alt="Hero Image"
                        priority
                      />
          </div>

         </div>

         <div className="py-7">
            <div className="pb-2.5 flex items-center gap-2">
              <FaCarSide />
              <h4>Estimated Delivery: <span>Jul 30 - Aug 03</span></h4>

            </div>
            <div className=" flex items-center gap-2">
              <PiShippingContainer />
              <h3>Free Shipping & Returns: On all orders over $75</h3>

            </div>
         </div>

         <div className="py-8 bg-[#F8F8F8] px-[132px] rounded-[10px]">
          <div>
            <Image
                        className="w-full h-full object-contain"
                        src={vaa}
                        alt="Hero Image"
                        priority
                      />
          </div>
          <h1 className="text-center pt-5">Guarantee safe & secure checkout</h1>

         </div>

      </div>


      </div>
    </section>
  );
}

export default page;
