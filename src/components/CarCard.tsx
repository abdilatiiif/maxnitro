import { Car, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CarCardProps {
  merke: string;
  model: string;
  år: number;
  type: string;
  bilde?: string;
  pris: number;
  farge?: string;
}

export function CarCard(car: CarCardProps) {
  return (
    <div className="rounded-2xl border-2 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-card hover:border-primary group">
      {/* Header */}
      <div className="p-4 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Car className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg md:text-xl">
              {car.merke} {car.model}
            </h3>
            <p className="text-muted-foreground text-sm">
              {car.type} - {car.år}
            </p>
          </div>
        </div>
        {car.farge && (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${car.farge}`}
          >
            {car.farge}
          </span>
        )}
      </div>

      {/* Image */}
      <div className="px-4 pb-4">
        <div className="bg-muted/30 rounded-xl p-6 flex items-center justify-center h-48 overflow-hidden">
          {car.bilde ? (
            <Link
              href={`/cars/${"7"}`}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={car.bilde}
                alt={`${car.merke} ${car.model}`}
                width={400}
                height={300}
                className="rounded-xl object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          ) : (
            <Car className="w-32 h-32 text-muted-foreground/50" />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Verifisert</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary">{car.pris} kr</p>
        </div>
      </div>
    </div>
  );
}
