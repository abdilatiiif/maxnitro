"use server";
import supabase from "@/supabase";

export async function getVehicles() {
  const { data, error } = await supabase.from("vehicles").select("*");

  if (error) {
    console.error("Error henting av biler:", error);
    return [];
  }

  return data;
}
