import GetStartedModal from "@/pages/signin/GetStartedModal";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const SignUpForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    checkFormValidity();
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    checkFormValidity();
  };

  const fullNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (
      email.trim() !== "" &&
      email.includes("@") &&
      password.trim() !== "" &&
      fullName.trim() !== ""
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
      const response = await fetch("url", {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(data);

      setEmail("");
      setPassword("");
      setFullName("");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={formSubmitHandler} action="" className="font-dmSans">
        <div className="space-y-[16px] ">
          <div className="flex flex-col space-y-1">
            <label htmlFor="fullName" className="font-medium text-lg">
              Full Name
            </label>
            <input
              value={fullName}
              onChange={fullNameChangeHandler}
              type="text"
              name="fullName"
              id="fullName"
              required
              placeholder="Type here"
              className="signUpInput"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-medium text-lg">
              Email
            </label>
            <input
              value={email}
              onChange={emailChangeHandler}
              type="email"
              name="email"
              id="email"
              required
              placeholder="Type here"
              className="signUpInput"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="font-medium text-lg">
              Password
            </label>
            <input
              value={password}
              onChange={passwordChangeHandler}
              type="password"
              name="password"
              id="password"
              required
              placeholder="Type here"
              className="signUpInput"
            />
          </div>
        </div>

        <Link href="/get-started"></Link>

        <button
          type="submit"
          className="mt-[50px]  item just hover:btnBackgroundGradient bg-[#141414] cursor-pointer rounded-[8px] h-[50px] w-full  font-semibold text-lg"
          onClick={() => setShowModal(true)}
          disabled={!isFormValid}
        >
          Proceed
        </button>

        <div className="flex flex-rwo gap-2 items-center justify-center mt-2 text-base">
          <p className="font-medium text-lg">Already have an account?</p>
          <Link href="/signin" className="font-semibold text-lg">
            Log In
          </Link>
        </div>

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
            {showModal && (
              <GetStartedModal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
              />
            )}
          </div>
        )}
      </form>
    </>
  );
};

export default SignUpForm;
