"use client";

import { useTransition } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";

import { addWord } from "@/actions/add-word";

interface IAddDictionaryProps {
  word: string;
  translation: string;
  category: string;
}

const AddDictionary = ({
  word,
  translation,
  category,
}: IAddDictionaryProps) => {
  const [isPending, startTransition] = useTransition();

  const user = useCurrentUser();

  const onHadnelAdd = () => {
    startTransition(() => {
      addWord({ en: word, ua: translation, category, verbType: "" }, user?.id);
    });
  };

  return (
    <button
      className="flex flex-wrap gap-x-2 gap-y-[2px] text-neutral-900 disabled:text-gray-400"
      onClick={onHadnelAdd}
      disabled={isPending}
    >
      <p className="hidden md:block  text-sm font-medium text-start">
        Add to dictionary
      </p>
      <svg className="w-5 h-5 fill-none stroke-gray-400">
        <use xlinkHref="/sprite.svg#icon-arrow-right"></use>
      </svg>
    </button>
  );
};

export default AddDictionary;
