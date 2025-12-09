import { getVehicles } from "@/actions/GET/getVehicles";
import KjøreTøyListe from "@/components/kjøretøy/KjøreTøyListe";
import { MobileFilter } from "@/components/filter/MobileFilter";
import SideBarBox from "@/components/filter/SideBarBox";

import { SidebarProvider } from "@/components/ui/sidebar";

async function KjøretøyOversikt() {
  const vehicles = await getVehicles();

  console.log("Fetched vehicles:", vehicles);

  return (
    <section className="relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-2xl font-bold text-center mb-6">
          KJØRETØY OVERSIKT
        </h1>
        <KjøreTøyListe vehicles={vehicles} />
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
