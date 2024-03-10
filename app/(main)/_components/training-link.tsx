import Link from "next/link";

const TrainingLink = () => {
  return (
    <Link
      href="/training"
      className="flex items-start gap-x-2 text-neutral-900 text-base font-medium leading-normal"
    >
      Train oneself
      <svg className="h-5 w-5 fill-none stroke-gray-400">
        <use xlinkHref="/sprite.svg#icon-arrow-right"></use>
      </svg>
    </Link>
  );
};

export default TrainingLink;
