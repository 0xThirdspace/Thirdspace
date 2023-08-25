import { bountyBanner } from "@/assets";
import Image from "next/image";

const BountyBanner = () => {
    return ( 
        <div id="bounties" className="flex justify-around lg:flex-row xl:flex-row  flex-col lg:mt-24 xl:mt-24 md:mt-24 mt-8 lg:mx-16 xl:mx-16 md:mx-16 mx-8">
            <Image className="" src={bountyBanner}  alt="bounty banner"/>
            <p className="mt-8 lg:mt-24 xl:mt-24 md:mt-24 lg:w-2/4 xl:w-2/4 w-full text-white text-justify">
            We provide a suite of features to assist your team to reach maximum productivity. Thirdspace is an all-in-one Web3 and A.I powered workspace for startups. We merge the best of notion (Kanban boards), best of asana (chat system) with Smart contract powered Payrolls and Bounty for tasks outsourcing all under a single umbrella so you don’t have to be jumping between platforms all the time. With a personal workspace A.I assistant, automation will be at your finger tips. We are the only workspace essential for your startup. Sign up today!
            </p>
        </div> 
    );
}
 
export default BountyBanner;