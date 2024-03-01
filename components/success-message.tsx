import { CheckCircledIcon } from "@radix-ui/react-icons";

interface ISuccessMessageProps {
  text?: string;
}

const SuccessMessage = ({ text }: ISuccessMessageProps) => {
  if (!text) return;

  return (
    <div className="rounded-md p-2 w-full flex items-center gap-2 bg-emerald-500/15 text-sm text-emerald-500">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{text}</p>
    </div>
  );
};

export default SuccessMessage;
