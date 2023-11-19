import Image from "next/image";
import { AcceptBtn, CloseBtn } from "../shared";
import React, { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";

const ViewSubmissions = (props: { onclick: any }) => {
  const [submissionModal, setSubmissionModal] = useState(false);
  const openSubmissionModal = () => {
    console.log("clicked");
    setSubmissionModal(true);
  };

  const closeSubmissionModal = () => {
    setSubmissionModal(false);
  };

  return (
    <div className="text-white m-3 sm:m-5 font-normal h-screen w-screen overflow-y-auto flex items-center justify-center">
      <div className="bg-[#0F0F0F] rounded-md h-screen w-auto max-w-[1000px]  flex flex-col items-start  pt-[18px]  mb-10">
        <div onClick={props.onclick} className="py-[28px] self-end pr-[28px]">
          <CloseBtn />
        </div>

        <section className="flex flex-col sm:flex-row items-start sm:items-center  gap-4 pl-2 sm:pl-10 pb-10">
          <Image
            width={56}
            height={56}
            src="/images/image-1.svg"
            alt="bounty-avatar"
            className="w-[56px] h-[56px] rounded-full "
          />
          <p className="text-2xl text-white font-bold">
            TCP over Wifi for Raspberry Pi Pico W in TinyGo
          </p>
        </section>

        <section className="bg-black w-full flex flex-col gap-5 p-2 pr-2 sm:pl-10 sm:pr-5 pb-16 ">
          {[
            {
              id: 1,
              imgSrc: "/images/image-1.svg",
              name: "Frank Williams",
              username: "Quibugs",
              submission_description:
                " The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43...................",
            },
            {
              id: 2,
              imgSrc: "/images/image-1.svg",
              name: "Frank Williams",
              username: "Quibugs",
              submission_description:
                " The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43...................",

              // " The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43 The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43 The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43 The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43 ",
            },
            {
              id: 3,
              imgSrc: "/images/image-1.svg",
              name: "Frank Williams",
              username: "Quibugs",
              submission_description:
                " The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43...................",
            },
            {
              id: 4,
              imgSrc: "/images/image-1.svg",
              name: "Frank Williams",
              username: "Quibugs",
              submission_description:
                " The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43...................",
            },
            {
              id: 5,
              imgSrc: "/images/image-1.svg",
              name: "Frank Williams",
              username: "Quibugs",
              submission_description:
                " The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43...................",
            },
            {
              id: 6,
              imgSrc: "/images/image-1.svg",
              name: "Frank Williams",
              username: "Quibugs",
              submission_description:
                " The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43...................",
            },
            {
              id: 7,
              imgSrc: "/images/image-1.svg",
              name: "Frank Williams",
              username: "Quibugs",
              submission_description:
                " The aim of this project is to implement the missing functionality needed to control the Ethernet/TCP interface on the Raspberry Pi Pico W's on board CYW43...................",
            },
          ].map((i) => {
            return (
              <div
                key={i.id}
                className="flex flex-col md:flex-row items-start pt-4 gap-2 md:gap-5 lg:gap-10 "
              >
                <div className="w-full flex items-center gap-2 min-w-[230px] max-w-[270px] ">
                  <Image
                    width={56}
                    height={56}
                    src={i.imgSrc}
                    alt="bounty-avatar"
                    className="w-[90px] h-[90px] rounded-full "
                  />
                  <div>
                    <p className="text-[#fff] font-bold ">{i.name}</p>
                    <p className="text-[#999]">@{i.username}</p>
                  </div>
                </div>
                <div>
                  <p className="text-white text-base font-bold pb-1 ">
                    Submission Description
                  </p>
                  <p className="text-[#999] text-base">
                    {i.submission_description}
                  </p>
                </div>
                <div className="flex self-center w-full md:w-auto">
                  <button
                    onClick={openSubmissionModal}
                    className="bg-[#0F0F0F] w-full md:w-auto  rounded-full whitespace-nowrap py-3 px-4"
                  >
                    See more
                  </button>
                </div>
              </div>
            );
          })}
        </section>

        {submissionModal && (
          <section className="w-screen h-screen bg-[#191919] bg-opacity-80  absolute z-10 top-0 left-0 flex items-center justify-center">
            <main className="w-auto relative min-w-[300px] mx-2 max-w-[700px] h-auto bg-black px-5 sm:px-10 py-5 rounded-md">
              <div
                onClick={closeSubmissionModal}
                className="max-w-[30px] absolute right-10 mt-5"
              >
                <CloseBtn />
              </div>

              <main className="flex flex-col sm:flex-row gap-5 items-start sm:items-center py-5 mt-10">
                <div className="w-full flex items-center gap-2 min-w-[230px] max-w-[270px] ">
                  <Image
                    width={56}
                    height={56}
                    src="/images/image-1.svg"
                    alt="bounty-avatar"
                    className="w-[90px] h-[90px] rounded-full "
                  />
                  <div>
                    <p className="text-[#fff] font-bold ">Frank Williams</p>
                    <p className="text-[#999]">@Quibigs</p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-6">
                  <div className="flex gap-2 items-center px-4 py-2 rounded-full bg-zinc-500 ">
                    <p>sj23h.....4h2s9</p>
                    <RiFileCopyLine />
                  </div>

                  <div className="flex gap-2 items-center px-4 py-2 rounded-full bg-zinc-500 ">
                    <RiFileCopyLine />
                    <p>RepoLink</p>
                  </div>
                </div>
              </main>

              <div className="text-base  text-[#999]">
                <p className="text-white font-bold">Submission Description</p>
                <p>
                  The development target is the RP2040 microcontroller using the
                  Go programming language that comes in the Pico W board
                  package. TinyGo is the compiler which lets us compile Go code
                  to the RP2040. The CYW43439 is connected to the RP2040
                  (Raspberry Pi&apos;s microcontroller) via SPI where SDO and
                  SDI are shared on the same pin. The communication today in
                  TinyGo happens via software (bitbang) SPI.
                </p>
              </div>

              <div className="flex justify-between py-5 font-bold text-white ">
                <button className="flex  gap-3 px-5 sm:px-10 py-3 rounded-full border-[1px] border-[#B20000] bg-[#551e1e]">
                  Reject <CloseBtn />
                </button>
                <button className="flex  gap-3 px-5 sm:px-10 py-3 rounded-full border-[1px] border-[#13F129] bg-[#3c6140] ">
                  Accept <AcceptBtn />
                </button>
              </div>
            </main>
          </section>
        )}
      </div>
    </div>
  );
};

export default ViewSubmissions;
