import { FeatureItems } from "./Featureitems";
import FeatureCard from "./FeatureCard";

const Features = () => {
    return ( 
        <div id="features" className=" mt-8 sm:mx-4 lg:mt-36 xl:mt-36 md:mt-36 lg:mx-48 xl:mx-48 md:mx-16">
            <h1 className="text-center  text-white  font-extrabold lg:my-24 xl:my-24 md:my-24 mt-8 text-3xl">Features</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 justify-items-center mx-8 gap-16">
                {FeatureItems.map((item, index) => (
                    <FeatureCard key={index} icon={item.icon} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
     );
}
 
export default Features;