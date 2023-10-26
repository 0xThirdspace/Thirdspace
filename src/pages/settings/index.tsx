import Image from "next/image";
import React, { useState } from "react";
import { profileImage } from "@/assets";
import { BsFillGearFill } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import CreatorSidebarMobile from "@/components/Sidebar/creator-mobile";
import AccountSettingsModal from "@/components/Settings/AccountSettingsModal";
import CreatorSidebarDesktop from "@/components/Sidebar/creator-desktop";

const SettingComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [settings, setSettings] = useState(false);
  const displaySettingsModal = () => {
    return setSettings(!settings);
  };

  return (
    <main className="w-full h-screen px-5 md:px-10  xl:px-16 ">
      <div onClick={displaySettingsModal} className="flex justify-end pt-16">
        <Image
          width={50}
          src={profileImage}
          alt="profileImage"
          className="rounded-full"
        />
        {settings && (
          <div className="bg-[#191919] fixed z-10 left-0 top-0 w-screen h-screen overflow-y-auto py-16">
            <div className="flex margin-auto items-center justify-center">
              <AccountSettingsModal onclick={displaySettingsModal} />
            </div>
          </div>
        )}{" "}
      </div>

      <div className="flex flex-row gap-5 mt-10  ">
        <section className=" flex items-center gap-5 sm:gap-10">
          <CreatorSidebarMobile />
        </section>
        <div className="flex flex-row gap-2 items-center justify-center ">
          <BsFillGearFill className="w-6 h-6" />
          <h2 className="text-white  font-nexa font-extrabold text-2xl ">
            Settings
          </h2>
        </div>
      </div>

      <div className="flex sm:hidden justify-end mt-5">
        <button
          className="items-center rounded-full flex flex-row bg-[#B2000029] border border-[#B20000] w-auto px-8 h-[48px] justify-center gap-1 p-2 font-nexa font-normal"
          onClick={() => setShowModal(true)}
        >
          <p>Delete Bounty Space</p>
          <div className="RemoveIcon-container">
            <CiCircleRemove />
          </div>
        </button>
      </div>

      <section className="bg-[#0A0A0A] mt-5 sm:mt-10 pl-4 sm:pl-8 pr-5 h-[60%] sm:h-[70%] flex flex-col justify-evenly ">
        <div className="flex items-center sm:items-start justify-center sm:justify-between flex-row">
          <div className="flex flex-col items-center sm:items-start ">
            <h2>Bounty space Logo/Image</h2>
            <div className="w-36 h-36 rounded-full border-[#999999] border-2  flex items-center  justify-center mt-[16px]">
              <button className="text-sm">Click to upload Photo</button>
            </div>
          </div>

          <button
            className="items-center rounded-full hidden sm:flex flex-row bg-[#B2000029] border border-[#B20000] w-auto px-8 h-[48px] justify-center gap-1 p-2 font-nexa font-normal  "
            onClick={() => setShowModal(true)}
          >
            <p className="hidden sm:flex">Delete Bounty Space</p>
            <div className="RemoveIcon-container">
              <CiCircleRemove />
            </div>
          </button>
        </div>

        <div className="">
          <label htmlFor="spaceName">Bounty space name</label>
          <input
            type="text"
            name="spaceName"
            id="spaceName"
            placeholder="Bounty To Bounties"
            className="w-full border-[#999999] bg-[#0A0A0A] text-white border outline-none p-2 mt-2 "
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-14 mb-10">
          <button className="btnBackgroundGradient w-full h-[48px] items-center rounded-[8px] ">
            Save Changes
          </button>
        </div>
      </section>
    </main>
  );
};

const CreatorSettings = () => {
  return (
    <CreatorSidebarDesktop>
      <SettingComponent />
    </CreatorSidebarDesktop>
  );
};

export default CreatorSettings;
