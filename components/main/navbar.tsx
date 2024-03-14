"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/auth/user-button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

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
          <SheetContent className="w-[185px] bg-accent overflow-hidden">
            <SheetHeader className="flex flex-row items-baseline">
              <div className="flex items-center">
                <p className="text-button text-base font-medium mr-2">Iryna</p>
                <div className="flex items-center justify-center rounded-[50%] bg-white w-9 h-9">
                  <FaUser className="w-4 h-4" color="#85AA9F" />
                </div>
              </div>
            </SheetHeader>
            <div className="absolute top-[35%] left-4 translate-y-[-35%]">
              {LINKS.map((link) => {
                return (
                  <Button
                    key={link.title}
                    asChild
                    className="py-3 px-5 w-[110px] text-sm rounded-[15px] font-medium"
                    variant={
                      link.href === pathname ? "navbar" : "navbarInactive"
                    }
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </Button>
                );
              })}
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
