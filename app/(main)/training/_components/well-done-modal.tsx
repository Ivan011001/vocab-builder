import { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { IAnswer } from "@/types";

import { capitalizeWord } from "@/helpers";

interface IWellDoneModalProps {
  correctAnswers: IAnswer[];
  mistakes: IAnswer[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const WellDoneModal = ({
  correctAnswers,
  mistakes,
  isOpen,
  setIsOpen,
}: IWellDoneModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button className="md:w-[200px] transition-all duration-300">
          Save
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[343px] md:max-w-[628px]">
        <h3 className="text-center text-neutral-50 text-2xl font-semibold leading-7 mb-8">
          Well done
        </h3>

        <div className="flex gap-8">
          <div>
            <p className="text-neutral-50 text-opacity-50 text-sm font-normal mb-2">
              Correct answers:
            </p>

            <ul className="flex flex-col items-start gap-1">
              {correctAnswers.map((answer) => (
                <p
                  className="text-neutral-50 text-base font-medium"
                  key={answer.word}
                >
                  {capitalizeWord(answer.word)}
                </p>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-neutral-50 text-opacity-50 text-sm font-normal mb-2">
              Mistakes:
            </p>

            <ul className="flex flex-col items-start gap-1">
              {mistakes.map((answer) => (
                <p
                  className="text-neutral-50 text-base font-medium"
                  key={answer.word}
                >
                  {capitalizeWord(answer.word)}
                </p>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WellDoneModal;
