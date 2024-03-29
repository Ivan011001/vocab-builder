import Dashboard from "./_components/dashboard";
import WordsPagination from "./_components/words-pagination";
import WordsTable from "./_components/words-table";
import WordsEmpty from "@/components/main/word-empty";

import { currentUser } from "@/lib/auth";

import { getUserDictionary } from "@/lib/dictionary";

import { VerbType } from "@prisma/client";

const DictionaryPage = async ({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    search?: string;
    page?: string;
    verbType?: VerbType;
  };
}) => {
  const user = await currentUser();

  const category = searchParams?.category || "";
  const search = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;
  const verbType = searchParams?.verbType || undefined;

  const response = await getUserDictionary(
    user?.id,
    search,
    category,
    page,
    verbType
  );

  const isVerb = category === "verb";

  return (
    <div className="h-full flex flex-col gap-y-8 md:gap-y-7">
      <Dashboard addWord isVerb={isVerb} />
      <div className="flex-grow-1 h-full">
        {response?.data && response.data.length !== 0 ? (
          <WordsTable isDictionary words={response?.data} />
        ) : (
          <WordsEmpty
            label="Unfortunately, this list is currently being empty"
            description="You can add new words to your personal dictionary and strt learning them. Inreach your vocabulary by adding new phrases to dictionary"
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

export default DictionaryPage;
