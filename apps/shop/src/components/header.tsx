"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@demo/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background px-4 py-6 md:px-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-foreground text-2xl">Demo Shop</h1>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-6">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "underline text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }
          >
            Home
          </Link>
          <Link
            href="/products"
            className={
              pathname.startsWith("/products")
                ? "underline text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }
          >
            Products
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            aria-expanded="false"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
