import AuthBullets from "../_components/auth-bullets";
import AuthImage from "../_components/auth-image";
import RegisterForm from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <div className="w-full flex flex-col-reverse gap-y-[43px] md:flex-col lg:flex-row items-center justify-between">
      <RegisterForm />

      <div className="hidden md:flex justify-center lg:hidden mt-[100px]">
        <AuthBullets />
      </div>

      <div className="md:hidden lg:block">
        <AuthImage />

        <div className="hidden lg:block">
          <AuthBullets />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
