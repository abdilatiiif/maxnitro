"use server";
import supabase from "@/supabase";

export async function getAllBrands() {
  const { data, error } = await supabase.from("vehicles").select("merke");

  if (error) {
    console.error("Error henting av biler:", error);
    return [];
  }

  const uniqueBrands = [...new Set(data.map((b) => b.merke))].filter(Boolean);

  return uniqueBrands;
}
