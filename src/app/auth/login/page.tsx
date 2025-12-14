"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { loginUser } from "@/actions/AUTH/login";

import { getUser } from "@/actions/AUTH/getUser";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    setError("");

    const result = await loginUser({ email, password });

    setLoading(false);

    if (result.success) {
      console.log("✅ Login successful!", result.data);

      // TODO: Redirect til dashboard
      window.location.href = "/";
    } else {
      console.error("❌ Login failed:", result.error);
      setError(result.error || "Login feilet");
    }
  }

  useEffect(() => {
    async function checkSession() {
      const session = await getUser();
      if (session) {
        // Brukeren er allerede logget inn, omdiriger til dashboard eller annen side
        console.log("Bruker er allerede logget inn:", session);
      }
    }
    checkSession();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Logg inn
          </CardTitle>
          <CardDescription className="text-center">
            Skriv inn din e-post og passord for å logge inn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                {error}
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">E-post</Label>
              <Input
                id="email"
                type="email"
                placeholder="navn@eksempel.no"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Passord</Label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Glemt passord?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Skriv inn passord"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logger inn..." : "Logg inn"}
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Eller
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center text-sm">
              Har du ikke konto?{" "}
              <Link
                href="/auth/register"
                className="text-primary font-semibold hover:underline"
              >
                Registrer deg her
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
