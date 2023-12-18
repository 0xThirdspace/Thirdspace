import React from "react";
import Image from "next/image";
import { cancel_logo } from "@/assets";
import { BsArrowUpRight } from "react-icons/bs";
import ModalHeader from "@/components/shared/modal-header";

const GetStarted = () => {
  return (
    <div className="font-DMSans flex items-center justify-center h-screen bg-[#EEEEEE] text-balck w-auto">
      <div className="relative bg-white text-black mx-2 py-12 px-3 sm:px-10 w-full max-w-[534px] h-auto rounded-sm shadow-lg shadow-[#4c5551]">
        <Image
          width={24}
          alt="cancel"
          src={cancel_logo}
          className="absolute right-5 sm:right-7 top-5 sm:top-7"
        />

        <ModalHeader headerText="Get Started" />

        <p className="text-[#999999] text-sm sm:text-base text-center mt-4 font-normal">
          Find your next coding challenge or create your own. Our platform
          allows developers to connect, collaborate, and earn rewards through
          completing bounties
        </p>

        <button
          type="submit"
          className="w-full h-[50px] font-medium text-base tracking-wider mt-10 mb-32 flex items-center justify-center gap-4 text-white bg-gradient-to-b from-[#02EC88] to-[#5CB25D] cursor-pointer rounded-[8px]"
        >
          Create Workspace
          <BsArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
