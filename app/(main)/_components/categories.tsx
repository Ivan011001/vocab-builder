"use client";

import { Fragment, useState, useEffect } from "react";

import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

import { getCategories } from "@/data/categories";

import { ICategorie } from "@/types";

const Categories = () => {
  const [categories, setCategories] = useState<ICategorie[] | null>([]);
  const [selected, setSelected] = useState({ name: "Categories" });

  useEffect(() => {
    const fetch = async () => {
      const data = await getCategories();

      setCategories(data);
    };

    fetch();
  }, []);

  return (
    <div className="md:w-40">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full flex items-center justify-between py-3 px-6 rounded-[15px] bg-transparent border border-neutral-900 border-opacity-10 text-neutral-900 text-base font-medium leading-normal focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
            <span className="block truncate">{selected.name}</span>

            <FaChevronDown
              className="h-5 w-5 text-neutral-800"
              aria-hidden="true"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full py-3 px-6 space-y-2 overflow-auto rounded-md bg-white text-base ring-1 ring-black/5 focus:outline-none">
              {categories?.map((categorie, categorieIdx) => (
                <Listbox.Option
                  key={categorieIdx}
                  className={({ active }) =>
                    `relative select-none ${active ? "" : ""}`
                  }
                  value={categorie}
                >
                  {() => (
                    <span className="block cursor-pointer truncate text-neutral-900 text-base font-medium leading-normal">
                      {categorie.name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Categories;
