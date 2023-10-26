import Members from "@/components/Members/Members";
import CreatorSidebarDesktop from "@/components/Sidebar/creator-desktop";
import React from "react";

type Props = {};

const MembersPage = (props: Props) => {
  return (
    <CreatorSidebarDesktop>
      <Members />
    </CreatorSidebarDesktop>
  );
};

export default MembersPage;
