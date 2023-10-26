import Image from "next/image";
import { useState } from "react";
import CustomModal from "./CustomModal";
import { userDetails } from "@/constants";
import { CiCircleRemove } from "react-icons/ci";

type Props = {};

const MembersCart = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="bg-[#0A0A0A]">
      <div className=" flex justify-between flex-row py-3 mx-10 font-nexa font-bold text-xl ">
        <h1 className="">User</h1>
        <h1 className="ml-10">Wallet Address</h1>
        <h1>Status</h1>
      </div>
      <div className="">
        {userDetails.map((userDetail) => (
          <div
            key={userDetail.id}
            className=" flex  flex-row justify-between p-4 items-center border-b border-[#1F1F1F]   "
          >
            <div className="flex flex-row items-center gap-2">
              <Image
                src={userDetail.image}
                alt="userImage"
                width={60}
                className="rounded-full"
              />

              <div className="flex flex-col font-nexa font-normal ">
                <h2>{userDetail.name}</h2>
                <p>{userDetail.socialHandle}</p>
              </div>
            </div>

            <button className="  items-center rounded-full flex flex-row bg-[#0F0F0F]   w-[180px]  justify-center gap-2 p-2 font-nexa font-normal">
              <p>{userDetail.walletAddress}</p>
              <p>{userDetail.iconCopy}</p>
            </button>

            <div className="mr-6 " onClick={() => setShowModal(true)}>
              {userDetail.remove && (
                <button className="items-center rounded-full flex flex-row bg-[#B2000029] border border-[#B20000] w-[120%] justify-center gap-1 p-2 font-nexa font-normal  ">
                  <p>Remove</p>

                  <div className="RemoveIcon-container">
                    <CiCircleRemove />
                  </div>
                </button>
              )}
            </div>

            <CustomModal
              isVisible={showModal}
              onClose={() => setShowModal(false)}
            >
              <div className="w-full mx-auto flex flex-col gap-7 mt-4 items-center justify-center p-14 ">
                <Image
                  width={150}
                  height={150}
                  src="/images/caution.svg"
                  alt="bounty-avatar"
                  className="w-[150px] h-[150px]"
                />

                <h2 className="text-white font-bold text-2xl sm:text-3xl text-center font-nexa">
                  Wait a minute!
                </h2>

                <p className="text-[#999999] text-center mt-4 font-nexa text-sm sm:text-xl">
                  Are you sure you want to remove this member?
                </p>

                <div className="w-full flex items-center justify-around py-5 font-bold text-white">
                  <button className="flex  gap-3 px-5 sm:px-10 py-3 border-[1px] border-[#B20000] bg-[#551e1e]">
                    No
                  </button>
                  <button className="flex  gap-3 px-5 sm:px-10 py-3  border-[1px] border-[#13F129] bg-[#3c6140] ">
                    Yes
                  </button>
                </div>
              </div>
            </CustomModal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersCart;
