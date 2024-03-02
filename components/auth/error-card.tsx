import CardWrapper from "./card-wraper";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHref="/login"
      backButtonLabel="Back to login"
      headerLabel="Ooops... Something went wrong"
    >
      <div className="w-full flex justify-center">
        <ExclamationTriangleIcon className="text-destructive h-8 w-8" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
