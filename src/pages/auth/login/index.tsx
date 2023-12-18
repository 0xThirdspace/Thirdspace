import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cancel_logo, gmailLogo, syncteam_white } from "@/assets";
import ModalHeader from "@/components/shared/modal-header";

const Login = () => {
  return (
    <>
      <div className="font-DMSans flex items-center justify-center h-screen bg-[#EEEEEE] text-balck w-auto">
        <div className="absolute top-2 left-2 max-w-[180px]">
          <Link href="/">
            <Image alt="logo" width={180} src={syncteam_white} />
          </Link>
        </div>

        <div className="relative bg-white text-black mx-2 py-12 px-3 sm:px-10 w-full max-w-[604px] h-auto rounded-sm shadow-lg shadow-[#4c5551]">
          <Image
            src={cancel_logo}
            alt="cancel"
            className="absolute right-7 top-7"
            width={24}
          />

          <ModalHeader headerText="Sign In" />

          <button className="w-full flex h-[50px] mt-5 md:mt-10 flex-row gap-4 items-center justify-center rounded-md bg-gradient-to-r from-[#02EC88] to-[#5CB25D]">
            <Image src={gmailLogo} alt="gmailLogo" width={32} />
            <span className="font-medium text-lg text-white">Gmail</span>
          </button>

          <p className="mt-[10px] md:mt-[24px] text-sm mx-auto text-center justify-center text-black">
            Or
          </p>

          <div className="">
            {/* <SignInForm /> */}

            <div className="flex flex-col gap-5">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-semibold tracking-wider text-black">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 px-3 py-4 text-sm font-normal bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#02EC88] focus:ring-[#5CB25D] block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Type your email here"
                />
              </label>

              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-semibold tracking-wider text-black">
                  Password
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 px-3 py-4 text-sm font-normal bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#02EC88] focus:ring-[#5CB25D] block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Type your password here"
                />
              </label>
            </div>

            <h1 className="text-[#999999] text-sm my-5 font-normal">
              Can’t remember your password?
            </h1>

            <button
              type="submit"
              className="w-full h-[50px] font-medium text-base text-white bg-gradient-to-b from-[#02EC88] to-[#5CB25D] cursor-pointer rounded-sm"
            >
              Proceed
            </button>
            <div className="font-normal flex flex-row  gap-2 items-center justify-center mt-4 text-base">
              <p className="text-[#999999] font-normal text-sm">
                Don’t have an account?
              </p>
              <Link href="/auth/signup" className="text-black">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
