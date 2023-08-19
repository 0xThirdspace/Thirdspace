import Head from "next/head";
import Link from "next/link";
import { NavItems } from "../Header/NavLink";
import { BsArrowUpRight } from "react-icons/bs";
import Router from "next/router";
import { logo, bountyButton, modeIcon, menuIcon } from "@/assets";
import Image from "next/image";
import { useState } from "react";

type Props = {};

const LandingPage = (props: Props) => {
const [show, setShow] = useState(false)

  const toggleMobile = () =>{
    setShow(true)
  }
  return (
    <>
      <div className=" font-dmSans homeBackgroundImage">
        <Head>
          <title>ThirdSpace </title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Logo.svg" />
        </Head>

        {/* Desktop View */}

        <div className="hidden md:flex flex-col ">
          <div className="flex  justify-around  mt-10 ">
            <Image src={logo} alt="logo" width={180} />
            <div className="flex font-dmSans">
              {NavItems.map((item, index) => <div className="" key={index}>
                <Link className="cursor focus:text-purple-500 active:text-purple-500" href={item.link}>
                  <p className="mx-8 mt-3 text-white">{item.title}</p>
                </Link>
              </div>)}
              <Link href="">
                <Image src={bountyButton} width="150" height="150" alt="bounty button"/>
              </Link>
              <Image className="mx-4 mb-2" src={modeIcon} width="36" height="36" alt="mode icon"/>
            </div>     
          </div>

          <h1 className="text-center text-white font-extrabold text-6xl  font-dmSans items-center justify-center mt-20 leading-[70px] ">
            Get Paid for your <span className="logoGradient">Git</span>
            <br /> <span className="logoGradient mt-2">Contributions</span>
          </h1>

          <div className="text-center text-white font-normal  mt-10 font-dmSans  text-sm   ">
            <p className="leading-6">
              Join bounties, and earn rewards for your coding skills and open
              source contributions.
            </p>
            <p>
              Our smart contracts ensure fair payouts and easy payment
              processing.
            </p>
          </div>

          <div className="flex flex-col md:flex-row text-white gap-10 justify-center mt-10">
            <Link href="/signin" className="flex   btnBorderGradient2  ">
              <button className="flex justify-center items-center mx-auto gap-8">
                <p className="">Sign In</p>

                <div className="btnBackgroundGradient rounded-full w-[40px] h-[40px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-6 h-6  mx-auto flex" />
                </div>
              </button>
            </Link>
            <Link
              href="/signup"
              className="btnBackgroundGradient flex w-[160px] h-[60px] rounded-[50px]"
            >
              <button className="flex justify-center items-center mx-auto gap-8">
                <p>Sign Up</p>
                <div className="bg-black rounded-full w-[40px] h-[40px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-6 h-6  mx-auto flex" />
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col md:hidden">
          <div className="flex justify-between mx-8 pt-4">
            <Image src={logo} alt="logo" width={180} />
            <Image src={menuIcon} alt="logo" width={36} onClick={toggleMobile}/>
            {show ? <div className="absolute inset-0  bg-white block">
              <div className="flex flex-col  mt-10 font-dmSans text-lg m-8 ">
                <div className="flex justify-between">
                  <Image src={logo} alt="logo" width={180} />
                  <p className="text-2xl border rounded-full" onClick={() => setShow(false)}>X</p>
                </div>              
                  {NavItems.map((item, index) => <div className="" key={index}>
                    <Link className="cursor focus:text-purple-500 active:text-purple-500" href={item.link}>
                      <p className="mx-8 mt-3 text-black">{item.title}</p>
                    </Link>
                  </div>)}
                  <Link href="">
                    <Image className="mt-4" src={bountyButton} width="150" height="150" alt="bounty button"/>
                  </Link>
                  <Image className="mx-4 mt-4" src={modeIcon} width="36" height="36" alt="mode icon"/>
                </div>     
            </div> : null
            }
          </div>

          <h1 className="text-center text-white font-extrabold text-3xl   font-dmSans items-center justify-center mt-20 leading-[40px] ">
            Get Paid for your <span className="logoGradient">Git</span>
            <br /> <span className="logoGradient mt-2">Contributions</span>
          </h1>

          <div className="text-center text-white font-normal  mt-4 font-dmSans  text-sm   ">
            <p className="leading-6">
              Join bounties, and earn rewards for <br /> your coding skills and
              open source contributions.
            </p>
            <p>
              Our smart contracts ensure fair payouts and <br /> easy payment
              processing.
            </p>
          </div>

          <div className="flex flex-row text-white gap-5 justify-center mt-20">
            <Link href="/signin" className="flex  mobileBtnBorderGradient2   ">
              <button className="flex justify-center items-center mx-auto gap-8">
                <p className="">Sign In</p>

                <div className="btnBackgroundGradient rounded-full w-[30px] h-[30px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-5 h-5  mx-auto flex" />
                </div>
              </button>
            </Link>
            <Link
              href="/signup"
              className="btnBackgroundGradient flex w-[140px] h-[50px] rounded-[50px] px-2"
            >
              <button className="flex justify-center items-center mx-auto gap-8">
                <p className="text-sm">Sign Up</p>
                <div className="bg-black rounded-full w-[30px] h-[30px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-5 h-5  mx-auto flex" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
