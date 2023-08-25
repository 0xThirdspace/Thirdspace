import React, { useState } from "react";

type Props = {};

type FormValues = {
  bountyName: string;
};

const CreateBountySpaceForm = (props: Props) => {
  const [bountyName, setBountyName] = useState("");

  const setBountyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBountyName(e.target.value);
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBountyName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="flex flex-col w-[300px] md:w-[489px]  mt-14  ">
        <div className="space-y-2">
          <label
            htmlFor="bountyName"
            className="text-[#999999]
"
          >
            Type bounty space name here
          </label>

          <input
            type="text"
            name="bountyName"
            id="bountyName"
            value={bountyName}
            onChange={setBountyHandler}
            className=" outline-none p-2  w-[400px] h-[1.5px] bg-black text-white  bg-transparent "
          />
        </div>

        <div className=" w-[300px] md:w-[400px] h-[1.5px] bg-[#1f1f1f] "></div>
      </div>
    </form>
  );
};

export default CreateBountySpaceForm;
