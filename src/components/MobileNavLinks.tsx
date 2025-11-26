"use client";

import "animate.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import * as React from "react";
import { ArrowDownRight } from "lucide-react";

import Link from "next/link";

const samlinglinks = [
  {
    value: "/kjoretoy-oversikt",
    label: "Kjøretøy Oversikt",
  },
  {
    value: "/bil",
    label: "Biler",
  },
  {
    value: "/baat",
    label: "Båter",
  },
  {
    value: "/fly",
    label: "Fly",
  },
  {
    value: "/motorsykkel",
    label: "Motorsykler",
  },
  {
    value: "/jetski",
    label: "Jetski",
  },
];
const kjøplinks = [
  {
    value: "/oversikt",
    label: "Kjøp Oversikt",
  },
  {
    value: "/bestill-provetime",
    label: "Bestill Prøvetime",
  },
  {
    value: "/bygg-din-egen",
    label: "Bygg Din Egen",
  },
  {
    value: "/finansiering-forsikring",
    label: "Finansiering & Forsikring",
  },
];

const leielinks = [
  {
    value: "/leie-oversikt",
    label: "Leie Oversikt",
  },
  {
    value: "/langtidsleie",
    label: "Langtidsleie",
  },
  {
    value: "/selskapsleie",
    label: "Selskapsleie",
  },
  {
    value: "/spesialtilbud",
    label: "Spesialtilbud",
  },
];

const merlinks = [
  {
    value: "/kundestotte",
    label: "Kundestøtte",
  },
  {
    value: "/om-oss",
    label: "Om Oss",
  },
  {
    value: "/blogg",
    label: "Blogg",
  },
  {
    value: "/kontakt-oss",
    label: "Kontakt Oss",
  },
];

export function MobileNavLinks() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full px-4 "
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Samling</AccordionTrigger>
        <AccordionContent className="flex items-center w-full flex-col gap-4 text-balance">
          {samlinglinks.map((link) => (
            <Link
              key={link.value}
              href={link.value}
              className="flex slide-in-right items-center w-full border-2 rounded-lg p-2 bg-teal-600 transition-all"
            >
              {link.label}

              <ArrowDownRight className="ml-2 h-4 w-4" />
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Kjøp</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {kjøplinks.map((link) => (
            <Link
              key={link.value}
              href={link.value}
              className="flex slide-in-right items-center w-full border-2 rounded-lg p-2 bg-teal-600 transition-all"
            >
              {link.label}

              <ArrowDownRight className="ml-2 h-4 w-4" />
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Leie</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {leielinks.map((link) => (
            <Link
              key={link.value}
              href={link.value}
              className="flex slide-in-right items-center w-full border-2 rounded-lg p-2 bg-teal-600 transition-all"
            >
              {link.label}

              <ArrowDownRight className="ml-2 h-4 w-4" />
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Mer</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {merlinks.map((link) => (
            <Link
              key={link.value}
              href={link.value}
              className="flex slide-in-right items-center w-full border-2 rounded-lg p-2 bg-teal-600 transition-all"
            >
              {link.label}

              <ArrowDownRight className="ml-2 h-4 w-4" />
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
