import Image from "next/image";

function HeroSections() {
  return (
    <div className="p-8">
      <div className="mt-24 mb-16 p-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Hvorfor velge oss?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hvorfor kjøpe hos oss */}
          <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Hvorfor kjøpe hos oss?</h3>
            <p className="text-muted-foreground mb-6">
              Vi tilbyr det beste utvalget av luksuriøse kjøretøy med personlig
              service og ekspertise. Vårt team sikrer en sømløs kjøpsopplevelse
              fra start til slutt.
            </p>
            <button className="text-primary font-semibold hover:underline">
              Les mer →
            </button>
          </div>

          {/* Bestill prøvetime */}
          <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
              <span className="text-3xl">📅</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Bestill prøvetime</h3>
            <p className="text-muted-foreground mb-6">
              Opplev luksusen selv! Book en privat prøvekjøring eller visning av
              dine favoritter. Vi tilpasser tiden etter dine behov.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all w-full">
              Book nå
            </button>
          </div>

          {/* Bygg din egen bil */}
          <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
              <span className="text-3xl">🛠️</span>
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
              <span className="text-3xl">💰</span>
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
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Forsikring</h3>
            <p className="text-muted-foreground mb-6">
              Omfattende forsikringsløsninger som beskytter din investering. Vi
              hjelper deg med å finne den beste dekningen.
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
              <span className="text-3xl">🚗</span>
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
              <span className="text-3xl">📋</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Hvordan abonnement fungerer
            </h3>
            <p className="text-muted-foreground mb-6">
              Med vårt abonnement får du alt inkludert - forsikring, service og
              fleksibilitet til å bytte kjøretøy når du vil.
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
          <div className="p-8 md:col-span-2 border-2 rounded-2xl bg-card hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Hva våre kunder sier
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-muted/50 rounded-xl">
                <div className="flex gap-1 mb-3">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Fantastisk service og et utrolig utvalg. Kjøpte min drømmebil
                  her!
                </p>
                <p className="font-semibold">- Anders, Oslo</p>
                <Image
                  src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/15/14c29554dd8a45fb9daaf5568eb8630dc0f460f0.jpg"
                  alt="Anders"
                  width={150}
                  height={150}
                  className="rounded-full w-20 h-20"
                />
              </div>
              <div className="p-6 bg-muted/50 rounded-xl">
                <div className="flex gap-1 mb-3">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Abonnementet er perfekt! Kan bytte bil etter humør.
                </p>
                <p className="font-semibold">- Maria, Bergen</p>
              </div>
              <div className="p-6 bg-muted/50 rounded-xl">
                <div className="flex gap-1 mb-3">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Profesjonell og kunnskapsrik. Anbefales på det sterkeste!
                </p>
                <p className="font-semibold">- Erik, Stavanger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border-2 rounded-2xl hover:shadow-xl transition-all bg-card hover:border-primary group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
              <span className="text-3xl">📞</span>
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
              <span className="text-3xl">📰</span>
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
              <span className="text-3xl">👤</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Min side</h3>
            <p className="text-muted-foreground mb-6">
              Logg inn for å administrere dine kjøretøy, bookinger og få tilgang
              til eksklusive tilbud.
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
  );
}
export default HeroSections;
