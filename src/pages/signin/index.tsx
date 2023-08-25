import { gmailLogo, logo, success } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SignInForm from "./SignInForm";

type Props = {};

const SigInPage = (props: Props) => {
  return (
    <>
      <div className="h-screen">
      <div className="m-10">
            <Link href="/">
              <Image src={logo} alt="logo" width={180} />
            </Link>
          </div>
        <div className="flex flex-col pt-8">
          <div className=" mx-auto md:-mt-4  md:mx-auto xs:w-[350px] sm:w-[400px]  md:w-[500px] h-[450px]  md:h-[520px] bg-[#0F0F0F] flex flex-col justify-center  text-white shadow-inner ">
            <div className=" p-2 rounded ">
              <div className="flex flex-col mt-2 mx-[48px]">
                <h2 className="text-white font-bold md:text-2xl text-center font-dmSans">
                  Sign In
                </h2>

                {/* Desktop */}
                <button className="hidden md:flex font-dmSans h-[50px] mt-3 md:mt-6 flex-row gap-4 items-center justify-center bg-[#141414] ">
                  <Image src={gmailLogo} alt="gmailLogo" width={40} />
                  <span className="font-medium text-lg"> Gmail</span>
                </button>
                {/* Mobile Screen */}
                <button className="font-dmSans h-[40px] mt-3 md:mt-6  flex md:hidden flex-row gap-4 items-center justify-center bg-[#141414] ">
                  <Image src={gmailLogo} alt="gmailLogo" width={30} />
                  <span className="font-medium text-lg"> Gmail</span>
                </button>

                <p className=" mt-[10px] md:mt-[24px] mx-auto items-center justify-center text-[#999999]">
                  Or
                </p>

                <div className="">
                  <SignInForm />
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigInPage;
