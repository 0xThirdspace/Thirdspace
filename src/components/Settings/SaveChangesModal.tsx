import React from "react";
import { CloseBtn } from "../shared";

const SaveChangesModal = (props: { onclick: any }) => {
  return (
    <div className="bg-[#0F0F0F] rounded-md h-[600px] w-screen mx-4 sm:mx-0 sm:w-[586px] md:w-[700px] flex flex-col items-center">
      <div onClick={props.onclick} className="py-[28px] self-end pr-[28px]">
        <CloseBtn />
      </div>

      <p className="text-[32px] font-bold pb-10">Save changes</p>
      <p className="text-center">
        An OTP was sent to *********21@gmail.com. Check your email address
      </p>
      <div className="py-16 flex gap-2 sm:gap-4">
        <input
          type="text "
          className="bg-inherit w-[45px] h-[45px] rounded-md border-zinc-50 border-[1px] "
        />
        <input
          type="text "
          className="bg-inherit w-[45px] h-[45px] rounded-md border-zinc-50 border-[1px] "
        />
        <input
          type="text "
          className="bg-inherit w-[45px] h-[45px] rounded-md border-zinc-50 border-[1px] "
        />
        <input
          type="text "
          className="bg-inherit w-[45px] h-[45px] rounded-md border-zinc-50 border-[1px] "
        />
        <input
          type="text "
          className="bg-inherit w-[45px] h-[45px] rounded-md border-zinc-50 border-[1px] "
        />
      </div>
    </div>
  );
};

export default SaveChangesModal;
