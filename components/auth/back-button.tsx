import Link from "next/link";

import { Button } from "../ui/button";

interface IBackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: IBackButtonProps) => {
  return (
    <div className="w-full flex justify-center">
      <Link
        href={href}
        className="text-neutral-900 text-opacity-50 text-base font-bold underline leading-normal"
      >
        {label}
      </Link>
    </div>
  );
};

export default BackButton;
