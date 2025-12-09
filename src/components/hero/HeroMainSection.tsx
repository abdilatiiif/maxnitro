"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

function HeroMainSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <section id="main-hero" className="relative flex items-center pt-20">
      {mounted && isDark && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/video-kjøretøy_medium.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-[1]" />
        </>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className=" ">
          <h1 className="block text-7xl font-bold lg:w-[full] text-center z-10 ">
            Kjør hvor du vil
          </h1>
          <p className="p-4 text-xl md:text-3xl">
            Opplev friheten med våre luksuriøse kjøretøy til leie. Enten du
            ønsker å cruise langs kysten, utforske fjellene eller sveve over
            landskapet, har vi det perfekte kjøretøyet for deg. Velg blant vårt
            eksklusive utvalg av sportsbiler, yachter og private fly for å gjøre
            din neste reise uforglemmelig.
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-12">
          {/* Bil - Bilde venstre */}
          <div className="flex flex-col md:flex-row gap-6 p-6 border-2 rounded-2xl hover:shadow-2xl transition-all bg-card hover:border-primary group">
            <Image
              src="/hero-car.jpg"
              alt="Luksuriøse Biler"
              className="md:w-1/2 h-64 md:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform"
              width={800}
              height={400}
              loading="eager"
              priority
            />
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h3 className="text-3xl font-bold">Luksusbiler</h3>
              <p className="text-muted-foreground">
                Oppdag vårt eksklusive utvalg av luksusbiler, fra elegante
                sedans til kraftige sportsbiler. Nyt topp ytelse, avansert
                teknologi og førsteklasses komfort mens du cruiser i stil.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all w-fit">
                Utforsk Biler
              </button>
            </div>
          </div>

          {/* Yacht - Bilde høyre */}
          <div className="flex flex-col md:flex-row-reverse gap-6 p-6 border-2 rounded-2xl hover:shadow-2xl transition-all bg-card hover:border-primary group">
            <Image
              src={"/hero-yatch.jpg"}
              alt="Luksus Yacht"
              className="md:w-1/2 h-64 md:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform"
              width={800}
              height={400}
            />
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h3 className="text-3xl font-bold">Yacht</h3>
              <p className="text-muted-foreground">
                Opplev havet i luksus med våre imponerende yachter. Perfekt for
                den kresne som setter pris på eksklusivitet og komfort på
                vannet.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all w-fit">
                Utforsk Yachter
              </button>
            </div>
          </div>

          {/* Fly - Bilde venstre */}
          <div className="flex flex-col md:flex-row gap-6 p-6 border-2 rounded-2xl hover:shadow-2xl transition-all bg-card hover:border-primary group">
            <Image
              src={"/hero-airplane.jpg"}
              alt="Privatfly"
              className="md:w-1/2 h-64 md:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform"
              width={800}
              height={400}
            />
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h3 className="text-3xl font-bold">Privatfly</h3>
              <p className="text-muted-foreground">
                Reis i ultimat luksus og komfort med våre privatfly. Maksimal
                fleksibilitet og førsteklasses service for den kresne reisende.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all w-fit">
                Utforsk Fly
              </button>
            </div>
          </div>

          {/* Motorsykkel - Bilde høyre */}
          <div className="flex flex-col md:flex-row-reverse gap-6 p-6 border-2 rounded-2xl hover:shadow-2xl transition-all bg-card hover:border-primary group">
            <Image
              src={"/hero-motorc.jpg"}
              alt="Motorsykkel"
              className="md:w-1/2 h-64 md:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform"
              width={800}
              height={400}
            />
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h3 className="text-3xl font-bold">Motorsykkel</h3>
              <p className="text-muted-foreground">
                For de som søker spenning og frihet på to hjul. Vårt utvalg av
                eksklusive motorsykler tilbyr kraft, stil og uforglemmelige
                opplevelser.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all w-fit">
                Utforsk Motorsykler
              </button>
            </div>
          </div>

          {/* Jetski - Bilde venstre */}
          <div className="flex flex-col md:flex-row gap-6 p-6 border-2 rounded-2xl hover:shadow-2xl transition-all bg-card hover:border-primary group">
            <Image
              src={"/hero-jetski.jpg"}
              alt="Jetski"
              className="md:w-1/2 h-64 md:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform"
              width={800}
              height={400}
            />
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h3 className="text-3xl font-bold">Jetski</h3>
              <p className="text-muted-foreground">
                Føl adrenalinet pumpe med våre kraftige jetskier. Perfekt for de
                som søker action og moro på vannet i sommervarmen.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all w-fit">
                Utforsk Jetski
              </button>
            </div>
          </div>

          {/* Sportsbil - Bilde høyre */}
          <div className="flex relative flex-col md:flex-row-reverse gap-6 p-6 border-2 rounded-2xl hover:shadow-2xl transition-all bg-card hover:border-primary group">
            <Image
              src={"/hero-car.jpg"}
              alt="Sportsbil"
              className="md:w-1/2 h-64 md:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform"
              width={800}
              height={400}
            />
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h3 className="text-3xl font-bold">Sportsbiler</h3>
              <p className="text-muted-foreground">
                Ren kjøreglede og ekstrem ytelse. Våre sportsbiler kombinerer
                legendarisk design med banbrytende teknologi og motorsportarv.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all w-fit">
                Utforsk Sportsbiler
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroMainSection;
