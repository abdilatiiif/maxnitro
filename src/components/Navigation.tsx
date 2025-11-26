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
import { Input } from "./ui/input";

export function Navigation() {
  return (
    <div className="flex flex-row items-center justify-between h-20">
      <Image
        src={logoSvg}
        alt="logo"
        className="w-auto object-contain rounded-3xl"
        width={150}
        height={64}
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
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <nav className="flex items-center justify-center flex-col p-2">
            <MobileNavLinks />
            <Input
              placeholder="Søk etter kjøretøy..."
              className="rounded-lg  p-4"
            />
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
