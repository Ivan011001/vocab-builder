"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/auth/user-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    {
      title: "Dictionary",
      href: "/",
    },
    {
      title: "Recommend",
      href: "/recommend",
    },
    {
      title: "Training",
      href: "/training",
    },
    {
      title: "Settings",
      href: "/settings",
    },
  ];

  return (
    <div className="flex items-center ">
      <div className="hidden lg:flex items-center gap-x-2">
        {links.map((link) => {
          return (
            <Button key={link.title} asChild className="">
              <Link href={link.href}>{link.title}</Link>
            </Button>
          );
        })}
      </div>

      <div className="flex items-center md:mr-7">
        <UserButton />
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-8 h-[22px] md:w-10 md:h-7 text-transparent bg-transparent outline-none">
              <svg className="w-8 h-[22px] md:w-10 md:h-7 stroke-primary">
                <use xlinkHref="/sprite.svg#icon-burger"></use>
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[185px]">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
