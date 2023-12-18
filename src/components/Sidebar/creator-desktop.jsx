import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";
import {
  Menu,
  Avatar,
  Portal,
  MenuItem,
  MenuList,
  MenuButton,
} from "@chakra-ui/react";
import { syncteam_white } from "@/assets";
import Image from "next/image";
import { KanbanBoardSVG } from "../shared";

export const kanbanItems = [
  {
    id: "chat",
    text: "Chat",
    link: "/chat",
    icon: "/images/chat-logo.png",
  },
  {
    id: "payroll",
    text: "Payroll",
    link: "/payroll",
    icon: "/images/payroll-logo-black.png",
  },
  {
    id: "bounties",
    text: "Bounties",
    link: "/bounty-creator",
    icon: "/images/outsource-logo-black.png",
  },
];

export const iconItems = [
  {
    id: "teams",
    text: "Teams",
    link: "/teams",
    icon: "/images/teams-logo-black.png",
  },
  {
    id: "settings",
    text: "Settings",
    link: "/settings",
    icon: "/images/settings-logo-black.png",
  },
];

const CreatorSidebarDesktop = ({ children }) => {
  // const router = useRouter();

  return (
    <div className="font-DMSans flex font-nexa h-screen bg-[#F7F7F7] text-black">
      {/* fixed side */}
      <div className="pt-6 lg:pt-12 w-[30%] max-w-[320px] p-4 hidden lg:flex flex-col justify-between">
        {/* we will have the sidebar here  */}
        <Link href="#">
          <div className="flex item-center justify-evenly text-center text-xl p-3 rounded-lg">
            <Avatar
              size="sm"
              alt="workspace avatar"
              src="/images/workspace-logo.png"
            ></Avatar>
            <p className="mx-2">Q Workspace</p>
            <DisplayAction />
          </div>
        </Link>

        <div className="h-full flex flex-col justify-center items-start mx-4">
          <Link
            href="/kanban"
            className="py-3 px-4 text-center text-xl inline-flex items-center border-b-[1px] border-zinc-500 w-full hover:text-black hover:bg-white"
          >
            <div className="mr-3">
              <KanbanBoardSVG color="#0F0F0F" width={20} />
            </div>
            <p>Kanban Board</p>
            <DisplayAction />
          </Link>

          {kanbanItems.map((list) => (
            <div
              key={list.id}
              className="border-b-[1px] border-zinc-500 w-full"
            >
              <ul>
                <Link
                  href={list.link}
                  className="px-4 flex items-center text-gray-500 hover:text-black hover:bg-white font-nexa"
                >
                  <Image
                    width={24}
                    height={24}
                    alt="kanban"
                    src={list.icon}
                    className="w-[24px] h-[24px] -mr-[3px]"
                  />
                  <p className="text-black text-center text-xl cursor-pointer my-1 p-3 rounded-lg inline-block">
                    {list.text}
                  </p>
                </Link>
              </ul>
            </div>
          ))}
        </div>

        <div className="h-full flex flex-col justify-center items-start mx-4">
          <div className="border-b-[1px] border-zinc-500 w-full">
            {iconItems.map((list) => (
              <ul key={list.id}>
                <Link
                  href={list.link}
                  className="px-4 flex items-center text-gray-500 hover:text-black hover:bg-white font-nexa"
                >
                  <Image
                    width={24}
                    height={24}
                    alt="kanban"
                    src={list.icon}
                    className="w-[24px] h-[24px] -mr-[3px]"
                  />{" "}
                  <p className="text-black text-center text-xl  cursor-pointer my-1 p-3 rounded-lg inline-block">
                    {list.text}
                  </p>
                </Link>
              </ul>
            ))}
          </div>
        </div>

        <div className="ml-4 mb-10">
          <Image src={syncteam_white} alt="logo" width={180} />
        </div>
      </div>
      <main className="overflow-y-auto left-[300px] bg-black flex-1 w-full lg:w-[70%] h-[100%] !font-nexa text-white">
        {children}
      </main>
    </div>
  );
};

const DisplayAction = () => {
  return (
    <div className="pl-6">
      <Menu placement="bottom-end">
        <MenuButton
          transition="all 0.3s"
          // _focus={{ boxShadow: 'none' }}
          className="text-center  mx-auto "
        >
          <i className="text-lg fas fa-ellipsis-v w-4 hover:text-gray-950" />
        </MenuButton>
        <Portal>
          <MenuList
            rounded={"none"}
            className="absolute right-1 top-1 font-nexa !bg-[#1f1f1f] border-transparent"
            p={2}
          >
            <MenuItem className="font-nexa !bg-[#1f1f1f]  !text-white">
              Kanban Kanban
            </MenuItem>
            <MenuItem className="font-nexa !bg-[#1f1f1f]   !text-white">
              Kanban Kanban
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </div>
  );
};

export default CreatorSidebarDesktop;
