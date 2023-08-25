import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

import SuccessPageModal from "./SuccessPageModal";

// import {Input} from "@chakra-ui/react"

type Props = {};

const CreateBountyForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [repoLink, setRepoLink] = useState("");
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [description, setDescription] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState<boolean>(false);

  // onChange Handler functions
  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    checkFormValidity();
  };

  const repoLinkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoLink(e.target.value);
    checkFormValidity();
  };

  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    checkFormValidity();
  };

  const startDateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(e.target.value));
    checkFormValidity();
  };

  const endDateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(e.target.value));
    checkFormValidity();
  };

  const descriptionChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (
      title.trim() !== "" &&
      repoLink.trim() !== "" &&
      amount.trim() !== "" &&
      startDate !== undefined &&
      endDate !== undefined &&
      description.trim() !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Bounty/create`,
        {
          method: "POST",
          body: JSON.stringify({
            name: title,
            repo_link: repoLink,
            reward: amount,
            submission_start: startDate,
            submission_end: endDate,
            desc: description,
            bounty_space_id: "1",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      console.log(data);

      setIsLoading(false);

      setShowSuccessPage(true);
      setTitle("");
      setRepoLink("");
      setAmount("");
      setStartDate("");
      setEndDate("");
      setDescription("");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="space-y-6">
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="repoLink">Title</label>
            <input
              defaultValue={title}
              onChange={titleChangeHandler}
              type="text"
              name="bounty_Name"
              id="bounty_Name"
              placeholder="Type bounty  name here"
              required
              className="text-white  h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-14">
            <div className="font-nexa flex flex-col space-y-1">
              <label htmlFor="bounty_Name">Repo Link</label>
              <input
                onChange={repoLinkChangeHandler}
                defaultValue={repoLink}
                type="text"
                name="repoLink"
                id="repoLink"
                placeholder="Paste repo link here"
                required
                className="text-white w-[435px] h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
              />
            </div>

            <div className="font-nexa flex flex-col space-y-1">
              <label htmlFor="amount" className="text-white">
                Amount
              </label>
              <input
                onChange={amountChangeHandler}
                defaultValue={amount}
                type="number"
                name="amount"
                id="amount"
                placeholder="Bounty amount in token"
                className="text-white w-[435px] h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
              />
            </div>
          </div>

          {/* Start and End Date */}

          <div className="flex flex-col md:flex-row justify-between gap-14">
            <div className="font-nexa flex flex-col space-y-1">
              <label htmlFor="startDate">Start Date</label>
              <input
                onChange={startDateChangeHandler}
                defaultValue={startDate ?? ""}
                type="date"
                name="startDate"
                id="startDate"
                placeholder="DD/MM/YYYY"
                required
                className="text-white w-[435px] h-[33px] bg-transparent border border-[#999999]  outline-none p-4 placeholder:text-[#999999]  "
              />
            </div>

            <div className="font-nexa flex flex-col space-y-1">
              <label htmlFor="endDate" className="text-white">
                End Date
              </label>
              <input
                onChange={endDateChangeHandler}
                defaultValue={endDate}
                type="date"
                name="endDate"
                id="endDate"
                placeholder="Bounty amount in token"
                className="text-white w-[435px] h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
              />
              {/* <Input></Input> */}
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={descriptionChangeHandler}
              defaultValue={description}
              name="description"
              id="description"
              cols={30}
              rows={10}
              placeholder="Detail About the Bounty "
              className="text-white  h-[100px] bg-transparent border border-[#999999]  outline-none p-4 "
            ></textarea>
          </div>

          <button
            type="submit"
            className="font-nexa btnBackgroundGradient rounded-[8px] items-center justify-center flex flex-row gap-2 w-[948px] h-[48px] "
            onClick={() => setShowSuccessPage(true)}
            disabled={!isFormValid}
          >
            <p className="">Confirm</p>
            <BsArrowUpRight className=" w-6 h-6 " />
          </button>
        </div>
      </form>

      {/* Success Page Modal */}

      {isLoading ? (
        <div className="flex items-center justify-center -mt-32">
          <div className="h-36 w-36 relative">
            <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
              <div className="w-36 h-36 border-4 buttonGradient rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {showSuccessPage && (
            <SuccessPageModal
              isVisible={showSuccessPage}
              onClose={() => setShowSuccessPage(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CreateBountyForm;
