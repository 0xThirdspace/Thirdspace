import { roadMapItems } from "./RoadmapItem"

const Stepper = () => {
    return(
        <div className="lg:flex justify-between lg:flex-row xl:flex-row md:grid md:grid-cols-2 flex-col py-24 md:py-16 ">
            {roadMapItems.map((item, index) => 
            <div className="m-2" key={index}>
            <div className="flex justify-start items-center">
                <button className="px-4 py-2 bg-orange-500 text-white rounded-full focus:outline-none">
               {item.stage}
                </button>
                <hr className="w-full h-0 border-t-2 border-slate-500"/>
            </div>
            <div className="text-white mt-2">
                <h3 className="text-3xl mt-8 font-extrabold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text ">{item.title}</h3>
                <p className="mt-2">{item.description}</p>
            </div>
        </div>
            )}
            

        </div>
    )
}

export default Stepper