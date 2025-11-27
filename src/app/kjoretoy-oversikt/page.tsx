"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function KjøretøyOversikt() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen p-10">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-1" />
        </>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-2xl font-bold text-center mb-6">
          KJØRETØY OVERSIKT
        </h1>
      </div>
    </section>
  );
}
export default KjøretøyOversikt;
