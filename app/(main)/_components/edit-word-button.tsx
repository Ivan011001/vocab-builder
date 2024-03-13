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
        <button className="flex gap-x-2 items-center">
          <svg className="h-4 w-4">
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
