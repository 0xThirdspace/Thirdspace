import React from "react";
import Image from "next/image";
import { cancel_logo } from "@/assets";
import { BsArrowUpRight } from "react-icons/bs";
import ModalHeader from "@/components/shared/modal-header";

const CreateWorkspace = () => {
  return (
    <div className="flex font-DMSans items-center justify-center h-screen bg-[#EEEEEE] text-balck w-auto">
      <div className="relative bg-white text-black mx-2 py-12 px-3 sm:px-10 w-full max-w-[534px] h-auto rounded-sm shadow-lg shadow-[#4c5551]">
        <Image
          width={24}
          alt="cancel"
          src={cancel_logo}
          className="absolute right-5 sm:right-7 top-5 sm:top-7"
        />

        <ModalHeader headerText="Workspace Name" />

        <p className="text-[#999999] text-sm sm:text-base text-center mt-4 font-normal">
          Create your workspace and start collaborating with developers to get
          coding tasks completed.
        </p>

        <label className="block py-10">
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-4 text-sm font-normal bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#02EC88] focus:ring-[#5CB25D] block w-full rounded-md focus:ring-1"
            placeholder="Type workspace name here"
          />
        </label>

        <button
          type="submit"
          className="w-full mt-10 mb-32 font-medium text-base flex items-center justify-center gap-4 text-white bg-gradient-to-b from-[#02EC88] to-[#5CB25D] cursor-pointer rounded-[8px] h-[50px]"
        >
          Proceed to Dashboard
          <BsArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CreateWorkspace;
