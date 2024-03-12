import Dashboard from "./_components/dashboard";
import WordsTable from "./_components/words-table";

const words = [
  {
    word: "A little bit",
    translation: "Трохи, трішки",
    categorie: "Phrasal verb",
    progress: "50",
  },

  {
    word: "Break in",
    translation: "Вмішуватися, встрявати",
    categorie: "Phrasal verb",
    progress: "70",
  },

  {
    word: "Care",
    translation: "Турбота, догляд",
    categorie: "Verb",
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
