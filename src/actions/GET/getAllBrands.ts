"use server";
import supabase from "@/supabase";

export async function getAllBrands() {
  const { data, error } = await supabase.from("vehicles").select("kategori");

  if (error) {
    console.error("Error henting av biler:", error);
    return [];
  }

  console.log("Fetched brands:", data);

  const uniqueBrands = [...new Set(data.map((b) => b.kategori))].filter(
    Boolean
  );
  console.log("Unique brands:", uniqueBrands);

  return uniqueBrands;
}
