import { getVehicle } from "@/actions/GET/getVehicle";
import CarDetailPage from "@/components/kjøretøy/CarDetailPage";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function Page({ params }: PageProps) {
  const { id } = await params;
  const vehicleId = Number(id);

  console.log("Fetching vehicle with ID:", vehicleId);

  const vehicle = await getVehicle(vehicleId);

  console.log("Received vehicle:", vehicle);

  return <CarDetailPage vehicle={vehicle} />;
}
export default Page;
