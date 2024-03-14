import ActionsButton from "./actions-button";
import AddDictionary from "../recommend/_components/add-dictionary";
import ProgressCircle from "./progress-circle";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { IDictionary, IRecommend } from "@/types";

import { capitalizeWord } from "@/helpers";

import { cn } from "@/lib/utils";
import TrashActions from "../trash/_components/trash-actions";

interface IWordsTableProps {
  words: (IRecommend | IDictionary)[] | null;
  isDictionary?: boolean;
  isTrash?: boolean;
}

const WordsTable = ({ words, isDictionary, isTrash }: IWordsTableProps) => {
  return (
    <div className="md:bg-white md:p-[18px] md:rounded-[15px]">
      <Table>
        <TableHeader className="bg-gray-400 bg-opacity-10">
          <TableRow className="[&>*]:border-r [&>*]:border-zinc-300">
            <TableHead className="rounded-tl-[15px] ">
              <div className="flex items-center justify-between">
                Word
                <svg className="hidden md:block w-8 h-8">
                  <use xlinkHref="/sprite.svg#icon-united-kingdom"></use>
                </svg>
              </div>
            </TableHead>

            <TableHead>
              <div className="flex items-center justify-between">
                Translation
                <svg className="hidden md:block w-8 h-8">
                  <use xlinkHref="/sprite.svg#icon-ukraine"></use>
                </svg>
              </div>
            </TableHead>

            <TableHead>Category</TableHead>

            {isDictionary && <TableHead>Progress</TableHead>}

            <TableHead className="rounded-tr-[15px] border-none"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-neutral-50 rounded-[15px]">
          {words?.map((wordItem, index) => (
            <TableRow
              key={wordItem.id}
              className="[&_td]:border-r [&_td]:border-zinc-300"
            >
              <TableCell
                className={cn(
                  index === words.length - 1 && "rounded-bl-[15px]"
                )}
              >
                {capitalizeWord(wordItem.word)}
              </TableCell>
              <TableCell>{capitalizeWord(wordItem.translation)}</TableCell>
              <TableCell>{capitalizeWord(wordItem.category)}</TableCell>

              {isDictionary && "progress" in wordItem && (
                <TableCell>
                  <ProgressCircle
                    progress={(wordItem as IDictionary).progress || 20}
                  />
                </TableCell>
              )}

              <TableCell
                className={cn(
                  "text-center last:border-r-0",
                  index === words.length - 1 && "rounded-br-[15px]"
                )}
              >
                {isTrash && <TrashActions id={wordItem.id} />}

                {isDictionary && <ActionsButton id={wordItem.id} />}

                {!isDictionary && !isTrash && (
                  <AddDictionary
                    word={wordItem.word}
                    translation={wordItem.translation}
                    category={wordItem.category}
                    verbType={(wordItem as IDictionary).verbType!}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WordsTable;
