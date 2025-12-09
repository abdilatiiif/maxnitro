"use server";
import supabase from "@/supabase";

export async function getVehicle(id: number) {
  console.log("Querying vehicle with ID:", id);

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching vehicle:", error);
    return null;
  }

  console.log("Fetched vehicle data:", data);

  return data;
}
