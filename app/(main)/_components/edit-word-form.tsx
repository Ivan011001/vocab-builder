"use client";

import { useState, SetStateAction, Dispatch } from "react";
import { useForm } from "react-hook-form";
import { useCurrentUser } from "@/hooks/use-current-user";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { editWordSchema } from "@/schemas";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { DialogClose } from "@/components/ui/dialog";

import { editWord } from "@/actions/edit-word";

import { toast } from "sonner";

interface IEditWordFormProps {
  id: string;
  word: string;
  translation: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const EditWordForm = ({
  id,
  word,
  translation,
  setOpen,
}: IEditWordFormProps) => {
  const [isPending, setIsPending] = useState(false);

  const user = useCurrentUser();

  const form = useForm<z.infer<typeof editWordSchema>>({
    resolver: zodResolver(editWordSchema),
    defaultValues: {
      ua: translation,
      en: word,
    },
  });

  const onSubmit = (values: z.infer<typeof editWordSchema>) => {
    setIsPending(true);
    editWord(values, id, user?.id!)
      .then((data) => {
        if (data.error) {
          toast.warning(data.error);
          form.reset();
        }
        if (data.success) {
          toast.success(data.success);
          form.reset();
          setOpen(false);
        }
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-[14px] md:space-y-[18px]">
          <FormField
            control={form.control}
            name="ua"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col gap-2 md:flex-row-reverse md:gap-8">
                  <FormLabel className="md:w-28 md:flex-shrink-0 text-neutral-50 text-sm font-medium md:text-base md:leading-normal flex items-center gap-x-2">
                    <svg className="h-7 w-7 md:h-8 md:w-8">
                      <use xlinkHref="/sprite.svg#icon-ukraine"></use>
                    </svg>
                    Ukrainian
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Працювати"
                      className="px-6 py-3 border border-gray-300 border-opacity-100 text-neutral-50 placeholder:text-neutral-50 hover:border-neutral-50 hover:border-opacity-100 focus:border-neutral-50 focus:border-opacity-100"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="en"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col gap-2 md:flex md:flex-row-reverse md:gap-8">
                  <FormLabel className="md:w-28 md:flex-shrink-0 text-neutral-50 text-sm font-medium md:text-base md:leading-normal flex items-center gap-x-2">
                    <svg className="h-7 w-7 md:h-8 md:w-8">
                      <use xlinkHref="/sprite.svg#icon-united-kingdom"></use>
                    </svg>
                    English
                  </FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Work"
                      className="px-6 py-3 border border-gray-300 border-opacity-100 text-neutral-50 placeholder:text-neutral-50 hover:border-neutral-50 hover:border-opacity-100 focus:border-neutral-50 focus:border-opacity-100"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-x-2">
          <Button
            disabled={isPending}
            type="submit"
            variant="outline"
            className="shadow-none hover:text-neutral-50 hover:bg-accent transition-all duration-300"
          >
            Save
          </Button>

          <DialogClose asChild>
            <Button
              type="button"
              className="shadow-none border border-white border-opacity-40 hover:text-neutral-900 hover:bg-neutral-50 transition-all duration-300"
            >
              Cancel
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
};

export default EditWordForm;
