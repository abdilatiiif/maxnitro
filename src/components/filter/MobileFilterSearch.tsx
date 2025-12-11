"use client";

import { Button } from "@/components/ui/button";

import { getAllCategories } from "@/actions/GET/getAllCategories";
import { getAllBrands } from "@/actions/GET/getAllBrands";
import { getAllTypes } from "@/actions/GET/getAllTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

interface FilterState {
  kategori: string;
  merke: string;
  type: string;
}

export default function MobileFilterSearch({
  onFilterChange,
}: {
  onFilterChange?: (filters: FilterState) => void;
}) {
  const [formData, setFormData] = useState({
    kategori: "alle",
    merke: "alle",
    type: "alle",
  });

  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);

  function handleFilterChange(newFilters: FilterState) {
    console.log("🔍 FilterSearch - New filters:", newFilters);

    setFormData(newFilters);
    onFilterChange?.(newFilters);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  useEffect(() => {
    async function getFilterOptions() {
      const allCategories = await getAllCategories();
      const allBrands = await getAllBrands();
      const allTypes = await getAllTypes();

      setCategories(allCategories);
      setBrands(allBrands);
      setTypes(allTypes);
    }

    getFilterOptions();
  }, []);

  console.log("Available categories:", categories);

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
              {categories.map((kat) => (
                <SelectItem key={kat} value={kat}>
                  {kat}
                </SelectItem>
              ))}
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
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
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
              <SelectValue placeholder="Velg type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alle">Alle</SelectItem>
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
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
