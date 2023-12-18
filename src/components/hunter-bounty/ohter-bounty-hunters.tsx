import React from "react";
import Image from "next/image";

const Bountyhunters = () => {
  const HuntersData = [
    {
      id: 1,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 2,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 3,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 4,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 5,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 6,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 7,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 8,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 9,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },

    {
      id: 10,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 11,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 12,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
    {
      id: 13,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },

    {
      id: 14,
      name: "Frank Quibigs",
      social: "@Quibigs",
      avatar: "/images/user-avatar.png",
    },
  ];

  return (
    <div className="text-white mb-20 ">
      <div className="text-2xl">Other Bounty Hunters</div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {HuntersData.map((data) => {
          return (
            <div
              key={data.id}
              className="flex flex-row items-center gap-2 text-lg mt-12"
            >
              <Image
                width={60}
                height={60}
                alt="userImage"
                className="rounded-full"
                src={data.avatar}
              />

              <div className="flex flex-col font-nexa font-normal">
                <h2>{data.name}</h2>
                <p className="text-[#999999]">{data.social}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bountyhunters;
