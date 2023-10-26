import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillPeopleFill, BsArrowUpRight } from "react-icons/bs";
import AddMemberForm from "../Members/AddMemberForm";
import MembersCart from "../Members/MembersCart";
import CustomModal from "../Members/CustomModal";
import Image from "next/image";

const BountyMembers = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const closeSuccessModal = () => {
    setShowModal(false);
    setShowSuccessModal(false);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-10 ">
        <div className="flex flex-row gap-3">
          <BsFillPeopleFill className="w-6 h-6" />
          <h2 className="text-white  font-nexa font-extrabold text-xl ">
            Members
          </h2>
        </div>

        {/* Search */}
        <div className="hidden sm:flex  w-1/3  bg-[#0F0F0F] rounded-full items-center  ">
          <button>
            <BiSearch className="w-5 h-5 ml-6" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="w-full  outline-none  text-white py-2 px-4 bg-[#0F0F0F] rounded-full "
          />
        </div>

        <button
          className="flex flex-row gap-2 rounded-md border-[1px] border-red-300 items-center px-2 "
          onClick={() => setShowModal(true)}
        >
          <h2 className="text-white font-nexa font-bold text-base sm:text-xl ">
            Add Member
          </h2>

          <AiOutlinePlus className=" w-6 sm:w-6 h-6 sm:h-6" />
        </button>
      </div>

      {/* members container */}
      <div className="mt-10">
        <MembersCart />
      </div>

      {/* Add Member Modal Overlay */}
      <CustomModal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className=" w-full mx-auto flex flex-col mt-4 items-center  p-14 ">
          <h2 className="text-white font-bold text-2xl text-center font-nexa">
            Add Member
          </h2>

          <p className="text-[#999999] text-center mt-4 font-nexa text-sm">
            Add a member to your bounty space and start collaborating with
            developers to <br /> get coding tasks completed.
          </p>

          <AddMemberForm />

          <div
            onClick={() => setShowSuccessModal(true)}
            className="btnBackgroundGradient rounded-[8px] mt-20 mb-10 "
          >
            <Link href="#" className=" ">
              <button className=" text-white w-[489px] h-[56px] flex justify-center items-center gap-2 ">
                Send Invite
                <BsArrowUpRight className=" w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </CustomModal>

      <CustomModal isVisible={showSuccessModal} onClose={closeSuccessModal}>
        <div className="w-full mx-auto flex flex-col gap-7 mt-4 items-center justify-center p-14 ">
          <Image
            width={150}
            height={150}
            src="/images/success.svg"
            alt="bounty-avatar"
            className="w-[150px] h-[150px]"
          />

          <h2 className="text-white font-bold text-2xl sm:text-3xl text-center font-nexa">
            Hurray!
          </h2>

          <p className="text-[#999999] text-center mt-4 font-nexa text-sm sm:text-xl">
            Invite has been sent successfully !
          </p>
        </div>
      </CustomModal>
    </div>
  );
};

export default BountyMembers;
