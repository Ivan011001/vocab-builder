import Dashboard from "../_components/dashboard";
import WordsTable from "../_components/words-table";

const words = [
  {
    word: "A little bit",
    translation: "Трохи, трішки",
    categorie: "Phrasal verb",
  },

  {
    word: "Break in",
    translation: "Вмішуватися, встрявати",
    categorie: "Phrasal verb",
  },

  {
    word: "Care",
    translation: "Турбота, догляд",
    categorie: "Verb",
  },
];

const RecommendPage = () => {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-7">
      <Dashboard />
      <WordsTable words={words} />
    </div>
  );
};

export default RecommendPage;
