"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { getAllBrands } from "@/actions/GET/getAllBrands.ts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect } from "react";

interface FilterState {
  kategori: string;
  merke: string;
  type: string;
}

export default function FilterSearch({
  onFilterChange,
}: {
  onFilterChange?: (filters: FilterState) => void;
}) {
  const [formData, setFormData] = React.useState({
    kategori: "alle",
    merke: "alle",
    type: "alle",
  });

  function handleFilterChange(newFilters: FilterState) {
    console.log("🔍 FilterSearch - New filters:", newFilters);

    setFormData(newFilters);
    onFilterChange?.(newFilters);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  useEffect(() => {
    async function getBrands() {
      const brands = await getAllBrands();
      console.log("Brands fetched in FilterSearch:", brands);
    }
    getBrands();
  }, []);

  return (
    <form
      onSubmit={handleSearch}
      className="w-full rounded-2xl shadow-lg p-6 h-fit sticky top-6"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Finn ditt kjøretøy</h2>
        <p className="text-sm text-gray-500 mt-1">Bruk filtrene for å søke</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Type */}
        <div className="space-y-2">
          <label className="text-sm font-semibold  uppercase tracking-wide">
            Kategori
          </label>
          <Select
            value={formData.kategori}
            onValueChange={(value) =>
              handleFilterChange({ ...formData, kategori: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Velg kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alle">Alle</SelectItem>
              <SelectItem value="motorcycle">Motorcycle</SelectItem>
              <SelectItem value="jetski">Jetski</SelectItem>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="jet">Jet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Merke */}
        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-wide">
            Merke
          </label>
          <Select
            value={formData.merke}
            onValueChange={(value) =>
              handleFilterChange({ ...formData, merke: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Velg merke" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alle">Alle</SelectItem>
              <SelectItem value="porsche">Porsche</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Modell */}
        <div className="space-y-2">
          <label className="text-sm font-semibolduppercase tracking-wide">
            Modell
          </label>
          <Select
            value={formData.type}
            onValueChange={(value) =>
              handleFilterChange({ ...formData, type: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Velg modell" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alle">Alle</SelectItem>
              <SelectItem value="911">911</SelectItem>
              <SelectItem value="cayenne">Cayenne</SelectItem>
              <SelectItem value="panamera">Panamera</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Lokasjon 
        <div className="space-y-2">
          <label className="text-sm font-semibolduppercase tracking-wide">
            Lokasjon
          </label>
          <Select defaultValue="en">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Velg lokasjon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">Lokasjon 1</SelectItem>
              <SelectItem value="to">Lokasjon 2</SelectItem>
              <SelectItem value="tre">Lokasjon 3</SelectItem>
            </SelectContent>
          </Select>
        </div>*/}

        {/* Reset Button */}
        <Button
          type="button"
          className="w-full py-2 text-sm font-medium"
          onClick={() =>
            handleFilterChange({
              kategori: "alle",
              merke: "alle",
              type: "alle",
            })
          }
        >
          Nullstill filtre
        </Button>
      </div>
    </form>
  );
}
