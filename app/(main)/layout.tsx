import Navbar from "./_components/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col gap-y-2 justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
