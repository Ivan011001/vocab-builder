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
        <Button variant={pathname === "/" ? "default" : "outline"} asChild>
          <Link href="/">Dictionary</Link>
        </Button>

        <Button
          variant={pathname === "/recommend" ? "default" : "outline"}
          asChild
        >
          <Link href="/recommend">Recommend</Link>
        </Button>

        <Button
          variant={pathname === "/training" ? "default" : "outline"}
          asChild
        >
          <Link href="/training">Training</Link>
        </Button>

        <Button
          variant={pathname === "/settings" ? "default" : "outline"}
          asChild
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>

      <UserButton />
    </div>
  );
};

export default Navbar;
