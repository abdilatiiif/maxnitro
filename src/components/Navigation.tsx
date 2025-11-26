import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
import { DarkMode } from "./DarkMode";
import { MobileNavLinks } from "./MobileNavLinks";

export function Navigation() {
  return (
    <div className="flex flex-row items-center justify-between h-20">
      <Image
        src={logoSvg}
        alt="logo"
        className=" overflow-auto w-[150px] h-[150px] lg:w-[150px] lg:h-[150px]"
        width={600}
        height={600}
      />

      {/** desktop  */}

      <NavigationDesktop />

      <div className=" hidden md:flex items-center gap-2 pr-4">
        <DarkMode />
        <Button>Login</Button>
      </div>

      <Sheet>
        <SheetTrigger asChild className="md:hidden fixed right-5 top-5 z-50 ">
          <Menu size={40} />
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
            <MobileNavLinks />
          </nav>
          <SheetFooter>
            <DarkMode />
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>

            <p className="text-sm text-center text-muted-foreground mt-4">
              © 2025 MaxNitro. All rights reserved. Latif Hassan
            </p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
