import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import CreateBountySpaceForm from "./CreateBountySpaceForm";

type Props = {};

const CreateBountySpace = (props: Props) => {
  return (
    <>
      <div className="h-screen pt-20">
        <div className=" bg-black w-[450px] md:w-[600px] h-[450px] mx-auto flex flex-col pt- items-center  p-14 ">
          <h2 className="text-white font-semibold text-2xl text-center font-dmSans">
            Create Workspace Name
          </h2>

          <p className="text-[#999999] text-center mt-4 font-dmSans font-normal">
            Create your workspace and start collaborating with developers to{" "}
            <br /> get coding tasks completed.
          </p>

          <CreateBountySpaceForm />

          <div className="btnBackgroundGradient  rounded-[8px] mt-10 md:mt-20 mb-10 ">
            <Link href="/creator" className=" ">
              <button className=" text-white w-[320px] md:w-[489px] h-[50px] flex justify-center items-center gap-2 ">
                Proceed to dashboard
                <BsArrowUpRight className=" w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBountySpace;
