interface IHeaderProps {
  label: string;
}

const Header = ({ label }: IHeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-3">
      <h2 className="text-3xl font-semibold">🔐 Auth</h2>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
