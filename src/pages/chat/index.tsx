import Image from "next/image";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import ChatDashboard from "@/components/chat/dashboard";
import CreateGroup from "@/components/chat/create-group";
import DisplayChats from "@/components/chat/display-chats";
import { SearchSVG, DashboardSearch } from "@/components/shared";
import NoChat from "@/components/chat/no-chat";
import CreatorSidebarMobile from "@/components/Sidebar/creator-mobile";
import CreatorSidebarDesktop from "@/components/Sidebar/creator-desktop";

const ChatComponent = () => {
  const [newGroup, setNewGroup] = useState(false);
  const displayNewGroupModal = () => {
    return setNewGroup(!newGroup);
  };

  const [openChat, setOpenChat] = useState(false);
  const toggleOpenChat = () => {
    return setOpenChat(!openChat);
  };

  return (
    <main className="font-DMSans w-full h-screen bg-white text-black">
      <section className="h-[16%] sm:h-[18%] md:h-[21%] xl:h-[15%] border-b-[1px] border-zinc-300 pt-6 lg:pt-12 px-4 sm:px-8 md:px-12">
        <section className="flex items-center gap-5 sm:gap-10">
          <CreatorSidebarMobile />
          <ChatDashboard />
        </section>

        <section className="py-3">
          <div className="flex xl:hidden">
            <DashboardSearch width="w-full" />
          </div>
        </section>
      </section>

      <div className="absolute top-0 left-0 z-50 bg-[#191919]">
        {newGroup && <CreateGroup onclick={displayNewGroupModal} />}
      </div>

      {/* chat display */}
      <section className="relative mt-4 flex h-[82%] sm:h-[80%] md:h-[77%] xl:h-[83%] w-[100%]">
        <div className="bg-[#F4F0F0] rounded-md px-1 sm:px-2 py-3 w-[100%] xl:w-[36%] 2xl:w-[28%] h-full overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between px-2 pt-2 pb-5 border-b-[1px] border-zinc-50">
            <div
              className={`w-[160px] flex items-center rounded-full h-[45px] px-6 py-2 gap-2 text-[#999] bg-inherit border-[1px] border-[#999]`}
            >
              <SearchSVG />
              <input
                type="search"
                placeholder="Search"
                className="bg-inherit focus:outline-none"
              />
            </div>
            <div
              onClick={displayNewGroupModal}
              className="flex gap-1 text-[14px] font-bold cursor-pointer"
            >
              New group <BiPlus className="w-[24px] h-[24px]" />
            </div>
          </div>

          <div className="flex flex-col gap-2 py-6 pr-3">
            {[
              {
                id: 1,
                name: "Eric",
                chat: "What did the cat say to the dog?",
                time: "5mins",
              },
              {
                id: 2,
                name: "Eric",
                chat: "You can't catch me",
                time: "13mins",
              },
              {
                id: 3,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "16mins",
              },
              {
                id: 4,
                name: "Eric",
                chat: "You can't catch me",
                time: "30mins",
              },
              {
                id: 5,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "34mins",
              },
              {
                id: 6,
                name: "Eric",
                chat: "You can't catch me",
                time: "34mins",
              },
              {
                id: 7,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "34mins",
              },
              {
                id: 8,
                name: "Eric",
                chat: "You can't catch me",
                time: "52mins",
              },
              {
                id: 9,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "59mins",
              },
              {
                id: 10,
                name: "Eric",
                chat: "You can't catch me",
                time: "02:35",
              },
              {
                id: 11,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "02:35",
              },
              {
                id: 12,
                name: "Eric",
                chat: "You can't catch me",
                time: "02:35",
              },
              {
                id: 13,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "02:35",
              },
              {
                id: 14,
                name: "Eric & Ayo",
                chat: "You can't catch me",
                time: "02:35",
              },
            ].map((list) => {
              return (
                <section
                  key={list.id}
                  onClick={() => setOpenChat(true)}
                  className="w-full h-[75px] flex items-center justify-between"
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="relative w-[60px] h-[60px] rounded-full">
                      <Image
                        width={60}
                        height={60}
                        alt="user-avatar"
                        src="/images/user-avatar.png"
                      />
                      <div className="absolute z-1 bottom-0 right-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                        >
                          <path
                            d="M8 4C8 5.06087 7.57857 6.07828 6.82843 6.82843C6.07828 7.57857 5.06087 8 4 8C2.93913 8 1.92172 7.57857 1.17157 6.82843C0.421428 6.07828 0 5.06087 0 4C0 2.93913 0.421428 1.92172 1.17157 1.17157C1.92172 0.421428 2.93913 0 4 0C5.06087 0 6.07828 0.421428 6.82843 1.17157C7.57857 1.92172 8 2.93913 8 4Z"
                            fill="#13F129"
                            // fill="#999999"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[12px] font-extrabold">{list.name}</p>
                      <p className="text-[14px] min-w-[150px] font-normal max-w-[180px] sm:min-w-[auto] sm:max-w-[auto] sm:w-full xl:w-[180px] truncate text-ellipsis overflow-hidden ... ">
                        {list.chat}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-auto max-w-[35px] gap-[4px] text-[11px] text-[#999]">
                    <p>13mins</p>
                    <p className="bg-[#13F129] w-[20px] h-[20px] py-[2px] rounded-full text-center text-black">
                      99
                    </p>
                  </div>
                </section>
              );
            })}

            <div className="">
              {openChat && (
                <div className="absolute flex xl:hidden top-0 left-0 z-50 w-screen h-[100%] bg-white">
                  <DisplayChats onclick={toggleOpenChat} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          {openChat && (
            <div className="hidden xl:flex">
              <DisplayChats />
            </div>
          )}
          {!openChat && (
            <div className="hidden xl:flex">
              <NoChat />
            </div>
          )}{" "}
        </div>
      </section>
    </main>
  );
};

const Index = () => {
  return (
    <CreatorSidebarDesktop>
      <ChatComponent />
    </CreatorSidebarDesktop>
  );
};

export default Index;
