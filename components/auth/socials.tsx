"use client";

import { Button } from "../ui/button";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="w-full flex gap-2 items-center">
      <Button className="w-full" size="lg" variant="outline" onClick={() => {}}>
        <FcGoogle className="w-5 h-5" />
      </Button>

      <Button className="w-full" size="lg" variant="outline" onClick={() => {}}>
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Socials;
