// import React from 'react'
// import piciblenders from "@/assets/piciblender.png"
// import point from '@/assets/points.png'
// import Image from 'next/image'

// function PeakyBlinders() {
//   return (
//     <section className="py-12 bg-[#F8F8F8]">
//       <div
//         className="w-full h-[400px] bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${piciblenders})` }}
//       >
//        {/* <Image className='w-full h-full object-contain' src={piciblenders} alt="Hero Image" priority /> */}
//       </div>
//     </section>
//   )
// }

// export default PeakyBlinders

import React from "react";
import point from "@/assets/points.png";
import Image from "next/image";
import piciblenders from "@/assets/piciblender.png";
import dags from "@/assets/dag.png";
import bgs from "@/assets/bg.png";
import Button from "../Button/Button";
import high from "@/assets/high.png";
import warrany from "@/assets/warrany.png";
import free from "@/assets/free.png";
import suport from "@/assets/support.png";

function PeakyBlinders() {
  console.log(piciblenders);

  return (
    <section className="bg-[#F8F8F8]">
      <div className="flex items-end justify-between pl-35">
        <div
          className=" w-180.5 h-152.5 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${piciblenders.src})` }}
        >
          <Image
            className="w-145 h-145 object-contain"
            src={point}
            alt="Hero Image"
            priority
          />
        </div>

        <div
          className="relative flex-1 w-180.5 h-152.5 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgs.src})` }}
        >
          <div className="w-203.75 py-15 pl-70.5">
            <p className="text-[#767676] text-[16px]">Women Collection</p>
            <h1 className="text-[#484848] text-[46px] py-5">Peaky Blinders</h1>
            <p className="text-[#000000] text-[16px] border-b-3 w-fit">
              DESCRIPTION
            </p>
            <p className="text-[#767676] text-[16px] py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque du is ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </p>
            <div className="flex items-center gap-3">
              <p className="text-[#767676] text-[16px]">size : </p>
              <button className="bg-black py-1 px-3 text-white rounded-[10px]">
                M
              </button>
            </div>
            <p className="text-[24px] py-5">
              $100. <span className="text-[20px]">00</span>
            </p>
            <div className="w-fit">
              <Button text1="Buy Now" />
            </div>
            <Image
              className=" w-140 absolute top-6.5 -left-47 h-140 object-contain"
              src={dags}
              alt="Hero Image"
              priority
            />
          </div>
        </div>
      </div>
      <div className=" bg-white">
        <div className="max-w-7xl mx-auto px-12 flex items-center gap-20 py-15">
          <div>
            <Image
              className="w-full h-full object-cover"
              src={high}
              alt="Hero Image"
              priority
            />
          </div>
          <div>
            <Image
              className="w-full h-full object-cover"
              src={warrany}
              alt="Hero Image"
              priority
            />
          </div>
          <div>
            <Image
              className="w-full h-full object-cover"
              src={free}
              alt="Hero Image"
              priority
            />
          </div>
          <div>
            <Image
              className="w-full h-full object-cover"
              src={suport}
              alt="Hero Image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeakyBlinders;
