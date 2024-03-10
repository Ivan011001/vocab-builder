"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative">
      <input
        type="text"
        name="search"
        placeholder="Find the world"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
        className="w-full md:w-[274px] px-6 py-3 rounded-[15px] bg-transparent border border-neutral-900 border-opacity-10 text-neutral-900 text-base font-medium leading-normal placeholder:text-neutral-900 focus-visible:outline-none"
      />

      <svg className="absolute top-[50%] right-6 translate-y-[-50%] w-5 h-5 fill-none stroke-neutral-900">
        <use xlinkHref="/sprite.svg#icon-search"></use>
      </svg>
    </div>
  );
};

export default Search;
