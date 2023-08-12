"use client";
import React, { useState } from "react";
import { UserAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const router = useRouter();

  const [learnMore, setLearnMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/1756a9bc-0731-4094-a4a0-fca5d0934d47/TR-en-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[700px] mx-auto  bg-black/70 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-semibold">Sign In</h1>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col py-5 w-full"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-4 my-2 rounded bg-inputbg"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-4 my-2 rounded bg-inputbg"
                  type="password"
                  placeholder="Password"
                />

                {error ? (
                  <p className="text-red-400 text-sm pt-1 pl-1">{error}</p>
                ) : null}

                <button className="bg-red-600 py-3 mt-6 rounded">
                  Sign In
                </button>

                <div className="flex justify-between mt-3 items-center text-sm text-textColor">
                  <p>
                    <input className="mr-2 items-center" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
              </form>

              <div className="w-full">
                <div className="flex items-center justify-start pt-6 gap-2">
                  <p>
                    <span className="text-textColor">New to Netflix?</span>
                  </p>
                  <Link href="/signup">
                    <p>
                      <span className="text-m hover:underline">
                        Sign up now.
                      </span>
                    </p>
                  </Link>
                </div>
                <p className="pt-2">
                  <span className="text-textColor text-xs">
                    This page is protected by Google reCAPTCHA to ensure
                    you&apos;re not a bot.
                  </span>
                  {!learnMore ? (
                    <span
                      onClick={(e) => setLearnMore(true)}
                      className="ml-1 text-blue-600 text-xs cursor-pointer hover:underline"
                    >
                      Learn more.
                    </span>
                  ) : (
                    <p className="pt-3 w-full">
                      <span className="text-textColor text-xs w-full">
                        The information collected by Google reCAPTCHA is subject
                        to the Google{" "}
                        <a
                          className="text-blue-600 hover:underline"
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                          className="text-blue-600 hover:underline"
                          href="https://policies.google.com/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Terms of Service
                        </a>{" "}
                        , and is used for providing, maintaining, and improving
                        the reCAPTCHA service and for general security purposes
                        (it is not used for personalized advertising by Google).
                      </span>
                    </p>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
