import { partner } from "@/assets";
import Image from "next/image";
import { partnerItems } from "./PartnerItem";
import Link from "next/link";

const Partners = () => {
    return ( 
    <div id="partners" className="bg-stone-800 mt-24 lg:mt-60 xl:mt-60 md:mt-60 lg:p-24 xl:p-24 md:p-16"
    >
        <h3 className="text-white text-center font-bold mb-4 p-4 text-3xl">Our Partners</h3>
        <div className="flex justify-center items-center">
            {
                partnerItems.map((item, index) => 
                <div key={index} className="m-4">
                    <Link href={item.link} target="_blank" className="cursor">
                        <Image  className="pb-2" src={require(`../../../assets/partners/${item.icon}.png`)} width={150} alt={item.icon}/>
                    </Link>
                </div>)
            }
        </div>
    </div> 
    );
}
 
export default Partners;