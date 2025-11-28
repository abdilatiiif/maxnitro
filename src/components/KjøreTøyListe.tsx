import { CarCard } from "./CarCard";

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  variant: string;
  seller: string;
  sellerType: string;
  price: number;
  imageUrl: string;
  status: string;
  statusColor: string;
  bgColor: string;
}

/*
const cars = [
  {
    brand: "Porsche",
    model: "911",
    year: 2021,
    variant: "Turbo S",
    seller: "Leslie Alexander",
    sellerType: "Verified User",
    price: 950,
    imageUrl: "/hero-car.jpg",
    status: "2 Unit available",
    statusColor: "bg-blue-100 text-blue-700",
    bgColor: "bg-blue-150",
  },
  {
    brand: "Nissan",
    model: "GT-R 2023",
    year: 2023,
    variant: "Nismo 3.8 V6",
    seller: "Rebel Automotive",
    sellerType: "Authorised Dealer",
    imageUrl: "/hero-car.jpg",
    price: 1260,
    status: "Arriving Soon",
    statusColor: "bg-gray-200 text-gray-700",
    bgColor: "bg-gray-50",
  },
  {
function KjøreTøyListe({ cars }: { cars: Car[] }) {
    model: "C8",
    year: 2023,
    variant: "Corvette Stingray",
    seller: "RentCar",
    sellerType: "Authorised Dealer",
    imageUrl: "/hero-car.jpg",
    price: 800,
    status: "Reserved",
    statusColor: "bg-red-100 text-red-700",
    bgColor: "bg-pink-50",
  },
];
*/

function KjøreTøyListe({ cars }: { cars: Car[] }) {
  return (
    <div className="">
      <div className="min-h-screen  p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {cars.map((car) => (
              <CarCard
                key={car.id}
                merke={car.brand}
                år={car.year}
                type={car.variant}
                pris={car.price}
                {...car}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default KjøreTøyListe;
