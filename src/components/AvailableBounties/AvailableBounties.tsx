import { logo } from "@/assets";
import { ViewAvailableBounties } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import AvailableBountiesCard from "./AvailableBountiesCard";

type Props = {};

const AvailableBounties = (props: Props) => {
  //
  return (
    <>
      <div className="bg-[#050505]">
        <div className="ml-10 ">
          <Link href="/">
            <Image src={logo} alt="logo" width={180} />
          </Link>
        </div>

        {/* Desktop View */}
        <div className="   bg-[#0A0A0A] h-full p-2 mt-10 mx-6 md:mx-0 ">
          <div className="flex flex-col md:flex-row  md:justify-between p-4 space-y-1 md:space-y-0 md:mx-6 mx-0 ">
            {/* Members */}
            <div className="flex flex-row gap-1 ">
              <h2 className="text-white  font-dmSans font-extrabold text-xl md:text-2xl ml-4 md:ml-0 ">
                Available Bounties
              </h2>
              
          </div>
          

            {/* Search */}
            <div className="flex w-full md:w-1/3  bg-[#0F0F0F] rounded-full items-center  ">
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
        <div className="">
          <Link href="/"> 
            <Image src="/arrow.svg" alt=""  className="ml-[2.3rem]" width={35} height={35}/>
            
            </Link>
            </div>

          <div>
            <AvailableBountiesCard />
          </div>
        </div>

        {/* Mobile View */}
      </div>
    </>
  );
};

export default AvailableBounties;
