import React from "react";
import Image from "next/image";
import Link from "next/link";

const HunterAvailableBounty = () => {
  return (
    <div className="bg-[#1F1F1F] px-5 sm:px-10 py-4 h-auto ">
      <div className="flex flex-col gap-20">
        {[
          {
            id: 1,
            imgSrc: "/images/image-1.svg",
            bountyTitle:
              "Armored Core: Verdict Day access memory violation crash",
            startDate: "21st June, 2023",
            endDate: "21st June, 2023",
            bountyDescription:
              " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
            rewardAmount: "50,000",
          },
          {
            id: 2,
            imgSrc: "/images/image-2.png",
            bountyTitle:
              "Armored Core: Verdict Day access memory violation crash",
            startDate: "21st June, 2023",
            endDate: "21st June, 2023",
            bountyDescription:
              " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
            rewardAmount: "50,000",
          },
          {
            id: 3,
            imgSrc: "/images/image-2.svg",
            bountyTitle:
              "Armored Core: Verdict Day access memory violation crash",
            startDate: "21st June, 2023",
            endDate: "21st June, 2023",
            bountyDescription:
              " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
            rewardAmount: "50,000",
          },
          {
            id: 4,
            imgSrc: "/images/image-1.svg",
            bountyTitle:
              "Armored Core: Verdict Day access memory violation crash",
            startDate: "21st June, 2023",
            endDate: "21st June, 2023",
            bountyDescription:
              " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
            rewardAmount: "50,000",
          },
          {
            id: 5,
            imgSrc: "/images/image-2.png",
            bountyTitle:
              "Armored Core: Verdict Day access memory violation crash",
            startDate: "21st June, 2023",
            endDate: "21st June, 2023",
            bountyDescription:
              " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
            rewardAmount: "50,000",
          },
          {
            id: 6,
            imgSrc: "/images/image-2.svg",
            bountyTitle:
              "Armored Core: Verdict Day access memory violation crash",
            startDate: "21st June, 2023",
            endDate: "21st June, 2023",
            bountyDescription:
              " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
            rewardAmount: "50,000",
          },
        ].map((i) => {
          return (
            <>
              <Link
                href="/bounty-hunter/id"
                key={i.id}
                className="flex flex-col md:hidden gap-3"
              >
                <Image
                  width={200}
                  height={170}
                  src={i.imgSrc}
                  alt="bounty-avatar"
                  className="w-[100px] h-[90px] md:w-[210px] md:h-[180px] float-left "
                />
                <div className="flex flex-col w-full ">
                  <p className="text-2xl text-white font-normal">
                    {i.bountyTitle}
                  </p>
                  <div className="flex flex-col sm:flex-row text-sm font-normal justify-between py-3">
                    <div className="flex gap-2">
                      <p className="text-[#999]">Start Date:</p>
                      <p className="text-[#fff]">{i.startDate}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-[#999]">End Date:</p>
                      <p className="text-[#fff]">{i.endDate}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#999] text-base">{i.bountyDescription}</p>

                  <p className="bg-zinc-800 mt-5 md:mt-0 py-2 px-5 w-auto flex self-center justify-center ">
                    Reward: ${i.rewardAmount}
                  </p>
                </div>
              </Link>

              <Link
                href="/bounty-hunter/id"
                key={i.id}
                className="hidden md:flex gap-5"
              >
                <Image
                  width={200}
                  height={170}
                  src={i.imgSrc}
                  alt="bounty-avatar"
                  className="w-[100px] h-[90px]  md:w-[210px] md:h-[180px] float-left "
                />
                <div className="flex flex-col w-full ">
                  <p className="text-2xl text-white font-normal">
                    {i.bountyTitle}
                  </p>
                  <div className="flex flex-row text-sm font-normal justify-between py-3">
                    <div className="flex gap-2">
                      <p className="text-[#999]">Start Date:</p>
                      <p className="text-[#fff]">{i.startDate}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-[#999]">End Date:</p>
                      <p className="text-[#fff]">{i.endDate}</p>
                    </div>
                  </div>
                  <p className="text-[#999] text-base">{i.bountyDescription}</p>
                  <p className="bg-zinc-800 py-2 px-5 w-auto flex self-end justify-end ">
                    Reward: ${i.rewardAmount}
                  </p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HunterAvailableBounty;
