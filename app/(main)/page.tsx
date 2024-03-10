import Dashboard from "./_components/dashboard";

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
    <div>
      <Dashboard addWord isVerb={isVerb} />
    </div>
  );
};

export default DictionaryPage;
