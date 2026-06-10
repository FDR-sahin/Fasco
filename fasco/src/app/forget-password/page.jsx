import React from "react";
import login from "@/assets/login.png";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button/Button";

function ForgetPassword() {
  return (
    <section className="max-w-350 mx-auto p-10 mt-25">
      <div className="border-2 border-[#DBDBDB] grid md:grid-cols-2 grid-cols-1 gap-2">
        <div>
          <Image
            className="w-full h-full object-cover"
            src={login}
            alt="Hero Image"
            priority
          />
        </div>
        <div className="p-10">
          <h1 className="text-[66.6px] text-[#484848] ">FASCO</h1>
          <div className="mr-3">
            <h3 className="text-[30px] text-[#000000] pt-35 pb-10">
              Forget Password
            </h3>

            <form
              className="grid md:grid-cols-2 grid-cols-1 gap-4 pb-5"
              action="#"
            >
              <div className="flex flex-col gap-4">
                <input
                  className="border-b-3 border-b-[#9D9D9D] placeholder:text-[#9D9D9D] pb-1.5 outline-none"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="border-b-3 border-b-[#9D9D9D] placeholder:text-[#9D9D9D] pb-1.5 outline-none"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex flex-col gap-4">
                <input
                  className="border-b-3 border-b-[#9D9D9D] placeholder:text-[#9D9D9D] pb-1.5 outline-none"
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className="border-b-3 border-b-[#9D9D9D] placeholder:text-[#9D9D9D] pb-1.5 outline-none"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
            </form>
            <div className="px-4 ">
              <Button text1="Send Confirmation Code" />
            </div>
            {/* button */}
            <p className="pt-4 text-center text-[#000000]">
              Already have an account?{" "}
              <Link className="text-[#5B86E5]" href="/login">
                Login
              </Link>
            </p>
          </div>
          <p className="text-end mt-20">FASCO Terms & Codnitions</p>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
