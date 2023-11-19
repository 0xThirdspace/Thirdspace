import React, { PropsWithChildren, useState } from "react";
import { Avatar } from "@chakra-ui/react";
import { DashboardSearch } from "@/components/shared";
import CreatorSidebarMobile from "@/components/Sidebar/creator-mobile";
import CreatorDashboard from "@/components/creator-bounty/dashboard";
import { useRouter } from "next/router";
import AvailableBounty from "@/components/creator-bounty/available-bounty";
import BountyMembers from "@/components/creator-bounty/bounty-members";
import AccountSettingsModal from "@/components/Settings/AccountSettingsModal";
import CreatorSidebarDesktop from "@/components/Sidebar/creator-desktop";

const bountiesNav: { id: number; value: string; path?: string }[] = [
  { id: 1, value: "Available Bounties" },
  { id: 2, value: "Members" },
];

export type customNavPropTypes<
  T extends readonly { value: string; id: number }[]
> = {
  onChange: (value: T[number]["value"]) => void;
  data: T;
  active: T[number]["value"];
  className?: string;
  type?: 1 | 2;
  wide?: boolean;
};

export const CustomNavAlt = <
  T extends readonly { value: string; id: number; path?: string }[]
>({
  onChange,
  data,
  active,
  className,
  type = 1,
  wide,
}: PropsWithChildren<customNavPropTypes<T>>) => {
  const { push } = useRouter();

  const _handleTabChange = (value: string, path?: string) => {
    typeof onChange === "function" && onChange(value);
    path && push(path);
  };

  const activeText = type === 1 ? "" : "";

  return (
    <div className={className}>
      {data.map(({ value, id, path }) => (
        <div
          key={id}
          className="relative inline-block cursor-pointer group"
          onClick={() => _handleTabChange(value, path)}
        >
          <span
            className={`text-center text-input-border text-base sm:text-xl mx-2 group-hover:text-white mb-[11.58px] mt-[13.5px] inline-block
							${active === value && [activeText]}
							${wide && "px-0"}
						`}
          >
            {value}
          </span>
          <div
            className={`rounded-t-[10px] h-[3.5px] bg-white
							${active !== value && "invisible"}
						`}
          ></div>
        </div>
      ))}
    </div>
  );
};

const BountyCreator = () => {
  const [activeTab, setActiveTab] = useState(bountiesNav[0]["value"]);

  const [settings, setSettings] = useState(false);
  const displaySettingsModal = () => {
    return setSettings(!settings);
  };

  return (
    <main className="w-full h-auto bg-black-500">
      <div className="flex items-end self-end justify-end mb-10 ">
        <div onClick={displaySettingsModal}>
          <Avatar size="lg" src="/images/workspace-logo.png"></Avatar>
          {settings && (
            <div className="bg-[#191919] bg-opacity-80 fixed z-10 left-0 top-0 w-screen h-screen overflow-y-auto py-16">
              <div className="flex margin-auto items-center justify-center">
                <AccountSettingsModal onclick={displaySettingsModal} />
              </div>
            </div>
          )}{" "}
        </div>
      </div>
      <section className="flex items-center gap-5 sm:gap-10">
        <CreatorSidebarMobile />
        <CreatorDashboard />
      </section>

      <section className="py-5">
        <div className="flex xl:hidden">
          <DashboardSearch width="w-full" />
        </div>
      </section>

      <div className="flex flex-row gap-10 font-normal text-xl mb-10">
        <CustomNavAlt
          wide
          active={activeTab}
          data={bountiesNav}
          onChange={setActiveTab}
          className={`flex gap-3 sm:gap-10 text-[#999999]`}
        />
      </div>

      <div className="h-full bg-black">
        {activeTab === bountiesNav[0]["value"] && <AvailableBounty />}
        {activeTab === bountiesNav[1]["value"] && <BountyMembers />}
      </div>
    </main>
  );
};

const Index = () => {
  return (
    <div>
      <CreatorSidebarDesktop>
        <div className="pt-6 lg:pt-12 px-4 sm:px-7">
          <BountyCreator />
        </div>
      </CreatorSidebarDesktop>
    </div>
  );
};

export default Index;
