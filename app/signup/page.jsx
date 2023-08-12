"use client"
import Navbar from "@/components/Navbar";
import { UserAuth } from "@/src/context/AuthContext";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      await signUp(email, password);
      router.push("/")
    } catch (error) {
      console.log(error)
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
        <div className="bg-black/80 fixed top-0 left-0 w-full h-screen"></div>
          <div className="fixed w-full h-screen px-4 py-48 mx-auto text-white">
            <div className="flex flex-col justify-between gap-y-5 items-center p-16">
              <h1 className="text-5xl font-black">The best is right here</h1>
              <p className="flex justify-center items-center">
                <span className="text-2xl">
                  Blockbuster movies, hit series and exclusive originals. All in
                  one place.
                </span>
              </p>
              <p className="flex justify-center items-center">
                <span>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </span>
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 justify-center items-center">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900/50 w-full outline outline-1 text-m rounded px-4 py-2.5 mr-3"
                  type="email"
                  placeholder="Email address"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-900/50 w-full outline outline-1 text-m rounded px-4 py-2.5 mr-3"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-netred text-xl px-5 py-2 rounded hover:bg-netredHover">
                  Get Started
                </button>
              </form>
            </div>
          </div>
      </div>
    </>
  );
};

export default Signup;
