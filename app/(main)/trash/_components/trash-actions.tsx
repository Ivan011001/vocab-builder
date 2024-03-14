"use client";

import { useTransition } from "react";
import { useCurrentUser } from "@/hooks";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { restoreWord } from "@/actions/main/restore-word";
import { deleteWord } from "@/actions/main/delete-word";

import { toast } from "sonner";

interface ITrashActionsProps {
  id: string;
}

const TrashActions = ({ id }: ITrashActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const user = useCurrentUser();

  const onHandleRestore = () => {
    startTransition(() => {
      restoreWord(id, user?.id!)
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
        <DropdownMenuItem>
          <button
            onClick={onHandleRestore}
            className="flex gap-x-2 items-center"
            disabled={isPending}
          >
            <svg className="h-4 w-4 fill-none stroke-gray-400">
              <use xlinkHref="/sprite.svg#icon-arrow-right"></use>
            </svg>
            Restore
          </button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <button
            onClick={onHandleDelete}
            className="flex gap-x-2 items-center"
            disabled={isPending}
          >
            <svg className="h-4 w-4 fill-none stroke-gray-400">
              <use xlinkHref="/sprite.svg#icon-delete"></use>
            </svg>
            Delete
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TrashActions;
