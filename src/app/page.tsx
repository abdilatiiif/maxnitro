import Hero from "@/components/Hero";
import HeroMainSection from "@/components/HeroMainSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <HeroMainSection />
    </div>
  );
}
