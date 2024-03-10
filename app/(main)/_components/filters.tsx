import Categories from "./categories";
import Search from "./search";

const Filters = () => {
  return (
    <div className="w-full lg:w-auto flex flex-col lg:items-center md:flex-row gap-2">
      <Search />
      <Categories />
    </div>
  );
};

export default Filters;
