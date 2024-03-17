"use client";

import { useCurrentUser } from "@/hooks";

import Link from "next/link";

import LogoutButton from "./logout-button";
import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";

import { capitalizeWord, shortenWord } from "@/helpers";
import { cn } from "@/lib/utils";

interface IUserButtonProps {
  isMobile?: boolean;
}

const UserButton = ({ isMobile }: IUserButtonProps) => {
  const user = useCurrentUser();

  const capitalizedName = capitalizeWord(user?.name);
  const name = isMobile
    ? shortenWord(capitalizedName, 7)
    : shortenWord(capitalizedName, 10);

  return (
    <DropdownMenu>
      <p
        className={cn(
          "text-primary text-base md:text-xl md:mr-4 font-medium mr-2",
          isMobile && "text-neutral-50"
        )}
      >
        {name}
      </p>
      <DropdownMenuTrigger className="focus-visible:outline-none">
        <Avatar className="w-9 h-9 md:w-12 md:h-12 mr-2 md:mr-0">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback
            className={cn("bg-accent", isMobile && "bg-neutral-50")}
          >
            <FaUser
              className={cn("w-4 h-4 text-white", isMobile && "text-gray-400")}
            />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-40 py-3 px-6 flex flex-col gap-y-3"
        align="end"
      >
        <Link href="/trash">
          <DropdownMenuItem>
            <svg className="h-4 w-4 mr-2 fill-none stroke-red-500">
              <use xlinkHref="/sprite.svg#icon-delete"></use>
            </svg>
            Trash
          </DropdownMenuItem>
        </Link>

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
