"use client";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
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

import { NavigationDesktop } from "./NavigationDesktop";

import { DarkMode } from "../DarkMode";
import { MobileNavLinks } from "./MobileNavLinks";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { getUser } from "@/actions/AUTH/getUser";

type User = {
  // Add your User type properties here based on what getUser returns
  id: string;
  name?: string;
  email?: string;
  // Add other properties as needed
};

export function Navigation() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const currentUser = await getUser();
      setUser(currentUser);

      console.log("Bruker eksisterer NAV:", currentUser);
    }
    fetchUser();
  }, []); // Empty dependency - only run once on mount

  console.log(user);

  return (
    <div className="flex flex-row items-center justify-between h-20 ">
      {/** desktop  */}

      <NavigationDesktop />

      <div className="z-50 fixed ml-4 md:hidden">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
        </Link>
      </div>

      <div className="z-10 hidden md:flex items-center gap-2 pr-4">
        <DarkMode />

        {user ? (
          <Button>
            <Link href="/dashboard">
              <User />
            </Link>
          </Button>
        ) : (
          <Button>
            <Link href="/auth/login">Logg inn</Link>
          </Button>
        )}
      </div>

      <Sheet>
        <SheetTrigger asChild className="md:hidden fixed right-5 top-5 z-50 ">
          <Menu size={40} />
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <nav className="flex items-center justify-center flex-col p-2">
            {user ? (
              <Button className="w-full px-4">
                <Link href="/dashboard" className="flex">
                  <User /> Profil
                </Link>
              </Button>
            ) : (
              <Button>
                <Link href="/auth/login">Logg inn</Link>
              </Button>
            )}
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
