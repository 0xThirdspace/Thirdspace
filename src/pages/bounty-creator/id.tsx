import React, { useState } from "react";
import Image from "next/image";
import { ArrowRightDiagonalBtn } from "@/components/shared";
import EditBounty from "@/components/creator-bounty/edit-bounty";
import ViewSubmissions from "@/components/creator-bounty/view-submissions";

const BountyView = () => {
  const [editBounty, setEditBounty] = useState(false);
  const displayEditBountyModal = () => {
    return setEditBounty(!editBounty);
  };

  const [viewSubmission, setViewSubmission] = useState(false);
  const closeViewSubmission = () => {
    console.log("clicked");
    return setViewSubmission(false);
  };

  const openViewSubmission = () => {
    return setViewSubmission(true);
  };

  return (
    <div className="text-white bg-[#0F0F0F] bg-opacity-40 h-screen w-screen flex items-center justify-center ">
      <div className="w-auto max-w-[1200px] h-auto max-h-[95%] flex flex-col md:flex-row gap-10 px-5 sm:px-10 py-10 mb-5 bg-zinc-800 overflow-y-auto no-scrollbar    ">
        <section className="w-full md:w-[75%] pr-2">
          <main className="flex flex-col sm:flex-row gap-3">
            <div>
              <Image
                width={200}
                height={170}
                src="/images/image-1.svg"
                alt="bounty-avatar"
                className="w-full h-auto sm:w-[210px] sm:h-[180px] flex mr-3 mb-2 float-left "
              />
              <p className="text-2xl text-white font-normal">
                TCP over Wifi for Raspberry Pi Pico W in TinyGo
              </p>
              <div className="flex flex-col xl:flex-row text-sm font-normal justify-between py-3">
                <div className="flex gap-2">
                  <p className="text-[#999]">Start Date:</p>
                  <p className="text-[#fff]">21st September, 2023</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#999]">End Date:</p>
                  <p className="text-[#fff]">21st September, 2023</p>
                </div>
              </div>
              <p className="text-[#fff]">Scope:</p>
              <p className="text-[#999]">
                The aim of this project is to implement the missing
                functionality needed to control the Ethernet/TCP interface on
                the Raspberry Pi Pico W&apos;s on board CYW43439 wifi The aim of
                this project is to implement the missing functionality needed to
                control the Ethernet/TCP interface on the Raspberry Pi Pico
                W&apos;s on board CYW43439 wifi The aim of this project is to
                implement the missing functionality needed to control the
                Ethernet/TCP interface on the Raspberry Pi Pico W&apos;s on
                board CYW43439 wifi The aim of this project is to implement the
                missing functionality needed to control the Ethernet/TCP
                interface on the Raspberry Pi Pico W&apos;s on board CYW43439
                wifi
              </p>
            </div>
          </main>

          <main className="flex flex-col gap-4 py-5 ">
            <div className="flex flex-col gap-2">
              <p className="text-[#fff]">Background</p>
              <p className="text-[#999]">
                The development target is the RP2040 microcontroller using the
                Go programming language that comes in the Pico W board package.
                TinyGo is the compiler which lets us compile Go code to the
                RP2040. The CYW43439 is connected to the RP2040 (Raspberry
                Pi&apos;s microcontroller) via SPI where SDO and SDI are shared
                on the same pin. The communication today in TinyGo happens via
                software (bitbang) SPI. The work done so far has been achieved
                by porting over the C version of the driver:
                georgerobotics/cyw43-driver. This driver is used by the SDK
                maintained by the Raspberry Pi foundation in
                raspberrypi/pico-sdk. Some functionality may also be needed from
                the pico-sdk repository.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#fff]">Requirements</p>
              <p className="text-[#999]">
                RFC2119 language will be used throughout this document and MUST
                be interpreted accordingly[^1], source that does not conform to
                this specification may be rejected as a solution to this issue.
                The Programmer or just Programmer is the entity which submits
                the pull request seeking to resolve this issue. Source is the
                source code submitted by the Programmer seeking to resolve this
                issue. The Maintainer is Patricio Whittingslow- github alias
                @soypat. [^1]: . It is important to note that the Source will
                not be held to higher standards than the already existing code
                in this repository, so looking at existing code is a good way to
                get up to speed on expectations. RFC2119 language will be used
                throughout this document and MUST be interpreted
                accordingly[^1], source that does not conform to this
                specification may be rejected as a solution to this issue. The
                Programmer or just Programmer is the entity which submits the
                pull request seeking to resolve this issue. Source is the source
                code submitted by the Programmer seeking to resolve this issue.
                The Maintainer is Patricio Whittingslow- github alias @soypat.
                [^1]: It is important to note that the Source will not be held
                to higher standards than the already existing code in this
                repository, so looking at existing code is a good way to get up
                to speed on expectations.
              </p>
            </div>
          </main>
        </section>

        <section className="w-[80%] sm:w-[50%] mx-auto md:w-[25%] flex flex-col gap-10">
          <div className="flex flex-col gap-2 px-8 py-5 text-center bg-[#1F1F1F] rounded-lg">
            <p className="text-xl">Bounty Reward</p>
            <p className="text-2xl">$50,000</p>
          </div>

          <p className="text-center text-[#999] text-base ">
            You are a developer and you are pretty sure you can solve this
            issue?
          </p>

          <div onClick={displayEditBountyModal}>
            <button className="w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-lg  border-[1px] border-buttonGradient">
              Edit Bounty
              <ArrowRightDiagonalBtn />
            </button>
          </div>

          {editBounty && (
            <div className="bg-[#191919] bg-opacity-80 fixed z-10 left-0 top-0 w-screen h-screen overflow-y-auto py-16">
              <div className="flex margin-auto items-center justify-center">
                <EditBounty onclick={displayEditBountyModal} />
              </div>
            </div>
          )}

          <div onClick={openViewSubmission}>
            <button className="buttonLinearBackground w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-lg">
              <p>View Submission</p>
              <ArrowRightDiagonalBtn />
            </button>
          </div>

          {viewSubmission && (
            <div className="bg-[#191919] bg-opacity-80 fixed z-10 left-0 top-0 w-screen h-screen">
              <div className="flex margin-auto items-center justify-center">
                <ViewSubmissions onclick={closeViewSubmission} />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BountyView;
