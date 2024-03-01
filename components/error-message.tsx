import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface IErrorMessageProps {
  text?: string;
}

const ErrorMessage = ({ text }: IErrorMessageProps) => {
  if (!text) return null;

  return (
    <div className="rounded-md w-full flex items-center gap-2 bg-destructive/15 p-2 text-destructive text-sm">
      <ExclamationTriangleIcon className="w-4 h-5" />
      <p>{text}</p>
    </div>
  );
};

export default ErrorMessage;
