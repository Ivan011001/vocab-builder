import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface IWordsTableProps {
  words: {
    word: string;
    translation: string;
    categorie: string;
    progress?: string;
  }[];
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
          {words.map(({ word, translation, categorie, progress }, index) => (
            <TableRow
              key={word}
              className="[&_td]:border-r [&_td]:border-zinc-300"
              //md:[&_td]:last:border-b md:[&_td]:last:border-zinc-300
            >
              <TableCell
                className={cn(
                  "",
                  index === words.length - 1 && "rounded-bl-[15px]"
                )}
              >
                {word}
              </TableCell>
              <TableCell>{translation}</TableCell>
              <TableCell>{categorie}</TableCell>
              {isDictionary && <TableCell>{progress}</TableCell>}
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
