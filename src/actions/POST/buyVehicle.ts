"use server";

import supabase from "@/supabase";

interface BuyVehicleInfo {
  id: string | undefined;
  fullName: string | undefined;
  email: string | undefined;
  phone: FormDataEntryValue | null;
  produktet: string;
  adresse: FormDataEntryValue | null;
  postkode: FormDataEntryValue | null;
  finansiering: FormDataEntryValue | null;
  tilleggstjenester: {
    utvidetGaranti: boolean;
    forsikring: boolean;
    levering: boolean;
  };
  pris: number;
}

async function addBuy(info: BuyVehicleInfo) {
  const { data, error } = await supabase
    .from("kjopeliste")
    .insert([
      {
        id: info.id,
        email: info.email,
        phone: info.phone?.toString() || null, // Convert to string
        produktet: info.produktet,
        adresse: info.adresse?.toString() || null,
        postkode: info.postkode ? parseInt(info.postkode.toString()) : null, // Convert to number
        finansiering: info.finansiering?.toString() || null,
        tilleggstjenester: info.tilleggstjenester, // JSON object
        pris: info.pris,
        status: "pending", //
      },
    ])
    .select();

  if (error) {
    console.error("kunne ikke kjøpe kjøretøyet", error);
    return { success: false, error: error.message };
  }

  console.log("Kjøretøy kjøp vellykket:", data);
  return { success: true, data };
}

export { addBuy };
