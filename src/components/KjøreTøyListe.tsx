import { CarCard } from "./CarCard";

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
    brand: "Chevrolet",
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
function KjøreTøyListe() {
  return (
    <div className="">
      <div className="min-h-screen  p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default KjøreTøyListe;
