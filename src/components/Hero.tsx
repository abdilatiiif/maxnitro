import Image from "next/image";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-darker via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl  font-display font-black mb-6 leading-tight">
              Opplev Friheten på Land, Vann og Luft
            </h2>
            <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-xl">
              Enten du er ute etter kraft, stil, komfort eller adrenalin, finner
              du det her. Vi gjør det enklere enn noen gang å finne kjøretøy som
              passer dine behov – på landets veier, ute på sjøen og alt imellom.
            </p>
            <Button className="bg-yellow-500 text-teal-900 px-8 py-4 rounded-md font-semibold 0 transition-allw-lg hover:shadow-primary/20">
              EXPLORE COLLECTION
            </Button>
          </div>

          <div className="">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
            <Image
              src="/hero-car.jpg"
              alt="Luxury Sports Car"
              width={1920}
              height={1080}
              className="relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
