import Link from "next/link";

import { useRouter } from "next/router";

import { FaMedal } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io";

import React, { ReactNode } from "react";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import Logo from "../Ui/Logo";
import { logo } from "@/assets";
import Image from "next/image";

export const kanbanItems = [
  { id: "chat", text: "Chat", link: "/chat", icon: "/images/chat-logo.png" },
  {
    id: "payroll",
    text: "Payroll",
    link: "/payroll",
    icon: "/images/payroll-logo.png",
  },
  {
    id: "teams",
    text: "Bounties",
    link: "/bounty-creator",
    icon: "/images/bounty.svg",
  },
];

export const iconItems = [
  {
    id: "teams",
    text: "Teams",
    link: "/teams",
    icon: "/images/teams-logo.png",
  },
  {
    id: "settings",
    text: "Settings",
    link: "/settings",
    icon: "/images/settings-logo.png",
  },
];

const CreatorSidebarDesktop = ({ children }) => {
  // const router = useRouter();

  return (
    <div className="flex font-nexa h-screen">
      {/* fixed side */}
      <div className="pt-6 lg:pt-12 w-[30%] max-w-[320px] p-4 hidden lg:flex flex-col justify-between bg-[#0F0F0F] border-black/60 border-r-[1px]">
        {/* we will have the sidebar here  */}
        <Link href="#">
          <div className="flex item-center justify-evenly text-center text-xl  text-white p-3 rounded-lg">
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
            className="py-3 px-4 text-center text-xl text-gray-500 inline-flex items-center border-b-[1px] border-zinc-500 w-full hover:text-white hover:bg-zinc-900"
          >
            <Image
              width={20}
              height={20}
              alt="kanban"
              src="/images/kanban.png"
              className="w-[20px] h-[20px] mr-3"
            />
            <p className="">Kanban Board</p>
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
                  className="px-4 flex items-center text-gray-500 hover:text-white hover:bg-zinc-900 font-nexa"
                >
                  <Image
                    width={24}
                    height={24}
                    alt="kanban"
                    src={list.icon}
                    className="w-[24px] h-[24px] -mr-[3px]"
                  />{" "}
                  <p className="text-center text-xl cursor-pointer my-1 p-3 rounded-lg inline-block">
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
                  className="px-4 flex items-center text-gray-500 hover:text-white hover:bg-zinc-900 font-nexa"
                >
                  <Image
                    width={24}
                    height={24}
                    alt="kanban"
                    src={list.icon}
                    className="w-[24px] h-[24px] -mr-[3px]"
                  />{" "}
                  <p className="text-center text-xl  cursor-pointer my-1 p-3 rounded-lg inline-block">
                    {list.text}
                  </p>
                </Link>
              </ul>
            ))}
          </div>
        </div>

        <div className="ml-4 mb-10">
          <Image src={logo} alt="logo" width={180} />
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
          <i className="text-lg fas fa-ellipsis-v w-4 text-gray-400 hover:text-gray-950" />
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
