import AuthHeader from "./_components/auth-header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <AuthHeader />

      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default AuthLayout;
