import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  //   children: React.ReactNode;
};

const GetStartedModal = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#05050533] bg-opacity-25 backdrop-blur-sm  flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="  w-[420px] md:w-[600px] h-[450px] bg-black flex flex-col relative ">
        <div className=" p-2 rounded">
          <button
            className="text-white text-2xl absolute top-6 right-10   "
            onClick={() => onClose()}
          >
            <MdOutlineCancel className="w-6 h-6" />
          </button>

          <div className="  mx-auto flex flex-col  items-center  px-10 md:px-14 py-10">
            <h2 className="text-white font-bold text-2xl text-center font-dmSans">
              Get Started
            </h2>

            <p
              className="text-[#999999] text-center mt-4 font-dmSans font-normal
        "
            >
              Find your next coding challenge or create your own. Our platform
              allows developers to connect, collaborate, and earn rewards
              through completing bounties
            </p>

            <div className="flex flex-col items-center  mt-10">
              {/* View Bounty Container */}
              <div className="btnBackgroundGradient  rounded-[8px] ">
                <Link href="/" className=" "></Link>

                <Link href="/available-bounties">
                  <button className=" text-white w-[300px] md:w-[489px] h-[45px] flex justify-center items-center gap-2 font-medium  text-lg">
                    View Available Bounties
                    <BsArrowUpRight className=" w-6 h-6" />
                  </button>
                </Link>
              </div>

              {/* Or Container */}
              <div className="hidden md:flex w-[489px] justify-between items-center mt-3 ">
                <div className="w-[210px] h-[2px] bg-[#1f1f1f]   "></div>

                <p className="text-[#999999]">Or</p>

                <div className="w-[210px] h-[2px] bg-[#1f1f1f] "></div>
              </div>

              {/* Create Bounty Space Container */}

              <div className="  btnBorderGradient  mt-6 md:mt-3">
                <Link href="/bounty-space" className=" ">
                  <button
                    className=" text-white w-[300px] md:w-[489px] h-[45px] flex justify-center items-center gap-2 font-medium text-lg"
                    // onClick={() => setShowModal(true)}
                  >
                    Create Bounty Space
                    <BsArrowUpRight className=" w-6 h-6" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default GetStartedModal;
