import AuthBullets from "../_components/auth-bullets";
import AuthImage from "../_components/auth-image";
import RegisterForm from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <div className="h-full w-full flex flex-col-reverse justify-between md:justify-center lg:justify-between  md:flex-col lg:flex-row items-center">
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
