"use server";

import supabase from "@/supabase";
import { cookies } from "next/headers";

async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error);
    return { success: false, error: error.message };
  }

  console.log("Login successful:", data);

  // Sett JWT tokens i httpOnly cookies
  if (data.session) {
    const cookieStore = await cookies();

    // Access token (kortvarig, f.eks. 1 time)
    cookieStore.set("access_token", data.session.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60, // 1 time
      path: "/",
    });

    // Refresh token (langvarig, f.eks. 7 dager)
    cookieStore.set("refresh_token", data.session.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 dager
      path: "/",
    });
  }

  return { success: true, data };
}

export { loginUser };
