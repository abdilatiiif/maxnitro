"use server";
import supabase from "@/supabase";

export async function getCars() {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) {
    console.error("Error fetching cars:", error);
    return [];
  }

  return data;
}
