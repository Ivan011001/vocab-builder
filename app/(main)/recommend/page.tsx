import Dashboard from "../_components/dashboard";
import WordsPagination from "../_components/words-pagination";
import WordsTable from "../_components/words-table";

import { VerbType } from "@prisma/client";

import { getRecommend } from "@/lib/recommend";
import WordsEmpty from "../_components/words-empty";

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
      <Dashboard addWord isVerb={isVerb} />
      <div className="flex-grow-1 h-full">
        {response?.data && response.data.length !== 0 ? (
          <WordsTable words={response?.data} />
        ) : (
          <WordsEmpty />
        )}
      </div>

      {response?.meta && response.data.length !== 0 && (
        <WordsPagination meta={response?.meta!} />
      )}
    </div>
  );
};

export default RecommendPage;
