"use client";

import { useTransition } from "react";
import { useCurrentUser } from "@/hooks";

import { clearTrash } from "@/actions/main/clear-trash";

import { toast } from "sonner";

const ClearTrash = () => {
  const [isPending, startTransition] = useTransition();

  const user = useCurrentUser();

  const onHandleClear = () => {
    startTransition(() => {
      clearTrash(user?.id!)
        .then((data) => {
          if (data.error) {
            toast.warning(data.error);
          }

          if (data.success) {
            toast.success(data.success);
          }
        })
        .catch(() => {
          toast.error("Something went wrong!");
        });
    });
  };

  return (
    <div className="w-full flex items-center justify-end">
      <button onClick={onHandleClear} disabled={isPending}>
        <svg className="h-8 w-8 fill-none stroke-red-500">
          <use xlinkHref="/sprite.svg#icon-delete"></use>
        </svg>
      </button>
    </div>
  );
};

export default ClearTrash;
