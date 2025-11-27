import Image from "next/image";

function KundeReview() {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="p-8 md:col-span-2 border-2 rounded-2xl bg-card hover:shadow-xl transition-all">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Hva våre kunder sier
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-muted/50 rounded-xl">
          <div className="flex gap-1 mb-3">
            <span className="text-yellow-500 flex">
              {stars.map((a) => (
                <svg
                  key={a}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            Fantastisk service og et utrolig utvalg. Kjøpte min drømmebil her!
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
            <span className="text-yellow-500 flex">
              {stars.map((a) => (
                <svg
                  key={a}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            Abonnementet er perfekt! Kan bytte bil etter humør.
          </p>
          <p className="font-semibold">- Maria, Bergen</p>
        </div>
        <div className="p-6 bg-muted/50 rounded-xl">
          <div className="flex gap-1 mb-3">
            <span className="text-yellow-500 flex">
              {stars.map((a) => (
                <svg
                  key={a}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            Profesjonell og kunnskapsrik. Anbefales på det sterkeste!
          </p>
          <p className="font-semibold">- Erik, Stavanger</p>
        </div>
      </div>
    </div>
  );
}
export default KundeReview;
