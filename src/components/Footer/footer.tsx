import { logo } from "@/assets";
import Image from "next/image";

const Footer = () => {
    return(
        <div className="bg-black px-8 xl:px-16 lg:px-16 md:px-16  py-8  flex justify-between lg:flex-row xl:flex-row md:row flex-col">
            <Image className="" src={logo} width={150} height={150}  alt="bounty banner"/>
            <p className="text-white">© 2023 Third space. All rights reserved.</p>
        </div>
    )
}

export default Footer