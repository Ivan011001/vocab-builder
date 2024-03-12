"use client";

const AddDictionary = () => {
  return (
    <button className="flex flex-col gap-[2px]">
      <p className="hidden md:block text-neutral-900 text-sm font-medium text-start">
        Add to dictionary
      </p>
      <svg className="w-5 h-5 fill-none stroke-gray-400">
        <use xlinkHref="/sprite.svg#icon-arrow-right"></use>
      </svg>
    </button>
  );
};

export default AddDictionary;
