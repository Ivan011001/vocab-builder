import Categories from "@/components/main/categories";
import Search from "@/components/main/search";
import VerbType from "@/components/main/verb-type";

interface IFiltersProps {
  isVerb?: boolean;
}

const Filters = ({ isVerb }: IFiltersProps) => {
  return (
    <div className="w-full lg:w-auto flex flex-col lg:items-center md:flex-row gap-2">
      <Search />
      <Categories />

      {isVerb && <VerbType />}
    </div>
  );
};

export default Filters;
