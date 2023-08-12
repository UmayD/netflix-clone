"use client";
import React from "react";
import { UserAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login");
  }
  else {
    return children;
  }
};

export default ProtectedRoute;
