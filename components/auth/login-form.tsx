import CardWrapper from "./card-wraper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocials
    >
      Login Form
    </CardWrapper>
  );
};

export default LoginForm;
