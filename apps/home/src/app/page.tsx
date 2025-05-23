import Image from "next/image";

import { showHeroCTA } from "@/lib/flags";
import { Button } from "@demo/ui/button";

export default async function Home() {
  const showCTA = await showHeroCTA();

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden p-6">
      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <div className="mb-10 flex items-center justify-center gap-6">
          <Image
            src="/nextjs.svg"
            alt="Next.js Logo"
            width={100}
            height={100}
          />
          <span className="font-bold text-3xl">+</span>
          <Image
            src="/turborepo.svg"
            alt="Turborepo Logo"
            width={100}
            height={100}
          />
        </div>

        <h1 className="mb-4 font-extrabold text-gray-900">Demo Home</h1>

        {showCTA ? (
          <a href="/shop">
            <Button>Shop Now</Button>
          </a>
        ) : null}
      </div>
    </main>
  );
}
