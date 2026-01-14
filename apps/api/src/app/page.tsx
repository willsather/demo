"use client";

import Link from "next/link";

import { GetApi } from "@/components/api-tester";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 md:px-6">
      <h1 className="font-bold text-foreground text-2xl">Demo API</h1>
      <div className="mx-auto max-w-7xl space-y-8 mt-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <p className="text-muted-foreground">
              A simulation environment for testing Vercel platform behaviors.
              Generate HTTP status codes, test response times, and interact with
              endpoints that can succeed or fail on demand.
            </p>
            <div className="space-y-1 text-muted-foreground text-sm">
              <div>
                Try status codes:
                <Link
                  href="/status/200"
                  className="mr-1 ml-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  200
                </Link>{" "}
                |
                <Link
                  href="/status/404"
                  className="mr-1 ml-1 font-bold text-red-600 dark:text-red-400 hover:underline"
                >
                  404
                </Link>{" "}
                |
                <Link
                  href="/status/500"
                  className="ml-1 font-bold text-red-600 dark:text-red-400 hover:underline"
                >
                  500
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GetApi
            title="/api/status/vercel"
            description="Retrieves Vercel status and active incidents."
            endpoint="/status/vercel"
          />
          <GetApi
            title="/api/status/[code]"
            description="Force different HTTP status codes."
            endpoint="/status/[code]"
            dynamicParam="code"
            dynamicParamOptions={["200", "201", "308", "404", "500"]}
          />

          <GetApi
            title="/api/region"
            description="Retrieves the Vercel functions geolocation region."
            endpoint="/region"
          />
          <GetApi
            title="/api/region/[region]"
            description="Test different Vercel edge regions (with a delay)."
            endpoint="/region/[code]"
            dynamicParam="code"
            dynamicParamOptions={["ap", "br", "eu", "uk", "us", "za"]}
          />

          <GetApi
            title="/api/shop/products"
            description="Retrieves mock product data."
            endpoint="/shop/products"
          />
          <GetApi
            title="/api/categories"
            description="Retrieves mock product category data."
            endpoint="/shop/categories"
          />
        </div>
      </div>
    </main>
  );
}
