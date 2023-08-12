"use client";
import React from "react";
import Link from "next/link";
import { UserAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 z-[100] w-full absolute">
      <Link href={"/"}>
        <h1 className="text-netred text-4xl font-bold">NETFLIX</h1>
      </Link>

      {user?.email ? (
        <div className="flex justify-between items-center">
          <Link href={"/account"}>
            <button className="text-white pr-4">Account</button>
          </Link>

          <Link href={"/login"}>
            <button onClick={handleLogout} className="bg-netred px-4 py-1 rounded cursor-pointer text-white">
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <Link href={"/signup"}>
            <button className="text-white pr-4">Sign Up</button>
          </Link>

          <Link href={"/login"}>
            <button className="bg-netred px-4 py-1 rounded cursor-pointer text-white">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
