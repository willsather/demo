import Image from "next/image";

import { showHeroCTA } from "@/lib/flags";
import { Button } from "@demo/ui/components/button";

export default async function ShopPage() {
  const showCTA = await showHeroCTA();

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden p-6">
      <div className="absolute inset-0">
        <div className="-z-10 absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-white [background-size:16px_16px]" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <div className="mb-10 flex items-center justify-center gap-6">
          <Image
            src="/shop/nextjs.svg"
            alt="Next.js Logo"
            width={100}
            height={100}
          />
          <span className="font-bold text-3xl">+</span>
          <Image
            src="/shop/turborepo.svg"
            alt="Turborepo Logo"
            width={100}
            height={100}
          />
        </div>

        <h1 className="mb-4 font-extrabold text-gray-900">Demo Shop</h1>

        {showCTA ? (
          <a href="/">
            <Button>Go Home</Button>
          </a>
        ) : null}
      </div>
    </main>
  );
}
