"use client";

import { useCurrentUser } from "@/hooks/use-current-user";

import LogoutButton from "./logout-button";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";

const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <p className="text-primary text-base md:text-xl md:mr-4 font-medium mr-2">
        Iryna
      </p>
      <DropdownMenuTrigger>
        <Avatar className="w-9 h-9 md:w-12 md:h-12 mr-2">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-accent">
            <FaUser className="w-4 h-4  " color="white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align="end">
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
