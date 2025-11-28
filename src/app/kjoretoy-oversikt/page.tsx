import { getCars } from "@/actions/GET/getCars";
import KjøreTøyListe from "@/components/KjøreTøyListe";
import { MobileFilter } from "@/components/MobileFilter";
import SideBarBox from "@/components/SideBarBox";

import { SidebarProvider } from "@/components/ui/sidebar";

async function KjøretøyOversikt() {
  const cars = await getCars();

  console.log("Fetched cars:", cars);

  return (
    <section className="relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-2xl font-bold text-center mb-6">
          KJØRETØY OVERSIKT
        </h1>
        <KjøreTøyListe cars={cars} />
      </div>

      <SidebarProvider>
        <div className="w-full hidden md:flex">
          <SideBarBox />
          <main className="flex-1"></main>
        </div>
      </SidebarProvider>

      <MobileFilter />
    </section>
  );
}
export default KjøretøyOversikt;
