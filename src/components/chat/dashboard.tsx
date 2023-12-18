import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
// import AddTask from "./addtask";
import Image from "next/image";
import { ChatSVG, DashboardSearch } from "../shared";
import StartChat from "./start-chat";

const ChatDashboard = () => {
  const [newChat, setNewChat] = useState(false);
  const displayNewChatModal = () => {
    return setNewChat(!newChat);
  };

  return (
    <div className="w-full flex items-center justify-between text-black font-DMSans">
      <div className="flex gap-2 items-center">
        <ChatSVG width={32} color={"black"} />
        <p className="text-[28px] sm:text-[38px] font-bold">Chat</p>
      </div>
      <div className="flex gap-7 items-center ">
        <div className="hidden xl:flex">
          <DashboardSearch width={"min-w-[400px]"} />
        </div>

        <div>
          <button
            onClick={displayNewChatModal}
            className="relative py-2 pl-2 sm:pl-4 pr-1 sm:pr-2 gap-0 sm:gap-2 flex items-center text-[18px] sm:text-[20px] font-medium rounded-lg bg-gradient-to-r from-[#02EC88] to-[#5CB25D]"
          >
            <p>New chat</p>
            <BiPlus className="w-[24px] h-[24px]" />
          </button>
          {newChat && (
            <div className="bg-[#191919] fixed z-10 left-0 top-0 w-screen h-screen">
              <div className="flex margin-auto items-center justify-center">
                <StartChat onclick={displayNewChatModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatDashboard;
