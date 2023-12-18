import { BASE_URL } from "@/utils/constants";
import Link from "next/link";
import React, { useState } from "react";
import { useSnackbar } from "notistack";
import GetStartedModal from "./GetStartedModal";
import { useRouter } from "next/router";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { Context } from "vm";

type Props = {};

const SignInForm = ({ csrfToken }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getStarted, setGetStarted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { data: session } = useSession();
  // console.log(session?.user.token )

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const checkFormValidity = () => {
    if (email.trim() == "" && !email.includes("@") && password.trim() == "") {
      enqueueSnackbar("All fields are required!");
      return;
    }
  };

  const payLoad = {
    email: email,
    password: password,
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkFormValidity();
    setIsLoading(true);

    try {
      const user = await signIn("credentials", {
        ...payLoad,
        redirect: false,
        // callbackUrl: "/signin"
      });
      console.log(user);
      if (!user?.ok) {
        setIsLoading(false);
        enqueueSnackbar("Incorrect login credentials", {
          autoHideDuration: 5000,
          variant: "error",
        });
        return;
      }
      setGetStarted(true);
      enqueueSnackbar("Successfully logged in", {
        variant: "success",
      });
      // router.push("/available-bounties")
      setEmail("");
      setPassword("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar(`An error occured ${error}`, {
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
            <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
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
              className="font-normal md:font-medium text-base md:text-lg"
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
          className="mt-[30px] md:mt-[50px]  item just hover:btnBackgroundGradient bg-[#141414] cursor-pointer rounded-[8px] h-[50px] w-full  font-semibold  text-base md:text-lg "
        >
          Proceed
        </button>
        <div className="flex flex-row  gap-2 items-center justify-center mt-4 text-base">
          <p className="font-normal text-base md:font-medium md:text-lg">
            {" "}
            Don’t have an account?{" "}
          </p>
          <Link href="/signup" className="font-semibold text-base md:text-lg">
            Sign Up
          </Link>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center -mt-80 ">
            <div className="h-36 w-36 relative">
              <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                <div className="w-36 h-36 border-4 buttonGradient rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        )}
        <GetStartedModal
          isVisible={getStarted}
          onClose={() => setGetStarted(false)}
        />
      </form>
    </>
  );
};

SignInForm.getInitialProps = async (context: Context) => {
  return {
    csrfToken: await getCsrfToken(context),
  };
};

export default SignInForm;
