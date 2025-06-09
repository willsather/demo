"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@demo/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto px-6 py-3 md:px-10 lg:px-20">
        <div className="flex h-16 justify-between">
          <Link href="/" className="flex flex-shrink-0 items-center">
            <h1 className="font-bold text-blue-600 text-xl md:text-4xl">
              Shape Shop
            </h1>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/products">
              <Button variant="ghost">Products</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
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
              {/* X icon */}
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
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="space-y-1 pt-2 pb-3">
          <Link
            href="/"
            className="block border-transparent border-l-4 py-2 pr-4 pl-3 font-medium text-base text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block border-transparent border-l-4 py-2 pr-4 pl-3 font-medium text-base text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
        </div>
      </div>
    </header>
  );
}
