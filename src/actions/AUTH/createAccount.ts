"use server";

import supabase from "@/supabase";

async function createAccount({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    console.error("Account creation error:", error);
    return { success: false, error: error.message };
  }

  console.log("Account creation successful:", data);
  return { success: true, data };
}

export { createAccount };
