import Link from "next/link";
import Image from "next/image";
import { profileImage } from "@/assets";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { ArrowdownIcon, FilterIcon, InputField } from "@/components/shared";
import MembersCart from "@/components/Members/MembersCart";
import CustomModal from "@/components/Members/CustomModal";
import CreatorSidebarMobile from "@/components/Sidebar/creator-mobile";
import CreatorSidebarDesktop from "@/components/Sidebar/creator-desktop";
import AccountSettingsModal from "@/components/Settings/AccountSettingsModal";
import TeamMembersTable from "@/components/Members/TeamMembersTable";

const TeamsComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [settings, setSettings] = useState(false);
  const displaySettingsModal = () => {
    return setSettings(!settings);
  };

  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex items-center justify-between px-10">
        <div className="flex justify-start mt-10">
          <CreatorSidebarMobile />
        </div>
        <div className="flex justify-end mt-10  ">
          <Image
            width={50}
            src={profileImage}
            alt="profileImage"
            className="rounded-full"
            onClick={displaySettingsModal}
          />
          {settings && (
            <div className="bg-[#191919] fixed z-10 left-0 top-0 w-screen h-screen overflow-y-auto py-16">
              <div className="flex margin-auto items-center justify-center">
                <AccountSettingsModal onclick={displaySettingsModal} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-10">
        <div className="flex flex-row justify-between mt-10 ">
          <div className="flex items-center flex-row gap-2 ">
            <Image
              width={32}
              height={32}
              alt="teams"
              src="/images/teams-logo.png"
            />
            <h2 className="text-white font-nexa font-extrabold text-xl sm:text-3xl ">
              Teams
            </h2>
          </div>

          <div className="hidden sm:flex  w-1/3  bg-[#0F0F0F] rounded-full items-center  ">
            <button>
              <BiSearch className="w-6 h-6 ml-6" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="w-full  outline-none  text-white py-2 px-4 bg-[#0F0F0F] rounded-full "
            />
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex flex-row gap-2 rounded-md btnBackgroundGradient items-center px-2 "
          >
            <h2 className="text-white font-nexa font-bold text-xl ">
              Add Team Member
            </h2>
            <AiOutlinePlus className="w-6 h-6" />
          </button>
        </div>

        {/* mobile search responsive */}
        <div className="flex sm:hidden w-full mt-3  bg-[#0F0F0F] rounded-full items-center  ">
          <button>
            <BiSearch className="w-6 h-6 ml-6" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="w-full  outline-none  text-white py-2 px-4 bg-[#0F0F0F] rounded-full "
          />
        </div>

        <div className="bg-[#1F1F1F] my-5 flex flex-col sm:flex-row gap-0 sm:gap-10 py-4 px-5">
          {[
            { id: 1, title: "Number of Team Members", value: "4" },
            { id: 2, title: "Roles Assigned", value: "2" },
          ].map((i) => {
            return (
              <p key={i.id} className="text-[#999]">
                {i.title}:{" "}
                <span className="text-[#13F129] pl-1">{i.value}</span>
              </p>
            );
          })}
        </div>

        {/* filter */}
        <div className="py-5 flex gap-5 items-center text-[#999999] font-medium text-[16px] sm:text-[20px] ">
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
              className="w-[230px] py-[5px] none -mr-[10px] pl-4 text-[18px] border-[1px] border-zinc-300  font-normal bg-black text-white focus:[#873ab3] focus:[#873ab3] focus:ring-1"
            >
              <option>All Roles</option>
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
              className="w-[230px] py-[5px] none -mr-[10px] pl-4 text-[18px] border-[1px] border-zinc-300  font-normal bg-black text-white focus:[#873ab3] focus:[#873ab3] focus:ring-1"
            >
              <option>All Departments</option>
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
        </div>

        <div className=" mt-10">
          <TeamMembersTable />
        </div>

        {/* Add Team Member Modal Overlay */}
        <CustomModal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className=" w-full mx-auto flex flex-col mt-4 items-center  p-14 ">
            <h2 className="text-white font-bold text-2xl text-center font-nexa">
              Add Team Member
            </h2>
            <p
              className="text-[#999999] text-center mt-4 font-nexa text-sm
    "
            >
              Add a team member and assign roles to them.
            </p>

            <div className="w-full flex flex-col gap-7 pt-6">
              <InputField type="email" placeholder="Paste email here" />

              <select
                style={{
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
                className="w-full h-[40px] none -mr-[10px] pl-4 text-[14px] border-[1px] border-zinc-300  font-normal bg-[#3F3F3F] text-white focus:[#873ab3] focus:[#873ab3] focus:ring-1"
              >
                <option>Department</option>
                <option>Engineering</option>
                <option>Support</option>
              </select>

              <select
                style={{
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
                className="w-full h-[40px] none -mr-[10px] pl-4 text-[14px] border-[1px] border-zinc-300  font-normal bg-[#3F3F3F] text-white focus:[#873ab3] focus:[#873ab3] focus:ring-1"
              >
                <option>Assign Role</option>
                <option>Department</option>
                <option>Engineering</option>
                <option>Support</option>
              </select>
            </div>

            <div className="btnBackgroundGradient rounded-[8px] mt-20 mb-10 ">
              <Link href="#" className=" ">
                <button className=" text-white w-[489px] h-[56px] flex justify-center items-center gap-2 ">
                  Send Invite
                  <BsArrowUpRight className=" w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </CustomModal>
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <CreatorSidebarDesktop>
      <TeamsComponent />
    </CreatorSidebarDesktop>
  );
};

export default Teams;
