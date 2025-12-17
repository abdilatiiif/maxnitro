"use client";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { getUser } from "@/actions/AUTH/getUser";
import { User } from "@supabase/supabase-js";
import { logoutUser } from "@/actions/AUTH/logout";

// Adjust import path as needed

function Footer() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const currentUser = await getUser();
      setUser(currentUser);

      console.log("Bruker eksisterer FOOTER:", currentUser);
    }
    fetchUser();
  }, []); // Empty dependency - only run once on mount

  return (
    <footer className="relative max-w-7xl mx-auto p-10 border-t-4 border-amber-200 mt-10">
      {user && (
        <Button
          onClick={() => {
            logoutUser();
            window.location.href = "/";
          }}
          className="fixed z-50 bottom-5 right-5"
        >
          Logg ut
        </Button>
      )}
      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl text-red-500 font-bold">MaxNitro</h3>
            </div>
            <p className="">
              MaxNitro er din ultimate destinasjon for luksuriøse kjøretøy til
              leie. Vi tilbyr et eksklusivt utvalg av sportsbiler, yachter og
              private fly for å gjøre din reise uforglemmelig.
            </p>
          </div>

          {/* Lenker til div sider */}

          <div>
            <h3 className="text-xl text-center font-bold mb-3">Ressurser</h3>
            <ul className="space-y-2  text-center ">
              <li>
                <a
                  href="https://www.kommer snart.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  kommer snart
                </a>
              </li>
              <li>
                <a
                  href="https://www. kommer snart.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  kommer snart
                </a>
              </li>
              <li>
                <a
                  href="https://www.kommer snart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  kommer snart
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-3 text-right">Kontakt</h3>
            <p className="">contact@maxnitro.net</p>
            <p className="">+47 999 999 999</p>
            <p className="">Oasis, Vegapunk</p>
          </div>
        </div>

        {/* Copyright  */}
        <div className="border-t border-yellow-400 pt-6 text-center ">
          <p className="flex items-center justify-center gap-2">
            Remember seatbelts save lives! 🛡️
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} MaxNitro. Latif Hassan. Alle
            rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
