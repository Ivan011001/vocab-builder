import { getRecommend } from "@/data/recommend";
import Dashboard from "../_components/dashboard";
import WordsTable from "../_components/words-table";

const RecommendPage = async () => {
  const words = await getRecommend();

  return (
    <div className="flex flex-col gap-y-8 md:gap-y-7">
      <Dashboard />
      <WordsTable words={words} />
    </div>
  );
};

export default RecommendPage;
