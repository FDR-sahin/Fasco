import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import l1 from "@/assets/Layer1.png";
import l2 from "@/assets/Layer2.png";
import l3 from "@/assets/Layer3.png";
import l4 from "@/assets/Layer4.png";
import l5 from "@/assets/Layer5.png";

function ShopPage() {
  return (
    <section className="py-20 mt-18">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col items-center">
          <h1 className="text-[42px] pb-1">Fashion</h1>
          <div className="flex items-center gap-2">
            <Link
              className="text-[#000000] text-[15px] cursor-pointer hover:text-blue-600 font-semibold"
              href="/"
            >
              Home
            </Link>
            <span>
              <RiArrowDropRightLine className="cursor-pointer text-[#000000] text-[25px]" />
            </span>
            <Link
              className="text-[#000000] text-[15px] cursor-pointer hover:text-blue-600 font-semibold"
              href="/fashion"
            >
              Fashion
            </Link>
          </div>
        </div>

        <div className="flex gap-5  justify-between pt-15">
          <div className="flex-1">
            <h1 className="text-[30px]">Filters</h1>

            <div className="w-[150px] h-[133px] mt-7">
              <h2 className="text-[18px] pb-3">Size</h2>
              <div className="flex flex-wrap items-center gap-3">
                <button className="border-2 border-[#8A8A8A] py-1 px-3 text-[#8A8A8A] rounded-[10px]">
                  S
                </button>
                <button className="border-2 border-[#8A8A8A] py-1 px-3 text-[#8A8A8A] rounded-[10px]">
                  M
                </button>
                <button className="border-2 border-[#8A8A8A] py-1 px-3 text-[#8A8A8A] rounded-[10px]">
                  L
                </button>
                <button className="border-2 border-[#8A8A8A] py-1 px-3 text-[#8A8A8A] rounded-[10px]">
                  Xl
                </button>
              </div>
            </div>

            <div className="w-[300px] h-[124px] mt-10">
              <h2 className="text-[18px] pb-3">Colors</h2>
              <div className="flex flex-wrap items-center gap-3">
                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#FF6C6C] rounded-full"></button>
                </div>

                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#FFF06C] rounded-full"></button>
                </div>
                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#9BFF6C] rounded-full"></button>
                </div>
                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#6CFF9E] rounded-full"></button>
                </div>
                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#6CFFDC] rounded-full"></button>
                </div>
                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#6CB9FF] rounded-full"></button>
                </div>
                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#6CF6FF] rounded-full"></button>
                </div>
                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#6CA7FF] rounded-full"></button>
                </div>

                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#8A6CFF] rounded-full"></button>
                </div>
                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#B66CFF] rounded-full"></button>
                </div>
                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#FC6CFF] rounded-full"></button>
                </div>
                <div className="h-10 w-10 p-1">
                  <button className="h-7.5 w-7.5 bg-[#FF6C6C] rounded-full"></button>
                </div>
              </div>
            </div>

            <div className="w-[89px] h-[208px] mt-10 mb-20">
              <h2 className="text-[18px] pb-3">Prices</h2>
              <div className="flex flex-col gap-3">
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">$0-$50</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">$50-$100</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">$100-$150</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">$150-$200</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">$300-$400</button>
                </div>
              </div>
            </div>

            <div className="w-[309.5px] h-[104px] mt-10">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] pb-3">Brands</h2>
                <IoIosArrowUp className="text-[20px]" />
              </div>
              <div className="flex flex-wrap gap-3">
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Minimog</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Retrolie</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Brook</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Learts</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Vagabond</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Abby</button>
                </div>
              </div>
            </div>

            <div className="w-[309.5px] h-[1784x] mt-10">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] pb-3">Brands</h2>
                <IoIosArrowUp className="text-[20px]" />
              </div>
              <div className="flex flex-col gap-3">
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">All products</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Best sellers</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">New arrivals</button>
                </div>
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Accessories</button>
                </div>
              </div>
            </div>

            <div className="w-[309.5px] h-[134px] mt-10">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] pb-3">Brands</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Fashion</button>
                </div>

                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Hats</button>
                </div>

                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Sandal</button>
                </div>

                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Belt</button>
                </div>

                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Bags</button>
                </div>

                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Snacker</button>
                </div>

                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Denim</button>
                </div>

                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Minimog</button>
                </div>

                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Vagabond</button>
                </div>

                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Sunglasses</button>
                </div>

                <div className=" p-1">
                  <button className=" text-[#8A8A8A]">Beachwear</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3>Best selling</h3>
                <MdOutlineKeyboardArrowDown />
              </div>
              <div className="flex items-center gap-x-3 ">
                <button className="bg-[#F2F2F2] w-9.5 h-9.5 rounded-[10px]">
                  <Image
                    className="w-full h-full object-contain p-3"
                    src={l1}
                    alt="Hero Image"
                    priority
                  />
                </button>
                <button className="bg-[#F2F2F2] w-9.5 h-9.5 rounded-[10px]">
                  <Image
                    className="w-full h-full object-contain p-3"
                    src={l2}
                    alt="Hero Image"
                    priority
                  />
                </button>
                <button className="bg-[#F2F2F2] w-9.5 h-9.5 rounded-[10px]">
                  <Image
                    className="w-full h-full object-contain p-3"
                    src={l3}
                    alt="Hero Image"
                    priority
                  />
                </button>
                <button className="bg-[#F2F2F2] w-9.5 h-9.5 rounded-[10px]">
                  <Image
                    className="w-full h-full object-contain p-3"
                    src={l4}
                    alt="Hero Image"
                    priority
                  />
                </button>
                <button className="bg-[#F2F2F2] w-9.5 h-9.5 rounded-[10px]">
                  <Image
                    className="w-full h-full object-contain p-3"
                    src={l5}
                    alt="Hero Image"
                    priority
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
