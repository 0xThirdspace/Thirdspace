import { howItWorks } from "@/assets";
import Image from "next/image";

const HowItWorks = () => {
    return ( 
        <div id="howitworks" className="flex justify-around lg:flex-row xl:flex-row md:flex-row flex-col mt-24 lg:mx-16 xl:mx-16 md:mx-16 mx-8">
            <Image className="" src={howItWorks}  alt="bounty banner"/>
        </div> 
    );
}
 
export default HowItWorks;