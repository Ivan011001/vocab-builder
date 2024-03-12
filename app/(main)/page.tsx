import Dashboard from "./_components/dashboard";
import WordsTable from "./_components/words-table";

import { currentUser } from "@/lib/auth";

import { getUserDictionary } from "@/lib/dictionary";

const DictionaryPage = async ({
  searchParams,
}: {
  searchParams?: {
    categorie?: string;
    search?: string;
  };
}) => {
  const user = await currentUser();

  const categorie = searchParams?.categorie || "";
  const search = searchParams?.search || "";

  const words = await getUserDictionary(user?.id);

  const isVerb = categorie === "verb";

  return (
    <div className="flex flex-col gap-y-8 md:gap-y-7">
      <Dashboard addWord isVerb={isVerb} />
      <WordsTable isDictionary words={words} />
    </div>
  );
};

export default DictionaryPage;
