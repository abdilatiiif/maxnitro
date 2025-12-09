import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MobileFilterSearch() {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg overflow-y-auto">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Car Brand */}
          <div className="space-y-2">
            <label className="text-sm font-medium ">TYPE</label>
            <Select defaultValue="Alle">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="porsche">LAND</SelectItem>
                <SelectItem value="bmw">LUFT</SelectItem>
                <SelectItem value="mercedes">SJØ</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium ">MERKE</label>
            <Select defaultValue="Alle">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="porsche">Alle</SelectItem>
                <SelectItem value="porsche">Porsche</SelectItem>

                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="mercedes">Mercedes</SelectItem>
                <SelectItem value="audi">Audi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Car Model */}
          <div className="space-y-2">
            <label className="text-sm font-medium">MODELL</label>
            <Select defaultValue="Alle">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Alle">Alle</SelectItem>
                <SelectItem value="911">911</SelectItem>
                <SelectItem value="cayenne">Cayenne</SelectItem>
                <SelectItem value="panamera">Panamera</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Pickup Location 
          <div className="space-y-2">
            <label className="text-sm font-medium">LOKASJON</label>
            <Select defaultValue="en">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">lokasjon 1</SelectItem>
                <SelectItem value="to">lokasjon 2</SelectItem>
                <SelectItem value="tre">lokasjon 3</SelectItem>
              </SelectContent>
            </Select>
          </div>*/}

          {/* Pick Up & Return Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium ">KJØP ELLER LEIE</label>
            <Select defaultValue="BEGGE">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="KJØP">KJØP</SelectItem>
                <SelectItem value="LEIE">LEIE</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <Button className="h-12 ">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
