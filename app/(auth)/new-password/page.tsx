import AuthImage from "../_components/auth-image";
import AuthBullets from "../_components/auth-bullets";
import NewPasswordForm from "@/components/auth/new-password-form";

const ResetPage = () => {
  return (
    <div className="h-full w-full flex flex-col-reverse justify-between md:justify-center lg:justify-between md:flex-col lg:flex-row items-center ">
      <NewPasswordForm />

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

export default ResetPage;
