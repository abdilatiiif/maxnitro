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

function RegisterPage() {
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
          <form className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name">Fullt navn</Label>
              <Input
                id="name"
                type="text"
                placeholder="Ola Nordmann"
                required
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
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-gray-300"
                required
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
