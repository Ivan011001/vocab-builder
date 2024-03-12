"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ActionsButton = () => {
  const onHandleDelete = () => {};

  const onHandleEdit = () => {};

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
          <button onClick={onHandleEdit} className="flex gap-x-2 items-center">
            <svg className="h-4 w-4">
              <use xlinkHref="/sprite.svg#icon-edit"></use>
            </svg>
            Edit
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            onClick={onHandleDelete}
            className="flex gap-x-2 items-center"
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
