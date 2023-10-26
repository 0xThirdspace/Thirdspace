import Link from "next/link";
import Image from "next/image";
import { profileImage } from "@/assets";
import React, { useState } from "react";
import MembersCart from "./MembersCart";
import { BiSearch } from "react-icons/bi";
import AddMemberForm from "./AddMemberForm";
import AddMemberModal from "./CustomModal";
import CreatorSidebarMobile from "../Sidebar/creator-mobile";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

type Props = {};

const Members = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex flex-col flex-wrap">
      {/* Image container */}
      <div className="flex items-center justify-between px-10">
        <div className="flex justify-start mt-10">
          <CreatorSidebarMobile />
        </div>
        <div className="flex justify-end mt-10  ">
          <Link href="/">
            <Image
              src={profileImage}
              alt="profileImage"
              width={50}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>

      <div className="px-10">
        {/* Search and Add Members container */}
        <div className="flex flex-row  justify-between mt-10 ">
          {/* Members */}

          <div className="flex flex-row gap-1 ">
            <BsFillPeopleFill className="w-6 h-6" />
            <h2 className="text-white  font-nexa font-extrabold text-xl ">
              Members
            </h2>
          </div>

          {/* Search */}
          <div className="flex  w-1/3  bg-[#0F0F0F] rounded-full items-center  ">
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
            className="flex flex-row gap-2 rounded-md btnBackgroundGradient items-center px-2 "
            onClick={() => setShowModal(true)}
          >
            <h2 className="text-white font-nexa font-bold text-xl ">
              Add Member
            </h2>

            <AiOutlinePlus className="w-6 h-6" />
          </button>
        </div>

        {/* user container */}
        <div className=" mt-10">
          <MembersCart />
        </div>

        {/* Add Member Modal Overlay */}
        <AddMemberModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        >
          <div className=" w-full mx-auto flex flex-col mt-4 items-center  p-14 ">
            <h2 className="text-white font-bold text-2xl text-center font-nexa">
              Add Member
            </h2>

            <p
              className="text-[#999999] text-center mt-4 font-nexa text-sm
        "
            >
              Add a member to your bounty space and start collaborating with
              developers to <br /> get coding tasks completed.
            </p>

            <AddMemberForm />

            <div className="btnBackgroundGradient  rounded-[8px] mt-20 mb-10 ">
              <Link href="/" className=" ">
                <button className=" text-white w-[489px] h-[56px] flex justify-center items-center gap-2 ">
                  Send Invite
                  <BsArrowUpRight className=" w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </AddMemberModal>
      </div>
    </div>
  );
};

export default Members;
