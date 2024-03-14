import Header from "@/components/main/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col gap-y-2 items-center">
      <Header />
      <div className="w-full flex-grow px-4 md:px-8 pt-8 md:pt-[80px] pb-[48px] lg:px-[100px]">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
