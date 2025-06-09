"use client";

import { Clock, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ApiTester } from "@/components/api-tester";
import { Button } from "@demo/ui/button";

export default function Home() {
  // Use a key to force re-render of child components when reset
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    // Increment the key to force a re-render of all ApiTester components
    setResetKey((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl tracking-tight">Demo API</h1>
            <p className="text-gray-500">
              A simulation environment for testing Vercel platform behaviors.
              Generate HTTP status codes, test response times, and interact with
              endpoints that can succeed or fail on demand.
            </p>
            <div className="space-y-1 text-gray-500 text-sm">
              <div>
                Try status codes:
                <Link
                  href="/status/200"
                  className="mr-1 ml-1 font-bold text-green-700 hover:underline"
                >
                  200
                </Link>{" "}
                |
                <Link
                  href="/status/404"
                  className="mr-1 ml-1 font-bold text-red-700 hover:underline"
                >
                  404
                </Link>{" "}
                |
                <Link
                  href="/status/500"
                  className="ml-1 font-bold text-red-700 hover:underline"
                >
                  500
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ApiTester
            title="/api/status"
            description="Retrieves Vercel status and active incidents."
            endpoint="/status/vercel"
          />
          <ApiTester
            title="/api/region"
            description="Retrieves the Vercel functions geolocation region."
            endpoint="/region"
          />

          <ApiTester
            title="/api/shop/products"
            description="Retrieves mock product data."
            endpoint="/shop/products"
          />

          <ApiTester
            title="/api/categories"
            description="Retrieves mock product category data."
            endpoint="/shop/categories"
          />
        </div>
      </div>
    </main>
  );
}
