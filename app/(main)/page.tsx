import Dashboard from "./_components/dashboard";
import WordsTable from "./_components/words-table";

import { currentUser } from "@/lib/auth";

import { getUserDictionary } from "@/lib/dictionary";

const DictionaryPage = async ({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    search?: string;
    page?: string;
  };
}) => {
  const user = await currentUser();

  const category = searchParams?.category || "";
  const search = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;

  const response = await getUserDictionary(user?.id, search, category, page);

  const isVerb = category === "verb";

  return (
    <div className="flex flex-col gap-y-8 md:gap-y-7">
      <Dashboard addWord isVerb={isVerb} />
      <WordsTable isDictionary words={response?.data!} />
    </div>
  );
};

export default DictionaryPage;
