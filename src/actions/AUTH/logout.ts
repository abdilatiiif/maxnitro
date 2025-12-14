"use server";

import { cookies } from "next/headers";
import supabase from "@/supabase";

export async function logoutUser() {
  try {
    // Logg ut fra Supabase
    await supabase.auth.signOut();

    // Slett alle auth cookies
    const cookieStore = await cookies();
    cookieStore.delete("access_token");
    cookieStore.delete("refresh_token");

    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false, error: "Logout feilet" };
  }
}
