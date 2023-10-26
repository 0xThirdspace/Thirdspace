import { useState } from "react";
import { CloseBtn, LogoutBtn, EditBtn } from "../shared";
import SaveChangesModal from "./SaveChangesModal";

export const SettingsInputField = (props: {
  tag?: string;
  type: string;
  placeholder: any;
}) => {
  return (
    <div className="text-[14px] font-normal bg-[#3F3F3F] text-white">
      <p className="pb-[10px] bg-[#0F0F0F] text-[#999]">{props.tag}</p>
      <div className="w-full relative flex items-center ">
        <input
          type={props.type}
          className="h-auto py-[9px] px-4 border-[1px] border-zinc-400 focus:outline-none focus:[#873ab3] focus:[#873ab3] focus:ring-1"
          placeholder={props.placeholder}
        />
        <div className="absolute right-1">
          <EditBtn />
        </div>
      </div>
    </div>
  );
};

const AccountSettingsModal = (props: { onclick: any }) => {
  const [saveChanges, setSaveChanges] = useState(false);
  const displaySaveChangesModal = () => {
    return setSaveChanges(!saveChanges);
  };

  return (
    <div className="bg-[#0F0F0F] rounded-md h-auto w-screen mx-4 sm:mx-0 sm:w-[586px] md:w-[700px] flex flex-col items-center">
      <div onClick={props.onclick} className="py-[28px] self-end pr-[28px]">
        <CloseBtn />
      </div>

      <p className="text-[32px] font-bold pb-10">Account Settings</p>

      <form className="w-full px-4 sm:px-12 md:px-28 text-[#999] text-sm flex flex-col gap-[15px] pb-12 ">
        <SettingsInputField
          tag="FirstName"
          type={"text"}
          placeholder={"Qibigs Westbite"}
        />

        <SettingsInputField
          tag="Email"
          type={"email"}
          placeholder={"quibigs@gmail.com"}
        />

        <SettingsInputField
          tag="Password"
          type={"password"}
          placeholder={"quibigs@gmail.com"}
        />

        <SettingsInputField
          tag="Wallet Address"
          type={"text"}
          placeholder={"sj23hihiweihei.....498497h2s9"}
        />
      </form>

      <div className="w-full px-5 sm:px-12 md:px-28 flex items-center justify-between pb-20 ">
        <button className="buttonLinearBackground w-auto px-7 sm:px-16 flex items-center justify-center py-3 gap-2 text-[16px] font-bold rounded-full">
          <LogoutBtn />
          <p>Logout</p>
        </button>

        <div onClick={displaySaveChangesModal}>
          <button className="buttonLinearBackground w-auto px-7 sm:px-16 flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-full">
            <p>Save</p>
          </button>
          {saveChanges && (
            <div className="bg-[#191919] fixed z-10 left-0 top-0 w-screen h-screen overflow-y-auto py-16">
              <div className="flex margin-auto items-center justify-center">
                <SaveChangesModal onclick={() => setSaveChanges(false)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsModal;
