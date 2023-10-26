import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { hunterNavList } from "./hunter-desktop";
import { Hamburger, VerticalThreeDotsIcon } from "@/components/shared";

export const BackButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.72727 12H19.2727C19.4656 12 19.6506 12.0527 19.787 12.1464C19.9234 12.2402 20 12.3674 20 12.5C20 12.6326 19.9234 12.7598 19.787 12.8536C19.6506 12.9473 19.4656 13 19.2727 13H4.72727C4.53439 13 4.3494 12.9473 4.21301 12.8536C4.07662 12.7598 4 12.6326 4 12.5C4 12.3674 4.07662 12.2402 4.21301 12.1464C4.3494 12.0527 4.53439 12 4.72727 12Z"
        fill="white"
      />
      <path
        d="M5.75645 12L11.7868 18.6328C11.9233 18.783 12 18.9867 12 19.1991C12 19.4115 11.9233 19.6152 11.7868 19.7654C11.6503 19.9156 11.4651 20 11.272 20C11.0789 20 10.8938 19.9156 10.7572 19.7654L4.2136 12.5663C4.14589 12.492 4.09217 12.4038 4.05552 12.3066C4.01887 12.2094 4 12.1052 4 12C4 11.8948 4.01887 11.7906 4.05552 11.6934C4.09217 11.5962 4.14589 11.508 4.2136 11.4337L10.7572 4.23458C10.8938 4.08438 11.0789 4 11.272 4C11.4651 4 11.6503 4.08438 11.7868 4.23458C11.9233 4.38478 12 4.5885 12 4.80091C12 5.01332 11.9233 5.21704 11.7868 5.36724L5.75645 12Z"
        fill="white"
      />
    </svg>
  );
};

const HunterSidebarMobile = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    return setSidebar(!sidebar);
  };

  return (
    <div className="flex lg:hidden ">
      <div onClick={toggleSidebar}>
        <Hamburger />
      </div>
      {sidebar ? (
        <main className="absolute left-0 top-0 z-10 h-screen bg-black bg-opacity-90 w-screen">
          <div className="h-full w-[290px] sm:w-[330px] pt-10 flex flex-col justify-between border-black/60 border-r-[1px] bg-[#191919]">
            <Link href="#">
              <div className="flex item-center justify-evenly text-center text-xl  text-white p-3 rounded-lg">
                <div className="flex gap-1 items-center">
                  <Image
                    width={30}
                    height={30}
                    alt="workspace avatar"
                    className="w-[30px] h-[30px]"
                    src="/images/workspace-logo.png"
                  />
                  <p className="mx-2">Chainlink Bounty</p>
                </div>

                <VerticalThreeDotsIcon />
                {/* <DisplayAction /> */}
              </div>
            </Link>

            <div className="h-full flex flex-col justify-center items-start mx-4">
              {hunterNavList.map((list) => (
                <ul key={list.id}>
                  <Link
                    href={list.link}
                    className="px-4 flex items-center text-gray-500 hover:text-white hover:bg-zinc-900 font-nexa"
                  >
                    <Image
                      width={24}
                      height={24}
                      alt="kanban"
                      src={list.icon}
                      className="w-[24px] h-[24px] -mr-[3px]"
                    />
                    <p className="text-center text-xl  cursor-pointer my-1 p-3 rounded-lg inline-block">
                      {list.text}
                    </p>
                  </Link>
                </ul>
              ))}
            </div>

            <div className="flex items-center justify-between px-4 mb-10">
              <Image
                alt="logo"
                width={180}
                height={27}
                src="/images/logo.svg"
              />
              <div onClick={toggleSidebar}>
                <BackButton />
              </div>
            </div>
          </div>
        </main>
      ) : (
        ""
      )}
    </div>
  );
};

export default HunterSidebarMobile;
