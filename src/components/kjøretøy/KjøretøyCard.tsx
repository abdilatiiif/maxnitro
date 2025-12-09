import { Car, CheckCircle, Zap, Gauge } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface VihecleCardProps {
  merke: string;
  model: string;
  år: number;
  type: string;
  bilde?: string;
  pris: number;
  farge?: string;
  id?: number;
  kjørelengde?: number;
  motor?: string;
  kategori?: string;
}

export function KjøretøyCard(vehicle: VihecleCardProps) {
  console.log(vehicle);

  return (
    <Link
      href={`/kjoretoy-oversikt/vehicle/${vehicle.id ?? ""}`}
      className="group block h-full"
    >
      <div className="h-full rounded-2xl border border-white/10 overflow-hidden bg-linear-to-b from-white/5 to-white/2 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:bg-linear-to-b hover:from-white/10 hover:to-white/5 flex flex-col">
        {/* Badge Section */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
          {vehicle.farge && (
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${vehicle.farge}`}
            >
              {vehicle.farge}
            </span>
          )}
          <div className="bg-primary/20 backdrop-blur-sm px-2 py-1 rounded-full">
            <CheckCircle className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-56 overflow-hidden bg-linear-to-br from-muted/30 to-muted/10">
          {vehicle.bilde ? (
            <Image
              src={vehicle.bilde}
              alt={`${vehicle.merke} ${vehicle.model}`}
              fill
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Car className="w-20 h-20 text-muted-foreground/30" />
            </div>
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        </div>

        {/* Header Section */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="font-bold text-xl md:text-2xl leading-tight">
              {vehicle.merke}
            </h3>
            <p className="text-primary font-semibold text-lg">
              {vehicle.model}
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              {vehicle.type} • {vehicle.år}
            </p>
          </div>

          {/* Specs Section */}
          {(vehicle.kjørelengde || vehicle.motor) && (
            <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-white/10">
              {vehicle.motor && (
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary/70" />
                  <span className="text-xs text-muted-foreground">
                    {vehicle.motor}
                  </span>
                </div>
              )}
              {vehicle.kjørelengde && (
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-primary/70" />
                  <span className="text-xs text-muted-foreground">
                    {vehicle.kjørelengde} km
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Price Section */}
          <div className="mt-auto pt-4 border-t border-white/10">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-bold text-primary">
                {(vehicle.pris / 1000).toFixed(0)}k
              </span>
              <span className="text-muted-foreground text-sm">NOK</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Pris fra denne dagen
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-5 pb-5 pt-3">
          <div className="px-4 py-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors text-center">
            <p className="text-sm font-semibold text-primary">Se detaljer →</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
