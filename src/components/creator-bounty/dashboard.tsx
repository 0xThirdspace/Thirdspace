import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Image from "next/image";
import { DashboardSearch } from "@/components/shared";
import CreateBounty from "@/components/creator-bounty/create-bounty";

const CreatorDashboard = () => {
  const [createBounty, setCreateBounty] = useState(false);

  const displayCreateBountyModal = () => {
    return setCreateBounty(!createBounty);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Image
          width={32}
          height={32}
          alt="creator-bounty"
          src="/images/bounty.svg"
          className="w-[24px] h-[24px] sm:w-[30px] sm:h-[32px]"
        />
        <p className="text-[20px] sm:text-[38px] font-medium text-[#999999]">
          Bounties
        </p>
      </div>
      <div className="flex gap-7 items-center ">
        <div className="hidden xl:flex">
          <DashboardSearch width={"min-w-[400px]"} />
        </div>

        <div>
          <button
            onClick={displayCreateBountyModal}
            className="relative py-2 pl-2 sm:pl-4 pr-1 sm:pr-2 gap-1 sm:gap-2 flex items-center text-[18px] sm:text-[20px] font-medium rounded-lg buttonLinearBackground"
          >
            <p>Create Bounty</p>
            <BiPlus className="w-[24px] h-[24px] " />
          </button>
        </div>

        {createBounty && (
          <div className="bg-[#191919] bg-opacity-80 fixed z-10 left-0 top-0 w-screen h-screen overflow-y-auto py-16">
            <div className="flex margin-auto items-center justify-center">
              <CreateBounty onclick={displayCreateBountyModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatorDashboard;
