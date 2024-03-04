"use client";

import { logout } from "@/actions/logout";

interface ILogoutButtonProps {
  children: React.ReactNode;
}

const LogoutButton = ({ children }: ILogoutButtonProps) => {
  const onClick = async () => {
    await logout();
  };

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default LogoutButton;
