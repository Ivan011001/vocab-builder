import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { IDictionary, IRecommend } from "@/types";

interface IWordsTableProps {
  words: (IRecommend | IDictionary)[] | null; // Adjusted the type to union of IRecommend and IDictionary
  isDictionary?: boolean;
}

const WordsTable = ({ words, isDictionary }: IWordsTableProps) => {
  return (
    <div className="md:bg-white md:p-[18px] md:rounded-[15px]">
      <Table>
        <TableHeader className="bg-gray-400 bg-opacity-10">
          <TableRow>
            <TableHead className="border-r border-zinc-300 rounded-tl-[15px]">
              <div className="flex items-center justify-between">
                Word
                <svg className="hidden md:block w-8 h-8">
                  <use xlinkHref="/sprite.svg#icon-united-kingdom"></use>
                </svg>
              </div>
            </TableHead>

            <TableHead className="border-r border-zinc-300">
              <div className="flex items-center justify-between">
                Translation
                <svg className="hidden md:block w-8 h-8">
                  <use xlinkHref="/sprite.svg#icon-ukraine"></use>
                </svg>
              </div>
            </TableHead>

            <TableHead className="border-r border-zinc-300">Category</TableHead>

            {isDictionary && (
              <TableHead className="border-r border-zinc-300">
                Progress
              </TableHead>
            )}

            <TableHead className="rounded-tr-[15px]">{""}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-neutral-50 rounded-[15px]">
          {words?.map((wordItem, index) => (
            <TableRow
              key={wordItem.id} // Adjusted the key to use a property common to both IRecommend and IDictionary
              className="[&_td]:border-r [&_td]:border-zinc-300"
              //md:[&_td]:last:border-b md:[&_td]:last:border-zinc-300
            >
              <TableCell
                className={cn(
                  "",
                  index === words.length - 1 && "rounded-bl-[15px]"
                )}
              >
                {wordItem.word}
              </TableCell>
              <TableCell>{wordItem.translation}</TableCell>
              <TableCell>{wordItem.category}</TableCell>

              {isDictionary && "progress" in wordItem && (
                <TableCell>{(wordItem as IDictionary).progress}</TableCell>
              )}

              <TableCell
                className={cn(
                  "text-center  last:border-r-0",
                  index === words.length - 1 && "rounded-br-[15px]"
                )}
              >
                ...
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WordsTable;
