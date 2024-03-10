const AddWordButton = () => {
  return (
    <button className="group flex items-start gap-x-2 text-neutral-900 text-base font-medium leading-normal">
      Train oneself
      <svg className="h-5 w-5 fill-none stroke-gray-400 group-hover:stroke-neutral-900 transition-all">
        <use xlinkHref="/sprite.svg#icon-plus"></use>
      </svg>
    </button>
  );
};

export default AddWordButton;
