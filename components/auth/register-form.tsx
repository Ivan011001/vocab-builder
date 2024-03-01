import CardWrapper from "./card-wraper";

const RegisterForm = () => {
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
      showSocials
    >
      Register Form
    </CardWrapper>
  );
};

export default RegisterForm;
