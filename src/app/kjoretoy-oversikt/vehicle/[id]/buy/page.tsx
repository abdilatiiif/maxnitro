import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getVehicle } from "@/actions/GET/getVehicle";

async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  console.log("Vehicle data buy page:", params.id);

  const vehicle = await getVehicle(id);
  console.log("Fetched vehicle data:", vehicle);
  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Kjøretøy ikke funnet</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Vehicle Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Kjøp {vehicle.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={vehicle.bilde || "/placeholder.jpg"}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                  <p className="text-gray-600">{vehicle.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Årsmodell</p>
                    <p className="font-medium">{vehicle.år}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Drivstoff</p>
                    <p className="font-medium">Diseal / Bensin</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Kilometerstand</p>
                    <p className="font-medium">{vehicle.mileage} km</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Transmisjon</p>
                    <p className="font-medium">{vehicle.transmission}</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-3xl font-bold text-red-600">
                    {vehicle.price?.toLocaleString()} kr
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Purchase Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Buyer Information */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Kjøperinformasjon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Fornavn</Label>
                    <Input id="firstName" placeholder="Ola" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Etternavn</Label>
                    <Input id="lastName" placeholder="Nordmann" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-post</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ola@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" placeholder="+47 123 45 678" />
                </div>

                <div>
                  <Label htmlFor="address">Adresse</Label>
                  <Input id="address" placeholder="Gateadresse 123" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="postalCode">Postnummer</Label>
                    <Input id="postalCode" placeholder="0123" />
                  </div>
                  <div>
                    <Label htmlFor="city">Poststed</Label>
                    <Input id="city" placeholder="Oslo" />
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
                        name="financing"
                        value="cash"
                        className="text-red-600"
                      />
                      <span>Kontant betaling</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="financing"
                        value="loan"
                        className="text-red-600"
                      />
                      <span>Billån</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="financing"
                        value="lease"
                        className="text-red-600"
                      />
                      <span>Leasing</span>
                    </label>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Tilleggstjenester
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="text-red-600" />
                      <span>Utvidet garanti (+15,000 kr)</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="text-red-600" />
                      <span>Forsikring (+8,000 kr/år)</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="text-red-600" />
                      <span>Levering til hjemmeadresse (+5,000 kr)</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Ordresammendrag</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Kjøretøy</span>
                  <span>{vehicle.price?.toLocaleString()} kr</span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Utvidet garanti</span>
                  <span>+0 kr</span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Forsikring (1 år)</span>
                  <span>+0 kr</span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Levering</span>
                  <span>+0 kr</span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Registreringsavgift</span>
                  <span>+2,500 kr</span>
                </div>

                <hr />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>{(vehicle.price + 2500)?.toLocaleString()} kr</span>
                </div>

                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
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
        </div>
      </div>
    </div>
  );
}
export default page;
