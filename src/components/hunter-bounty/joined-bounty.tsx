import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { JoinedBountyData } from "@/constants";

const Joinedbounty = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActiveLink = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col flex-wrap">
      <div className="bg-[#0A0A0A]">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center justify-center">
          {JoinedBountyData.map((joinedBountyData) => (
            <div
              key={joinedBountyData.id}
              className="w-auto min-w-[300px] max-w-[380px] font-nexa px-3 py-2"
            >
              <div className="bg-[#141414] p-4 rounded-lg shadow-lg mx-0 sm:mx-4">
                <div className="my-4 object-cover ">
                  <Image
                    width={300}
                    alt="bountyOrgImage"
                    src={joinedBountyData.image}
                  />
                </div>

                <h2 className="text-xl">{joinedBountyData.title}</h2>
                <div className="flex flex-row  mt-3 mb-5 text-sm justify-between ">
                  <p>{joinedBountyData.submissionStatus}</p>

                  {joinedBountyData.inReview && (
                    <p className="text-[#FFBE08]  ">In review</p>
                  )}
                  {joinedBountyData.approved && (
                    <p className="text-[#13F129] ">Approved</p>
                  )}
                  {joinedBountyData.declined && (
                    <p className="text-[#B20000] ">Declined</p>
                  )}
                </div>

                <div className="flex items-center justify-center">
                  {joinedBountyData.inReview ? (
                    <button className="btnBorderGradient5">
                      Cancel Submission
                    </button>
                  ) : (
                    <button className="btnBorderGradient5">Closed</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Joinedbounty;
