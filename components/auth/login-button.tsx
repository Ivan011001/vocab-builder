"use client";

import { useRouter } from "next/navigation";

import LoginForm from "./login-form";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";

interface ILoginButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
  mode?: "modal" | "redirect";
}

const LoginButton = ({
  children,
  asChild,
  mode = "redirect",
}: ILoginButtonProps) => {
  const { push } = useRouter();

  const onHandleClick = () => {
    push("/login");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span className="cursor-pointer" onClick={onHandleClick}>
      {children}
    </span>
  );
};

export default LoginButton;
