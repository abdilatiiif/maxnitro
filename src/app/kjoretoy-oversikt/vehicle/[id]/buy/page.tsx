import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getVehicle } from "@/actions/GET/getVehicle";
import { getUser } from "@/actions/AUTH/getUser";
import Link from "next/link";
import KjøretøyKjøpeForm from "@/components/kjøretøy/KjøretøyKjøpeForm";

async function page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const vehicle = await getVehicle(id);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Kjøretøy ikke funnet</p>
      </div>
    );
  }

  const user = await getUser();

  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-6xl mx-auto px-4">
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
                  alt={vehicle.model}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{vehicle.model}</h3>
                  <p className="">{vehicle.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm ">Årsmodell</p>
                    <p className="font-medium">{vehicle.år}</p>
                  </div>
                  <div>
                    <p className="text-sm ">Drivstoff</p>
                    <p className="font-medium">Diesel / Bensin</p>
                  </div>
                  <div>
                    <p className="text-sm ">Type Bil</p>
                    <p className="font-medium">{vehicle.type}</p>
                  </div>
                  <div>
                    <p className="text-sm ">Transmisjon</p>
                    <p className="font-medium">Automat</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-3xl font-bold text-red-600">
                    {vehicle.pris?.toLocaleString()} kr
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Purchase Form */}
        {user && user.email ? (
          <KjøretøyKjøpeForm
            vehicle={vehicle}
            user={
              user as { email: string; user_metadata?: { full_name?: string } }
            }
          />
        ) : (
          <div className="max-w-md mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Logg inn for å kjøpe</CardTitle>
                <p className=" mt-2">
                  Du må være logget inn for å fullføre kjøpet av {vehicle.model}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Link
                    href="/auth/register"
                    className="block w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Opprett ny konto
                  </Link>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2  ">eller</span>
                    </div>
                  </div>

                  <Link
                    href="/auth/login"
                    className="block w-full border bg-green-600 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Logg inn med eksisterende konto
                  </Link>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-6 text-sm ">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span>Sikker betaling</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>14 dagers retur</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Benefits */}
            <div className="mt-6 text-center">
              <p className="text-sm font-medium  mb-3">
                Hvorfor registrere seg?
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm ">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Rask checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Spor bestillinger</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Lagre favoritter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Eksklusiv tilbud</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default page;
