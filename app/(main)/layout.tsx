import Header from "./_components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col gap-y-2 items-center">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
