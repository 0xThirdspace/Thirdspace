import React, { useState } from "react";
import { ArrowRightDiagonalBtn, CloseBtn } from "../shared";

const InputField = (props: {
  tag?: string;
  type: string;
  placeholder: any;
  style?: any;
}) => {
  return (
    <div className="text-[14px] font-normal text-white">
      <p className="pb-[5px] text-xl font-normal text-white">{props.tag}</p>
      <input
        type={props.type}
        className={`${props.style}  h-auto py-[14px] px-3 border-[1px] bg-inherit border-zinc-400 focus:outline-none focus:[#873ab3] focus:[#873ab3] focus:ring-1`}
        placeholder={props.placeholder}
      />
    </div>
  );
};

const TextArea = (props: { tag?: string; placeholder: string }) => {
  return (
    <div className="w-full text-[14px] font-normal text-white   ">
      <p className="pb-[5px] text-xl font-normal text-white">{props.tag}</p>
      <textarea
        rows={7}
        // cols={10}
        placeholder={props.placeholder}
        className="w-full text-[14px] font-normal bg-inherit text-white p-4 -mb-1 border-[1px] border-zinc-400 focus:outline-none focus:[#873ab3] focus:[#873ab3] focus:ring-1"
      />
    </div>
  );
};

const SubmitWork = (props: { onclick: any }) => {
  const [submissionModal, setSubmissionModal] = useState(false);
  const openSubmissionModal = () => {
    console.log("clicked");
    setSubmissionModal(true);
  };

  const closeSubmissionModal = () => {
    setSubmissionModal(false);
  };

  return (
    <div className="bg-[#0F0F0F] rounded-md h-auto w-screen mx-4 sm:mx-0 sm:w-[586px] md:w-[1000px] flex flex-col items-center">
      <div onClick={props.onclick} className="py-[28px] self-end pr-[28px]">
        <CloseBtn />
      </div>

      <p className="text-[32px] font-bold">Submit Work</p>
      <p className="text-base text-[#999] pt-4 pb-12 text-center px-4 ">
        Name your bounty and start collaborating with developers to get coding
        tasks completed.
      </p>

      <form className="w-full px-4 sm:px-12 md:px-28 text-[#999] text-sm flex flex-col gap-[15px] pb-12 ">
        <InputField
          tag="Pull Request Link"
          type={"text"}
          placeholder={"Paste PR Link here"}
        />

        <InputField
          tag="Wallet Address"
          type={"text"}
          placeholder={"Paste wallet address"}
        />

        <TextArea tag="Description" placeholder="Token amount" />
      </form>

      <div className="w-full px-3 sm:px-8 md:px-24 flex items-center justify-center pb-20 ">
        <button className="buttonLinearBackground w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-lg">
          <p>Confirm</p>
          <ArrowRightDiagonalBtn />
        </button>
      </div>
    </div>
  );
};

export default SubmitWork;
