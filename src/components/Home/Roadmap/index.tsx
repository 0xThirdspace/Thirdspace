import { roadmap } from "@/assets";
// import { Stepper } from "@chakra-ui/react";
import Image from "next/image";
import Stepper from "./Stepper";

const Roadmap = () => {
    return ( 
        <div className="  bg-neutral-800">
            <div className="text-white text-center">
                <h3 className="text-3xl py-8">Roadmap</h3>
                <p className="md:px-16">Our roadmap takes us through a series of exciting phases, each designed to bring us closer to our vision.</p>
                    <p>With each step, we’re making the process easy for Startups and Bounty hunters</p>
                    </div>
                    <div id="roadmap" className="mt-8  lg:mx-16 xl:mx-16 md:mx-16 mx-8">
                    {/* <Image className="" src={roadmap}  alt="bounty banner"/> */}
                    <div className="">
                        <Stepper/>
                    </div>        
                </div> 
        </div>
     
    );
}
 
export default Roadmap;