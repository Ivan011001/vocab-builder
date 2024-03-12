import Dashboard from "./_components/dashboard";
import WordsTable from "./_components/words-table";

const words = [
  {
    id: "1",
    word: "A little bit",
    translation: "Трохи, трішки",
    category: "Phrasal verb",
    progress: "50",
  },

  {
    id: "2",
    word: "Break in",
    translation: "Вмішуватися, встрявати",
    category: "Phrasal verb",
    progress: "70",
  },

  {
    id: "3",
    word: "Care",
    translation: "Турбота, догляд",
    category: "Verb",
    progress: "30",
  },
];

const DictionaryPage = ({
  searchParams,
}: {
  searchParams?: {
    categorie?: string;
    search?: string;
  };
}) => {
  const categorie = searchParams?.categorie || "";
  const search = searchParams?.search || "";

  const isVerb = categorie === "verb";

  return (
    <div className="flex flex-col gap-y-8 md:gap-y-7">
      <Dashboard addWord isVerb={isVerb} />
      <WordsTable isDictionary words={words} />
    </div>
  );
};

export default DictionaryPage;
