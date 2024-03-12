"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getCategories } from "@/data/categories";

import { ICategory } from "@/types";

import { capitalizeWord } from "@/helpers";

const Categories = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<ICategory[] | null>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getCategories();

      setCategories(data);
    };

    fetch();
  }, []);

  const onHandleChange = (data: string) => {
    const params = new URLSearchParams(searchParams);

    if (data !== "verb") {
      params.delete("verbType");
    } else {
      params.set("verbType", "regular");
    }

    if (data === "all") {
      params.delete("category");

      replace(`${pathname}?${params.toString()}`);

      return;
    }

    if (data) {
      params.set("category", data);
    } else {
      params.delete("category");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={onHandleChange}>
      <SelectTrigger className="md:w-40 rounded-[15px] px-6 py-3 border border-neutral-900 border-opacity-10 text-neutral-900 text-base font-medium leading-normal">
        <SelectValue placeholder="Categories" />
      </SelectTrigger>
      <SelectContent className="md:w-40">
        <SelectGroup className="flex flex-col gap-2 px-6 py-3">
          {categories?.map(({ name, id }) => (
            <SelectItem value={name} key={id}>
              {capitalizeWord(name)}
            </SelectItem>
          ))}

          <SelectItem value="all">All</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Categories;
