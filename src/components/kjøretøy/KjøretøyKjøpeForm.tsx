"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface KjøretøyKjøpeFormProps {
  vehicle: {
    price: number;
    pris?: number;
  };
  user: {
    email: string;
    user_metadata?: {
      full_name?: string;
    };
  } | null;
}

function KjøretøyKjøpeForm({ vehicle, user }: KjøretøyKjøpeFormProps) {
  console.log("KjøretøyKjøpeForm user prop:", user);
  // Legg til state for å håndtere checkboxes
  const [tilleggstjenester, setTilleggstjenester] = useState({
    utvidetGaranti: false,
    forsikring: false,
    levering: false,
  });
  // Beregn totalpris
  const basePris = vehicle?.pris || 0;
  const garantiPris = tilleggstjenester.utvidetGaranti ? 15000 : 0;
  const forsikringPris = tilleggstjenester.forsikring ? 8000 : 0;
  const leveringPris = tilleggstjenester.levering ? 5000 : 0;
  const registreringsavgift = 2500;
  const totalPris =
    basePris +
    garantiPris +
    forsikringPris +
    leveringPris +
    registreringsavgift;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = {
      fullName: user?.user_metadata?.full_name,
      email: user?.email,
      phone: formData.get("phone"),
      produktet: vehicle,
      adresse: formData.get("adresse"),
      postkode: formData.get("postkode"),
      finansiering: formData.get("finansiering"),
      tilleggstjenester: tilleggstjenester,
      pris: totalPris,
    };

    console.log("Form submitted with data:", data);
  };

  const handleCheckboxChange = (service: string, checked: boolean) => {
    setTilleggstjenester((prev) => ({
      ...prev,
      [service]: checked,
    }));
  };

  // FIKSET: Bruk konsistent formatering
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("nb-NO").format(price);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      {/* Buyer Information */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Kjøperinformasjon</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Fult Navn</Label>
                <Input
                  id="fullName"
                  name="fullName" // Legg til name
                  placeholder="Ola Nordmann"
                  defaultValue={user?.user_metadata?.full_name || ""}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">E-post</Label>
              <Input
                id="email"
                name="email" // Legg til name
                type="email"
                placeholder="ola@example.com"
                defaultValue={user?.email || ""}
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefon</Label>
              <Input id="phone" name="phone" placeholder="+47 123 45 678" />
            </div>

            <div>
              <Label htmlFor="adresse">Adresse</Label>
              <Input
                id="adresse"
                name="adresse"
                placeholder="Gateadresse 123"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="postkode">Postnummer</Label>
                <Input id="postkode" name="postkode" placeholder="0123" />
              </div>
              <div>
                <Label htmlFor="poststed">Poststed</Label>
                <Input id="poststed" name="poststed" placeholder="Oslo" />
              </div>
            </div>

            {/* Financing Options */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">
                Finansieringsalternativer
              </h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="finansiering"
                    value="cash"
                    className="text-red-600"
                  />
                  <span>Kontant betaling</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="finansiering"
                    value="loan"
                    className="text-red-600"
                  />
                  <span>Billån</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="finansiering"
                    value="lease"
                    className="text-red-600"
                  />
                  <span>Leasing</span>
                </label>
              </div>
            </div>

            {/* Additional Services */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Tilleggstjenester</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    name="utvidetGaranti"
                    type="checkbox"
                    className="text-red-600"
                    checked={tilleggstjenester.utvidetGaranti}
                    onChange={(e) =>
                      handleCheckboxChange("utvidetGaranti", e.target.checked)
                    }
                  />
                  <span>Utvidet garanti (+15,000 kr)</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    name="forsikring"
                    type="checkbox"
                    className="text-red-600"
                    checked={tilleggstjenester.forsikring}
                    onChange={(e) =>
                      handleCheckboxChange("forsikring", e.target.checked)
                    }
                  />
                  <span>Forsikring (+8,000 kr/år)</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    name="levering"
                    type="checkbox"
                    className="text-red-600"
                    checked={tilleggstjenester.levering}
                    onChange={(e) =>
                      handleCheckboxChange("levering", e.target.checked)
                    }
                  />
                  <span>Levering til hjemmeadresse (+5,000 kr)</span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Summary - FIKSET! */}
      <div>
        <Card className="sticky top-4">
          <CardHeader>
            <CardTitle>Ordresammendrag</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Kjøretøy</span>
              <span>{formatPrice(basePris)} kr</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Utvidet garanti</span>
              <span>+{formatPrice(garantiPris)} kr</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Forsikring (1 år)</span>
              <span>+{formatPrice(forsikringPris)} kr</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Levering</span>
              <span>+{formatPrice(leveringPris)} kr</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Registreringsavgift</span>
              <span>+{formatPrice(registreringsavgift)} kr</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{formatPrice(totalPris)} kr</span>
            </div>

            <div className="space-y-3 pt-4">
              <Button
                type="submit" // Legg til type="submit"
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Fullfør kjøp
              </Button>
              <Button variant="outline" className="w-full">
                Be om finansiering
              </Button>
              <Button variant="ghost" className="w-full text-sm">
                Lagre og fortsett senere
              </Button>
            </div>

            <div className="text-xs text-gray-500 pt-4">
              <p>✓ 14 dagers returrett</p>
              <p>✓ 1 års garanti inkludert</p>
              <p>✓ Gratis EU-kontroll ved levering</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}

export default KjøretøyKjøpeForm;
