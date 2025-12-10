"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import KundeReview from "../KundeReview";

function HeroSections() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && isDark && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/video-kjøretøy_medium.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 video-overlay z-1" />
        </>
      )}

      <div className="p-8 z-20">
        <div className="mt-24 mb-16 p-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Hvorfor velge oss?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hvorfor kjøpe hos oss */}
            <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Hvorfor kjøpe hos oss?
              </h3>
              <p className="text-muted-foreground mb-6">
                Vi tilbyr det beste utvalget av luksuriøse kjøretøy med
                personlig service og ekspertise. Vårt team sikrer en sømløs
                kjøpsopplevelse fra start til slutt.
              </p>
              <button className="text-primary font-semibold hover:underline">
                Les mer →
              </button>
            </div>

            {/* Bestill prøvetime */}
            <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Bestill prøvetime</h3>
              <p className="text-muted-foreground mb-6">
                Opplev luksusen selv! Book en privat prøvekjøring eller visning
                av dine favoritter. Vi tilpasser tiden etter dine behov.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all w-full">
                Book nå
              </button>
            </div>

            {/* Bygg din egen bil */}
            <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.867 19.125h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Bygg din egen bil</h3>
              <p className="text-muted-foreground mb-6">
                Skreddersy ditt drømmekjøretøy med vår konfigurator. Velg motor,
                interiør, farge og utstyr helt etter dine ønsker.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all w-full">
                Start konfigurator
              </button>
            </div>

            {/* Finansiering */}
            <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Finansiering</h3>
              <p className="text-muted-foreground mb-6">
                Fleksible finansieringsløsninger tilpasset dine behov. Vi jobber
                med de beste bankene for å gi deg de beste rentene.
              </p>
              <button className="text-primary font-semibold hover:underline">
                Se alternativ →
              </button>
            </div>

            {/* Forsikring */}
            <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Forsikring</h3>
              <p className="text-muted-foreground mb-6">
                Omfattende forsikringsløsninger som beskytter din investering.
                Vi hjelper deg med å finne den beste dekningen.
              </p>
              <button className="text-primary font-semibold hover:underline">
                Få tilbud →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 mb-16 bg-muted/30 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            Fleksible løsninger
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Leieoversikt */}
            <div className="p-8 border-2 rounded-2xl bg-card hover:shadow-xl transition-all hover:border-primary group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Leieoversikt</h3>
              <p className="text-muted-foreground mb-6">
                Utforsk vårt leieutvalg av luksusbiler, yachter og fly. Perfekt
                for spesielle anledninger eller lengre perioder.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex-1">
                  Se tilgjengelighet
                </button>
                <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
                  Sjekk
                </button>
              </div>
            </div>

            {/* Abonnement */}
            <div className="p-8 border-2 rounded-2xl bg-card hover:shadow-xl transition-all hover:border-primary group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Hvordan abonnement fungerer
              </h3>
              <p className="text-muted-foreground mb-6">
                Med vårt abonnement får du alt inkludert - forsikring, service
                og fleksibilitet til å bytte kjøretøy når du vil.
              </p>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Ingen bindingstid
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Alt inkludert i prisen
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Bytt bil hver måned
                </li>
              </ul>
              <button className="text-primary font-semibold hover:underline">
                Lær mer om abonnement →
              </button>
            </div>

            {/* Kundeomtaler */}
            <KundeReview />
          </div>
        </div>
        <div className="mt-24 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Kontakt oss</h3>
              <p className="text-muted-foreground mb-6">
                Har du spørsmål? Vårt team er klare til å hjelpe deg med alt fra
                kjøp til service.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all w-full">
                Ta kontakt
              </button>
            </div>

            <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Nyheter & Blogg</h3>
              <p className="text-muted-foreground mb-6">
                Hold deg oppdatert på de siste nyhetene, lanseringer og tips fra
                luksusverdenen.
              </p>
              <button className="text-primary font-semibold hover:underline">
                Les våre artikler →
              </button>
            </div>

            <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Min side</h3>
              <p className="text-muted-foreground mb-6">
                Logg inn for å administrere dine kjøretøy, bookinger og få
                tilgang til eksklusive tilbud.
              </p>
              <div className="flex flex-col gap-3">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
                  Logg inn
                </button>
                <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
                  Registrer deg
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSections;
