"use client";

import { useRouter } from "next/navigation";

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
    return <p>TODO: modal login button</p>;
  }

  return (
    <span className="cursor-pointer" onClick={onHandleClick}>
      {children}
    </span>
  );
};

export default LoginButton;
