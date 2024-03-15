import WordsTable from "../_components/words-table";
import WordsPagination from "../_components/words-pagination";
import WordsEmpty from "@/components/main/word-empty";
import ClearTrash from "./_components/clear-trash";

import { currentUser } from "@/lib/auth";

import { getUserTrash } from "@/lib/trash";

const TrashPage = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) => {
  const user = await currentUser();

  const page = Number(searchParams?.page) || 1;

  const response = await getUserTrash(user?.id!, page);

  return (
    <div className="h-full flex flex-col gap-y-8 md:gap-y-7">
      {response?.data.length !== 0 && <ClearTrash />}

      <div className="flex-grow-1 h-full">
        {response?.data && response.data.length !== 0 ? (
          <WordsTable isTrash words={response?.data} />
        ) : (
          <WordsEmpty
            label="Fortunately, your trash is empty"
            description="If you delete any of your words from dictionary, they goes in this trash. You could delete them permanently or restore back to the dictionary!"
            buttonHref="/recommend"
            buttonLabel="Add word"
            backButtonHref="/"
            backButtonLabel="Home"
          />
        )}
      </div>

      {response?.meta && response.data.length !== 0 && (
        <WordsPagination meta={response?.meta!} />
      )}
    </div>
  );
};

export default TrashPage;
