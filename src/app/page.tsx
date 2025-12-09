import Hero from "@/components/hero/Hero";
import HeroMainSection from "@/components/hero/HeroMainSection";
import HeroSections from "@/components/hero/HeroSections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <HeroMainSection />
      <HeroSections />
    </div>
  );
}
