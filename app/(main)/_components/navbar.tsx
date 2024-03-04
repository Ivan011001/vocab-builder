"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/auth/user-button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-4 flex items-center justify-between bg-secondary rounded-md w-[600px]">
      <div className="flex items-center gap-x-2">
        <Button variant={pathname === "/server" ? "default" : "outline"}>
          <Link href="/server">Server</Link>
        </Button>

        <Button variant={pathname === "/client" ? "default" : "outline"}>
          <Link href="/client">Client</Link>
        </Button>

        <Button variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href="/admin">Admin</Link>
        </Button>

        <Button variant={pathname === "/settings" ? "default" : "outline"}>
          <Link href="/settings">Settings</Link>
        </Button>
      </div>

      <UserButton />
    </div>
  );
};

export default Navbar;
