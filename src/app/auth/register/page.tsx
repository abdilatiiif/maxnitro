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
import { ChangeEvent, useEffect, useState } from "react";
import { getUser } from "@/actions/AUTH/getUser";
import { createAccount } from "@/actions/AUTH/createAccount";

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

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

  const handleSubmit = async function (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form Data:", formData);

    if (formData.password !== formData.confirmPassword) {
      alert("Passordene stemmer ikke overens.");
      return;
    }

    if (!formData.termsAccepted) {
      alert("Du må godta vilkårene for å registrere deg.");
      return;
    }

    const result = await createAccount({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    });

    if (result.success) {
      console.log("✅ Konto opprettet!", result.data);
      window.location.href = "/auth/login";
    } else {
      console.error("❌ Konto opprettelse feilet:", result.error);
      alert("Konto opprettelse feilet: " + result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Opprett konto
          </CardTitle>
          <CardDescription className="text-center">
            Fyll inn informasjonen under for å registrere deg
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Fullt navn</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Ola Nordmann"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">E-post</Label>
              <Input
                id="email"
                type="email"
                placeholder="navn@eksempel.no"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password">Passord</Label>
              <Input
                id="password"
                type="password"
                placeholder="Minimum 8 tegn"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Bekreft passord</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Skriv inn passord på nytt"
                required
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-gray-300"
                required
                checked={formData.termsAccepted}
                onChange={(e) =>
                  setFormData({ ...formData, termsAccepted: e.target.checked })
                }
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                Jeg godtar{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  vilkårene
                </Link>{" "}
                og{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  personvern
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Registrer deg
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

            {/* Login Link */}
            <div className="text-center text-sm">
              Har du allerede en konto?{" "}
              <Link
                href="/auth/login"
                className="text-primary font-semibold hover:underline"
              >
                Logg inn her
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterPage;
