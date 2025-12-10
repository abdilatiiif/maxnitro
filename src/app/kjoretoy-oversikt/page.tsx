"use client";

import { getVehicles } from "@/actions/GET/getVehicles";
import { MobileFilter } from "@/components/filter/MobileFilter";
import SideBarBox from "@/components/filter/SideBarBox";
import KjøreTøyListe from "@/components/kjøretøy/KjøreTøyListe";

import { SidebarProvider } from "@/components/ui/sidebar";

import { useEffect, useState } from "react";

interface Vehicle {
  id: number;
  type: string;
  merke: string;
  modell: string;
}

function KjøretøyOversikt() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filters, setFilters] = useState({
    kategori: "alle",
    merke: "alle",
    type: "alle",
  });

  useEffect(() => {
    async function fetchVehicles() {
      const data = await getVehicles();
      setVehicles(data || []);
    }
    fetchVehicles();
  }, []);

  console.log("🔍 Current filters:", filters);

  const filteredVehicles = vehicles.filter((vehicle) => {
    // 1. Filter på vehicle type (motorcycle, car, jetski, etc.)
    if (
      filters.kategori &&
      filters.kategori !== "alle" &&
      filters.kategori !== ""
    ) {
      if (vehicle.type?.toLowerCase() !== filters.kategori.toLowerCase()) {
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
      if (vehicle.modell?.toLowerCase() !== filters.type.toLowerCase()) {
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
