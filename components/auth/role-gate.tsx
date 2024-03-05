"use client";

import ErrorMessage from "../error-message";

import { useCurrentRole } from "@/hooks/use-current-role";

import { UserRole } from "@prisma/client";

interface IRoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

const RoleGate = ({ children, allowedRole }: IRoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <ErrorMessage text="You are forbidden from using this functionality" />
    );
  }

  return children;
};

export default RoleGate;
