import Link from "next/link";
import React, { useState } from "react";
import Router from "next/router";
import { useSnackbar } from "notistack";
import { success } from "@/assets";
import { BASE_URL } from "@/utils/constants";

type Props = {};

const SignUpForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const fullNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const checkFormValidity = () => {
    if (
      email.trim() == "" &&
      !email.includes("@") &&
      password.trim() == "" &&
      fullName.trim() == ""
    ) {
      enqueueSnackbar("All fields are required!");
      return;
    }
  };

  const payLoad = {
    name: fullName,
    email: email,
    password: password,
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    checkFormValidity();
    try {
      const response = await fetch(`${BASE_URL}/auth/signUp`, {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        enqueueSnackbar(data, {
          autoHideDuration: 3000,
          variant: "error",
        });
        return;
      }

      setIsLoading(false);
      enqueueSnackbar("Successfully added", success);
      Router.push("/signin");
      setEmail("");
      setPassword("");
      setFullName("");
    } catch (err) {
      setIsLoading(false);
      enqueueSnackbar(`An error occured ${err}`, {
        autoHideDuration: 3000,
        variant: "error",
      });
      return;
    }
  };

  return (
    <>
      <form onSubmit={formSubmitHandler} action="" className="font-DMSans">
        <div className="space-y-[8px] md:space-y-[16px] ">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="fullName"
              className="font-normal md:font-medium text-base md:text-lg"
            >
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
            <label
              htmlFor="email"
              className="font-normal md:font-medium text-base md:text-lg"
            >
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
            <label
              htmlFor="password"
              className="font-normal md:font-medium text-base md:text-lg "
            >
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
        <button
          type="submit"
          className="mt-[30px] md:mt-[50px]  item just hover:btnBackgroundGradient bg-[#141414] cursor-pointer rounded-[8px] h-[50px] w-full  font-semibold  text-base md:text-lg"
        >
          Proceed
        </button>

        <div className="flex flex-rwo gap-2 items-center justify-center mt-2 text-base">
          <p className=" font-normal text-base md:font-medium md:text-lg">
            Already have an account?
          </p>
          <Link href="/signin" className="font-semibold text-base md:text-lg">
            Log In
          </Link>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center -mt-80 ">
            <div className="h-36 w-36 relative">
              <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                <div className="w-36 h-36 border-4 buttonGradient rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        ) : null}
      </form>
    </>
  );
};

export default SignUpForm;
