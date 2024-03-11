import AddWordForm from "./add-word-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddWordButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group flex items-start gap-x-2 text-neutral-900 text-base font-medium leading-normal">
          Add word
          <svg className="h-5 w-5 fill-none stroke-gray-400 group-hover:stroke-neutral-900 transition-all">
            <use xlinkHref="/sprite.svg#icon-plus"></use>
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[343px] md:max-w-[628px]">
        <DialogHeader className="mb-4 md:mb-8">
          <DialogTitle className="mb-4 md:mb-5">Add word</DialogTitle>
          <DialogDescription>
            Adding a new word to the dictionary is an important step in
            enriching the language base and expanding the vocabulary.
          </DialogDescription>
        </DialogHeader>

        <AddWordForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddWordButton;
