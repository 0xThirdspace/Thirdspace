import {
  CloseBtn,
  TextArea,
  InputField,
  ArrowdownIcon,
  StatusDropdownIcon,
  ArrowRightDiagonalBtn,
  StartNewChatSVG,
} from "@/components/shared";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const ChatOptions = () => {
  return (
    <div className="w-full text-[14px] font-normal bg-white">
      <main className="flex items-center w-full h-[40px] ">
        <select
          style={{
            WebkitAppearance: "none",
            appearance: "none",
          }}
          className="w-full h-[40px] none -mr-[10px] pl-4 text-[14px] border-[1px] border-zinc-300  font-normal text-[#3F3F3F] bg-white focus:[#873ab3] focus:[#873ab3] focus:ring-1"
        >
          <option>Add members</option>
          <option>Eric</option>
          <option>Glory</option>
          <option>Shan</option>
        </select>
        <div className="relative right-5">
          <StatusDropdownIcon />
        </div>
      </main>
    </div>
  );
};

const CreateGroup = (props: { onclick: any }) => {
  return (
    <div className="font-DMSans text-black font-normal h-screen w-screen overflow-y-auto flex items-center justify-center bg-[#EEE]">
      <div className="bg-white rounded-md h-auto w-screen mx-4 sm:mx-0 sm:w-[586px] md:w-[700px] flex flex-col items-center">
        <div onClick={props.onclick} className="py-[28px] self-end pr-[28px]">
          <CloseBtn />
        </div>

        <p className="text-[32px] font-bold">Create Group</p>
        <p className="text-base text-[#999] pt-4 pb-12 text-center px-4 ">
          Start a new group
        </p>

        <form className="w-full px-4 sm:px-12 md:px-28  text-[#999] text-sm flex flex-col gap-[10px] pb-12 bg-white">
          <InputField type="text" placeholder="Group title" />

          <ChatOptions />

          <TextArea placeholder="Group Description" />

          <InputField
            type="file"
            placeholder={"Upload or drag & drop files here"}
          />
        </form>

        <div className="w-full px-3 sm:px-8 md:px-24 flex items-center justify-center pb-10">
          <Link
            href="/chat/#"
            onClick={props.onclick}
            className="bg-gradient-to-r from-[#02EC88] to-[#5CB25D] text-white w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-lg"
          >
            <p>Create</p>
            <ArrowRightDiagonalBtn color={"white"} />
          </Link>
        </div>

        <div className="w-full px-3 sm:px-8 md:px-24 flex items-center justify-center pb-20 ">
          <button className="w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-lg">
            <div className="bg-gradient-to-r from-[#02EC88] to-[#5CB25D] inline-block text-transparent bg-clip-text">
              Start new chat instead
            </div>

            <ArrowRightDiagonalBtn color="#5CB25D" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
