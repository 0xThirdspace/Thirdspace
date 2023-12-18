import { BountyDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  selectedBounty: Bounty | null;
};

type Bounty = {
  id: string;
  image: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  reward: string;
};

const BountyDetailModal = ({ isVisible, onClose, selectedBounty }: Props) => {
  if (!isVisible || !selectedBounty) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#05050533] bg-opacity-25 backdrop-blur-sm  flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className=" mx-6  md:mx-0 w-[400px] md:w-[1000px] h-[550px] md:h-[600px] bg-[#0F0F0F] flex flex-col relative">
        <div className="p-0 md:p-2 rounded shadow-2xl ">
          <button
            className="text-white text-2xl absolute top-4 md:top-6 right-6"
            onClick={onClose}
          >
            <MdOutlineCancel className="w-6 h-6" />
          </button>

          {/* Desktop Screen */}
          <div className=" hidden md:flex  flex-row mt-10 font-DMSans gap-4 mx-4  p-4 text-white">
            <div className="flex flex-col  ">
              <div className="flex flex-row gap-4 ">
                <Image
                  src={selectedBounty.image}
                  alt="bountyImage"
                  width={130}
                  className=""
                />

                <div className="flex flex-col mt-3">
                  <h2 className="font-DMSans font-semibold text-lg">
                    {selectedBounty.title}
                  </h2>
                  <div className="flex flex-row justify-between font-normal font-DMSans text-sm my-2 mr-6">
                    <p>
                      <span className="text-[#999999]">Start Date: </span>
                      {selectedBounty.startDate}
                    </p>
                    <p>
                      <span className="text-[#999999]">End Date:</span>
                      {selectedBounty.endDate}
                    </p>
                  </div>
                  <h2 className="font-semibold text-lg">Scope</h2>

                  <p className="font-DMSans font-normal text-sm mb-2 text-[#999999]  ">
                    {selectedBounty.description}
                  </p>
                </div>
              </div>

              {/*  */}
              {BountyDetails.map((bountyDetail) => (
                <div key={bountyDetail.id}>
                  <div className="flex flex-col space-y-2  text-white">
                    <h2 className="font-semibold text-lg">Background</h2>

                    <p className=" font-DMSans font-normal text-sm  text-[#999999] ">
                      {bountyDetail.background}
                    </p>

                    <h2 className="font-semibold text-lg">Requirement</h2>
                    <p className="font-DMSans font-normal text-sm mb-10 text-[#999999] ">
                      {bountyDetail.requirement}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/*  */}
            <div className="border-[#1F1F1F] border p-3  flex flex-col  h-[270px] mt-5 ">
              <div className="bg-[#1F1F1F] w-[220px] h-[65px] items-center justify-center flex flex-col rounded-[8px] font-normal py-1">
                <p className="">Bounty Reward</p>
                <p className="text-xl">$50,000</p>
              </div>

              <p className="mt-10 mb-2 text-center font-medium justify-center text-[#999999]  text-xs ">
                You are a developer and you <br /> are pretty sure you can solve{" "}
                <br />
                this issue?
              </p>

              <div className="mt-7">
                <Link
                  href="/creator"
                  className="font-DMSans btnBackgroundGradient rounded-[8px] w-[220px] h-[50px] items-center justify-center flex flex-row gap-2 font-medium "
                >
                  <p className="">Join Bounty space</p>
                  <BsArrowUpRight className=" w-6 h-6 " />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Screen*/}

          <div className="flex  md:hidden flex-col mt-6 font-DMSans gap-4 mx-4  p-4 text-white  ">
            <div className="flex flex-col  ">
              <div className="flex flex-row gap-4 ">
                <Image
                  src={selectedBounty.image}
                  alt="bountyImage"
                  width={100}
                  className=""
                />

                <div className="flex flex-col mt-3">
                  <h2 className="font-DMSans font-medium text-normal">
                    {selectedBounty.title}
                  </h2>
                  <div className="flex flex-col justify-between font-normal font-DMSans text-sm my-2 mr-6">
                    <p>
                      <span className="text-[#999999]">Start Date: </span>
                      {selectedBounty.startDate}
                    </p>
                    <p>
                      <span className="text-[#999999]">End Date:</span>
                      {selectedBounty.endDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="font-medium  text-lg">Scope</h2>
                <p className="font-DMSans font-normal text-sm mb-2 text-[#999999]  ">
                  {selectedBounty.description}
                </p>
              </div>

              {/*  */}
              {BountyDetails.map((bountyDetail) => (
                <div key={bountyDetail.id} className="hidden">
                  <div className="flex flex-col space-y-2  text-white">
                    <h2 className="font-semibold text-lg">Background</h2>

                    <p className=" font-DMSans font-normal text-sm  text-[#999999] ">
                      {bountyDetail.background}
                    </p>

                    <h2 className="font-semibold text-lg">Requirement</h2>
                    <p className="font-DMSans font-normal text-sm mb-10 text-[#999999] ">
                      {bountyDetail.requirement}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/*  */}
            <div className="border-[#1F1F1F] border-2 p-3  flex flex-col  h-[220px] mt-1 mb-5 ">
              <div className="bg-[#1F1F1F] w-full  items-center justify-center mx-auto flex flex-col rounded-[8px] font-normal py-1">
                <p className="">Bounty Reward</p>
                <p className="text-xl">$50,000</p>
              </div>

              <p className="mt-4 mb-2 text-center font-medium justify-center text-[#999999]  text-sm ">
                You are a developer and you <br /> are pretty sure you can solve{" "}
                <br />
                this issue?
              </p>

              <div className="mt-2">
                <Link
                  href="/creator"
                  className="font-DMSans btnBackgroundGradient rounded-[8px] w-full h-[40px] items-center justify-center flex flex-row gap-2 font-medium "
                >
                  <p className="">Join Bounty space</p>
                  <BsArrowUpRight className=" w-6 h-6 " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyDetailModal;
