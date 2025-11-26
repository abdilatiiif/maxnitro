import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import logoSvg from "@/assets/logo.png";
import { NavigationDesktop } from "./NavigationDesktop";

import { AvatarProfile } from "./AvatarProfile";

export function Navigation() {
  return (
    <div className="flex flex-row items-center justify-between">
      <Image
        src={logoSvg}
        alt="logo"
        className="rounded-full p-2 w-[100px] h-[100px]"
        width={600}
        height={600}
      />

      {/** desktop  */}
      <NavigationDesktop />
      <AvatarProfile />

      <Sheet>
        <SheetTrigger asChild className="md:hidden fixed right-4 top-10 z-50 ">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image
                src={logoSvg}
                alt="logo"
                className=" top-1 left-1 rounded-full"
                width={60}
                height={60}
              />
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <nav className="flex items-center justify-center flex-col">
            <Link
              href="/"
              className="hover:text-green-200 transition font-medium py-2 flex items-center gap-2"
            >
              Hjem
            </Link>
            <Link
              href="/tiltak"
              className="hover:text-green-200 transition font-medium py-2 flex items-center gap-2"
            >
              Tiltak
            </Link>
            <Link
              href="/verstinger"
              className="hover:text-red-500 transition font-medium py-2 flex items-center gap-2"
            >
              Verstinger
            </Link>
            <Link
              href="/klimacalc"
              className="hover:text-green-200 transition font-medium py-2 flex items-center gap-2"
            >
              Klimakalkulator
            </Link>
          </nav>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
