"use server";
import supabase from "@/supabase";

export async function getAllCategories() {
  const { data, error } = await supabase.from("vehicles").select("kategori");

  if (error) {
    console.error("Error henting av biler:", error);
    return [];
  }

  const uniqueBrands = [...new Set(data.map((b) => b.kategori))].filter(
    Boolean
  );

  return uniqueBrands;
}
