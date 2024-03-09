interface IHeaderProps {
  title: string;
  description: string | undefined;
}

const Header = ({ title, description }: IHeaderProps) => {
  return (
    <div className="w-full">
      <h2 className="text-neutral-900 text-3xl md:text-4xl font-semibold md:leading-10 mb-4 md:mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-neutral-900 text-opacity-80 text-base md:text-xl font-normal leading-normal">
          {description}
        </p>
      )}
    </div>
  );
};

export default Header;
