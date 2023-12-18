import { useState } from "react";
import Image from "next/image";
import { NavItems } from "./NavLink";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { logo, bountyButton, modeIcon } from "@/assets";

const NavDrawer = () => {
  const [show, setShow] = useState(false);

  const toggleMobile = () => {
    setShow(true);
  };

  return (
    <div className=" md:hidden">
      <div className="flex justify-between mx-8 pt-10">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={180}
            onClick={() => setShow(false)}
          />
        </Link>
        <AiOutlineMenu color="white" size={24} onClick={toggleMobile} />
        {show ? (
          <div className="fixed inset-0  h-screen bg-black text-white block ">
            <div className="flex flex-col  mt-10 font-DMSans text-lg m-8 ">
              <div className="flex justify-between">
                <Image src={logo} alt="logo" width={150} />
                <AiOutlineCloseCircle
                  size={24}
                  onClick={() => setShow(false)}
                />
              </div>
              {NavItems.map((item, index) => (
                <div className="" key={index}>
                  <Link
                    className="cursor focus:text-purple-500 active:text-purple-500"
                    href={item.link}
                  >
                    <p className="mx-2 mt-8" onClick={() => setShow(false)}>
                      {item.title}
                    </p>
                  </Link>
                </div>
              ))}
              <Link href="">
                <Image
                  className="mt-8"
                  src={bountyButton}
                  width="150"
                  height="150"
                  alt="bounty button"
                />
              </Link>
              <Image
                className="mx-4 mt-8"
                src={modeIcon}
                width="36"
                height="36"
                alt="mode icon"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavDrawer;
