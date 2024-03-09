import AuthHeader from "./_components/auth-header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col pt-4 md:py-6 md:px-8 lg:px-[100px]">
      <AuthHeader />

      <div className="flex-grow flex items-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
