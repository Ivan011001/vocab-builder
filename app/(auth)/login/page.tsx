import LoginForm from "@/components/auth/login-form";
import AuthImage from "../_components/auth-image";
import AuthBullets from "../_components/auth-bullets";

const LoginPage = () => {
  return (
    <div className="w-full flex flex-col-reverse gap-y-[28px] md:flex-col lg:flex-row items-center justify-between">
      <LoginForm />

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

export default LoginPage;
