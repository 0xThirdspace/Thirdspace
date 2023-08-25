import { success } from "@/assets";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  //   children: React.ReactNode;
};

const DeleteSettings = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#05050533] bg-opacity-25 backdrop-blur-sm  flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[500px] h-[400px] bg-[#0F0F0F] flex flex-col relative ">
        <div className=" p-2 rounded">
          <button
            className="text-white text-2xl absolute top-6 right-10   "
            onClick={() => onClose()}
          >
            <MdOutlineCancel className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center justify-center mt-14 text-white font-nexa ">
            <Image src={success} alt="success" width={150} />
            <h2 className="font-extrabold text-3xl mt-4  ">Wait a Minute!</h2>
            <p className="font-medium text-lg mt-2 ">
              Are you sure you want to delete Bounty Space?
            </p>
            <button  className="items-center rounded-full bg-[#B2000029] border border-[#B20000] w-[200px] mb-3 h-[48px] justify-center gap-1 p-2 font-nexa font-normal">
            <p>Delete Bounty Space</p>
          </button>
          <button  className="items-center rounded-full bg-[#B2000029] border border-[#B20000] w-[200px] h-[48px] justify-center gap-1 p-2 font-nexa font-normal">
            <p>cancel</p>
          </button>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default DeleteSettings;
