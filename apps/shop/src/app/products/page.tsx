import Link from "next/link";

import { getProducts } from "@demo/products";

import { ProductCard } from "@/components/product-card";

export const metadata = {
  title: "All Products | Shape Shop",
  description: "Browse all our premium geometric shapes for your designs",
};

export default async function ProductsPage() {
  // Fetch all products
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="mx-auto px-6 md:px-10 lg:px-20">
          <div className="flex items-center text-gray-600 text-sm">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">All Products</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="px-6 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="font-bold text-4xl text-gray-900">All Shapes</h1>
            <p className="mt-4 text-gray-600 text-lg">
              Browse our complete collection of premium geometric shapes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
