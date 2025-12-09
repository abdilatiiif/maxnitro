import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterSearch() {
  return (
    <aside className="w-full rounded-2xl shadow-lg p-6 h-fit sticky top-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Finn ditt kjøretøy</h2>
        <p className="text-sm text-gray-500 mt-1">Bruk filtrene for å søke</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Type */}
        <div className="space-y-2">
          <label className="text-sm font-semibold  uppercase tracking-wide">
            Type
          </label>
          <Select defaultValue="Alle">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Velg type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="land">LAND</SelectItem>
              <SelectItem value="luft">LUFT</SelectItem>
              <SelectItem value="sjo">SJØ</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Merke */}
        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-wide">
            Merke
          </label>
          <Select defaultValue="Alle">
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
          <Select defaultValue="Alle">
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

        {/* Lokasjon */}
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
        </div>

        {/* Kjøp eller Leie */}
        <div className="space-y-2">
          <label className="text-sm font-semibolduppercase tracking-wide">
            Kjøp eller Leie
          </label>
          <Select defaultValue="begge">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Velg alternativ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="begge">Begge</SelectItem>
              <SelectItem value="kjop">Kjøp</SelectItem>
              <SelectItem value="leie">Leie</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <Button className="w-full mt-4">
          <Search className="h-4 w-4 mr-2 inline" />
          Søk kjøretøy
        </Button>

        {/* Reset Button */}
        <Button className="w-full py-2 text-sm font-medium">
          Nullstill filtre
        </Button>
      </div>
    </aside>
  );
}
