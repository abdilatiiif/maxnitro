"use server";
import supabase from "@/supabase";

export async function getVehicle(id: number) {
  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching vehicle:", error);
    return null;
  }

  return data;
}
