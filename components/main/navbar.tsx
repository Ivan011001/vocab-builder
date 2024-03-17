"use client";

import { usePathname } from "next/navigation";
import { useCurrentUser } from "@/hooks";

import Link from "next/link";
import Image from "next/image";

import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { FaUser } from "react-icons/fa";

import { capitalizeWord, shortenWord } from "@/helpers";

const LINKS = [
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

const Navbar = () => {
  const pathname = usePathname();

  const user = useCurrentUser();

  const name = shortenWord(capitalizeWord(user?.name), 7);

  return (
    <div className="flex items-center">
      <div className="hidden lg:flex lg:absolute lg:top-[50%] lg:right-[50%] lg:translate-x-[50%] lg:translate-y-[-50%] items-center gap-x-2">
        {LINKS.map((link) => {
          return (
            <Button
              key={link.title}
              asChild
              className="py-3 px-5 text-sm rounded-[15px] font-medium"
              variant={link.href === pathname ? "default" : "inactive"}
            >
              <Link href={link.href}>{link.title}</Link>
            </Button>
          );
        })}
      </div>

      <div className="hidden lg:flex items-center">
        <UserButton />
      </div>
      <div className="lg:hidden md:ml-7 flex">
        <Sheet>
          <SheetTrigger asChild className="bg-transparent">
            <Button
              variant="inactive"
              className="w-8 h-[22px] md:w-10 md:h-7 text-transparent bg-transparent outline-none"
            >
              <svg className="w-8 h-[22px] md:w-10 md:h-7 stroke-primary">
                <use xlinkHref="/sprite.svg#icon-burger"></use>
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[185px] md:w-[250px] bg-accent overflow-hidden">
            <SheetHeader className="flex flex-row items-baseline">
              <UserButton isMobile />
            </SheetHeader>
            <div className="absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-35%] flex items-center justify-center">
              <ul>
                {LINKS.map((link) => {
                  return (
                    <SheetClose asChild key={link.title}>
                      <Button
                        asChild
                        className="py-3 px-5 w-[110px] text-sm rounded-[15px] font-medium"
                        variant={
                          link.href === pathname ? "navbar" : "navbarInactive"
                        }
                      >
                        <Link href={link.href}>{link.title}</Link>
                      </Button>
                    </SheetClose>
                  );
                })}
              </ul>
            </div>
            <SheetFooter className="w-[363px] overflow-hidden">
              <Image
                src="/reading.png"
                alt="Boy and girl reading"
                width={363}
                height={318}
              />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
