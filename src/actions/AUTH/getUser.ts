// src/actions/AUTH/getUser.ts
"use server";
import { cookies } from "next/headers";
import supabase from "@/supabase";

export async function getUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;

  if (!accessToken) {
    console.log("❌ No access token found");
    return null;
  }

  await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken || "",
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
