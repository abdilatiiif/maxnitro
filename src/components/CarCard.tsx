import React from "react";
import { Car, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CarCardProps {
  brand: string;
  model: string;
  year: number;
  variant: string;
  imageUrl?: string;
  seller: string;
  sellerType: string;
  price: number;
  status?: string;
  statusColor?: string;
  bgColor?: string;
}

export function CarCard({
  brand,
  model,
  year,
  variant,
  imageUrl,
  seller,
  sellerType,
  price,
  status,
  statusColor,
  bgColor = "bg-blue-100",
}: CarCardProps) {
  return (
    <div className="rounded-2xl border-2 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="p-4 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <Car className="w-6 h-6 " />
          </div>
          <div>
            <h3 className="font-bold text-md md:text-xl ">
              {brand} {model}
            </h3>
            <p className=" text-sm">
              {variant} - {year}
            </p>
          </div>
        </div>
        {status && (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}
          >
            {status}
          </span>
        )}
      </div>

      {/* Image */}
      <div className="px-4 pb-4">
        <div className=" rounded-xl p-6 flex items-center justify-center h-48">
          {imageUrl ? (
            <Link href={`/cars/${"7"}`} className="...">
              <Image
                src={imageUrl}
                alt={`${brand} ${model}`}
                width={400}
                height={300}
                className="..."
              />
            </Link>
          ) : (
            <Car className="w-32 h-32 " />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold ">
              {seller
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className="font-semibold  text-sm">{seller}</p>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-blue-500" />
              <span className="text-xs ">{sellerType}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">${price}</p>
        </div>
      </div>
    </div>
  );
}
