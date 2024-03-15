import Dashboard from "../_components/dashboard";
import WordsPagination from "../_components/words-pagination";
import WordsTable from "../_components/words-table";
import WordsEmpty from "@/components/main/word-empty";

import { VerbType } from "@prisma/client";

import { getRecommend } from "@/lib/recommend";

const RecommendPage = async ({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    search?: string;
    page?: string;
    verbType?: VerbType;
  };
}) => {
  const category = searchParams?.category || "";
  const search = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;
  const verbType = searchParams?.verbType || undefined;

  const response = await getRecommend(search, category, page, verbType);

  const isVerb = category === "verb";

  return (
    <div className="h-full flex flex-col gap-y-8 md:gap-y-7">
      <Dashboard isVerb={isVerb} />
      <div className="flex-grow-1 h-full">
        {response?.data && response.data.length !== 0 ? (
          <WordsTable words={response?.data} />
        ) : (
          <WordsEmpty
            label="Unfortunately, there are no words matching your query"
            description="You can inreach the list of recommended words by adding your own to the dictionary. Words that were not in this list will be displayed to all users"
            buttonHref="/recommend"
            buttonLabel="Browse all"
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

export default RecommendPage;
