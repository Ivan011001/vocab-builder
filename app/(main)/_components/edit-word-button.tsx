"use client";

import { useState } from "react";

import EditWordForm from "./edit-word-form";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface IEditWordButtonProps {
  id: string;
}

const EditWordButton = ({ id }: IEditWordButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex gap-x-2 items-center relative select-none rounded-sm text-neutral-900 text-sm md:text-base font-medium outline-none transition-colors focus:text-accent-foreground data-[disabled]:pointer-events-none">
          <svg className="h-4 w-4 fill-none stroke-gray-400">
            <use xlinkHref="/sprite.svg#icon-edit"></use>
          </svg>
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[343px] md:max-w-[628px]">
        <EditWordForm id={id} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default EditWordButton;
