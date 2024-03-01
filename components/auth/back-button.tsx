import Link from "next/link";

import { Button } from "../ui/button";

interface IBackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: IBackButtonProps) => {
  return (
    <div className="w-full flex justify-center">
      <Button asChild size="sm" variant="link" className="font-normal">
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
};

export default BackButton;
