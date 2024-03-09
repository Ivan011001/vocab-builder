import CardWrapper from "./card-wraper";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHref="/login"
      backButtonLabel="Login"
      headerTitle="Please try again!"
    >
      <div className="w-full flex justify-center">
        <ExclamationTriangleIcon className="text-destructive h-10 w-10" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
