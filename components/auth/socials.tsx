"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "../ui/button";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Socials = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onHandleClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="w-full flex gap-2 items-center">
      <Button
        className="w-full"
        variant="outline"
        onClick={() => onHandleClick("google")}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>

      <Button
        className="w-full"
        variant="outline"
        onClick={() => onHandleClick("github")}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Socials;
