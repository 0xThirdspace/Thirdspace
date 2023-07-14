import { gmailLogo, logo, success } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SignInForm from "./SignInForm";

type Props = {};

const SigInPage = (props: Props) => {
  return (
    <>
      <div className="bg-[#050505] h-full">
        <div className="ml-10 mb-4">
          <Link href="/">
            <Image src={logo} alt="logo" width={180} />
          </Link>
        </div>

        <div className=" mx-auto w-[500px] h-[600px] bg-[#0F0F0F] flex flex-col text-white -mt-16 shadow-inner ">
          <div className=" p-2 rounded">
            <button className="text-white text-2xl absolute top-8 right-10   "></button>

            <div className="flex flex-col mt-5 mx-[48px]">
              <h2 className="text-white font-bold text-2xl text-center font-dmSans">
                Sign In
              </h2>

              <button className=" font-dmSans h-[50px] mt-6 flex flex-row gap-4 items-center justify-center bg-[#141414] ">
                <Image src={gmailLogo} alt="gmailLogo" width={40} />
                <span className="font-medium text-lg"> Gmail</span>
              </button>

              <p className="mt-[24px] mx-auto items-center justify-center text-[#999999]">
                Or
              </p>

              <div className="mt-6">
                <SignInForm />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SigInPage;
