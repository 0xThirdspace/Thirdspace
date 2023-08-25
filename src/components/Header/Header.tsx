import Image from "next/image"
import { NavItems } from "./NavLink"
import Link from "next/link"
import { logo, bountyButton, modeIcon } from "@/assets";

const Header = () => {
    return(
        <div className="hidden md:block lg:block xl:block 2xl:block font-bold absolute top-0 left-0 w-full bg-opacity-75 p-4">
            <div className="flex  justify-around font-dmSans pt-10 px-4">
            <Image className="md:w-36 lg:w-48" src={logo} alt="logo" width={180} />
            <div className="flex font-dmSans md:text-">
            {NavItems.map((item, index) => <div className="" key={index}>
            <Link className="cursor focus:text-purple-500 active:text-purple-500" href={item.link}>
                <p className="md:mx-2 lg:mx-6 mt-5 md:text-xs lg:text-md xl:text-lg text-white hover:text-purple-500">{item.title}</p>
            </Link>
            </div>)}
            <Link  href="#bounties">
            <Image className="md:w-24 md:mt-4 lg:mt-2  xl:mt-4 lg:w-36" src={bountyButton} width="150" height="150" alt="bounty button"/>
            </Link>
            <Image className="md:w-6 md:mt-4  xl:mt-4 lg:mt-2 lg:w-8 lg:mx-4 lg:mb-2" src={modeIcon} width="36" height="36" alt="mode icon"/>
        </div>   
        </div>
        </div>
    )
}

export default Header