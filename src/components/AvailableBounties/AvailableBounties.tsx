"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { logo } from "@/assets";
import { ViewAvailableBounties } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import AvailableBountiesCard from "./AvailableBountiesCard";

type Props = {};

const AvailableBounties = (props: Props) => {
  const { data: session } = useSession();

  //
  return (
    <div className="w-full h-full bg-black">
      <div className="pl-3 sm:pl-8 pt-8 ">
        <Link href="#">
          <Image src={logo} alt="logo" width={180} />
        </Link>
      </div>

      <div className="mt-5">
        <Link href="#">
          <Image
            alt=""
            width={35}
            height={35}
            src="/arrow.svg"
            className="ml-10"
          />
        </Link>
      </div>

      <div className="bg-[#0A0A0A] mx-3 sm:mx-8 mt-8 px-0 py-5 sm:px-5 sm:py-5">
        <div className="flex flex-wrap justify-between">
          <h2 className="text-white  font-DMSans font-extrabold text-xl md:text-2xl ml-4 md:ml-0">
            Available Bounties
          </h2>
          <div className="flex w-full sm:w-1/2 bg-[#0F0F0F] rounded-full items-center mt-2 sm:mt-0 mr-3 sm:mr-0">
            <button>
              <BiSearch className="w-6 h-6 ml-6" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="w-full  outline-none  text-white py-1 md:py-2 px-4 bg-[#0F0F0F] rounded-full "
            />
          </div>
        </div>

        <AvailableBountiesCard />
      </div>
    </div>
  );
};

export default AvailableBounties;
