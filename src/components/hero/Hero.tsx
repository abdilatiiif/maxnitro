"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import "@/app/hero.css";
import { useEffect, useState } from "react";

function Hero() {
  const images = [
    "/hero-car.jpg",
    "/hero-airplane.jpg",
    "/hero-yatch.jpg",
    "/hero-motorc.jpg",
    "/hero-jetski.jpg",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 bg-overlay-dark" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl text-focus-in font-display font-black mb-6 leading-tight">
              Opplev Friheten på Land, Vann og Luft
            </h2>
            <p className=" text-focus-in text-md md:text-lg text-muted-foreground mb-8 max-w-xl">
              Enten du er ute etter kraft, stil, komfort eller adrenalin, finner
              du det her. Vi gjør det enklere enn noen gang å finne kjøretøy som
              passer dine behov – på landets veier, ute på sjøen og alt imellom.
            </p>
            <Button className="bg-yellow-400 blink-2 text-teal-900 px-8 cursor-pointer py-4 rounded-md font-semibold 0 transition-allw-lg hover:shadow-primary/20">
              EXPLORE COLLECTION
            </Button>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
            <Image
              key={active}
              src={images[active]}
              alt="Luxury Sports Car"
              width={1920}
              height={1080}
              className="relative z-10 w-full h-auto flip-in-hor-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
