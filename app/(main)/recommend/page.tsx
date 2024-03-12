import Dashboard from "../_components/dashboard";
import WordsTable from "../_components/words-table";

import { getRecommend } from "@/lib/recommend";

const RecommendPage = async ({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    search?: string;
    page?: string;
  };
}) => {
  const category = searchParams?.category || "";
  const search = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;

  const response = await getRecommend(search, category, page);

  return (
    <div className="flex flex-col gap-y-8 md:gap-y-7">
      <Dashboard />
      <WordsTable words={response?.data!} />
    </div>
  );
};

export default RecommendPage;
