const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
