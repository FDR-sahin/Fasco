"use client";
import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Carts from "../Carts/Carts";
import Button from "../Button/Button";

function NewArrivals() {
  const categories = [
    "Men’s Fashion",
    "Women’s Fashion",
    "Women Accessories",
    "Men Accessories",
    "Discount Deals",
  ];
  const [activeTav, setActiveTav] = useState("Women’s Fashion");
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-12">
        <Heading
          hed="New Arrivals"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin "
        />
        <div className="flex flex-wrap items-center justify-center gap-4 py-12">
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => setActiveTav(category)}
                className={`cursor-pointer text-[#8A8A8A] py-4 px-8 rounded-[10px] ${activeTav === category ? "bg-black shadow-2xl text-[#FFFFFF]" : "bg-[#FAFAFA]"}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-15">
          <Carts />
          <Carts />
          <Carts />
          <Carts />
          <Carts />
          <Carts />
        </div>
        <div className="pt-12 w-fit mx-auto">
          <Button text1="View More" />
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
