"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "./ui/input";
import { Car, Flame, Plane, Sailboat } from "lucide-react";

export function NavigationDesktop() {
  return (
    <NavigationMenu className="border-2 pl-2 rounded-2xl hidden max-w-1/2 md:flex z-50">
      <NavigationMenuList className="">
        <NavigationMenuItem className=" md:block">
          <NavigationMenuTrigger>Kjøp</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Kjøp Oversikt</div>
                    <div className="text-muted-foreground">
                      Utforsk vårt omfattende utvalg av kjøretøy tilgjengelig
                      for kjøp på land, vann og luft.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Bestill Prøvetime</div>
                    <div className="text-muted-foreground">
                      Besøk oss for en prøvetur og opplev ytelsen og komforten
                      til ditt drømmekjøretøy.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Bygg Din Egen</div>
                    <div className="text-muted-foreground">
                      Kom igang med å tilpasse ditt drømmekjøretøy med vårt
                      brukervennlige verktøy.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Finansiering & Forsikring</div>
                    <div className="text-muted-foreground">
                      Vi hjelper deg med å finne de beste finansierings- og
                      forsikringsalternativene for ditt nye kjøretøy.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" md:block">
          <NavigationMenuTrigger>Samling</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Alle Kjøretøy</div>
                    <div className="text-muted-foreground">
                      Alle kjøretøy samlet på ett sted – utforsk vårt brede
                      utvalg av land-, vann- og luftkjøretøy.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium flex items-center gap-2">
                      Bil <Car />{" "}
                    </div>
                    <div className="text-muted-foreground">
                      Utforsk vårt omfattende utvalg av biler, fra luksuriøse
                      sportsbiler til pålitelige familiebiler.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium flex items-center gap-2">
                      Båt <Sailboat />{" "}
                    </div>
                    <div className="text-muted-foreground">
                      Utforsk vårt omfattende utvalg av båter, fra små Jetski
                      til luksuriøse yachter.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium flex items-center gap-2">
                      Fly <Plane />{" "}
                    </div>
                    <div className="text-muted-foreground">
                      Utforsk vårt omfattende utvalg av fly, fra små privatfly
                      til store kommersielle fly.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium flex items-center gap-2">
                      Liten men Hurtig <Flame />{" "}
                    </div>
                    <div className="text-muted-foreground">
                      Oppdag vårt utvalg av lette og raske kjøretøy
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" md:block">
          <NavigationMenuTrigger>Leie</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Leie Oversikt</div>
                    <div className="text-muted-foreground">
                      Leie et kjøretøy for en dag, en uke eller en måned – vi
                      har fleksible leiealternativer som passer dine behov.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Tilgjengelige for Leie</div>
                    <div className="text-muted-foreground">
                      Inne nåværende kjøretøy tilgjengelig for leie – finn ditt
                      perfekte kjøretøy for ditt neste eventyr.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Langtidsleie/Abonnement</div>
                    <div className="text-muted-foreground">
                      Langtidsleie og abonnementstjenester for fleksible og
                      kostnadseffektive løsninger.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Kundeanmeldelser</div>
                    <div className="text-muted-foreground">
                      Les tilbakemeldinger fra våre fornøyde leiekunder.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Book Leietid</div>
                    <div className="text-muted-foreground">
                      Reserver ditt leiekjøretøy enkelt og raskt med vår online
                      bookingtjeneste.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" md:block">
          <NavigationMenuTrigger>Mer</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Om Oss</div>
                    <div className="text-muted-foreground">
                      Lær mer om MaxNitro, vårt team og vår lidenskap for
                      kjøretøy.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Kontakt & Support</div>
                    <div className="text-muted-foreground">
                      Kontakt oss for spørsmål, support og hjelp med våre
                      tjenester.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Nyheter & blogg</div>
                    <div className="text-muted-foreground">
                      Les våre siste blogginnlegg.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Logg inn/registrer</div>
                    <div className="text-muted-foreground">
                      Få tilgang til din konto for å administrere bestillinger,
                      leieavtaler og tilpasninger.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Input
        placeholder="Søk etter kjøretøy..."
        className="ml-4 bl-2 p-2 bl-2 rounded-lg bg-green-50 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </NavigationMenu>
  );
}
