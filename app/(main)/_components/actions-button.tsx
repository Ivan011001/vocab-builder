"use client";

import { useTransition } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { deleteWord } from "@/actions/main/delete-word";

import { toast } from "sonner";
import EditWordButton from "./edit-word-button";

interface IActionsButtonProps {
  id: string;
}

const ActionsButton = ({ id }: IActionsButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const user = useCurrentUser();

  const onHandleDelete = () => {
    startTransition(() => {
      deleteWord(id, user?.id!)
        .then((data) => {
          if (data.error) {
            toast.warning(data.error);
          }

          if (data.success) {
            toast.success(data.success);
          }
        })
        .catch(() => {
          toast.warning("Something went wrong");
        });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:outline-none">
        ...
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="px-6 py-3 flex flex-col gap-2"
        align="center"
      >
        <EditWordButton id={id} />

        <DropdownMenuItem>
          <button
            onClick={onHandleDelete}
            className="flex gap-x-2 items-center"
            disabled={isPending}
          >
            <svg className="h-4 w-4">
              <use xlinkHref="/sprite.svg#icon-delete"></use>
            </svg>
            Delete
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionsButton;
