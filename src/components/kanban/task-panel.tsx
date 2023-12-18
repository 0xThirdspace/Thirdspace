import React, { useState } from "react";
import { ThreeDotIcon, PlusIcon, TaskCard } from "../shared";
import ModalRef from "./modal-ref";

// type TaskColumnType = [
//   id: number,
//   title: string,
//   cards_number: number,
//   color: string
// ];

const TaskColumns = [
  { id: 1, title: "To Do", cards_number: 1, color: "zinc-500" },
  { id: 2, title: "In Progress", cards_number: 4, color: "green-300" },
  { id: 3, title: "Done", cards_number: 2, color: "[#13F129]" },
];

const NewColumnCard = () => {
  const [title, setTitle] = useState("Add Title");
  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const [cardCount, setCardCount] = useState(0);
  const decrementCardCount = () => {
    setCardCount((cardCount) => cardCount - 1);
  };

  const [openCardMenu, setOpenCardMenu] = useState(false);
  const handleOpenCardMenu = () => {
    console.log("clicked");
    setOpenCardMenu(!openCardMenu);
  };

  const CardMenu = (props: {
    handleAddNewTask: any;
    handleAddNewColumn: any;
  }) => {
    return (
      <div className="bg-white text-black h-auto w-[170px] py-3 absolute top-8 right-0 flex flex-col gap-2 rounded-md   ">
        <p className="py-1 px-4" onClick={props.handleAddNewColumn}>
          Add new column
        </p>
        <p className="py-1 px-4" onClick={props.handleAddNewTask}>
          Add new task
        </p>
      </div>
    );
  };

  const [tasks, setTasks] = useState([<></>]);
  const handleAddNewTask = () => {
    const newTask = <TaskCard borderColor="red" />;
    setCardCount((cardCount) => cardCount + 1);
    setTasks([...tasks, newTask]);
  };

  const [columns, setColumns] = useState([<></>]);
  const handleAddColumn = () => {
    const newColumn = <NewColumnCard />;
    console.log("clicked");
    setColumns([...columns, newColumn]);
  };

  return (
    <div
      // key={columns.length + 1}
      className="flex flex-col gap-5 min-w-[330px] max-w-[370px] "
    >
      <div className=" flex items-center justify-between px-8 mb-5">
        <div className="flex gap-2 items-center">
          <p
            contentEditable
            onBlur={handleTitleChange}
            className={`bg-purple-600 w-[150px] whitespace-nowrap overflow-scroll no-scrollbar  px-2.5 py-1 mr-2 text-[#1F1F1F] text-[18px] font-bold rounded-md`}
          >
            {title}
          </p>
          <span>{cardCount}</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <div onClick={handleOpenCardMenu}>
              <ThreeDotIcon />
            </div>

            <ModalRef onClose={() => setOpenCardMenu(false)}>
              {openCardMenu ? (
                <CardMenu
                  handleAddNewColumn={handleAddColumn}
                  handleAddNewTask={handleAddNewTask}
                />
              ) : (
                ""
              )}
            </ModalRef>
          </div>
          <div onClick={handleAddNewTask}>
            <PlusIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 items-center justify-center px-5">
        {/* tasks are added here */}
        {tasks}
      </div>
    </div>
  );
};

const TaskPanel = () => {
  const [columns, setColumns] = useState([<></>]);
  const handleAddColumn = () => {
    const newColumn = <NewColumnCard />;
    setColumns([...columns, newColumn]);
  };

  return (
    <section className="relative w-auto overflow-x-auto no-scrollbar lg:overflow-x-auto ">
      <section className="w-full min-w-[1000px] max-w-[1100px] 2xl:max-w-[1500px] pt-10 pb-5 flex overflow-x-auto h-auto">
        {TaskColumns.map((list) => {
          return (
            <div
              key={list.id}
              className="flex flex-col gap-5 min-w-[330px] max-w-[370px] "
            >
              <div className=" flex items-center justify-between px-8 mb-5">
                <div className="flex gap-2 items-center">
                  <p
                    className={`bg-${list.color} w-auto px-3 py-1 mr-2 text-[#1F1F1F] text-[18px] font-bold rounded-md`}
                  >
                    {list.title}
                  </p>
                  <span>{list.cards_number}</span>
                </div>
                <div
                  onClick={handleAddColumn}
                  className="flex items-center gap-5"
                >
                  <ThreeDotIcon />
                  <PlusIcon />
                </div>
              </div>
              <div className="flex flex-col gap-7 items-center justify-center px-5">
                <TaskCard borderColor={`border-${list.color}`} />
                <TaskCard borderColor={`border-${list.color}`} />
                <TaskCard borderColor={`border-${list.color}`} />
              </div>
            </div>
          );
        })}
        {columns}
      </section>
    </section>
  );
};

export default TaskPanel;
