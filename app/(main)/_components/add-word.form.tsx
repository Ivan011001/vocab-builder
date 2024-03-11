"use client";

import { useTransition, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { addWordSchema } from "@/schemas";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogClose } from "@/components/ui/dialog";

import { addWord } from "@/actions/add-word";
import { getCategories } from "@/data/categories";

import { ICategorie } from "@/types";

import { capitalizeWord } from "@/helpers";

const AddWordForm = () => {
  const [categories, setCategories] = useState<ICategorie[] | null>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetch = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetch();
  });

  const form = useForm<z.infer<typeof addWordSchema>>({
    resolver: zodResolver(addWordSchema),
    defaultValues: {
      categorie: "",
      verbType: "regular",
      ua: "",
      en: "",
    },
  });

  const onSubmit = (values: z.infer<typeof addWordSchema>) => {
    startTransition(() => {
      addWord(values).then((data) => {
        if (data?.success) {
          form.reset();
        }

        return;
      });
    });
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-[14px] md:space-y-[18px]">
          <FormField
            control={form.control}
            name="categorie"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="px-6 py-3 md:w-[208px] text-neutral-50 rounded-[15px]">
                      <SelectValue placeholder="Categorie" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="md:w-[208px]">
                    <SelectGroup className="flex flex-col gap-2 px-6 py-3">
                      {categories?.map((categorie) => (
                        <SelectItem
                          className="text-neutral-900 text-opacity-50 text-base font-medium leading-normal"
                          value={categorie.name}
                          key={categorie.id}
                        >
                          {capitalizeWord(categorie.name)}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.getValues("categorie") === "verb" && (
            <FormField
              control={form.control}
              name="verbType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      className="flex items-center gap-x-4"
                      defaultValue="regular"
                    >
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem
                          value="regular"
                          id="regular-form"
                          className="border-neutral-50"
                        />
                        <Label
                          htmlFor="regular-form"
                          className="text-neutral-50 text-xs md:text-sm font-normal"
                        >
                          Regular
                        </Label>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem
                          value="irregular"
                          id="irregular-form"
                          className="border-neutral-50"
                        />
                        <Label
                          htmlFor="irregular-form"
                          className="text-neutral-50 text-xs md:text-sm font-normal"
                        >
                          Irregular
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

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
                      disabled={isPending}
                      {...field}
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
                      disabled={isPending}
                      {...field}
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
            type="submit"
            variant="outline"
            className="shadow-none hover:text-neutral-50 hover:bg-accent transition-all duration-300"
          >
            Add
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

export default AddWordForm;