import React from "react";
import Link from "next/link";

function footer() {
  return (
    <footer className=" bg-white">
      <nav className="max-w-7xl mx-auto px-12 flex items-center justify-between pt-10">
        <div>
          <h1 className="text-[32px] text-[#484848]">FASCO</h1>
        </div>
        <div>
          <ul className="flex items-center gap-x-10">
            <li>
              <Link
                className="text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold"
                href="/"
              >
                Support Center
              </Link>
            </li>
            <li>
              <Link
                className="text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold"
                href="/"
              >
                Invoicing
              </Link>
            </li>
            <li>
              <Link
                className="text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold"
                href="/"
              >
                Contract
              </Link>
            </li>
            <li>
              <Link
                className="text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold"
                href="/"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                className="text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold"
                href="/login"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold"
                href="/signup"
              >
                FAQ,s
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="text-center pt-12 pb-6">
        <p className="text-[#484848] text-[12px]">
          Copyright © 2022 Xpro . All Rights Reseved.
        </p>
      </div>
    </footer>
  );
}

export default footer;
