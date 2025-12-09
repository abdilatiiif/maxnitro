"use server";
import supabase from "@/supabase";

export async function getBoats() {
  const { data, error } = await supabase.from("boats").select("*");
  if (error) {
    console.error("henting av båter feilet: ", error);
    return [];
  }

  console.log("data hentet fra supabase: boats", data);
  return data;
}

getBoats();
