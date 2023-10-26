import React from "react";
import { ArrowdownIcon, CloseBtn } from "../shared";
import Image from "next/image";

const tableHead = [
  { name: "Team Members" },
  { name: "Department" },
  { name: "Role" },
  { name: "Remove" },
];

const tableBody = [
  { id: 1, name: "Frank Williams", username: "@Quibigs" },
  { id: 2, name: "Frank Williams", username: "@Quibigs" },
  { id: 3, name: "Frank Williams", username: "@Quibigs" },
  { id: 4, name: "Frank Williams", username: "@Quibigs" },
];

const TeamMembersTable = () => {
  return (
    <div className="whitespace-nowrap overflow-x-auto mb-20">
      <div className="grid grid-cols-[2.5fr_2.5fr_2.5fr_1fr] min-w-[800px] items-center h-[54px] px-8 text-white text-xl">
        {tableHead.map((i) => {
          return (
            <div key={i.name} className="truncate">
              {i.name}
            </div>
          );
        })}
      </div>
      <>
        {tableBody.map(({ id, name, username }) => {
          return (
            <div
              key={id}
              className="grid grid-cols-[2.5fr_2.5fr_2.5fr_1fr] min-w-[800px] mt-2 items-center text-start h-auto py-2 px-2 text-white text-xl"
            >
              <div className="flex flex-row items-center gap-2">
                <Image
                  width={60}
                  height={60}
                  alt="userImage"
                  className="rounded-full"
                  src={"/images/user-avatar.png"}
                />
                <div className="flex flex-col font-nexa font-normal ">
                  <h2 className="text-lg">{name}</h2>
                  <p className="text-base">{username}</p>
                </div>
              </div>

              <div className="flex items-center">
                <select
                  style={{
                    WebkitAppearance: "none",
                    appearance: "none",
                  }}
                  className="w-[230px] py-[5px] border-none none -mr-[10px] pl-4 text-[18px] font-normal bg-black text-white focus:[#873ab3] focus:[#873ab3] focus:ring-1"
                >
                  {[
                    { id: 1, role: "Roles 1" },
                    { id: 2, role: "Roles 2" },
                    { id: 3, role: "Roles 3" },
                    { id: 4, role: "Roles 4" },
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
                        {list.role}
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
                  className="w-[230px] py-[5px] border-none none -mr-[10px] pl-4 text-[18px] font-normal bg-black text-white focus:[#873ab3] focus:[#873ab3] focus:ring-1"
                >
                  {" "}
                  {[
                    { id: 1, department: "Departments 1" },
                    { id: 2, department: "Departments 2" },
                    { id: 3, department: "Departments 3" },
                    { id: 4, department: "Departments 4" },
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
                        {list.department}
                      </option>
                    );
                  })}
                </select>
                <div className="relative right-5">
                  <ArrowdownIcon />
                </div>
              </div>

              <div>
                <CloseBtn />
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default TeamMembersTable;
