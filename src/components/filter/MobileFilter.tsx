"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MobileFilterSearch from "./MobileFilterSearch";

export function MobileFilter({
  onFilterChange,
}: {
  onFilterChange: (filters: {
    kategori: string;
    merke: string;
    type: string;
  }) => void;
}) {
  return (
    <div className="absolute w-full flex items-center justify-center z-50 border-none md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="default"
            className="fixed bg-orange-500 w-full text-black bottom-0 rounded-none font-bold"
          >
            Åpen Filter{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Finn din kjøretøy</DrawerTitle>
              <DrawerDescription>
                Bruk filteret nedenfor for å finne det perfekte kjøretøyet som
                passer dine behov
              </DrawerDescription>
            </DrawerHeader>

            <MobileFilterSearch onFilterChange={onFilterChange} />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
