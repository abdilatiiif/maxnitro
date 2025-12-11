"use client";

import { getVehicles } from "@/actions/GET/getVehicles";
import { MobileFilter } from "@/components/filter/MobileFilter";
import SideBarBox from "@/components/filter/SideBarBox";
import KjøreTøyListe from "@/components/kjøretøy/KjøreTøyListe";

import { SidebarProvider } from "@/components/ui/sidebar";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface Vehicle {
  id: number;
  type: string;
  merke: string;
  modell: string;
  kategori: string;
  model: string;
  år: number;
  pris: number;
  bilde: string;
  lagt_til: string;
  farge: string;
}

function KjøretøyOversikt() {
  // URL Filter Sync
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filters, setFilters] = useState({
    kategori: searchParams.get("kategori") || "alle",
    merke: searchParams.get("merke") || "alle",
    type: searchParams.get("type") || "alle",
  });

  useEffect(() => {
    async function fetchVehicles() {
      const data = await getVehicles();
      setVehicles(data || []);
    }
    fetchVehicles();
  }, []);

  // Automatisk URL-sync når filters endres
  useEffect(() => {
    const params = new URLSearchParams();

    console.log(params);
    if (filters.kategori !== "alle") params.set("kategori", filters.kategori);
    if (filters.merke !== "alle") params.set("merke", filters.merke);
    if (filters.type !== "alle") params.set("type", filters.type);

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  }, [filters, pathname, router]);

  const filteredVehicles = vehicles.filter((vehicle) => {
    // 1. Filter på vehicle type (motorcycle, car, jetski, etc.)
    if (
      filters.kategori &&
      filters.kategori !== "alle" &&
      filters.kategori !== ""
    ) {
      if (vehicle.kategori?.toLowerCase() !== filters.kategori.toLowerCase()) {
        return false;
      }
    }

    // 2. Filter på merke (Porsche, BMW, etc.)
    if (filters.merke && filters.merke !== "alle" && filters.merke !== "") {
      if (vehicle.merke?.toLowerCase() !== filters.merke.toLowerCase()) {
        return false;
      }
    }

    // 3. Filter på modell (911, Cayenne, etc.)
    if (filters.type && filters.type !== "alle" && filters.type !== "") {
      if (vehicle.type?.toLowerCase() !== filters.type.toLowerCase()) {
        return false;
      }
    }

    console.log("  ✅ Passed all filters");
    return true;
  });

  return (
    <section className="relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-2xl font-bold text-center mb-6">
          KJØRETØY OVERSIKT
        </h1>
        <KjøreTøyListe vehicles={filteredVehicles} />
      </div>

      <SidebarProvider>
        <div className="w-full hidden md:flex">
          <SideBarBox onFilterChange={setFilters} />
          <main className="flex-1"></main>
        </div>
      </SidebarProvider>

      <MobileFilter onFilterChange={setFilters} />
    </section>
  );
}
export default KjøretøyOversikt;
