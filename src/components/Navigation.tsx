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
} from "@/components/ui/sheet";

export function Navigation() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden fixed right-4 top-4 z-50 ">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
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
  );
}
