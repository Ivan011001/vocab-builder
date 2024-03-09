import Link from "next/link";

interface ILogoProps {
  hideText?: boolean;
}

const Logo = ({ hideText }: ILogoProps) => {
  return (
    <Link href="/" className="inline-flex items-center gap-x-4">
      <svg className="w-9 h-9 md:w-10 md:h-10">
        <use xlinkHref="/sprite.svg#icon-logo"></use>
      </svg>

      {!hideText && (
        <p className="text-neutral-900 text-lg md:text-xl font-semibold leading-normal md:leading-loose">
          VocabBuilder
        </p>
      )}
    </Link>
  );
};

export default Logo;
