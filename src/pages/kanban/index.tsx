import React from "react";
import {
  FilterIcon,
  DashboardSearch,
  ArrowdownIcon,
} from "@/components/shared";
import Image from "next/image";
import TaskPanel from "@/components/kanban/task-panel";
import KanbanDashboard from "@/components/kanban/dashboard";
import CreatorSidebarDesktop from "../../components/Sidebar/creator-desktop";
import CreatorSidebarMobile from "@/components/Sidebar/creator-mobile";

const KanbanComponent = () => {
  return (
    <main className="font-DMSans w-full h-auto bg-white text-black">
      <section className="flex items-center gap-5 sm:gap-10">
        <CreatorSidebarMobile />
        <KanbanDashboard />
      </section>

      <section className="py-5">
        <div className="flex xl:hidden">
          <DashboardSearch width="w-full" />
        </div>
      </section>

      {/* filter */}
      <section className="py-5 flex gap-5 items-center text-[#999999] font-medium text-[16px] sm:text-[20px] ">
        <div className="flex gap-1 sm:gap-2 items-center">
          <FilterIcon />
          Filter
        </div>

        <div className="flex items-center">
          <select
            style={{
              WebkitAppearance: "none",
              appearance: "none",
            }}
            className="w-[230px] py-[9px] none -mr-[10px] pl-4 text-[18px] border-[1px] border-zinc-300  font-normal bg-white text-black focus:[#873ab3] focus:[#873ab3] focus:ring-1"
          >
            <option>Assignee</option>
            {[
              { id: 1, src: "/images/user-avatar.png", name: "Frank W" },
              { id: 2, src: "/images/user-avatar.png", name: "Frankfurt W" },
              { id: 3, src: "/images/user-avatar.png", name: "Frank W" },
              { id: 4, src: "/images/user-avatar.png", name: "Frankfurt W" },
            ].map((list) => {
              return (
                <option
                  key={list.id}
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}
                  className="h-auto flex items-center "
                >
                  {/* <img src={list.src} alt="avatar " width={30} height={30} /> */}
                  {list.name}
                </option>
              );
            })}
          </select>
          <div className="relative right-5">
            <ArrowdownIcon />
          </div>
        </div>

        <div className="flex items-center">
          <select
            style={{
              WebkitAppearance: "none",
              appearance: "none",
            }}
            className="w-[230px] py-[9px] none -mr-[10px] pl-4 text-[18px] border-[1px] border-zinc-300  font-normal bg-white text-black focus:[#873ab3] focus:[#873ab3] focus:ring-1"
          >
            <option>Due Date</option>
            {[
              { id: 1, date: "June 1" },
              { id: 2, date: "June 12" },
              { id: 3, date: "June 18" },
              { id: 4, date: "June 30" },
            ].map((list) => {
              return (
                <option
                  key={list.id}
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}
                  className="h-auto flex items-center "
                >
                  {list.date}
                </option>
              );
            })}
          </select>
          <div className="relative right-5">
            <ArrowdownIcon />
          </div>
        </div>
      </section>

      {/* taks cards management */}
      <TaskPanel />
    </main>
  );
};

const Index = () => {
  return (
    <div>
      <CreatorSidebarDesktop>
        <div className="pt-6 lg:pt-12 px-4 sm:px-7 bg-white">
          <KanbanComponent />
        </div>
      </CreatorSidebarDesktop>
    </div>
  );
};

export default Index;
