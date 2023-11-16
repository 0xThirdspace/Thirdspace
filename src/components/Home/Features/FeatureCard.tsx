import Image from "next/image";

interface Props {
    icon: string
    title: string
    description: string    
}

const FeatureCard = ({icon, title, description}: Props) => {
    return ( 
        <div className="border-none rounded-xl cardBackground first:odd:mt-16 last:even:mb-16  p-8">
            <Image className="mt-24 bg-opacity-0" src={require(`../../../assets/${icon}.svg`)} alt={title} width={80} height={80}/>
            <h3 className="text-2xl font-bold my-8 text-white">{title}</h3>
            <p className="my-8 text-white text-justify">{description}</p>
        </div>
     );
}
 
export default FeatureCard;