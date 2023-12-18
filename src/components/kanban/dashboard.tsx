import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import AddTask from "./addtask";
import { DashboardSearch, KanbanBoardSVG } from "../shared";
import Image from "next/image";

const KanbanDashboard = () => {
  const [addTask, setAddTask] = useState(false);
  const displayAddTaskModal = () => {
    return setAddTask(!addTask);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <KanbanBoardSVG color={"black"} width={32} />
        <p className="text-[20px] sm:text-[38px] font-medium">Kanban Board</p>
      </div>
      <div className="flex gap-7 items-center ">
        <div className="hidden xl:flex">
          <DashboardSearch width={"min-w-[400px]"} />
        </div>

        <div>
          <button
            onClick={displayAddTaskModal}
            className="relative py-2 pl-2 sm:pl-4 pr-1 sm:pr-2 gap-1 sm:gap-2 flex items-center text-[18px] sm:text-[20px] font-medium rounded-lg bg-gradient-to-r from-[#02EC88] to-[#5CB25D]"
          >
            <p>Add task</p>
            <BiPlus className="w-[24px] h-[24px] " />
          </button>
          {addTask && (
            <div className="bg-[#191919] fixed z-10 left-0 top-0 w-screen h-screen">
              <div className="flex margin-auto items-center justify-center">
                <AddTask onclick={displayAddTaskModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KanbanDashboard;
