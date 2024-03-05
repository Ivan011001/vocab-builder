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
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <FaUser className="w-4 h-4" color="white" />
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
