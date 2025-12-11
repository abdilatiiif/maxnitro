"use server";
import supabase from "@/supabase";

export async function getAllTypes() {
  const { data, error } = await supabase.from("vehicles").select("type");

  if (error) {
    console.error("Error henting av biler:", error);
    return [];
  }

  const uniqueTypes = [...new Set(data.map((b) => b.type))].filter(Boolean);

  return uniqueTypes;
}
