"use server";

import supabase from "@/supabase";

async function addUser({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) {
  const { data, error } = await supabase.from("kunder").insert({
    fullname: fullName,
    email,
    role: "user",
  });

  if (error) {
    console.error("Account creation error:", error);
    return { success: false, error: error.message };
  }

  console.log("Account creation successful:", data);
  return { success: true, data };
}

export { addUser };
