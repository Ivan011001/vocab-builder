const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {children}
    </div>
  );
};

export default AuthLayout;
