import { Car, Calendar, Tag, Gauge, ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Vehicle {
  id?: number;
  merke?: string;
  model?: string;
  år?: number;
  type?: string;
  pris?: number;
  bilde?: string;
  kjørelengde?: number;
  motor?: string;
  farge?: string;
}

interface CarDetailPageProps {
  vehicle?: Vehicle | null;
}

function DetailPage({ vehicle }: CarDetailPageProps) {
  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <Car className="w-20 h-20 mx-auto text-muted-foreground/50" />
          <h2 className="text-2xl font-bold">Fant ikke kjøretøy</h2>
          <p className="text-muted-foreground">
            Kjøretøyet du leter etter finnes ikke eller er ikke tilgjengelig.
          </p>
          <Link
            href="/kjoretoy-oversikt"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake til oversikt
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-linear-to-br from-muted/30 to-muted/10">
        {vehicle.bilde ? (
          <img
            src={vehicle.bilde}
            alt={`${vehicle.merke} ${vehicle.model}`}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Car className="w-32 h-32 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        {/* Back Button */}
        <Link
          href="/kjoretoy-oversikt"
          className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Tilbake
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {vehicle.merke}
            </h1>
            <p className="text-2xl md:text-4xl text-primary font-semibold">
              {vehicle.model}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10">
                <Calendar className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Årsmodell</p>
                <p className="text-2xl font-bold">{vehicle.år}</p>
              </div>

              <div className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10">
                <Tag className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="text-lg font-bold">{vehicle.type}</p>
              </div>
              <Button className="p-6 w-full text-black hover:bg-red-400 cursor-pointer">
                <Heart className="w-6 h-6  mb-2 " />
                <p className="text-sm">Legg til favoritter</p>
              </Button>

              {vehicle.kjørelengde && (
                <div className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10">
                  <Gauge className="w-6 h-6 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Kjørelengde</p>
                  <p className="text-lg font-bold">{vehicle.kjørelengde} km</p>
                </div>
              )}

              {vehicle.motor && (
                <div className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10">
                  <Car className="w-6 h-6 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Motor</p>
                  <p className="text-lg font-bold">{vehicle.motor}</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Om kjøretøyet</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dette er en eksklusiv {vehicle.merke} {vehicle.model} fra{" "}
                {vehicle.år}. Kjøretøyet tilhører kategorien {vehicle.type} og
                representerer topp kvalitet og ytelse i sin klasse. Perfekt for
                den kresne som setter pris på luksus og komfort.
              </p>
            </div>
          </div>

          {/* Sidebar - Price & CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 p-8 rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 backdrop-blur-xl border border-primary/20 space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Pris fra</p>
                <p className="text-5xl font-bold text-primary">
                  {(vehicle.pris! / 1000).toFixed(0)}k
                </p>
                <p className="text-sm text-muted-foreground mt-1">NOK / dag</p>
              </div>

              <div className="space-y-3">
                <button className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all">
                  Bestill nå
                </button>
                <button className="w-full px-6 py-4 border-2 border-primary/30 rounded-xl font-semibold hover:bg-primary/10 transition-all">
                  Kontakt oss
                </button>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-muted-foreground">Tilgjengelig nå</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-muted-foreground">
                    Forsikring inkludert
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-muted-foreground">24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
