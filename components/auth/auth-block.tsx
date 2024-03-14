import AuthBullets from "./auth-bullets";
import AuthImage from "./auth-image";

interface IAuthBlockProps {
  children: React.ReactNode;
}

const AuthBlock = ({ children }: IAuthBlockProps) => {
  return (
    <div className="w-full flex flex-col-reverse gap-y-[28px] md:flex-col lg:flex-row items-center justify-between">
      {children}

      <div className="hidden md:flex justify-center lg:hidden mt-[100px]">
        <AuthBullets />
      </div>

      <div className="flex flex-col gap-y-4 items-center md:hidden lg:block">
        <AuthImage />

        <AuthBullets />
      </div>
    </div>
  );
};

export default AuthBlock;
