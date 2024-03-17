"use client";

import { Dispatch, SetStateAction, useState, useTransition } from "react";
import { useCurrentUser } from "@/hooks";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import WellDoneModal from "./well-done-modal";

import { train } from "@/actions/main/train";

import { IAnswer, ITask } from "@/types";

import { capitalizeWord } from "@/helpers";

import { cn } from "@/lib/utils";

interface ITrainingRoomProps {
  tasks: ITask[];
  setCurrentStreak: Dispatch<SetStateAction<number>>;
}

const TrainingRoom = ({ tasks, setCurrentStreak }: ITrainingRoomProps) => {
  const [isPending, startTransition] = useTransition();

  const user = useCurrentUser();

  const [isOpen, setIsOpen] = useState(false);

  const [correctAnswers, setCorrectAnswers] = useState<IAnswer[]>([]);
  const [mistakes, setMistakes] = useState<IAnswer[]>([]);

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [translatedWord, setTranslatedWord] = useState<string>("");

  const handleTranslationSubmit: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();

    startTransition(() => {
      setTranslatedWord(translatedWord);
      const id = tasks[currentWordIndex].id;

      train(id, user?.id!, translatedWord).then((data) => {
        if (data.isCorrect === true) {
          setCorrectAnswers((prev) => {
            return [...prev, data];
          });
        }

        if (data.isCorrect === false) {
          setMistakes((prev) => {
            return [...prev, data];
          });
        }
      });

      if (currentWordIndex + 1 < tasks.length) {
        setCurrentStreak((prev) => prev + 1);
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        setCurrentStreak(1);
        setIsOpen(true);
      }

      setTranslatedWord("");
    });
  };

  const currentWord = tasks[currentWordIndex]?.word || "";

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="bg-white md:p-[18px] rounded-[15px]">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="relative w-full h-[200px] md:h-[300px] bg-neutral-50 rounded-t-[15px] lg:rounded-t-none lg:rounded-l-[15px] lg:rounded-tl-[15px] p-[22px] border-b border-zinc-300 lg:border-b-0 lg:border-r">
            <form
              className="h-full flex flex-col justify-between"
              onSubmit={handleTranslationSubmit}
            >
              <input
                type="text"
                className={cn(
                  "text-neutral-900 text-base md:text-xl font-medium placeholder:text-base md:placeholder:text-xl placeholder:text-neutral-900 focus-visible:outline-none focus:outline-none bg-transparent",
                  isPending && "text-gray-400"
                )}
                placeholder="Введіть переклад"
                value={translatedWord}
                onChange={(e) => setTranslatedWord(e.target.value)}
                disabled={isPending}
              />

              <button
                className={cn(
                  "group flex items-start gap-x-2 text-neutral-900 text-opacity-50 text-base font-medium hover:text-opacity-100 transition-all duration-300",
                  isPending && "cursor-not-allowed"
                )}
                type="submit"
                disabled={isPending}
              >
                Next
                <svg className="fill-none stroke-gray-400 w-5 h-5 group-hover:stroke-neutral-900 duration-300 transition-all">
                  <use xlinkHref="/sprite.svg#icon-arrow-right"></use>
                </svg>
              </button>
            </form>

            <div className="absolute bottom-[18px] right-[22px] md:bottom-full md:top-[36px] md:right-[22px] flex items-center gap-x-2">
              <svg className="h-7 w-7 md:h-8 md:w-8">
                <use xlinkHref="/sprite.svg#icon-ukraine"></use>
              </svg>

              <p className="text-neutral-900 text-sm md:text-base font-medium">
                Ukrainian
              </p>
            </div>
          </div>
          <div className="relative w-full h-[200px] md:h-[300px] flex flex-col justify-between bg-neutral-50 rounded-b-[15px] p-[22px] lg:rounded-b-none lg:rounded-r-[15px] lg:rounded-tr-[15px]">
            <p className="text-neutral-900 text-base md:text-xl font-medium">
              {capitalizeWord(currentWord)}
            </p>

            <div className="absolute bottom-[18px] right-[22px] md:bottom-full md:top-[36px] md:right-[22px] flex items-center gap-x-2">
              <svg className="h-7 w-7 md:h-8 md:w-8">
                <use xlinkHref="/sprite.svg#icon-united-kingdom"></use>
              </svg>

              <p className="text-neutral-900 text-sm md:text-base font-medium">
                English
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-start md:gap-[10px]">
        <WellDoneModal
          correctAnswers={correctAnswers}
          mistakes={mistakes}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Button
          variant="outline"
          className="md:w-[200px] text-gray-400 hover:text-neutral-50 transition-all duration-300"
          asChild
        >
          <Link href="/">Cancel</Link>
        </Button>
      </div>
    </div>
  );
};

export default TrainingRoom;
